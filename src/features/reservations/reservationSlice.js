import { createSlice,createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

const initialState = {
  loading : "",
  reservations:[],
  singleReservation:null,
  addReservationResponse:[]
}

export const addReservation = createAsyncThunk("addReservation",async (payload)=>{

    try {
      const response = await axios.post(`http://localhost:8000/api/reservations`,payload);
      console.log(response.data);
      return response.data;
  } catch (error) {
      console.error('Reservasyon eklenemedi:', error);
      throw(error)
  }
  
  })
  


export const getFlightReservations = createAsyncThunk("getFlightReservations",async ()=>{

  try {
    const response = await axios.get(`http://localhost:8000/api/reservations`);
    console.log(response.data);
    return response.data;
} catch (error) {
    console.error('Rezervasyonlar alınamadı:', error);
    throw(error)
}

})

export const getFlightReservationById = createAsyncThunk("getFlightReservationById",async ({id})=>{

  try {
    const response = await axios.get(`http://localhost:8000/api/reservations/${id}`);
    console.log(response.data);
    return response.data;
} catch (error) {
    console.error(`${id}'li Rezervasyon alınamadı:`, error);
    throw(error)
}

})


export const reservationSlice = createSlice({
  name: 'reservations',
  initialState,
  reducers: {
  },
    extraReducers:(builder)=>{

      builder.addCase(getFlightReservations.pending,(state,action)=>{
        state.loading = true;
        state.error = ""
      });
      builder.addCase(getFlightReservations.fulfilled,(state,action)=>{
        state.loading = false;
        state.reservations = action.payload
      });
      builder.addCase(getFlightReservationById.pending,(state,action)=>{
        state.loading = true;
        state.error = ""
      });
      builder.addCase(getFlightReservationById.fulfilled,(state,action)=>{
        state.loading = false;
        state.singleReservation = action.payload
      });
      builder.addCase(addReservation.pending,(state,action)=>{
        state.loading = true;
        state.error = ""
      });
      builder.addCase(addReservation.fulfilled,(state,action)=>{
        state.loading = false;
        state.addReservationResponse = action.payload
      });

  }
})

// Action creators are generated for each case reducer function
export const { setRoute,setFlightDirection,setFlightType} = reservationSlice.actions

export default reservationSlice.reducer