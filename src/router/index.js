import { createRouter, createWebHistory } from "vue-router";
import ListVehiculeView from "../views/ListVehiculeView.vue";
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: ListVehiculeView,
    },
  ],
});

export default router;
