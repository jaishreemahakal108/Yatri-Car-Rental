"use client";

import React, { useState } from "react";
import MapPanel from "./MapPanel";
import styles from "./booking.module.css";
import { useDispatch, useSelector } from "react-redux";
import { addBooking } from "@/redux/slices/bookingSlice";
import type { RootState } from "@/redux/store";
import { motion } from "framer-motion";

export default function BookingPanel() {
  const dispatch = useDispatch();
  const bookings = useSelector((state: RootState) => state.booking.bookings);

  const [source, setSource] = useState("");
  const [destination, setDestination] = useState("");
  const [car, setCar] = useState("Dzire");
  const [routeInfo, setRouteInfo] = useState<{ distance: number; duration: number } | null>(null);
  const [tripType, setTripType] = useState<"oneway" | "twoway">("oneway");
  const [fare, setFare] = useState<number | null>(null);
  const [pickupDate, setPickupDate] = useState("");
  const [pickupTime, setPickupTime] = useState("");
  const [passengerName, setPassengerName] = useState("");
  const [phone, setPhone] = useState("");

  const [loadingFare, setLoadingFare] = useState(false);
  const [loadingBooking, setLoadingBooking] = useState(false);

  const fareChart: Record<string, number> = {
    Dzire: 12,
    Innova: 18,
    Seltos: 20,
  };

//   function calculateFare() {
//     if (!routeInfo) return;
//     setLoadingFare(true);
//     setTimeout(() => {
//       const totalKm = routeInfo.distance / 1000;
//       setFare(totalKm * fareChart[car]);
//       setLoadingFare(false);
//     }, 1000);
//   }

  function calculateFare() {
        if (!routeInfo) return;
        setLoadingFare(true);
        setTimeout(() => {
            const totalKm = routeInfo.distance / 1000;
            let calcFare = totalKm * fareChart[car];

            if (tripType === "twoway") {
            calcFare *= 2; // Double fare for round trip
            }

            setFare(calcFare);
            setLoadingFare(false);
        }, 800);
    }


  // function handleBooking() {
  //   setLoadingBooking(true);
  //   setTimeout(() => {
  //     const booking = {
  //       source,
  //       destination,
  //       car,
  //       distance: routeInfo?.distance || 0,
  //       duration: routeInfo?.duration || 0,
  //       fare,
  //       pickupDate,
  //       pickupTime,
  //       passengerName,
  //       phone,
  //     };
  //     dispatch(addBooking(booking));
  //     alert("Booking Confirmed!");
  //     setLoadingBooking(false);
  //   }, 1200);
  // }

  function handleBooking() {
    setLoadingBooking(true);
    setTimeout(() => {
      const booking = {
        source,
        destination,
        car,
        tripType,
        distance: routeInfo?.distance || 0,
        duration: routeInfo?.duration || 0,
        fare,
        pickupDate,
        pickupTime,
        passengerName,
        phone,
      };

      dispatch(addBooking(booking));
      alert("Booking Confirmed!");
      setLoadingBooking(false);
    }, 1200);
  }


  return (
    <div className={styles.container}>
      {/* LEFT FORM */}
      <motion.div
        className={styles.left}
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <motion.h3
          className={styles.heading}
          animate={{ textShadow: ["0px 0px 0px rgba(255,255,255,0)", "0px 0px 8px #6c47ff"] }}
          transition={{ duration: 1.5, repeat: Infinity, repeatType: "mirror" }}
        >
          Book Your Ride 🚗
        </motion.h3>

        <label>Pickup Location</label>
        <motion.input whileFocus={{ scale: 1.02 }} value={source} onChange={(e) => setSource(e.target.value)} placeholder="Enter pickup..." />

        <label>Drop Location</label>
        <motion.input whileFocus={{ scale: 1.02 }} value={destination} onChange={(e) => setDestination(e.target.value)} placeholder="Enter drop..." />

        <label>Select Car</label>
        <motion.select whileFocus={{ scale: 1.02 }} value={car} onChange={(e) => setCar(e.target.value)}>
          <option value="Dzire">Swift Dzire</option>
          <option value="Innova">Innova</option>
          <option value="Seltos">Seltos</option>
        </motion.select>

        {/* Trip Type */}
        <label>Trip Type</label>
        <motion.select 
        whileFocus={{ scale: 1.02 }} 
        value={tripType} 
        onChange={(e) => setTripType(e.target.value as "oneway" | "twoway")}
        >
        <option value="oneway">One Way</option>
        <option value="twoway">Round Trip</option>
        </motion.select>


        {routeInfo && (
          <motion.div className={styles.routeInfo} initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
            <p>Distance: {(routeInfo.distance / 1000).toFixed(2)} km</p>
            <p>Duration: {(routeInfo.duration / 60).toFixed(0)} mins</p>
          </motion.div>
        )}

        {/* Fare Button */}
        <motion.button
          whileHover={{ scale: 1.03 }}
          className={styles.calculateBtn}
          onClick={calculateFare}
          disabled={loadingFare}
        >
          {loadingFare ? "Calculating..." : "Calculate Fare"}
        </motion.button>

        {fare && (
          <motion.div className={styles.fareBox} initial={{ scale: 0.8 }} animate={{ scale: 1 }}>
            <h4>Estimated Fare: ₹{fare.toFixed(0)}</h4>
          </motion.div>
        )}

        <h4 className={styles.sectionTitle}>Pickup Details</h4>
        <motion.input whileFocus={{ scale: 1.02 }} type="date" value={pickupDate} onChange={(e) => setPickupDate(e.target.value)} />
        <motion.input whileFocus={{ scale: 1.02 }} type="time" value={pickupTime} onChange={(e) => setPickupTime(e.target.value)} />

        <h4 className={styles.sectionTitle}>Passenger Details</h4>
        <motion.input whileFocus={{ scale: 1.02 }} value={passengerName} onChange={(e) => setPassengerName(e.target.value)} placeholder="Enter name..." />
        <motion.input whileFocus={{ scale: 1.02 }} value={phone} onChange={(e) => setPhone(e.target.value)} placeholder="Enter phone..." />

        {/* Booking Button */}
        <motion.button
          whileHover={{ scale: 1.03 }}
          className={styles.btn}
          onClick={handleBooking}
          disabled={loadingBooking}
        >
          {loadingBooking ? "Processing..." : "Confirm Booking"}
        </motion.button>
      </motion.div>

      {/* RIGHT MAP */}
      <motion.div className={styles.right} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }}>
        <MapPanel source={source} destination={destination} onRoute={(info) => setRouteInfo(info)} />
      </motion.div>

      {/* BOOKINGS LIST */}
      {bookings.length > 0 && (
        <motion.div className={styles.bookingsContainer} initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
          <h3 className={styles.glowHeading}>All Bookings</h3>
          <div className={styles.bookingsGrid}>
            {/* {bookings.map((b, idx) => (
              <motion.div
                key={idx}
                whileHover={{ scale: 1.03, boxShadow: "0px 0px 15px rgba(0,255,204,0.6)" }}
                className={styles.bookingCard}
              >
                <p><strong>{b.passengerName}</strong> 📞 {b.phone}</p>
                <p>{b.source} ➝ {b.destination}</p>
                <p>{b.car} | ₹{b.fare?.toFixed(0)}</p>
                <p>Date: {b.pickupDate} | Time: {b.pickupTime}</p>
              </motion.div>
            ))} */}

            {bookings.map((b, idx) => (
              <motion.div
                key={idx}
                whileHover={{ scale: 1.03, boxShadow: "0px 0px 15px rgba(0,255,204,0.6)" }}
                className={styles.bookingCard}
              >
                <p><strong>{b.passengerName}</strong> 📞 {b.phone}</p>
                <p>{b.source} ➝ {b.destination}</p>
                <p>Trip: {b.tripType === "twoway" ? "Round Trip" : "One Way"}</p> 
                <p>{b.car} | ₹{b.fare?.toFixed(0)}</p>
                <p>Date: {b.pickupDate} | Time: {b.pickupTime}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      )}
    </div>
  );
}