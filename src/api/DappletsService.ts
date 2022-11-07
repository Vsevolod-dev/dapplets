import axios, { AxiosResponse } from "axios";

export default class TicketsService {

    static url = 'https://dapplets-hiring-api.herokuapp.com/api/v1'

    static async fetchTags(): Promise<AxiosResponse> {
        return axios.get(this.url + `/tags`)
    }

    static async fetchDapplets(): Promise<AxiosResponse> {
        return axios.get(this.url + `/dapplets`)
    }
}