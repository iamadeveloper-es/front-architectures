import { HttpClient } from "../httpClient";
import { apiBaseConfig } from "./base";

const BASE_PATH = apiBaseConfig.store.basePath

export class ProductHttpServices{
    
    constructor(private httpClient: HttpClient){}

    async getProducts(){
        const {data} = await this.httpClient.get(`${BASE_PATH}/products`)
        return data
    }
}