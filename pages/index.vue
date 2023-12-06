<template>
  <MainLayout>
    <div class="absolute flex items-start justify-center top-0 w-full z-10 h-fit md:p-0 p-5">
      <div id="PageHeader" class="my-[30px] text-xl max-w-[1200px] w-full text-center flex flex-col gap-9 items-center">
        <!-- page title -->
        <h1 id="Title" class="text-white font-medium m-0">IP Address Tracker</h1>
        <!-- form IP input -->
        <form @submit.prevent="searchIpLocation" id="InputForm" class="bg-white border-0 rounded-xl flex items-center md:w-[60%] w-[100%] h-[54px]">
          <input type="text" class="w-full focus:outline-none text-[18px] placeholder:text-dark-gray ml-3 my-3 px-3" placeholder="Search for any IP address or domain" v-model="ipAddress" pattern="^([0-9]{1,3}\.){3}[0-9]{1,3}$" />
          <button type="submit" class="bg-black h-[100%] overflow-hidden flex items-center justify-center w-[4rem] rounded-r-xl cursor-pointer">
            <icon name="iconamoon:arrow-right-2" size="24" class="text-white font-extrabold h-100"></icon>
          </button>
        </form>
        <!-- search result -->
        <SearchResult></SearchResult>
      </div>
    </div>
  </MainLayout>
</template>

<script setup>
import MainLayout from "../layouts/MainLayout.vue";
import SearchResult from "~/components/SearchResult.vue";
import { useLocationStore } from "../stores/location.js";
const locationStore = useLocationStore();
const ipAddress = ref("");
const router = useRouter();
useSeoMeta({
  title: "IP Address Tracker",
  ogTitle: "IP Address Tracker",
  description: "Easy and Free. Find any IP Address' exact location.",
  ogDescription: "Easy and Free. Find any IP Address' exact location.",
});
// search the ip address location
async function searchIpLocation() {
  try {
    await locationStore.findIPLocation({ ipAddress: ipAddress.value });
    router.replace({
      path: "/",
      query: {
        keyword: ipAddress.value,
      },
    });
  } catch (error) {
    console.log("error", error);
  }
}
</script>
