
<script setup>
import Api from "./components/icons/Api.vue";
import Home from "./components/icons/Home.vue";
import Admin from "./components/icons/Admin.vue";
import AddExericesVue from "./components/icons/AddExerices.vue";
import ExercicesPageVue from "./components/icons/ExercicesPage.vue";
import { useTheme } from "vuetify";
</script>
<script>
const routes = {


  "/": Home,
  "/ExercicesPageVue":ExercicesPageVue,
  "/Api":Api,
  "/Admin":Admin,
  "/AddExericesVue":AddExericesVue

};
export default {
  setup() {
    const theme = useTheme();

  },
  data() {
    return {
      currentPath: window.location.hash,
    };
  },
  computed: {
    currentView() {
      return routes[this.currentPath.slice(1) || "/"];
    },
  },
  mounted() {
    window.addEventListener("hashchange", () => {
      this.currentPath = window.location.hash;
    });
  },
  methods: {
    
  },
};
</script>
<template>

  <main>
    <v-app>
      <v-app-bar title="Code Remote">
        <v-btn href="#/">Home</v-btn>
        <v-btn href="#/ExercicesPageVue">Challange</v-btn>
        <v-btn href="#/Api">Play</v-btn>
      </v-app-bar>
      <v-main>
        <component :is="currentView" />
      </v-main>
<v-footer>
  <v-btn href="#/Admin">Admin</v-btn>
</v-footer>
    
    </v-app>
  </main>
</template>

<style scoped>

</style>
