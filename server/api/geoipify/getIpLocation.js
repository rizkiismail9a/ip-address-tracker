// import { useFetch } from "nuxt/app";
import axios from "axios";

export default defineEventHandler(async (event) => {
  const body = await readBody(event);
  const runTimeConfig = useRuntimeConfig();
  const { data: result } = await axios.get(`https://geo.ipify.org/api/v2/country,city?apiKey=${runTimeConfig.public.GEOIPIFY_KEY}&ipAddress=${body.ipAddress}`);
  return result;
});
