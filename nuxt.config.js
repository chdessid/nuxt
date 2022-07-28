export default {
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

      {rel:"preconnect" ,href:"https://fonts.googleapis.com"},
      {rel:"preconnect" ,href:"https://fonts.gstatic.com"},
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Barlow+Condensed:ital,wght@0,300;0,400;0,500;0,700;1,200;1,300;1,400;1,700&family=Bitter:wght@400;700&display=swap",
      },

    ],
    script: [
      //{ hid: 'bootstrap', src: '/js/vendor/bootstrap.bundle.js', type: 'text/javascript'},
      //{ hid: 'hc-sticky', src: '/js/vendor/hc-sticky.js', type: 'text/javascript' },
      //{ hid: 'flickity', src: '/js/vendor/flickity.pkgd.min.js', type: 'text/javascript' },
      //{ hid: 'vanilla-lazyload', src: '@/assets/js/vendor/lazyload.min.js', defer: true },
      //{ hid: 'smoothscroll', src: '@/assets/js/vendor/SmoothScroll.js', defer: true },
      { hid: 'bundle', src: '/js/vendor/bundle.min.js', type: 'text/javascript' },
      // { hid: 'theme', src: '/js/theme.js', type: 'text/javascript' },

      // MINIFY JS
      //{ hid: 'hcsticky', src: 'dist/js/bundle.min.js', defer: true },

    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '@/assets/css/theme.css',
    // '@/assets/vendors/owl.carousel/dist/assets/owl.theme.default.min.css',
    // '@/assets/vendors/owl.carousel/dist/assets/owl.carousel.min.css',
    // '@/assets/vendors/aos/dist/aos.css/aos.css',
    // '@/assets/vendors/mdi/css/materialdesignicons.min.css',
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/bootstrap
    'bootstrap-vue/nuxt',
    '@nuxtjs/dotenv',
    '@nuxtjs/pwa'
  ],


 // PWA 
 pwa: {
  icon: [
    {
      src: "@/assets/icons/icon-144.png",
      type: "image/png",
      sizes: "144x144",
      purpose: 'maskable'
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
 // specify module rules for css and scss
 module: {
  rules: [
    {
      test: /\.s[ac]ss$/i,
      use: ['style-loader', 'css-loader', 'sass-loader'],
    },
  ],
},

// use these settings to use custom css
bootstrapVue: {
  bootstrapCSS: false,
  icons: true,
},
  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
