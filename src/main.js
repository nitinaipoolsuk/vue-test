import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import "./assets/site.css";
import 'bootstrap/dist/css/bootstrap.css'
import bootstrap from 'bootstrap/dist/js/bootstrap.bundle.js'
import VueEasyLightbox from 'vue-easy-lightbox/dist/external-css/vue-easy-lightbox.esm.min.js'
import 'vue-easy-lightbox/external-css/vue-easy-lightbox.css'

const app = createApp(App);

app.use(router);
app.use(bootstrap);
app.use(VueEasyLightbox);

app.mount("#app");
