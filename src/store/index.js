import { configureStore } from "@reduxjs/toolkit";
import players from './slices/playersSlice';

export const store = configureStore({
    reducer: {
        players
    }
})