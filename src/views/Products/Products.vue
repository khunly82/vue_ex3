<script setup lang="ts">
import { inject, onMounted, ref } from 'vue';
import Card from '@/components/Card.vue';
import Filters from '@/views/Products/Filters.vue';
import { ProductServiceSymbol, type ProductServiceInterface } from '@/interfaces/ProductServiceInterface.ts';
import { Button } from 'primevue';
import type { Product } from '@/models/Product.ts';
import { CartServiceSymbol } from '@/interfaces/CartServiceInterface.ts';
import type { CartService } from '@/services/CartService.ts';

const products = ref<Product[]>()
const productService = inject<ProductServiceInterface>(ProductServiceSymbol)!;
const cartService = inject<CartService>(CartServiceSymbol)!;
function addToCart(product: Product) {
    cartService.increase(product.id);
}

function loadProducts(search?: string, category?: string) {
    products.value = productService.get(search, category) 
}

onMounted(loadProducts);
</script>
<template>
    <div class="panel">
        <Filters @submit="e => loadProducts(e.search, e.category)"></Filters>
    </div>
    <div class="flex flex-wrap mt-1.5 w-full">
        <Card class="w-1/4" :title="product.name" v-for="product in products">
            <template #header>
                <img :src="product.image">
            </template>
            <p>{{ product.description }}</p>
            <template #footer>
                <Button icon="pi pi-plus" @click="addToCart(product)"></Button>
            </template>
        </Card>
    </div>
</template>