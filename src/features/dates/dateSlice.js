import { createSlice } from "@reduxjs/toolkit";

const initialState ={
    departureDate : "",
    returnDate :""
}

export const dateSlice = createSlice({
    name:"date",
    initialState,
    reducers:{
        setDepartureDate :(state,action)=>{state.departureDate = action.payload},
        setReturnDate :(state,action)=>{state.returnDate = action.payload}
    }
})
export const {setDepartureDate,setReturnDate} = dateSlice.actions;
export default dateSlice.reducer