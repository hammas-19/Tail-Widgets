/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./components/**/*.{js,vue,ts}",
		"./layouts/**/*.vue",
		"./pages/**/*.vue",
		"./plugins/**/*.{js,ts}",
		"./app.vue",
		"./error.vue",
	],
	theme: {
		screens: {
			sm: "480px",
			md: "768px",
			lg: "976px",
			xl: "1440px",
		},
		// colors: {
		// 	Bluish:
		// 		"#2D6FBC",
		// 	BalticSea:
		// 		"#262626",
		// 	snowDrift:
		// 		"#F7F9FA",
		// 	blackCow:
		// 		"#4A4A4A",
		// 	[#FFFEE2]:
		// 		"#FFFEE2 ",
		// 	lightGrey:
		// 		"#DADADA",
		// 	lavender:
		// 		"#E2E3FF",
		// 	transparent:
		// 		"transparent",
		// 	white: "#fff",
		// 	[#f5f2fc]:
		// 		"#f5f2fc ",
		// },
		extend: {},
	},
	plugins: [],
};
