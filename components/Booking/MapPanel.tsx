"use client";

import React, { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import "../Map/leaflet.css.js";

// Dynamic imports (Leaflet SSR fix)
const MapContainer = dynamic(
  async () => (await import("react-leaflet")).MapContainer,
  { ssr: false }
);
const TileLayer = dynamic(
  async () => (await import("react-leaflet")).TileLayer,
  { ssr: false }
);
const Marker = dynamic(
  async () => (await import("react-leaflet")).Marker,
  { ssr: false }
);
const Polyline = dynamic(
  async () => (await import("react-leaflet")).Polyline,
  { ssr: false }
);
const Popup = dynamic(
  async () => (await import("react-leaflet")).Popup,
  { ssr: false }
);

// Leaflet for icons/polyline etc
let L: any;
if (typeof window !== "undefined") {
  L = require("leaflet");
}

// =========================================================
// ⭐ SECURE GEOCODING FUNCTION
// =========================================================
async function geocode(query: string) {
  try {
    if (!query) return null;

    const url = `https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(
      query
    )}`;

    const res = await fetch(url, {
      headers: {
        "User-Agent": "YatriCabs/1.0 (student project)",
      },
    });

    if (!res.ok) throw new Error("Geocoding failed");

    const data = await res.json();

    if (!data || data.length === 0) return null;

    return {
      lat: parseFloat(data[0].lat),
      lon: parseFloat(data[0].lon),
    };
  } catch (err) {
    console.error("Geocode error:", err);
    return null;
  }
}

// =========================================================
// ⭐ ROUTING API (OSRM)
// =========================================================
async function getRoute(src: any, dst: any) {
  try {
    const url = `https://router.project-osrm.org/route/v1/driving/${src.lon},${src.lat};${dst.lon},${dst.lat}?overview=full&geometries=geojson`;

    const res = await fetch(url);

    if (!res.ok) throw new Error("Route fetch failed");

    const data = await res.json();

    if (!data || !data.routes || data.routes.length === 0) return null;

    return data.routes[0];
  } catch (err) {
    console.error("Route API error:", err);
    return null;
  }
}

export default function MapPanel({
  source,
  destination,
  onRoute,
}: {
  source: string;
  destination: string;
  onRoute: (info: { distance: number; duration: number }) => void;
}) {
  const [srcPos, setSrcPos] = useState<any>(null);
  const [dstPos, setDstPos] = useState<any>(null);
  const [routeLine, setRouteLine] = useState<any>(null);

  // =====================================================================
  // ⭐ Load geocode + route when source/destination change
  // =====================================================================
  useEffect(() => {
    async function loadEverything() {
      const s = await geocode(source);
      const d = await geocode(destination);

      if (!s || !d) {
        console.warn("Geocode failed");
        return;
      }

      setSrcPos(s);
      setDstPos(d);

      // Load route
      const rt = await getRoute(s, d);
      if (!rt) return;

      setRouteLine(rt.geometry.coordinates);

      // Callback to parent BookingPanel
      onRoute({
        distance: rt.distance, // meters
        duration: rt.duration, // seconds
      });
    }

    loadEverything();
  }, [source, destination]);

  // =====================================================================
  // ⭐ Default map center
  // =====================================================================
  const defaultCenter = {
    lat: srcPos?.lat || 22.5726,
    lon: srcPos?.lon || 88.3639,
  };

  return (
    <div style={{ width: "100%", height: "100%" }}>
      <MapContainer
        center={[defaultCenter.lat, defaultCenter.lon]}
        zoom={12}
        style={{ width: "100%", height: "100%", borderRadius: "12px" }}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution="© OpenStreetMap contributors"
        />

        {srcPos && (
          <Marker position={[srcPos.lat, srcPos.lon]}>
            <Popup>Pickup: {source}</Popup>
          </Marker>
        )}

        {dstPos && (
          <Marker position={[dstPos.lat, dstPos.lon]}>
            <Popup>Drop: {destination}</Popup>
          </Marker>
        )}

        {routeLine && (
          <Polyline
            positions={routeLine.map((i: any) => [i[1], i[0]])}
            weight={4}
          />
        )}
      </MapContainer>
    </div>
  );
}
