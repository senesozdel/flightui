import { createSlice,createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

const initialState = {
  loading : "",
  flightDirection:"D",
  route:"",
  flights : []
}



export const getFlights = createAsyncThunk("getFlights",async ({payload})=>{

  try {
    const response = await axios.get(`http://localhost:8000/api/flights?scheduleDate=${payload.departureDate}&flightDirection=${payload.flightDirection}&route=${payload.route}`);
    console.log(response.data);
    return response.data;
} catch (error) {
    console.error('Uçuçlar alınamadı:', error);
    throw(error)
}

})


export const flightSlice = createSlice({
  name: 'flights',
  initialState,
  reducers: {
setFlightDirection:(state,action)=>{state.flightDirection = action.payload},
setRoute:(state,action)=>{state.route = action.payload},
  },
    extraReducers:(builder)=>{

      builder.addCase(getFlights.pending,(state,action)=>{
        state.loading = true;
        state.error = ""
      });
      builder.addCase(getFlights.fulfilled,(state,action)=>{
        state.loading = false;
        state.flights = action.payload
      });

  }
})

// Action creators are generated for each case reducer function
export const { setRoute,setFlightDirection} = flightSlice.actions

export default flightSlice.reducer