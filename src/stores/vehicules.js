import { ref } from "vue";
import { defineStore } from "pinia";
import { fetchVehicules } from "../services/api";

export const useVehiculesStore = defineStore("vehicules", () => {
  const vehicules = ref([]);
  const vehiculesLoadingError = ref(null);
  const vehiculesLoadingState = ref("empty");

  async function loadVehicules() {
    if (vehiculesLoadingState.value === "loading") {
      return false;
    }
    vehiculesLoadingState.value = "loading";
    try {
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
      vehiculesLoadingState.value = "loaded";
    } catch (e) {
      vehiculesLoadingState.value = "error";
      vehiculesLoadingError.value = e;
    }
  }

  return {
    vehicules,
    vehiculesLoadingState,
    vehiculesLoadingError,
    loadVehicules,
  };
});
