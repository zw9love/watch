

const path = require('path')
const vuxLoader = require('vux-loader')

module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: '北京名表维修中心',
    meta: [
      { charset: 'utf-8' },
      // <meta name=”renderer” content=”webkit”>
      { name :'renderer', content: 'webkit'},
      { name: 'viewport', content: 'width=device-width, initial-scale=1, maximum-scale=1.0, user-scalable=0' },
      { hid: 'description', name: 'description', content: '手表手表劳力士修理' },
      { name: 'keywords', content: '手表手表劳力士修理'}
      // <meta name="viewport" content="width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no">
    ],
    link: [
      // { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
      { rel: 'icon', type: 'image/x-icon', href: '/logo.png' }
    ],
    script: [
      {src: 'http://api.map.baidu.com/api?v=2.0&ak=L2fFIBoizTO5nxe7ypgsV3pHGmYw6tqx'},
    ],
  },
  // 数据交互
  modules: ['@nuxtjs/axios'],
  plugins: [
    '~/plugins/axios',
    {src:'~plugins/element-ui', ssr: true},
    {src: '~/plugins/mint-ui', ssr: true },
    {src: '~/plugins/vux-plugins', ssr: false},
    {src: '~/plugins/vux-components', ssr: true},
    // {src: '~/plugins/v-distpicker', ssr: false},
    {src: '~/plugins/vue-picture-preview', ssr: false},
    {src: '~plugins/video-player-plugin.js', ssr: false }
  ],
  axios: {
    prefix: '/api/',
    proxy: true // Can be also an object with default options
  },
  proxy: {
    '/api/': {
      target: 'http://0.0.0.0',
      pathRewrite: {
        '^/api/': ''
      },
      secure: false
    }
  },
  // 样式
  css: [
    {src: 'video.js/dist/video-js.css'},
    {src: '~assets/css/main.css'},
    {src: '~assets/css/common.css'},
    {src: 'element-ui/lib/theme-chalk/index.css'},
  ],
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#C8936B' },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** Run ESLint on save
    */
    extend (config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }

      const configs = vuxLoader.merge(config, {
        options: {
          ssr: true
        },
        plugins: ['vux-ui', 'progress-bar', 'duplicate-style', {
          name: 'less-theme',
          path: path.join(__dirname, './styles/theme.less')
        }]
      })
      return configs
    }
  },
  // 路由
  router: {
    middleware: ['auth']
  }
}

