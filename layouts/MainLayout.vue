<template>
  <div id="MainLayout" class="fixed w-full h-screen">
    <div class="headerImage">
      <img :src="imgSrc" class="object-cover w-full" alt="" />
    </div>

    <slot></slot>
    <div class="flex items-center justify-center w-full relative -z-10 bg-gray-400" :class="{ 'h-full': locationStore.isLoading }">
      <MapView v-if="!locationStore.isLoading"></MapView>
      <div v-else class="w-full relative text-white text-center">Loading...</div>
    </div>
  </div>
</template>

<script setup>
import MapView from "~/components/MapView.vue";
const imgSrc = ref("");
let windowWidth = ref(process.client ? window.innerWidth : "");
import { useLocationStore } from "../stores/location";
const locationStore = useLocationStore();
onBeforeMount(() => {
  window.addEventListener("resize", () => {
    windowWidth.value = window.innerWidth;
  });
});
watch(
  () => windowWidth.value,
  () => {
    if (windowWidth.value < 768) {
      imgSrc.value = "/images/pattern-bg-mobile.png";
    } else {
      imgSrc.value = "/images/pattern-bg-desktop.png";
    }
  },
  {
    immediate: true,
  }
);
</script>
