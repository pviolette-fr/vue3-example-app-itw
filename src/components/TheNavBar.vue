<template>
  <nav
    class="flex flex-row sticky top-0 z-50 bg-slate-300 shadow-md shadow-slate-400 h-16 p-3"
  >
    <img :src="imgUrl" />
  </nav>
</template>
<script>
import imgUrl from "../assets/logo.svg";
export default {
  name: "TheNavBar",
  setup() {
    return {
      imgUrl,
    };
  },
};
</script>
