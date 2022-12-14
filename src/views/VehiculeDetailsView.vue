<template>
  <div class="container flex flex-row mt-5 m-auto gap-20">
    <div class="flex-1">
      <PvImageSlider v-if="vehicule" :images="vehicule.pictures" class="h-96" />
      <div v-if="vehicule">
        <section class="flex flex-row gap-10 mt-10">
          <img :src="vehicule.owner.pictureUrl" class="h-40" />
          <div class="flex flex-col">
            <h1 class="text-2xl">{{ vehicule.title }}</h1>
            <p class="text-lg flex-1">{{ vehicule.location.city }}</p>
            <StarRating
              :rating="vehicule.review.average"
              read-only
              :increment="0.1"
              :star-size="25"
            />
          </div>
        </section>
        <section class="flex flex-row mt-10 gap-5">
          <PvVehiculeDetailsProperty
            :label="`${vehicule.seatsCount} places avec ceinture`"
            icon="fa-solid fa-chair"
          />
          <PvVehiculeDetailsProperty
            :label="`${vehicule.bedsCount} places couchages`"
            icon="fa-solid fa-bed"
          />
          <PvVehiculeDetailsProperty
            label="<3500kg Permis B"
            icon="fa-solid fa-weight-scale"
          />
          <PvVehiculeDetailsProperty
            label="Voyage à l'étranger autorisé"
            icon="fa-solid fa-globe"
          />
          <PvVehiculeDetailsProperty
            label="Animaux autorisés"
            icon="fa-solid fa-dog"
          />
        </section>
      </div>
    </div>
    <div class="w-80">
      <div class="border-slate-900 border-2 rounded-md p-2">
        <p class="text-lg text-center">A partir de {{ formattedPrice }}/j</p>
      </div>
      <div class="border-slate-900 border-2 rounded-md p-2 mt-10">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque
          eu arcu in neque venenatis accumsan eu non nulla. Vestibulum sit amet
          vulputate odio, id tempus ex. Nulla ac quam orci. Nullam eget
          fringilla elit. Fusce a laoreet turpis, quis pharetra mauris. Vivamus
          efficitur, lacus a congue consequat, felis metus porttitor ipsum, vel
          aliquet eros sem quis sem. In pellentesque consectetur est porta
          facilisis. Nam sit amet bibendum leo, lobortis dapibus elit. Integer
          ante ligula, vestibulum vel justo id, rutrum fringilla nunc.
          Pellentesque tristique vestibulum dolor, ut condimentum nisl
          scelerisque nec. Sed molestie elit quis lacus semper, in mattis tellus
          eleifend. Maecenas porta nisi dolor, at vehicula turpis molestie sed.
          Fusce varius, odio et rutrum sollicitudin, magna purus semper risus,
          non interdum lacus velit id dui. Interdum et malesuada fames ac ante
          ipsum primis in faucibus. Fusce ut leo at odio vulputate euismod at
          sed urna.
        </p>
      </div>
    </div>
  </div>
</template>
<script>
import { onMounted, ref, computed } from "vue";
import { useVehiculesStore } from "../stores/vehicules";
import StarRating from "vue-star-rating";
import { formatPrice } from "../helpers/format";
import PvVehiculeDetailsProperty from "../components/PvVehiculeDetailsProperty.vue";
import PvImageSlider from "../components/PvImageSlider.vue";
export default {
  components: {
    StarRating,
    PvVehiculeDetailsProperty,
    PvImageSlider,
  },
  props: {
    vehiculeId: {
      type: String,
      required: true,
    },
  },
  setup(props) {
    /** @type {import("vue").Ref<null | import("../stores/vehicules").Vehicule>} */
    const vehicule = ref(null);

    const store = useVehiculesStore();

    onMounted(async () => {
      vehicule.value = await store.getVehicule(parseInt(props.vehiculeId));
    });

    const formattedPrice = computed(() => {
      if (!vehicule.value || !vehicule.value.price) {
        return undefined;
      }

      // TODO use i18n lang
      return formatPrice(
        vehicule.value.price.amount,
        vehicule.value.price.currency,
        "fr-FR"
      );
    });

    return {
      vehicule,
      formattedPrice,
    };
  },
};
</script>
