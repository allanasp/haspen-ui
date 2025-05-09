export default defineNuxtConfig({
  modules: ['../src/module'],
  haspen: {
    components: true,
    composables: true,
    prefix: 'Haspen'
  },
  devtools: { enabled: true },
})
