import i18n from './plugins/i18n'

module.exports = {
  mode: 'universal',
  router: {
    base: '/web/'
  },
  /*
  ** Headers of the page
  */
  head: {
    title: 'txomins',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'author', name: 'author', content: 'Txomin Sirera Ibarluzea' },
      { hid: 'description', name: 'description', content: 'Página personal de Txomin Sirera Ibarluzea, aprende a programar, mira las pruebas de concepto que tengo y si necesitas una web con WORDPRESS te la hago enseguida.' },
      { hid: 'keywords', name: 'keywords', content: 'Programar, Coruña, Aprender, Página web' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Roboto:300,400,500,700|Material+Icons' }
    ]
  },
  plugins: ['~/plugins/i18n', { src: '~/plugins/vueTyper', ssr: false }],
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#3B8070' },
  /*
  ** Build configuration
  */
  build: {
    extractCSS: true,
    extend (config, ctx) {
      // Run ESLint on save
      if (ctx.isDev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/,
          options: {
            fix: true
          }
        })
      }
    }
  },
  buildModules: ['@nuxtjs/vuetify'],
  vuetify: {
    icons: {
      iconfont: 'mdi'
    },
    theme: {
      dark: false,
      options: {
        customProperties: true
      }
    },
    lang: {
      t: (key, ...params) => {
        return i18n.t(key, params)
      }
    }
  }
}
