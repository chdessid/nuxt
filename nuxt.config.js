const TerserPlugin = require("terser-webpack-plugin");

export default {
  optimization: {
    minimize: true,
    minimizer: [new TerserPlugin()],
  },
  server: {
    port: 3000, // default: 3000
    //host: '0.0.0.0', // default: localhost,
  },
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Latest News from World, Hollywood, India, Russia | Jaridaa.com',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'robots', content: 'index,follow' },
      { name:"theme-color" , content:"#ffffff" },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { name: 'format-detection', content: 'telephone=no' },
      {
        hid: 'description',
        name: 'description',
        content:
          'Jaridaa.com provides latest news from Hyderabad, Telangana, India, Gulf and around the World. Get breaking news alerts from South India',
      },
      {
        hid: 'keywords',
        name: 'keywords',
        content: 'news, articles, jaridaa, tutorials, development, software',
      },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'apple-touch-icon', type: 'image/x-icon', href: '/favicon.ico' },

    ],
    script: [
      { hid: 'bundle', src: '/js/vendor/bundle.min.js', type: 'text/javascript',defer: true },
    ]
  },

  css: [
    '@/assets/css/theme.css',
  ],
  plugins: [
  ],
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    '@nuxtjs/pwa',
    '@nuxt/image',
    'nuxt-compress'
  ],
  modules: [
    '@nuxtjs/dotenv',
    '@nuxtjs/pwa',
    '@nuxt/image',
    ['@nuxtjs/html-minifier', { log: 'once', logHtml: true }],
    [
      'nuxt-compress',
      {
        gzip: {
          threshold: 8192,
        },
        brotli: {
          threshold: 8192,
        },
      },
    ],
  ],

  image: {
    dir: 'assets/img'
  }
  ,
 // PWA 
 pwa: {
  icon: [
    {
      src: "@/assets/icons/icon-144.png",
      type: "image/png",
      sizes: "144x144",
      purpose: 'any'
    },
  ],
  start_url: "/",
  scope: ".",
  meta: {
    charset: 'utf-8',
    title: 'Jaridaa News',
    author: 'ESD SOL LDA ',
    lang: 'en',
    theme_color:'#ffffff',

    description : 'Jaridaa.com provides latest news from Hyderabad, Telangana, India, Gulf and around the World. Get breaking news alerts from South India',
  },
  manifest: {
    name: 'Jaridaa.com News and Articles',
    short_name: 'Jaridaa.com',
    description : 'Jaridaa.com provides latest news from Hyderabad, Telangana, India, Gulf and around the World. Get breaking news alerts from South India',
    lang: 'en',
    useWebmanifestExtension: false
  }
},
  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    extend(config, { isClient }) {
      // Extend only webpack config for client-bundle
      if (isClient) {
        config.devtool = 'source-map'
      }
    },
    extend (config, ctx) {
      config.resolve.symlinks = false
    },
    babel: {
      compact: true,
     },
  
  }
}
