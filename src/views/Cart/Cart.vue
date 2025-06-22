<script setup lang="ts">
import { CartServiceSymbol, type CartServiceInterface } from '@/interfaces/CartServiceInterface.ts';
import { ProductServiceSymbol, type ProductServiceInterface } from '@/interfaces/ProductServiceInterface.ts';
import { computed, inject } from 'vue';
import CartRow from '@/views/Cart/CartRow.vue';

const cartService = inject<CartServiceInterface>(CartServiceSymbol)!;
const productService = inject<ProductServiceInterface>(ProductServiceSymbol)!;

const cartItems = computed(() => cartService.get().map(item => ({
    ...item,
    product: productService.getById(item.productId)
})).filter(item => item.product))

</script>
<template>
    <table v-if="cartItems.length">
        <thead>
            <tr>
                <th>Produit</th>
                <th>Quantité</th>
                <th></th>
            </tr>
        </thead>
        <tbody>
            <CartRow v-for="item in cartItems"
                     :key="item.productId"
                     :quantity="item.quantity"
                     :product="item.product!"></CartRow>
        </tbody>
    </table>
    <p v-else>
        Le panier est vide
    </p>
</template>
<style scoped>
</style>