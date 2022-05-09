<template>
  <div class="bg-white text-black text-center p-3">Home</div>
  <div ref="addToCartRef"></div>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue"
import Render from "cart/AddToCart"
const addToCartRef = ref<HTMLElement | null>(null)

onMounted(() => {
  Render(addToCartRef.value)
})
</script>
