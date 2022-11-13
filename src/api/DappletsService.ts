import axios, { AxiosResponse } from "axios";
import {filtersType} from "../redux/slices/dappletsSlice";

export default class TicketsService {

    static url = 'https://dapplets-hiring-api.herokuapp.com/api/v1'

    static async fetchTags(): Promise<AxiosResponse> {
        return axios.get(this.url + `/tags`)
    }

    static async fetchDapplets(filters: filtersType): Promise<AxiosResponse> {
        const params: {
            filter?: string
            sort?: string
        } = {}
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