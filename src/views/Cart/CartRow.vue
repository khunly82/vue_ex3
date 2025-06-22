<script setup lang="ts">
import { CartServiceSymbol, type CartServiceInterface } from '@/interfaces/CartServiceInterface.ts';
import type { Product } from '@/models/Product.ts';
import { Button } from 'primevue';
import { inject } from 'vue';
const {product, quantity} = defineProps<{
    product: Product
    quantity: number
}>()

const cartService = inject<CartServiceInterface>(CartServiceSymbol)!;
</script>
<template>
    <tr>
        <td>{{ product.name }}</td>
        <td>{{ quantity }}</td>
        <td class="flex gap-1">
            <Button size="small" icon="pi pi-minus" @click="cartService.decrease(product.id)"></Button>
            <Button size="small" icon="pi pi-plus" @click="cartService.increase(product.id)"></Button>
        </td>
    </tr>
</template>
<style scoped>
</style>