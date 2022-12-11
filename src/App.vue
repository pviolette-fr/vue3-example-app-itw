<script setup>
import { RouterView } from "vue-router";
</script>

<template>
  <header class="sticky top-0 z-50 bg-white shadow-md shadow-slate-900/5 h-16">
    The header
  </header>

  <div class="w-full mt-4">
    <RouterView />
  </div>
</template>

<style scoped></style>
