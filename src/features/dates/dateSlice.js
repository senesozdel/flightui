import { createSlice } from "@reduxjs/toolkit";

const initialState ={
    departureDate : "",
    returnDate :"",
    departureTimeInterval :""
}

export const dateSlice = createSlice({
    name:"date",
    initialState,
    reducers:{
        setDepartureDate :(state,action)=>{state.departureDate = action.payload},
        setReturnDate :(state,action)=>{state.returnDate = action.payload},
        setDepartureTimeInterval :(state,action)=>{state.departureTimeInterval = action.payload}
    }
})
export const {setDepartureDate,setReturnDate,setDepartureTimeInterval} = dateSlice.actions;
export default dateSlice.reducer