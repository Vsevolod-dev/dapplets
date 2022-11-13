import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import DappletsService from "../../api/DappletsService";
import {IDapplet} from "../../@types/dapplet";
import {ITag} from "../../@types/tag";

interface DappletsSliceState {
    dapplets: IDapplet[],
    tags: ITag[]
}

const initialState: DappletsSliceState = {
    dapplets: [],
    tags: []
}

export type filtersType = {
    'search': string
    'sort': string
    'direction': string
}

export const getDapplets = createAsyncThunk(
    'dapplets/getDapplets',
    async (filters: filtersType) => {
        const response = await DappletsService.fetchDapplets(filters)
        return response.data.data
    }
)

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
    reducers: {},
    extraReducers: builder => {
        builder
            .addCase(getDapplets.fulfilled, (state, action) => {
                state.dapplets = action.payload
            })
            .addCase(getTags.fulfilled, (state, action) => {
                state.tags = action.payload
            })
    }
})

export const {} = dappletsSlice.actions

export default dappletsSlice.reducer