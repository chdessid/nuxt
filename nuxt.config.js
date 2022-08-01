const TerserPlugin = require("terser-webpack-plugin");
require("dotenv").config();

export default {
  router: {
    middleware: 'guest'
  },
  optimization: {
    minimize: true,
    minimizer: [new TerserPlugin()],
  },
  server: {
    port: 3000, // default: 3000
    host: '0.0.0.0', // default: localhost,
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
      { name: 'google-site-verification', content: 'oiDVHENqVelPBJTn7V9aEcppe062RyHJQr3xMm1mNEc' },
      { name: 'yandex-verification', content: '88e62c0a4b7484c6' },
      { name: 'msvalidate.01', content: 'C31629AA725395432C8BD0789337718E' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { name: 'apple-mobile-web-app-capable', content: 'yes' },
      { name: 'apple-mobile-web-app-status-bar-style', content: 'black' },
      { name: 'msapplication-config', content: 'browserconfig.xml' },
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:site', content: '@jarnews' },
      { name: 'twitter:title', content: 'Jaridaa Articles News: Breaking News | Latest News Today' },
      { name: 'twitter:title', content: '	Stay informed and read the latest news today from Jaridaa News, the definitive source for independent journalism from every corner of the globe.' },
      { name: 'twitter:image', content: 'https://jaridaa.com/og/img.png' },
      { name: 'twitter:url', content: 'https://jaridaa.com' },
      { name: 'fb:app_id', content: '870613919693099' },
      { name: 'fb:pages', content: '249655421622' },
      { name:"theme-color" , content:"#dedede" },
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
        content: 'breaking news,U.S. news,news,news online,world news,weather,business,sports,politics,law, technology,entertainment,education,travel,health',
      },
      { hid: 'og:image', property: 'og:image', content: 'https://jaridaa.com/og/img.png' },
      { hid: 'og:image:width', property: 'og:image:width', content: '700' },
      { hid: 'og:image:height', property: 'og:image:height', content: '449.9999999999987' },

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
    'nuxt-compress',
    '@nuxtjs/google-analytics'
  ],
  googleAnalytics: {
    id: process.env.GOOGLE_ANALYTICS_ID, // Use as fallback if no runtime config is provided
  },
  publicRuntimeConfig: {
    googleAnalytics: {
      id: process.env.GOOGLE_ANALYTICS_ID
    }
  },
  modules: [
    '@nuxtjs/dotenv',
    '@nuxtjs/axios',
    '@nuxtjs/pwa',
    '@nuxtjs/auth',
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
  axios: {
    baseURL: process.env.BASE_URL
  },

/*
 ** Auth module configuration
 ** See https://auth.nuxtjs.org/schemes/local.html#options
 */
 auth: {
  strategies: {
    local: {
      endpoints: {
        login: {
          url: '/api/connect/',
          method: 'post',
          propertyName: 'jwt'
        },
        user: {
          url: '/api/users/me',
          method: 'get',
          propertyName: false
        },
        logout: false
      }
    }
  }
},
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
    theme_color:'#dedede',
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
  }
}
