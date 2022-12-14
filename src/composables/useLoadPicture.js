import { ref } from "vue";

export default function useLoadPicture() {
  const pictureLoaded = ref(false);

  const loadEventHandler = () => {
    pictureLoaded.value = true;
  };

  return {
    pictureLoaded,
    loadEventHandler,
  };
}
