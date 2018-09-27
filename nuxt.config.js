
const bodyParser = require('body-parser')
const session = require('express-session')
const path = require('path')
const resolve = path.resolve
const vuxLoader = require('vux-loader')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
// import index from './pages/index.vue'
// import order from './pages/order.vue'
// import NotFound from './pages/notfound.vue'

module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: '西亨名表维修中心-世界名表维修连锁品牌在线预约维修手表',
    meta: [
      { charset: 'utf-8' },
      /*
        <!-- 下面3个meta中任选一个，即可正确识别 -->
        <meta http-equiv="renderer" content="webkit" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta http-equiv="X-UA-Compatible" content="chrome=1" />
      */
      { name :'renderer', content: 'webkit'},
      { name :'force-rendering', content: 'webkit'},
      { 'http-equiv' :'X-UA-Compatible', content: 'IE=Edge,chrome=1'},
      // { 'http-equiv' :'renderer', content: 'webkit'},
      { name :'format-detection', content: 'telephone=no'},
      { name: 'viewport', content: 'width=device-width, initial-scale=1, maximum-scale=1.0, user-scalable=0' },
      { name: 'keywords', content: '名表维修,手表维修,手表维修中心,维修手表' },
      { name: 'description', content: '西亨名表维修中心官方授权维修点：百达翡丽、江诗丹顿、积家、欧米茄、劳力士、芝柏、宝珀等世界名表在线预约到店维修服务，预约电话:4009608888，现场维修，保证安全和品质。' },
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
    {src: '~plugins/video-player-plugin.js', ssr: false },
    {src: '~plugins/vue-scroller.js', ssr: false },
 ],
  axios: {
    // prefix: '/api/',
    proxy: true // Can be also an object with default options
  },
  proxy: {
    '/bgapi/': {
      // target: 'http://0.0.0.0',
      // target: 'http://localhost:6789',
      // target: 'http://192.168.1.216:1000',
      target: 'https://api.pgwxd.com/',
      pathRewrite: {
        '^/bgapi/': ''
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
      // console.log('extend')
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
    },
    plugins: [
      // new UglifyJsPlugin({
      //   uglifyOptions: {
      //     compress: {
      //       warnings: false,
      //       drop_debugger: true,
      //       drop_console: true
      //     }
      //   }
      // }),
    ]
  },
  // 路由
  router: {
    base: '/',
    // middleware: ['refresh'],
    scrollBehavior: function (to, from, savedPosition) {
      // return { x: 0, y: 0 }
    },
    extendRoutes (routes) {
      routes.push({
        name: 'custom',
        path: '*',
        component: resolve(__dirname, 'pages/notfound.vue')
      })
    },
    // routes: [
    //   {
    //     name: 'index',
    //     path: '/',
    //     // component: index
    //     component: '~pages/index.vue'
    //   },
    //   {
    //     name: 'order',
    //     path: '/order1',
    //     // component: order
    //     component: '~pages/order.vue'
    //   },
    //   // { path: '*', component: NotFound }
    //   { path: '*', component: '~pages/notfound.vue' }
    // ]
  },
  serverMiddleware: [
    // body-parser middleware
    bodyParser.json(),
    // session middleware
    session({
      secret: 'super-secret-key',
      resave: false,
      saveUninitialized: false,
      // cookie: {maxAge: 10 * 1000} //  10s
      cookie: {maxAge: 10 * 60 * 1000} //  10mins
    }),
    // Api middleware
    // We add /api/login & /api/logout routes
    '~/api'
  ],
  cache: true
}

