const config = {
	plugins: [
		// Some plugins, like tailwindcss/nesting, need to run before Tailwind,
		// But others, like autoprefixer, need to run after,
		require('tailwindcss'), require('autoprefixer')
	]
};

module.exports = config;
