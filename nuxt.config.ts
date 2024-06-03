// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: false },
  app: {
    baseURL: '/astraos/', // baseURL: '/<repository>/'
    buildAssetsDir: 'assets', // don't use "_" at the begining of the folder name to avoids nojkill conflict
  },
  css: ['~/assets/shepherd.css'],
  modules: [
    '@nuxtjs/tailwindcss',
    'nuxt-icon',
  ],
  
})
