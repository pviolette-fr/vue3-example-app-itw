<template>
  <div class="relative">
    <button
      v-if="previousBtnEnabled"
      class="absolute left-0 top-2/4 w-10 h-10 my-auto border-2 bg-slate-300 rounded-full z-20"
      style="transform: translate(0, -50%)"
      @click="onPreviousClick"
      aria-label="previous image"
    >
      <font-awesome-icon icon="fa-solid fa-chevron-left" />
    </button>
    <PvImage :src="selectedImageSrc" class="max-h-full" />
    <button
      v-if="nextBtnEnabled"
      class="absolute right-0 top-2/4 w-10 h-10 my-auto border-2 bg-slate-300 rounded-full z-20"
      style="transform: translate(0, -50%)"
      @click="onNextClick"
      aria-label="next image"
    >
      <font-awesome-icon icon="fa-solid fa-chevron-right" />
    </button>
    <p
      class="absolute bottom-0 left-0 right-0 text-center opacity-75 bg-slate-800 text-white"
    >
      {{ selectedIndex + 1 }} / {{ images.length }}
    </p>
  </div>
</template>
<script>
import { ref, computed } from "vue";
import PvImage from "./PvImage.vue";

export default {
  name: "PvImageSlider",
  props: {
    images: {
      type: Array,
      required: true,
    },
  },
  components: { PvImage },
  setup(props) {
    const selectedIndex = ref(0);

    const previousBtnEnabled = computed(() => selectedIndex.value > 0);
    const nextBtnEnabled = computed(
      () => selectedIndex.value < props.images.length - 1
    );

    const selectedImageSrc = computed(
      () => props.images[selectedIndex.value]?.url
    );

    const onPreviousClick = () => {
      console.log("onPreviousClick");
      selectedIndex.value = selectedIndex.value - 1;
    };

    const onNextClick = () => {
      selectedIndex.value = selectedIndex.value + 1;
    };

    return {
      selectedIndex,
      selectedImageSrc,
      previousBtnEnabled,
      nextBtnEnabled,
      onPreviousClick,
      onNextClick,
    };
  },
};
</script>
