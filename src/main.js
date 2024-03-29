import { createApp } from "vue";
import { VueFire, VueFireAuth } from 'vuefire'
import { firebaseApp } from '@/firebase/config.js'
import App from "./App.vue";
import router from "./router";

const app = createApp(App);

app.use(VueFire, {
    firebaseApp,
    modules: [
      VueFireAuth(),
    ],
  })

app.use(router);

app.mount("#app");
