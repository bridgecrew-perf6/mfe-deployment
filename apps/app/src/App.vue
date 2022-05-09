<script setup lang="ts">
import { RouterLink, RouterView } from "vue-router"

import RenderBasket from "cart/Basket"
import { ref, onMounted } from "vue"

const basketRef = ref<HTMLElement | null>(null)

onMounted(() => {
  RenderBasket(basketRef.value)
})
</script>

<template>
  <div class="min-h-screen w-full bg-stone-900 text-white">
    <header
      class="h-16 w-full flex items-center justify-center space-x-3 border-b border-stone-600"
    >
      <RouterLink :to="{ name: 'Home' }"> Home </RouterLink>
      <span>|</span>
      <RouterLink :to="{ name: 'About' }"> About </RouterLink>
      <span>|</span>
      <RouterLink :to="{ name: 'Account' }"> Account </RouterLink>
      <span>|</span>
      <RouterLink :to="{ name: 'Checkout' }">
        <div ref="basketRef"></div>
      </RouterLink>
    </header>

    <main class="max-w-5xl mx-auto pt-9">
      <RouterView />
    </main>
  </div>
</template>
