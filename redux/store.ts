// "use client" not required here
import { configureStore } from "@reduxjs/toolkit";
import carsReducer from "./slices/carsSlice";
import bookingReducer from "./slices/bookingSlice";

export const store = configureStore({
  reducer: {
    cars: carsReducer,
    booking: bookingReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
