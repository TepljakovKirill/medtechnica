// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  devtools: { enabled: false },
  css: [
    "swiper/css",
    "swiper/css/navigation",
    "swiper/css/pagination",
    "~/assets/css/main.css",
  ],
});
