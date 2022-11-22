import { configureStore } from '@reduxjs/toolkit'
import {useDispatch} from "react-redux";
import dappletsSlice from "./slices/dappletsSlice";
import filtersSlice from "./slices/filtersSlice";

export const store = configureStore({
    reducer: {
        dapplets: dappletsSlice,
        filters: filtersSlice
    },
})

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch
export const useAppDispatch = () => useDispatch<AppDispatch>()