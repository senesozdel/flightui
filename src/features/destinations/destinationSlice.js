import { createSlice,createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

const initialState = {
  destinations: [],
  destinationsDictionary : [],
  loading : "",

}

export const getFlightDestinations = createAsyncThunk("getFlightDestinations",async ()=>{

  try {
    const response = await axios.get("http://localhost:8000/api/dest");
    console.log(response.data);
    return response.data;
} catch (error) {
    console.error('Destinasyonlar alınamadı:', error);
    throw(error)
}

})




export const destinationSlice = createSlice({
  name: 'destinations',
  initialState,
  reducers: {
    setDestinationsDictionary : (state,action)=>{state.destinationsDictionary = action.payload}

  },
    extraReducers:(builder)=>{
      builder.addCase(getFlightDestinations.pending,(state,action)=>{
        state.loading = true;
        state.error = ""
      });
      builder.addCase(getFlightDestinations.fulfilled,(state,action)=>{
        state.loading = false;
        state.destinations = action.payload
      });

  }
})

// Action creators are generated for each case reducer function
export const {setDestinationsDictionary } = destinationSlice.actions

export default destinationSlice.reducer