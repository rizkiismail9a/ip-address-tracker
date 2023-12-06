<template>
  <div id="SearchResult" class="bg-white md:max-w-[900px] w-full md:h-[150px] px-[24px] py-[18px] rounded-xl flex md:flex-row flex-col md:gap-12 gap-3 items-center justify-around shadow-xl">
    <!-- IP -->
    <div class="relative">
      <div class="px-[18px] flex flex-col md:items-start items-center md:gap-2">
        <p class="text-dark-gray text-[12px] font-bold">IP ADDRESS</p>
        <h2 class="font-medium text-[1rem] text-very-dark-gray">{{ ipData?.ip }}</h2>
      </div>
    </div>
    <!-- Location -->
    <div class="relative">
      <div class="md:after:content-[''] md:after:bg-dark-gray md:after:absolute md:after:bottom-0 md:after:left-0 md:after:top-[12px] md:after:h-[50px] md:after:w-[0.8px] px-[18px] flex flex-col md:items-start items-center md:gap-2">
        <p class="text-dark-gray text-[12px] font-bold">LOCATION</p>
        <h2 class="font-medium text-[1rem] text-very-dark-gray md:text-start">{{ ipData?.location?.country }}, {{ ipData?.location?.region }}</h2>
      </div>
    </div>
    <!-- Timezone -->
    <div class="relative">
      <div class="md:after:content-[''] md:after:bg-dark-gray md:after:absolute md:after:bottom-0 md:after:left-0 md:after:top-[12px] md:after:h-[50px] md:after:w-[0.8px] px-[18px] flex flex-col md:items-start items-center md:gap-2">
        <p class="text-dark-gray text-[12px] font-bold">TIMEZONE</p>
        <h2 class="font-medium text-[1rem] text-very-dark-gray">UTC {{ ipData?.location.timezone }}</h2>
      </div>
    </div>
    <!-- ISP -->
    <div class="relative">
      <div class="md:after:content-[''] md:after:bg-dark-gray md:after:absolute md:after:bottom-0 md:after:left-0 md:after:top-[12px] md:after:h-[50px] md:after:w-[0.8px] px-[18px] flex flex-col md:items-start items-center md:gap-2">
        <p class="text-dark-gray text-[12px] font-bold">ISP</p>
        <h2 class="font-medium text-[1rem] text-very-dark-gray">{{ ipData?.isp }}</h2>
      </div>
    </div>
  </div>
</template>

<script setup>
// const props = defineProps(["ip", "location", "isp"]);
const locationStore = useLocationStore();
const ipData = computed(() => {
  return locationStore.ipData;
});
</script>
