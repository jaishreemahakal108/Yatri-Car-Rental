"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import styles from "./CarsCatalog.module.css";
import Link from "next/link";

type Car = {
  id: number;
  name: string;
  manufacturer: string;
  pricePerKm: number;
  seats: number;
  mileage: string;
  img: string;
  fuel?: string;
  transmission?: string;
  color?: string;
};

const SAMPLE_CARS: Car[] = [
  { id: 1, name: "Swift Dzire", manufacturer: "Maruti Suzuki", pricePerKm: 18, seats: 4, mileage: "20 kmpl", img: "/Cars/Swift Dzire.png", fuel: "Petrol", transmission: "Manual", color: "Blue" },
  { id: 2, name: "i20", manufacturer: "Hyundai", pricePerKm: 22, seats: 4, mileage: "18 kmpl", img: "/Cars/i20.png", fuel: "Petrol", transmission: "Automatic", color: "Red" },
  { id: 3, name: "Innova", manufacturer: "Toyota", pricePerKm: 36, seats: 7, mileage: "15 kmpl", img: "/Cars/Innova.png", fuel: "Diesel", transmission: "Automatic", color: "White" },
  { id: 4, name: "City", manufacturer: "Honda", pricePerKm: 25, seats: 4, mileage: "17 kmpl", img: "/Cars/City.png", fuel: "Petrol", transmission: "Manual", color: "Black" },
  { id: 5, name: "Tiago", manufacturer: "Tata", pricePerKm: 16, seats: 4, mileage: "22 kmpl", img: "/Cars/tiago.png", fuel: "Petrol", transmission: "Manual", color: "Silver" },
  { id: 6, name: "Scorpio", manufacturer: "Mahindra", pricePerKm: 32, seats: 7, mileage: "13 kmpl", img: "/Cars/scorpio.png", fuel: "Diesel", transmission: "Manual", color: "Gray" },
  { id: 7, name: "Seltos", manufacturer: "Kia", pricePerKm: 30, seats: 5, mileage: "16 kmpl", img: "/Cars/seltos.png", fuel: "Petrol", transmission: "Automatic", color: "Orange" },
  { id: 8, name: "3 Series", manufacturer: "BMW", pricePerKm: 75, seats: 4, mileage: "12 kmpl", img: "/Cars/3 Series.png", fuel: "Petrol", transmission: "Automatic", color: "Black" },
];

export default function CarsCatalog() {
  const [pricing, setPricing] = useState<string>("");
  const [manufacturer, setManufacturer] = useState<string>("");
  const [openPrice, setOpenPrice] = useState(false);
  const [openMake, setOpenMake] = useState(false);
  const [search, setSearch] = useState("");
  const [selectedCar, setSelectedCar] = useState<Car | null>(null);

  const manufacturers = useMemo(() => {
    const set = new Set(SAMPLE_CARS.map((c) => c.manufacturer));
    return Array.from(set);
  }, []);

  const visibleCars = useMemo(() => {
    let list = SAMPLE_CARS.slice();
    if (manufacturer) list = list.filter((c) => c.manufacturer === manufacturer);
    if (search.trim()) {
      const s = search.toLowerCase();
      list = list.filter((c) => c.name.toLowerCase().includes(s) || c.manufacturer.toLowerCase().includes(s));
    }
    if (pricing === "minmax") list.sort((a, b) => a.pricePerKm - b.pricePerKm);
    else if (pricing === "maxmin") list.sort((a, b) => b.pricePerKm - a.pricePerKm);
    return list;
  }, [pricing, manufacturer, search]);

  const clearFilters = () => {
    setPricing("");
    setManufacturer("");
    setSearch("");
  };

  const openModal = (car: Car) => {
    setSelectedCar(car);
    const dialog = document.getElementById(`modal-${car.id}`) as HTMLDialogElement | null;
    if (dialog) dialog.showModal();
  };


  return (
    <section className={styles.wrapper}>
      {/* Header + filters same as before */}
      <div className={styles.header}>
        <div>
          <h2 className={styles.title}>Cars Catalog</h2>
          <p className={styles.subtitle}>Explore curated cars — choose by price or manufacturer</p>
        </div>

        <div className={styles.controlsRow}>
          <div className={styles.searchBox}>
            <input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search car or manufacturer..."
              className={styles.searchInput}
            />
          </div>

          <div className={styles.dropdown}>
            <button className={styles.dropdownToggle} onClick={() => { setOpenPrice((v) => !v); setOpenMake(false); }}>
              <span>{pricing === "" ? "Pricing" : pricing === "minmax" ? "Price: Low → High" : "Price: High → Low"}</span>
            </button>
            <ul className={`${styles.dropdownMenu} ${openPrice ? styles.show : ""}`}>
              <li onClick={() => { setPricing("minmax"); setOpenPrice(false); }}>Min → Max</li>
              <li onClick={() => { setPricing("maxmin"); setOpenPrice(false); }}>Max → Min</li>
              <li onClick={() => { setPricing(""); setOpenPrice(false); }}>Clear</li>
            </ul>
          </div>

          <div className={styles.dropdown}>
            <button className={styles.dropdownToggle} onClick={() => { setOpenMake((v) => !v); setOpenPrice(false); }}>
              <span>{manufacturer || "Manufacturer"}</span>
            </button>
            <ul className={`${styles.dropdownMenu} ${openMake ? styles.show : ""}`}>
              <li onClick={() => { setManufacturer(""); setOpenMake(false); }}>All Manufacturers</li>
              {manufacturers.map((m) => (
                <li key={m} onClick={() => { setManufacturer(m); setOpenMake(false); }}>{m}</li>
              ))}
            </ul>
          </div>

          <button className={styles.clearBtn} onClick={clearFilters}>Reset</button>
        </div>
      </div>

      {/* Grid */}
      <div className={styles.grid}>
        {visibleCars.length === 0 ? (
          <div className={styles.empty}>No cars found — try clearing filters.</div>
        ) : (
          visibleCars.map((car) => (
            <article className={styles.card} key={car.id}>
              <div className={styles.media}>
                <Image src={car.img} alt={car.name} fill sizes="(max-width: 768px) 100vw, 33vw" style={{ objectFit: "cover" }} />
              </div>

              <div className={styles.cardBody}>
                <div className={styles.row}>
                  <h3 className={styles.carName}>{car.name}</h3>
                  <div className={styles.price}>₹{car.pricePerKm}/km</div>
                </div>

                <div className={styles.muted}>{car.manufacturer} • {car.seats} seats • {car.mileage}</div>

                {/* <div className={styles.cardActions}>
                  <button className={styles.bookBtn} >Book Now</button>
                  <button className={styles.detailsBtn} onClick={() => openModal(car)}>Details</button>
                </div> */}

                <div className={styles.cardActions}>
                  <Link href="/booknow" className={styles.bookBtn}>
                    Book Now
                  </Link>
                  <button className={styles.detailsBtn} onClick={() => openModal(car)}>
                    Details
                  </button>
                </div>

              </div>

              {/* DaisyUI Modal */}
              <dialog id={`modal-${car.id}`} className="modal">
                <div className="modal-box w-11/12 max-w-3xl">
                  <h3 className="font-bold text-lg">{car.name}</h3>
                  <Image src={car.img} alt={car.name} width={400} height={250} style={{ borderRadius: "12px", objectFit: "cover" }} />
                  <p><strong>Manufacturer:</strong> {car.manufacturer}</p>
                  <p><strong>Seats:</strong> {car.seats}</p>
                  <p><strong>Mileage:</strong> {car.mileage}</p>
                  <p><strong>Fuel:</strong> {car.fuel}</p>
                  <p><strong>Transmission:</strong> {car.transmission}</p>
                  <p><strong>Color:</strong> {car.color}</p>
                  <p><strong>Price per km:</strong> ₹{car.pricePerKm}/km</p>
                  <div className="modal-action">
                    <form method="dialog">
                      <button className="btn">Close</button>
                    </form>
                  </div>
                </div>
              </dialog>

            </article>
          ))
        )}
      </div>
    </section>
  );
}
