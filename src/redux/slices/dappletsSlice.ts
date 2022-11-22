import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import DappletsService from "../../api/DappletsService";
import {IDapplet} from "../../@types/dapplet";
import {ITag} from "../../@types/tag";
import {filtersSlice} from "./filtersSlice";

interface DappletsSliceState {
    dapplets: IDapplet[],
    tags: ITag[],
    total: number
    errors: boolean,
}

const initialState: DappletsSliceState = {
    dapplets: [],
    tags: [],
    errors: false,
    total: 0
}

// export const getDapplets = createAsyncThunk(
//     'dapplets/getDapplets',
//     async (filters: IFiltersService) => {
//         const response = await DappletsService.fetchDapplets(filters)
//         return response.data
//     }
// )

export const getTags = createAsyncThunk(
    'dapplets/getTags',
    async () => {
        const response = await DappletsService.fetchTags()
        return response.data.data
    }
)

export const dappletsSlice = createSlice({
    name: 'dapplets',
    initialState,
    reducers: {
        setDapplets(state, action) {
            state.dapplets = action.payload.data
            state.total = action.payload.total
        },
        addDapplets(state, action) {
            state.dapplets = [...state.dapplets, ...action.payload.data]
            state.total = action.payload.total
        }
    },
    extraReducers: builder => {
        builder
            // .addCase(getDapplets.fulfilled, (state, action) => {
            //     state.dapplets = [...state.dapplets, ...action.payload.data]
            //     state.total = action.payload.total
            //     state.errors = false
            // })
            // .addCase(getDapplets.rejected, (state, action) => {
            //     console.log('error')
            //     state.errors = true
            // })
            .addCase(getTags.fulfilled, (state, action) => {
                state.tags = action.payload
            })
    }
})

export const {setDapplets, addDapplets} = dappletsSlice.actions

export default dappletsSlice.reducer