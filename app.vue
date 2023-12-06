<template>
  <div id="AppContainer" class="w-100 h-screen font-Rubik">
    <NuxtPage />
  </div>
</template>
<script setup>
import { useLocationStore } from "./stores/location.js";
const locationStore = useLocationStore();
const route = useRoute();
onBeforeMount(async () => {
  if (!route.query.keyword) {
    await locationStore.setIPData();
    locationStore.isLoading = false;
  }
});
</script>
