<script setup>
import { RouterView } from "vue-router";
</script>

<template>
  <header
    class="sticky top-0 z-50 bg-slate-700 shadow-md shadow-slate-400 h-16"
  >
    Header
  </header>

  <div class="w-full">
    <RouterView />
  </div>
</template>

<style scoped></style>
