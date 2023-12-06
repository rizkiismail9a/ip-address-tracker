import { defineStore } from "pinia";
import axios from "axios";
export const useLocationStore = defineStore("location", {
  state: () => {
    return {
      isLoading: true,
      ipData: {},
      userIP: "",
    };
  },
  actions: {
    async setIPData() {
      const runTimeConfig = useRuntimeConfig();
      this.isLoading = true;
      const result = await axios.get(`https://geo.ipify.org/api/v2/country,city?apiKey=${runTimeConfig.public.GEOIPIFY_KEY}`);
      this.ipData = result.data;
      this.isLoading = false;
    },
    async findIPLocation({ ipAddress }) {
      const runTimeConfig = useRuntimeConfig();
      this.isLoading = true;
      const result = await axios.get(`https://geo.ipify.org/api/v2/country,city?apiKey=${runTimeConfig.public.GEOIPIFY_KEY}&ipAddress=${ipAddress}`);
      this.ipData = result.data;
      this.isLoading = false;
    },
  },
  persist: true,
});
