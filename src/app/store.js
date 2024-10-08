import { configureStore } from '@reduxjs/toolkit'
import flightsReducer from '../features/flights/flightSlice';
import dateReducer from '../features/dates/dateSlice'
import destinationReducer from '../features/destinations/destinationSlice'
import reservationReducer from '../features/reservations/reservationSlice'
export const store = configureStore({
  reducer: {
    flights:flightsReducer,
    dates: dateReducer,
    destinations:destinationReducer,
    reservations:reservationReducer
  },
})