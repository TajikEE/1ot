import { createApp } from "vue";
import { createPinia } from "pinia";

import App from "./App.vue";
import router from "./router";
import { primevueConfig } from "./primevue";

const app = createApp(App);

primevueConfig(app);

app.use(createPinia());
app.use(router);

app.mount("#app");
