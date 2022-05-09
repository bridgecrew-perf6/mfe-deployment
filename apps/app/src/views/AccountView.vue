<template>
  <div ref="mountRef"></div>
</template>

<script setup lang="ts">
import { defineAsyncComponent, ref, onMounted } from "vue"
import { mountApp } from "account/mount"

const mountRef = ref<HTMLDivElement>()

onMounted(() => {
  mountApp(mountRef.value)
})
</script>
