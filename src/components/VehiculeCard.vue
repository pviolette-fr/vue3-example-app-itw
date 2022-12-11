<template>
  <div class="shadow-lg shadow-gray-200 w-96 h-80 flex flex-col">
    <div class="w-full h-72 overflow-hidden">
      <img class="w-full" :src="pictureUrl" alt="Photo of the vehicule" />
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
  </div>
</template>
<script>
export default {
  props: {
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
  computed: {
    formattedPrice() {
      // TODO i18n : use same language as vue-i18n + localize final string
      const formatter = new Intl.NumberFormat("fr-FR", {
        style: "currency",
        currency: this.price.currency,
      });

      return `${formatter.format(this.price.amount)}/j`;
    },
  },
};
</script>
