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
      this.isLoading = true;
      const result = await axios.get(`/api/geoipify/getMyIP`);
      this.ipData = result.data;
      this.isLoading = false;
    },
    async findIPLocation({ ipAddress }) {
      this.isLoading = true;
      const result = await axios.post(`/api/geoipify/getIpLocation`, {
        ipAddress,
      });
      this.ipData = result.data;
      this.isLoading = false;
    },
  },
  persist: true,
});
