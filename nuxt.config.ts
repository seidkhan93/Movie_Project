// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  modules: [
    '@nuxtjs/tailwindcss'
  ],
  app: {
    head: {
      link: [
        { rel: 'stylesheet', href: 'https://cdn.jsdelivr.net/npm/flowbite@3.1.2/dist/flowbite.min.css' }
      ],
      script: [
        {src: 'https://cdn.jsdelivr.net/npm/flowbite@3.1.2/dist/flowbite.min.js'}
      ]
    }
  },
  runtimeConfig: {
    AccessToken: process.env.AccessToken
  }
})
