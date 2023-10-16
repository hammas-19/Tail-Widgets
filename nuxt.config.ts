// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  	runtimeConfig: {
    public: {
      API_BASE_URL: process.env.API_BASE_URL,
      API_READ_TOKEN: process.env.API_READ_TOKEN
    },
  },
  	app: {
		head: {
			title: "Tail-Widgets",
			// titleTemplate: "%s | your slogan here",
			htmlAttrs: {
				lang: "en",
			},
			meta: [
				{ charset: "utf-8" },
				{
					name: "viewport",
					content: "width=device-width, initial-scale=1",
				},
				{
					hid: "description",
					name: "description",
					content: "meta description",
				}
			],
			link: [{ rel: "icon", type: "image/webp", href: "favicon" }],
		},
	},
  devtools: { enabled: true },
  css: ['~/assets/css/main.css'],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
})