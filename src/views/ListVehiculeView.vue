<template>
  <div class="flex flex-row gap-10 justify-center mx-5">
    <div class="bg-white w-96">Filter</div>
    <div class="flex flex-row flex-wrap w-full gap-8">
      <VehiculeCard
        v-for="vehicule in vehicules"
        :key="vehicule.id"
        :title="vehicule.title"
        :price="vehicule.price"
        :locationCity="vehicule.location.city"
        :seatsCount="vehicule.seatsCount"
        :bedsCount="vehicule.bedsCount"
        :ratingAverage="vehicule.review.average"
        :pictureUrl="vehicule.pictures[0]?.url"
      />
    </div>
  </div>
</template>
<script>
import { ref, onMounted } from "vue";
import { fetchVehicules } from "../services/api";
import VehiculeCard from "../components/VehiculeCard.vue";
export default {
  components: {
    VehiculeCard,
  },
  setup() {
    const vehicules = ref([]);

    onMounted(async () => {
      const apiResponse = await fetchVehicules();

      vehicules.value = apiResponse.results.map((vehicule) => ({
        id: vehicule.id,
        title: vehicule.title,
        type: vehicule.vehicle_type,
        bedsCount: vehicule.vehicle_beds,
        seatsCount: vehicule.vehicle_seats,
        location: {
          city: vehicule.vehicle_location_city,
          zipcode: vehicule.vehicle_location_zipcode,
        },
        owner: {
          firstName: vehicule.vehicle_owner_first_name,
          language: vehicule.vehicle_owner_language,
          pictureUrl: vehicule.vehicle_owner_picture_url,
        },
        price: {
          amount: vehicule.starting_price,
          currency: vehicule.currency_used,
        },
        review: {
          average: vehicule.review_average,
          count: vehicule.review_count,
        },
        url: vehicule.url,
        pictures: vehicule.pictures,
      }));
    });

    return {
      vehicules,
    };
  },
};
</script>
