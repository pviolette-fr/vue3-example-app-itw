<template>
  <div class="PvSpinner"></div>
</template>

<script>
export default {
  name: "PvSpinner",
};
</script>
<style scoped>
.PvSpinner {
  --pv-spinner-color: #333333;
  display: inline-block;
  width: 80px;
  height: 80px;
}

.PvSpinner:after {
  content: " ";
  display: block;
  width: 64px;
  height: 64px;
  margin: 8px;
  border-radius: 50%;
  border: 6px solid var(--pv-spinner-color);
  border-color: var(--pv-spinner-color) transparent var(--pv-spinner-color)
    transparent;
  animation: lds-dual-ring 1.2s linear infinite;
}

@keyframes lds-dual-ring {
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
}
</style>
