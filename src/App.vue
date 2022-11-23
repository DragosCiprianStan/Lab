
<script setup>
import Api from "./components/icons/Api.vue";
import Home from "./components/icons/Home.vue";

import { useTheme } from "vuetify";
</script>
<script>
const routes = {
  "/": Home,
  "/Api": Api,
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
      return routes[this.currentPath.slice(1) || "/"] || NotFound;
    },
  },
  mounted() {
    window.addEventListener("hashchange", () => {
      this.currentPath = window.location.hash;
    });
  },
  methods: {},
};
</script>
<template>

  <main>
    <v-app>
      <v-app-bar title="My Deck">
        <v-btn href="#/" icon="mdi-home"></v-btn>
        <v-btn href="#/Api" icon="mdi-cards"></v-btn>
      </v-app-bar>
      <v-main>
        <component :is="currentView" />
      </v-main>
    </v-app>
  </main>
</template>

<style scoped>

</style>
