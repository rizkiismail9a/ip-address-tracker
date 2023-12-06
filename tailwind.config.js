/** @type {import('tailwindcss').Config} */
export default {
  content: ["./components/**/*.{js,vue,ts}", "./layouts/**/*.vue", "./pages/**/*.vue", "./plugins/**/*.{js,ts}", "./app.vue", "./error.vue"],
  theme: {
    extend: {
      colors: {
        "very-dark-gray": "#2b2b2b",
        "dark-gray": " 	#969696",
      },
    },
    fontFamily: {
      Rubik: ["Rubik, sans-serif"],
    },
  },
  plugins: [],
};
