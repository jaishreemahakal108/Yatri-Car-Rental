import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type Booking = {
  source: string;
  destination: string;
  car: string;
  distance: number;
  duration: number;
  fare: number | null;
  pickupDate: string;
  pickupTime: string;
  passengerName: string;
  phone: string;
};

type BookingState = {
  bookings: Booking[];
};

const initialState: BookingState = {
  bookings: [],
};

const bookingSlice = createSlice({
  name: "booking",
  initialState,
  reducers: {
    addBooking(state, action: PayloadAction<Booking>) {
      state.bookings.push(action.payload);
    },
  },
});

export const { addBooking } = bookingSlice.actions;
export default bookingSlice.reducer;