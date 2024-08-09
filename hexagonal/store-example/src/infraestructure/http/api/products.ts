import { http } from "../http";
import { apiBaseConfig } from "./base";

const BASE_PATH = apiBaseConfig.store.basePath

const products = () => {
    return http.get(`${BASE_PATH}/products`)
}


export {
    products
}