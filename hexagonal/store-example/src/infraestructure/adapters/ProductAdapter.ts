import { Product } from "../../domain/models/Product";
import { ProductRepositoryPort } from "../ports/ProductRepositoryPort";



export class ProductAdapter implements ProductRepositoryPort {
    private products: Product[] = [];

    add(product: Product): void {
        const productExist = this.products.some(item => item.id === +product.id)
        if(productExist){
            debugger
        }
        else{
          this.products.push(product)
        }
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