<template>
  <div class="relative">
    <PvIconButton
      v-if="previousBtnEnabled"
      icon="fa-solid fa-chevron-left"
      class="absolute left-0 top-2/4 z-20"
      style="transform: translate(0, -50%)"
      @click="onPreviousClick"
    />
    <PvImage :src="selectedImageSrc" class="max-h-full" />
    <PvIconButton
      v-if="nextBtnEnabled"
      icon="fa-solid fa-chevron-right"
      class="absolute right-0 top-2/4 w-10 h-10 z-20"
      @click="onNextClick"
      style="transform: translate(0, -50%)"
    />
    <p
      class="absolute bottom-0 left-0 right-0 text-center opacity-75 bg-slate-800 text-white"
    >
      {{ selectedIndex + 1 }} / {{ images.length }}
    </p>
  </div>
</template>
<script>
import { ref, computed } from "vue";
import PvIconButton from "./PvIconButton.vue";
import PvImage from "./PvImage.vue";

export default {
  name: "PvImageSlider",
  props: {
    images: {
      type: Array,
      required: true,
    },
  },
  components: { PvImage, PvIconButton },
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
