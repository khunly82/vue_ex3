<script setup lang="ts">
import { Button, FloatLabel, InputText, Select } from 'primevue';
import { reactive } from 'vue';
const form = reactive<{search?: string, category?: string}>({});
defineEmits<{
    (e: 'submit', response: { search: string, category: string }): void
}>()
</script>
<template>
    <div class="flex flex-wrap gap-2">
        <div class="input-group">
            <FloatLabel>
                <InputText v-model="form.search" class="w-full"></InputText>
                <label>Recherche</label>
            </FloatLabel>
        </div>
        <div class="input-group">
            <FloatLabel>
                <Select v-model="form.category" show-clear class="w-full" :options="['Maison', 'Accessoires', 'Technologie']"></Select>
                <label>Categorie</label>
            </FloatLabel>
        </div>
    </div>
    <div class="flex justify-end">
        <Button label="Rechercher" @click="$emit('submit', form)"></Button>
    </div>
</template>
<style scoped>
.input-group {
    flex: 1;
}
</style>