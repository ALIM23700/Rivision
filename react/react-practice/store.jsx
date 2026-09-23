import { configureStore } from "@reduxjs/toolkit";
import counterReducer from './src/Counter/counterSlice'
const store =configureStore({
    reducer:{
        counter:counterReducer,
    }
})
export default store