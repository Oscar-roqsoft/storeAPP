
// https://nuxt.com/docs/api/configuration/nuxt-config

import { resolve }  from "path"

export default defineNuxtConfig ({
  devtools: { enabled: true },

  experimental: {
    payloadExtraction: false
  },
  nitro: {
  
      prerender: { crawlLinks: true, ignore: ['/dynamic'] },

    preset: 'node-server'
  },
 
  ssr: true,
  alias:{
    "@": resolve(__dirname,"/")
    // assets: "/<rootDir>/assets"
   }, 
  css: ['~/assets/main.css'],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },

  app: {
    head: {
      script: [{
        src:'https://kit.fontawesome.com/0289b0344f.js',
        async: true,
        crossorigin:'anonymous'
      }],

      link:[{
        rel:"stylesheet",
        href:"https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css"
      }]

    },

    pageTransition:{
      name: 'page', 
      mode: 'out-in'
    },
  }

})
