<template>
  <div id="MainLayout" class="fixed w-full h-screen">
    <div class="headerImage">
      <img src="/images/pattern-bg-desktop.png" alt="" class="object-cover w-full isPC md:block hidden" />
      <img src="/images/pattern-bg-mobile.png" alt="" class="object-cover w-full md:hidden block" />
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
import { useLocationStore } from "../stores/location";
const locationStore = useLocationStore();
</script>
