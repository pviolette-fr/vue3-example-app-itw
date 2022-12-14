import { createRouter, createWebHistory } from "vue-router";
import ListVehiculeView from "../views/ListVehiculeView.vue";
import VehiculeDetailsView from "../views/VehiculeDetailsView.vue";
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: ListVehiculeView,
    },
    {
      path: "/vehicules/:vehiculeId",
      name: "vehiculeDetails",
      component: VehiculeDetailsView,
      props: true,
    },
  ],
});

export default router;
