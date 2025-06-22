<script setup lang="ts">
import Footer from '@/layout/Footer.vue';
import Header from '@/layout/Header.vue';
import Products from '@/views/Products/Products.vue';
</script>

<template>
    <Header></Header>
    <main class="flex flex-col gap-1">
        <Products></Products>
    </main>
    <Footer></Footer>
</template>

<style scoped>
main {
    padding: 1.5em;
}
</style>
