import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  destinations: [],
}

export const flightSlice = createSlice({
  name: 'flightS',
  initialState,
  reducers: {

    setDestinations: (state, action) => {
      state.destinations = action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const {setDestinations } = flightSlice.actions

export default flightSlice.reducer