import { Product } from "../../domain/models/Product";
import { ProductAdapter } from "../adapters/ProductAdapter";
import { ProductHttpServices } from "../http/api/ProductHttpServices";
import { products } from "../http/api/products";
import { HttpClient } from "../http/httpClient";
import { ProductRepositoryPort } from "../ports/ProductRepositoryPort";



/**
 * En esta capa sería donde se conectaría con el API a través de xhr, fetch, axios, et
 */
export class ProductService {
    productRepository: ProductRepositoryPort;

    constructor(){
        this.productRepository = new ProductAdapter()
    }

    // addProduct(productData: Product): void{
    //     this.productRepository.add(user)
    // }

    async loadProducts(): Promise<void> {
        try {
            const response = await this.productRepository.load()
            this.getAllProducts()

        }
        catch(e){
            debugger
        }
    }

    getSingleProduct(id: number): Product | null{
        return this.productRepository.getSingle(id)
    }

    async getAllProducts(): Promise<Product[]> {

        const httpClient = new HttpClient()
        const productApiServices = new ProductHttpServices(httpClient)

        const products = await productApiServices.getProducts()
        
        return products

    }
}