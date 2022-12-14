<template>
  <div class="flex flex-col gap-2 w-24">
    <font-awesome-icon :icon="icon" size="2x" />
    <span class="text-md text-center">{{ label }}</span>
  </div>
</template>
<script>
export default {
  props: {
    icon: {
      type: String,
      required: true,
    },
    label: {
      type: String,
      required: true,
    },
  },
};
</script>
<style scoped>
.icon {
  font-family: "Material Symbols Outlined";
}
</style>
