/** @type {import('tailwindcss').Config}*/

const config = {
	content: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
		fontFamily: {
			'orbit': ['Orbit-Regular'],
		},
		extend: {}
	},

	plugins: [require('@tailwindcss/typography'), require('@tailwindcss/forms'), require('daisyui')]
};

export default config;
