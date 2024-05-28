// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  css: ['~/assets/shepherd.css'],
  modules: [
    '@nuxtjs/tailwindcss',
    'nuxt-icon'
  ]
})
