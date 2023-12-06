// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: false },
  pages: true,
  modules: ["@nuxtjs/tailwindcss", "nuxt-icon", "nuxt3-leaflet", "@pinia/nuxt", "@pinia-plugin-persistedstate/nuxt"],
  build: {
    transpile: ["pinia-plugin-persistedstate"],
  },
  runtimeConfig: {
    public: {
      GEOIPIFY_KEY: process.env.GEO_API_KEY,
    },
  },
  // plugins: ["~/plugins/leaflet.client.js"],
  css: ["~/assets/css/main.css"],
  postcss: {
    plugins: {
      tailwindcss: {
        exposeConfig: true,
        viewer: true,
      },
      autoprefixer: {},
    },
  },
  app: {
    head: {
      link: [
        {
          rel: "preconnect",
          href: "https://fonts.googleapis.com",
        },
        {
          rel: "preconnect",
          href: "https://fonts.gstatic.com",
          crossorigin: "anonymous",
        },
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/css2?family=Rubik:wght@400;500;700&display=swap",
        },
        { rel: "icon", type: "image/x-icon", href: "images/favicon.ico" },
        { rel: "apple-touch-icon", sizes: "180x180", href: "images/apple-touch-icon.png" },
        { rel: "icon", sizes: "32x32", href: "images/favicon-32x32.png" },
        { rel: "icon", sizes: "16x16", href: "images/favicon-16x16.png" },
        { rel: "manifest", href: "/site.webmanifest" },
        // {
        //   rel: "stylesheet",
        //   href: "https://unpkg.com/leaflet@1.9.4/dist/leaflet.css",
        // },
      ],
      // script: [
      //   {
      //     src: "https://unpkg.com/leaflet@1.9.4/dist/leaflet.js",
      //     integrity: "sha256-20nQCchB9co0qIjJZRGuk2/Z9VM+kNiyxNV1lvTlZBo=",
      //     defer: true,
      //   },
      // ],
    },
  },
});
