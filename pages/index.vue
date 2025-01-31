<script setup>
import { useNewItems } from "@/stores/root";
import { storeToRefs } from "pinia";

const newItemsStore = useNewItems();
newItemsStore.getNewItems();

const { newItems } = storeToRefs(newItemsStore);
</script>

<template>
  <div class="container">
    <Slider />
    <Equipment />
    <NewProducts :newItems="newItems" />
  </div>
</template>