import { configureStore } from '@reduxjs/toolkit'
import flightsReducer from '../features/flights/flightSlice'
export const store = configureStore({
  reducer: {
    flights:flightsReducer
  },
})