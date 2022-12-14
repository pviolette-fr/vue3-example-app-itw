<template>
  <router-link
    :to="`/vehicules/${id}`"
    class="shadow-lg shadow-gray-200 w-96 h-80 flex flex-col"
  >
    <div class="w-full h-72 overflow-hidden">
      <img
        v-if="pictureLoaded"
        class="w-full"
        :src="pictureUrl"
        alt="Photo of the vehicule"
      />
    </div>
    <div class="p-2">
      <div class="flex flex-row justify-between">
        <p>{{ title }}</p>
        <p>{{ formattedPrice }}</p>
      </div>
      <div class="text-gray-700">{{ locationCity }}</div>
      <div class="text-gray-700 flex flex-row justify-between">
        <span> {{ seatsCount }} places - {{ bedsCount }} couchages </span>
        <span>{{ ratingAverage }}</span>
      </div>
    </div>
  </router-link>
</template>
<script>
import { onMounted, ref, computed, watch, toRefs } from "vue";

export default {
  name: "PvVehiculeCard",
  props: {
    id: {
      type: Number,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    price: {
      type: Object,
      required: true,
    },
    locationCity: {
      type: String,
      required: true,
    },
    seatsCount: {
      type: Number,
      required: true,
    },
    bedsCount: {
      type: Number,
      required: true,
    },
    ratingAverage: {
      type: Number,
      required: true,
    },
    pictureUrl: {
      type: String,
      required: true,
    },
  },
  setup(props) {
    const pictureLoading = ref(false);
    const pictureLoaded = ref(false);

    const { pictureUrl } = toRefs(props);

    const loadPicture = () => {
      pictureLoading.value = true;
      const img = new Image();
      img.onload = () => {
        pictureLoaded.value = true;
        pictureLoading.value = false;
      };
      img.onerror = () => {
        console.warn("Failed to load image");
        pictureLoading.value = false;
      };
      img.src;
      img.src = pictureUrl.value;
    };

    onMounted(() => {
      loadPicture();
    });

    const formattedPrice = computed(() => {
      // TODO i18n : use same language as vue-i18n + localize final string
      const formatter = new Intl.NumberFormat("fr-FR", {
        style: "currency",
        currency: props.price.currency,
      });

      return `${formatter.format(props.price.amount)}/j`;
    });

    watch(pictureUrl, () => {
      loadPicture();
    });
    return {
      pictureLoaded,
      pictureLoading,
      formattedPrice,
    };
  },
};
</script>
