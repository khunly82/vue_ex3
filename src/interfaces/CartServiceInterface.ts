import type { CartItem } from "@/models/CartItem";
import type { Reactive } from "vue";

export interface CartServiceInterface {
    get(): Reactive<CartItem[]>;
    increase(id: number): void;
    decrease(id: number): void; 
}

export const CartServiceSymbol = Symbol('CartServiceInterface');