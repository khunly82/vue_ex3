<script setup lang="ts">
import { CartServiceSymbol, type CartServiceInterface } from '@/interfaces/CartServiceInterface.ts';
import { OverlayBadge } from 'primevue';
import { computed, inject, ref } from 'vue';
import Cart from '@/views/Cart/Cart.vue';
import Dialog from '@/components/Dialog.vue';
const cartService = inject<CartServiceInterface>(CartServiceSymbol)!;
const cartLength = computed(() => cartService.get().reduce((prev, current) => current.quantity + prev, 0));
const showCart = ref(false);
</script>
<template>
    <header class="bg-primary text-white flex justify-between items-center">
        <div></div>
        <div>Exercice 3</div>
        <div>
            <OverlayBadge :value="cartLength" severity="info">
                <i @click="showCart = true" class="pi pi-shopping-cart"></i>
            </OverlayBadge>
        </div>
        <Dialog v-model:visible="showCart">
            <Cart></Cart>
        </Dialog>
    </header>
</template>
<style scoped>
header {
    height: 70px;
    color: white;
    padding: 1.5em;
    font-size: 2em;
    i {
        font-size: 1.5em;
        cursor: pointer;
    }
}
</style>