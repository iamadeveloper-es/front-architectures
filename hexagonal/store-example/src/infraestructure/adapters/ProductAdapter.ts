import { Product } from "../../domain/models/Product";
import { products } from "../http/api/products";
import { ProductRepositoryPort } from "../ports/ProductRepositoryPort";



export class ProductAdapter implements ProductRepositoryPort {
    private products: Product[] = [];

    async load(){
        try {
            const response: Product[] = await products()
            return response.map(item => this.products.push(item))
        }
        catch(e){
            debugger
        }
    }
    add(product: Product): void {
        this.products.push(product)
    }
    getAll(): Product[] {
        return this.products
    }
    getSingle(id: number): Product | null{
        return this.products.find(product => product.id === +id) || null
    }
    delete(id: number): void {
        const productIndex = this.products.findIndex(product => product.id === +id)
        this.products.splice(productIndex, 1)
    }
    
}