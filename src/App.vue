<template>
  <TheNavBar />
  <div class="w-full">
    <RouterView />
  </div>
</template>
<script setup>
import { RouterView } from "vue-router";
import TheNavBar from "./components/TheNavBar.vue";
</script>
<style scoped></style>
