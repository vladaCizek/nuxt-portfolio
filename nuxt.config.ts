// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ["@nuxtjs/tailwindcss", "@nuxtjs/color-mode", "@nuxt/content"],
  // vue: {
  //   compilerOptions: {
  //     isCustomElement: (tag) => ["blog-posts"].includes(tag),
  //   },
  // },
  app: {
    head: {
      charset: "utf-8",
      viewport: "width=device-width, initial-scale=1",
      link: [
        {
          rel: "preconnect",
          href: "https://fonts.googleapis.com",
        },
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/css2?family=Roboto&display=swap",
          crossorigin: "",
        },
      ],
    },
    pageTransition: {
      name: "page",
      mode: "out-in",
    },
  },
  router: {
    options: {
      scrollBehaviorType: "smooth",
    },
  },
  colorMode: {
    classSuffix: "",
  },
  tailwindcss: {
    // Options
  },
  content: {
    // config for Content module (CMS),
    // code highlighting
    highlight: {
      theme: {
        default: "github-light",
        dark: "github-dark",
        sepia: "monokai",
      },
    },
  },
});
