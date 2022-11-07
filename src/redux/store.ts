import { configureStore } from '@reduxjs/toolkit'
import {useDispatch} from "react-redux";
import dappletsSlice from "./slices/dappletsSlice";

export const store = configureStore({
    reducer: {
        dapplets: dappletsSlice
    },
})

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch
export const useAppDispatch = () => useDispatch<AppDispatch>()