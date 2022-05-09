<script setup lang="ts">
import { RouterLink, RouterView } from "vue-router"
</script>

<template>
  <div class="bg-slate-900 text-white w-full">
    <header
      class="h-16 w-full flex items-center justify-center space-x-3 border-b border-stone-600"
    >
      <RouterLink :to="{ name: 'Home' }"> Home </RouterLink>
      <span>|</span>
      <RouterLink :to="{ name: 'About' }"> About </RouterLink>
      <span>|</span>
      <RouterLink :to="{ name: 'Account' }"> Account </RouterLink>
    </header>
    <main class="max-w-5xl mx-auto pt-9">
      <RouterView />
    </main>
  </div>
</template>
