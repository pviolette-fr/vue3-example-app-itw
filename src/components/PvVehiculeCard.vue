<template>
  <router-link
    :to="`/vehicules/${id}`"
    class="shadow-lg shadow-gray-200 w-96 h-80 flex flex-col"
  >
    <div class="w-full h-72 overflow-hidden">
      <PvImage :src="pictureUrl" />
    </div>
    <div class="p-2">
      <div class="flex flex-row justify-between">
        <p>{{ title }}</p>
        <p>{{ formattedPrice }}</p>
      </div>
      <div class="text-gray-700">{{ locationCity }}</div>
      <div class="text-gray-700 flex flex-row justify-between">
        <span>{{ $t("vehicule.placesLabel", { seatsCount, bedsCount }) }}</span>
        <span>{{ ratingAverage }}</span>
      </div>
    </div>
  </router-link>
</template>
<script>
import { computed } from "vue";
import { formatPrice } from "../helpers/format";
import PvImage from "./PvImage.vue";

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
    const formattedPrice = computed(() =>
      formatPrice(props.price.amount, props.price.currency, "fr-FR")
    );
    return {
      formattedPrice,
    };
  },
  components: { PvImage },
};
</script>
