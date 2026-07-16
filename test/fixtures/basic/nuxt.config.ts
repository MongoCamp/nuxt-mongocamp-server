import MyModule from '../../../src/module'

export default defineNuxtConfig({
  modules: [
    MyModule,
  ],

  mongocamp: {
    url: 'http://localhost:8080',
    refreshToken: false,
    tokenRefreshInterval: 10000,
  },
})
