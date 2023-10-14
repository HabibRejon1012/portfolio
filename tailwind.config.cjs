/** @type {import('tailwindcss').Config} */

const withMT = require("@material-tailwind/react/utils/withMT");
 

 
module.exports = withMT({
	darkMode: "class",
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			backgroundColor: {
				"bg-dark": "#212428"
			},
			fontFamily: {
				"primary": ['Montserrat Variable', "sans-serif"],
				"secondary": ['Poppins', "sans-serif"],
			},
			colors: {
				"d-gray": "#c4cfde",
				"d-red": "#ff014f"
			}
		},
	},
	plugins: [],
});
