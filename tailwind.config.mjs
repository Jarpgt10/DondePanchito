/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {},
		screens: {
			xs: '320px', // Extra pequeño
			sm: '640px', // Pequeño
			md: '768px', // Mediano
			lg: '1024px', // Grande
			xl: '1280px', // Extra grande
			'2xl': '1536px', // Doble extra grande
		},
	},
	plugins: [],
};
