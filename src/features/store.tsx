import { useReducer } from "react";
import { configureStore } from '@reduxjs/toolkit'
import { categoriesSlice } from "./categories/categoriesSlice";

export const store = configureStore({
    reducer:{
        categories: categoriesSlice.reducer,
    },
    devTools: true,
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;