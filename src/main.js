import { createApp } from "vue";

import App from "./App.vue";
import router from "./router";

import { VueFire } from "vuefire";
import { firebaseApp } from "./firebase/config"

const app = createApp(App);

app.use(VueFire, {
  // imported above but could also just be created here
  firebaseApp,
  modules: [],
});

app.use(router);

app.mount("#app");
