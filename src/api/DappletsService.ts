import axios, { AxiosResponse } from "axios";
import {FiltersSliceState} from "../redux/slices/filtersSlice";

export interface IFiltersService extends FiltersSliceState {
    start: number
}

interface IParams {
    filter?: string
    sort?: string
    limit: number
    start: number
}

export default class TicketsService {

    static url = 'https://dapplets-hiring-api.herokuapp.com/api/v1'

    static async fetchTags(): Promise<AxiosResponse> {
        return axios.get(this.url + `/tags`)
    }

    static async fetchDapplets(filters: IFiltersService): Promise<AxiosResponse> {
        const params: IParams = {
            limit: 10,
            start: filters.start
        }
        if (filters.search) {
            params.filter = JSON.stringify([
                {
                    property: "title",
                    value: `${filters.search}`
                }
            ])
        }
        params.sort = JSON.stringify([
            {
                property: `${filters.sort}`,
                direction: `${filters.direction}`
            }
        ])
        return axios.get(this.url + `/dapplets`, {
            params
        })
    }
}