import { createSlice } from "@reduxjs/toolkit";

const counterSlice=createSlice({
    name:"counter",
    initialState:{count:0},
    reducers:{
        increament:(state)=>{
            state.count=state.count+1;
        }
    }
})
export const {increament}=counterSlice.actions
export default counterSlice.reducer