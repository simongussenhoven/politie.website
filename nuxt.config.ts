// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: false },
  modules: [
    '@nuxtjs/style-resources',
    '@nuxt/ui',
    '@pinia/nuxt',
    '@nuxtjs/tailwindcss',
    'shadcn-nuxt'
  ],
  experimental: {
    watcher: "chokidar"
  },
  shadcn: {
    /**
     * Prefix for all the imported component
     */
    prefix: '',
    /**
     * Directory that the component lives in.
     * @default "./components/ui"
     */
    componentDir: './components/ui'
  },
  css: [
    '@/assets/css/main.css',
  ],
})