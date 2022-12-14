<template>
  <button class="w-10 h-10 bg-slate-300 rounded-full">
    <font-awesome-icon :icon="icon" />
  </button>
</template>
<script>
export default {
  name: "PvIconButton",
  props: {
    icon: {
      type: String,
      required: true,
    },
  },
};
</script>
