
<script setup>
import Api from "./components/icons/Api.vue";
import Home from "./components/icons/Home.vue";
import Admin from "./components/icons/Admin.vue";
import AddExericesVue from "./components/icons/AddExerices.vue";
import ExercicesPageVue from "./components/icons/ExercicesPage.vue";
import about from "./components/icons/about.vue"
import { useTheme } from "vuetify";
import firstPage from "./components/icons/FirstPage.vue"
</script>
<script>
const routes = {


  "/": Home,
  "/ExercicesPageVue": ExercicesPageVue,
  "/Api": Api,
  "/Admin": Admin,
  "/AddExericesVue": AddExericesVue,
  "/about": about

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
        <first-page v-if="((this.currentPath !== '#/ExercicesPageVue') && (this.currentPath !=='#/Api')&&(this.currentPath !=='#/Admin')&&(this.currentPath !=='#/about')&&(this.currentPath !=='#/AddExericesVue'))" />
      </v-main>
      <!--
<v-footer>
  <v-btn href="#/Admin">Admin</v-btn>
</v-footer>
    -->
      <v-footer class="bg-black">
        <v-container fill-height fluid>
          <v-row justify="center" align-center>

            <v-col><v-btn href="#/" variant="plain" color="white">Home</v-btn></v-col>
            <v-col><v-btn href="#/ExercicesPageVue" variant="plain" color="white">Challange</v-btn></v-col>
            <v-col><v-btn href="#/Api" variant="plain" color="white">Play</v-btn></v-col>
            <v-col><v-btn href="#/Admin" variant="plain" color="white">Admin</v-btn></v-col>
            <v-col><v-btn href="#/about" variant="plain" color="white">About</v-btn></v-col>

          </v-row>

        </v-container>
      </v-footer>

    </v-app>

  </main>

</template>

<style scoped>

</style>
