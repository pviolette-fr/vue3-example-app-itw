import { createApp } from "vue";
import { createPinia } from "pinia";

import App from "./App.vue";
import router from "./router";
import { setUpVueFontAwesome } from "./fontawesome";
import { setupI18n } from "./i18n";

import "./assets/main.css";

const app = createApp(App);

setupI18n(app);
setUpVueFontAwesome(app);
app.use(createPinia());
app.use(router);

app.mount("#app");
