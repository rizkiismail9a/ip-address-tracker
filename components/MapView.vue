<template>
  <div class="md:h-[500px] h-[800px] w-full">
    <LMap ref="map" :zoom="zoom" :center="[latitude, longitude]">
      <LTileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" attribution='&amp;copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors' layer-type="base" name="OpenStreetMap" />
      <LMarker :lat-lng="[latitude, longitude]">
        <LIcon :icon-size="[32, 37]" :icon-anchor="[16, 37]" icon-url="/images/icon-location.svg"> </LIcon>
      </LMarker>
    </LMap>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useLocationStore } from "~/stores/location";
const locationStore = useLocationStore();
const zoom = ref(3);
const latitude = computed(() => {
  return locationStore.ipData.location.lat;
});
const longitude = computed(() => {
  return locationStore.ipData.location.lng;
});
</script>
