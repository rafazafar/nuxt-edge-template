// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  css: ["~/assets/css/main.css"],

  modules: [
    "@nuxt/scripts",
    "@nuxt/ui",
    "@nuxthub/core",
    "@nuxtjs/seo",
    "nuxt-nodemailer",
    "@nuxtjs/i18n",
    // "nuxt-security",
  ],
  devtools: { enabled: true },
  compatibilityDate: "2026-03-18",

  nitro: {
    preset: "cloudflare_module",
  },

  site: {
    name: 'Nuxt Edge Template',
  },

  // SMTP EMAIL
  nodemailer: {
    from: '"Nuxt Edge Template" <no-reply@example.com>',
    host: "smtp.example.com",
    port: 587,
    secure: false,
    auth: {
      user: "smtp-user",
      pass: "",
    },
  },

  i18n: {
    defaultLocale: "ja",
    baseUrl: "https://nuxt-edge-template.zafar.dev",
    strategy: "prefix_except_default",
    locales: [
      { code: "ja", name: "日本語", language: "ja-JP", file: "ja.json" },
      { code: "en", name: "English", language: "en-US", file: "en.json" },
    ],
  },

  hub: {
    db: "sqlite",
    kv: true,
    blob: true,
    cache: true
  },

  // Cache only known page routes with a long SWR TTL.
  // The previous global `*`: { swr: true, prerender: true } wrote every
  // scanner 404 (e.g. /.env) into the NuxtHub CACHE KV namespace and
  // pushed Free-plan KV writes over the 50% daily alert (500/1,000).
  routeRules: {
    "/": { swr: 3600, prerender: true },
    "/en": { swr: 3600, prerender: true },
    "/docs/agents": { swr: 3600, prerender: true },
    "/docs/ai-sdk": { swr: 3600, prerender: true },
    "/docs/blob": { swr: 3600, prerender: true },
    "/docs/cache": { swr: 3600, prerender: true },
    "/docs/db": { swr: 3600, prerender: true },
    "/docs/email": { swr: 3600, prerender: true },
    "/docs/i18n": { swr: 3600, prerender: true },
    "/docs/kv": { swr: 3600, prerender: true },
    "/docs/security": { swr: 3600, prerender: true },
    "/en/docs/agents": { swr: 3600, prerender: true },
    "/en/docs/ai-sdk": { swr: 3600, prerender: true },
    "/en/docs/blob": { swr: 3600, prerender: true },
    "/en/docs/cache": { swr: 3600, prerender: true },
    "/en/docs/db": { swr: 3600, prerender: true },
    "/en/docs/email": { swr: 3600, prerender: true },
    "/en/docs/i18n": { swr: 3600, prerender: true },
    "/en/docs/kv": { swr: 3600, prerender: true },
    "/en/docs/security": { swr: 3600, prerender: true },
  },

  // DO NOT EDIT BELOW THIS LINE unless you know what you are doing.

  vite: {
    optimizeDeps: {
      include: ["@vue/devtools-core", "@vue/devtools-kit"],
    },
    plugins: [
      {
        apply: "build",
        name: "vite-plugin-ignore-sourcemap-warnings",
        configResolved(config) {
          const originalOnWarn = config.build.rollupOptions.onwarn;
          config.build.rollupOptions.onwarn = (warning, warn) => {
            if (
              warning.code === "SOURCEMAP_BROKEN" &&
              warning.plugin === "@tailwindcss/vite:generate:build" ||
              warning.plugin === "nuxt:module-preload-polyfill"
            ) {
              return;
            }

            if (originalOnWarn) {
              originalOnWarn(warning, warn);
            } else {
              warn(warning);
            }
          };
        },
      },
    ],
  },
});