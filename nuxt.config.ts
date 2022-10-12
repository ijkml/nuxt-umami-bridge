import { defineNuxtConfig } from '@nuxt/bridge'

export default defineNuxtConfig({
  ssr: false,
  target: 'static',
  modules: [
    ['nuxt-umami'],
  ],
  umami: {
    websiteId: '3c255b6d-678a-42dd-8074-272ee5b78484',
    scriptUrl: 'http://localhost:3001/umami.js',
  }
})
