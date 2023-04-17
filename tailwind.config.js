// eslint-disable-next-line @typescript-eslint/no-var-requires
const defaultTheme = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			fontFamily: {
				monoton: ['Monoton', 'sens-serif'],
				sans: ['Inter var', ...defaultTheme.fontFamily.sans],
				cursive: ['Sacramento', 'cursive']
			}
		}
	},
	plugins: []
};
