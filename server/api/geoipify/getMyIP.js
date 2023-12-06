import axios from "axios";

export default defineEventHandler(async () => {
  const runTimeConfig = useRuntimeConfig();
  // const data = await $fetch(`https://api.ipify.org`);
  // const { data: myIP } = await axios.get(`https://api.ipify.org`);
  const { data: result } = await axios.get(`https://geo.ipify.org/api/v2/country,city?apiKey=${runTimeConfig.public.GEOIPIFY_KEY}`);
  return result;
});
