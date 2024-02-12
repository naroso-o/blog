/** @type {import('tailwindcss').Config}*/

const config = {
	content: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
		fontFamily: {
			orbit: ['Orbit-Regular']
		},
		extend: {
			// @url https://colorhunt.co/palette/413c694a47a3709fb0a7c5eb
			colors: {
				'martinique': {
					'50': '#f2f3fb',
					'100': '#e7eaf8',
					'200': '#d3d7f2',
					'300': '#b7bcea',
					'400': '#9a9cdf',
					'500': '#8581d3',
					'600': '#7468c3',
					'700': '#6357ab',
					'800': '#51488b',
					'900': '#413c69', // 
					'950': '#292541',
				},
				'victoria': {
					'50': '#f3f4fb',
					'100': '#e3e5f6',
					'200': '#ced3ef',
					'300': '#adb6e3',
					'400': '#8591d5',
					'500': '#6870c9',
					'600': '#5557bb',
					'700': '#4a47a3', //
					'800': '#45418c',
					'900': '#393870',
					'950': '#282645',
				},
				'hippie': {
					'50': '#f2f7f9',
					'100': '#dfebee',
					'200': '#c2d8df',
					'300': '#97bcc9',
					'400': '#709fb0', // 
					'500': '#4a7d90',
					'600': '#40667a',
					'700': '#395565',
					'800': '#354955',
					'900': '#303f49',
					'950': '#1c2730',
				},
				'perano': {
					'50': '#f2f6fc',
					'100': '#e1eaf8',
					'200': '#cadbf3',
					'300': '#a7c5eb', //
					'400': '#7ba5df',
					'500': '#5b86d6',
					'600': '#476cc9',
					'700': '#3d59b8',
					'800': '#374a96',
					'900': '#314177',
					'950': '#222a49',
				},
				
			}
		}
	},

	plugins: [require('@tailwindcss/typography'), require('@tailwindcss/forms'), require('daisyui')]
};

export default config;
