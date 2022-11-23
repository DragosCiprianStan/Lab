import { createApp } from 'vue'
import App from './App.vue'

import './assets/main.css'
import{registerPlugins}from "@/plugins";
import "vuetify/styles";
import { createVuetify } from "vuetify";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";
const app=createApp(App);
registerPlugins(app);




const vuetify = createVuetify({
  components,
  directives,
});

createApp(App).use(vuetify).mount("#app");
