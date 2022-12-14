<template>
  <div class="relative overflow-hidden">
    <PvSpinner
      v-if="!pictureLoaded"
      class="absolute top-0 left-0 right-0 bottom-0 m-auto"
    />
    <img :src="localSrc" @load="onLoad" @error="onLoadError" class="m-auto" />
  </div>
</template>
<script>
import imageLoadFail from "../assets/imageLoadFail.svg";
import PvSpinner from "./PvSpinner.vue";
import { ref, toRefs, watch } from "vue";
export default {
  name: "PvImage",
  props: {
    src: {
      type: String,
      required: false,
    },
  },
  setup(props) {
    const { src } = toRefs(props);

    const localSrc = ref(props.src);

    const pictureLoaded = ref(false);

    const onLoad = () => {
      pictureLoaded.value = true;
    };
    const onLoadError = () => {
      // Failed to load image, display "Loading failed" image instead
      localSrc.value = imageLoadFail;
    };

    // if src props change local source to the new value
    watch(src, (newValue) => {
      localSrc.value = newValue;
    });

    return { pictureLoaded, onLoad, onLoadError, localSrc };
  },
  components: { PvSpinner },
};
</script>
