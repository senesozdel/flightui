import { createSlice,createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

const initialState = {
  loading : "",
  flightDirection:"",
  filteredFlights:[],
  route:"",
  flights : [],
  reservations:[],
  singleReservation:null,
  flightType : "one-way"
}




export const getFlights = createAsyncThunk("getFlights", async ({ payload }) => {
  try {
    // Construct query parameters based on payload values
    const { departureDate, flightDirection, route } = payload;
    const queryParams = new URLSearchParams();

    if (departureDate) queryParams.append('scheduleDate', departureDate);
    if (flightDirection) queryParams.append('flightDirection', flightDirection);
    if (route) queryParams.append('route', route);

    const response = await axios.get(`http://localhost:8000/api/flights?${queryParams.toString()}`);
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error('Uçuşlar alınamadı:', error);
    throw error;
  }
});


// export const getFlights = createAsyncThunk("getFlights",async ({payload})=>{

//   try {
//     const response = await axios.get(`http://localhost:8000/api/flights?scheduleDate=${payload.departureDate}&flightDirection=${payload.flightDirection}&route=${payload.route}`);
//     console.log(response.data);
//     return response.data;
// } catch (error) {
//     console.error('Uçuçlar alınamadı:', error);
//     throw(error)
// }

// })



export const flightSlice = createSlice({
  name: 'flights',
  initialState,
  reducers: {
setFlightDirection:(state,action)=>{state.flightDirection = action.payload},
setRoute:(state,action)=>{state.route = action.payload},
setFlightType:(state,action)=>{state.flightType = action.payload},
setFilteredFlights:(state,action)=>{state.filteredFlights = action.payload}
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
export const { setRoute,setFlightDirection,setFlightType,setFilteredFlights} = flightSlice.actions

export default flightSlice.reducer