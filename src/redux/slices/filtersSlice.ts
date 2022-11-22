import {createSlice} from "@reduxjs/toolkit";
import useDebounce from "../../hooks/useDebounce";

export interface FiltersSliceState {
    search: string
    sort: string
    direction: 'DESC' | 'ASC'
}

const initialState: FiltersSliceState = {
    search: '',
    sort: 'title',
    direction: 'DESC'
}

export const filtersSlice = createSlice({
    name: 'filters',
    initialState,
    reducers: {
        setSearch(state, action) {
            state.search = action.payload
        },
        setSort(state, action) {
            state.sort = action.payload
        },
        setDirection(state, action) {
            state.direction = action.payload
        }
    },
})

export const {setSearch, setSort, setDirection} = filtersSlice.actions

export default filtersSlice.reducer