<template>
  <div class="container m-auto">
    {{ vehicule }}
  </div>
</template>
<script>
import { onMounted, ref } from "vue";
import { useVehiculesStore } from "../stores/vehicules";
export default {
  props: {
    vehiculeId: {
      type: String,
      required: true,
    },
  },
  setup(props) {
    const vehicule = ref(null);

    const store = useVehiculesStore();

    onMounted(async () => {
      vehicule.value = await store.getVehicule(parseInt(props.vehiculeId));
    });

    return { vehicule };
  },
};
</script>
