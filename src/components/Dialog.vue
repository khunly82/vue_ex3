<script setup lang="ts">
const visible = defineModel<boolean>('visible', {required: true});
</script>
<template>
<div v-if="visible" class="overlay">
    <div class="dialog">
        <div class="flex justify-end p-5">
            <i class="pi pi-times" @click="visible = false"></i>
        </div>
        <div class="p-5">
            <slot></slot>
        </div>
    </div>
</div>
</template>
<style>
.overlay {
    position: fixed;
    background-color: #0006;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    z-index: 1000;
    display: flex;
    justify-content: center;
    align-items: center;
    .dialog {
        z-index: 1000;
        background-color: white;
        color: black;
        min-width: 300px;
        font-size: 1rem;
        i {
            cursor: pointer;
        }
    }
}
</style>