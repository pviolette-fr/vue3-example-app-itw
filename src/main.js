import { createApp } from "vue";
import { createPinia } from "pinia";

import App from "./App.vue";
import router from "./router";

import "./assets/main.css";
import { setUpVueFontAwesome } from "./fontawesome";

const app = createApp(App);

setUpVueFontAwesome(app);
app.use(createPinia());
app.use(router);

app.mount("#app");
