// carsSlice.ts
import { createSlice } from "@reduxjs/toolkit";

export type Car = {
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

const initialState: Car[] = [
  { id: 1, name: "Swift Dzire", manufacturer: "Maruti Suzuki", pricePerKm: 18, seats: 4, mileage: "20 kmpl", img: "/Cars/Swift Dzire.png", fuel: "Petrol", transmission: "Manual", color: "Blue" },
  { id: 2, name: "i20", manufacturer: "Hyundai", pricePerKm: 22, seats: 4, mileage: "18 kmpl", img: "/Cars/i20.png", fuel: "Petrol", transmission: "Automatic", color: "Red" },
  { id: 3, name: "Innova", manufacturer: "Toyota", pricePerKm: 36, seats: 7, mileage: "15 kmpl", img: "/Cars/Innova.png", fuel: "Diesel", transmission: "Automatic", color: "White" },
  { id: 4, name: "City", manufacturer: "Honda", pricePerKm: 25, seats: 4, mileage: "17 kmpl", img: "/Cars/City.png", fuel: "Petrol", transmission: "Manual", color: "Black" },
  { id: 5, name: "Tiago", manufacturer: "Tata", pricePerKm: 16, seats: 4, mileage: "22 kmpl", img: "/Cars/tiago.png", fuel: "Petrol", transmission: "Manual", color: "Silver" },
  { id: 6, name: "Scorpio", manufacturer: "Mahindra", pricePerKm: 32, seats: 7, mileage: "13 kmpl", img: "/Cars/scorpio.png", fuel: "Diesel", transmission: "Manual", color: "Gray" },
  { id: 7, name: "Seltos", manufacturer: "Kia", pricePerKm: 30, seats: 5, mileage: "16 kmpl", img: "/Cars/seltos.png", fuel: "Petrol", transmission: "Automatic", color: "White" }
];

const slice = createSlice({
  name: "cars",
  initialState,
  reducers: {}
});

export default slice.reducer;
