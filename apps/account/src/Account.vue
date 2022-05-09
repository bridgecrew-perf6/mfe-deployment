<script setup lang="ts">
import { RouterLink, RouterView } from "vue-router"
</script>

<template>
  <div class="bg-slate-900 text-white w-full">
    <div class="flex w-full">
      <div class="w-96 p-3 flex flex-col space-y-3">
        <RouterLink to="/account">
          <div class="bg-slate-800 py-3 px-2 rounded">Root</div>
        </RouterLink>
        <RouterLink to="/account/orders">
          <div class="bg-slate-800 py-3 px-2 rounded">Orders</div>
        </RouterLink>
        <RouterLink to="/account/settings">
          <div class="bg-slate-800 py-3 px-2 rounded">Settings</div>
        </RouterLink>
      </div>
      <main class="flex-1 p-3">
        <RouterView />
      </main>
    </div>
  </div>
</template>
