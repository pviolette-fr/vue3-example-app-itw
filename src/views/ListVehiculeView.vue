<template>
  <div class="flex flex-row gap-10 justify-center mx-5 my-8">
    <div class="bg-white w-96">Filter</div>
    <main class="flex flex-row flex-wrap w-full gap-8">
      <PvSpinner v-if="vehiculesLoadingState === 'loading'" class="m-auto" />
      <template v-else>
        <PvVehiculeCard
          v-for="vehicule in vehicules"
          :key="vehicule.id"
          :id="vehicule.id"
          :title="vehicule.title"
          :price="vehicule.price"
          :locationCity="vehicule.location.city"
          :seatsCount="vehicule.seatsCount"
          :bedsCount="vehicule.bedsCount"
          :ratingAverage="vehicule.review.average"
          :pictureUrl="vehicule.pictures[0]?.url"
        />
      </template>
    </main>
  </div>
</template>
<script>
import { onMounted } from "vue";
import { useVehiculesStore } from "../stores/vehicules";
import { storeToRefs } from "pinia";
import PvVehiculeCard from "../components/PvVehiculeCard.vue";
import PvSpinner from "../components/PvSpinner.vue";
export default {
  components: {
    PvVehiculeCard,
    PvSpinner,
  },
  setup() {
    const store = useVehiculesStore();

    const { vehicules, vehiculesLoadingError, vehiculesLoadingState } =
      storeToRefs(store);

    onMounted(() => {
      store.loadVehicules();
    });

    return {
      vehiculesLoadingState,
      vehiculesLoadingError,
      vehicules,
    };
  },
};
</script>
