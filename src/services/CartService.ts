import type { CartServiceInterface } from "@/interfaces/CartServiceInterface";
import type { CartItem } from "@/models/CartItem";
import { reactive, type Reactive } from "vue";

export class CartService implements CartServiceInterface {

    private CART : Reactive<CartItem[]> = reactive([]);

    get(): Reactive<CartItem[]> {
        return this.CART;
    }
    increase(id: number): void {
        const product = this.CART.find(item => item.productId === id);
        if(product) {
            product.quantity++;
        }
        else {
            this.CART.push({ productId: id, quantity: 1 })
        }
    }
    decrease(id: number): void {
        const product = this.CART.find(item => item.productId === id);
        if(product) {
            product.quantity--;
            if(product.quantity === 0) {
                this.CART.splice(this.CART.indexOf(product), 1);
            }
        }
    }

}