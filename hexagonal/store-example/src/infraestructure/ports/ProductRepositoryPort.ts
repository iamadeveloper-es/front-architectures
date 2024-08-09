import { Product } from "../../domain/models/Product";

export interface ProductRepositoryPort {
    add(product: Product): void,
    getAll(): Product[],
    getSingle(id: number): Product | null
    delete(id: number): void
}