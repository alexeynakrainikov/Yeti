import { configureStore } from '@reduxjs/toolkit'
import {carriersSlice} from "./Reducers/carriersSlice";

export const store = configureStore({
    reducer: {
        carriers: carriersSlice
    },
})

