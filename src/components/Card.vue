<script setup lang="ts">
const {title} = defineProps<{ title: string}>();
</script>
<template>
    <div class="p-5">
        <div class="card">
            <div v-if="$slots.header" class="card-header">
                <slot name="header"></slot>
            </div>
            <div class="card-body">
                <h2>{{ title }}</h2>
                <slot></slot>
            </div>
            <div v-if="$slots.footer" class="card-footer">
                <slot name="footer"></slot>
            </div>
        </div>
    </div>
</template>
<style scoped>
.card {
    box-shadow: 2px 2px 5px 0 #ccc;
    aspect-ratio: 2/3;
    display: flex;
    flex-direction: column;
    .card-body {
        h2 {
            font-size: 20px;
            font-weight: bold;
        }
        padding: 1em;
        flex: 1;
    }
    .card-footer {
        padding: 1em;
        display: flex;
        justify-content: flex-end;
    }
}
</style>