<template>
  <div class="relative overflow-hidden">
    <PvSpinner
      v-if="!pictureLoaded"
      class="absolute top-0 left-0 right-0 bottom-0 m-auto"
    />
    <img
      :src="localSrc"
      @load="loadEventHandler"
      @error="onLoadError"
      style="object-fit: cover"
      class="m-auto"
    />
  </div>
</template>
<script>
import imageLoadFail from "../assets/imageLoadFail.svg";
import useLoadPicture from "../composables/useLoadPicture";
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

    const onLoadError = () => {
      localSrc.value = imageLoadFail;
    };
    const { pictureLoaded, loadEventHandler } = useLoadPicture();

    // if src props change try to load again
    watch(src, (newValue) => {
      localSrc.value = newValue;
    });

    return { pictureLoaded, loadEventHandler, onLoadError, localSrc };
  },
  components: { PvSpinner },
};
</script>
