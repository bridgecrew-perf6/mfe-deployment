<template>
  <div ref="mountRef"></div>
</template>

<script setup lang="ts">
import { defineAsyncComponent, ref, onMounted } from "vue"
import renderCheckout from "cart/Checkout"

const mountRef = ref<HTMLDivElement>()

onMounted(() => {
  renderCheckout(mountRef.value)
})
</script>
