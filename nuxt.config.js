export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'signal',
    htmlAttrs: {
      lang: 'zh-TW',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Signal, a kayboard store' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },
  // loading: loading bar on top
  loading: { color: 'palevioletred', height: '1.5px', duration: 5000 },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '~/assets/scss/main.scss'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    // { src: '~/plugins/flickity.js', mode: 'client' }
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build',
    '@nuxtjs/composition-api',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    'bootstrap-vue/nuxt',
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {},

  // BootstrapVue module configuration: https://bootstrap-vue.org/docs
  BootstrapVue: {
    icons: true
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
}
