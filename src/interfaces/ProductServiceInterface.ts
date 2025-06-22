import type { Product } from "@/models/Product";

export interface ProductServiceInterface {
    get(start?: string, category?: string): Product[];
    getById(id: number): Product|undefined;
}

export const ProductServiceSymbol = Symbol('ProductService');