module.exports = {
	mode: 'jit',
	purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
	darkMode: false, // or 'media' or 'class'
	theme: {
		fontFamily: {
			sans: ['Public Sans', 'sans-serif'],
			serif: ['DM Serif Display', 'serif'],
		},
		fontSize: {
			md: '15px',
			lg: '16px',
			'2xl': '1.5rem',
			'3xl': '2rem',
			'4xl': '3rem',
			'5xl': '3.5px',
			'6xl': '4.5rem',
		},
		screens: {
			md: '768px',
			lg: '976px',
			xl: '1110px',
			xxl: '1190px',
		},
		colors: {
			blue: {
				500: '#6C8294',
				700: '#36536B',
				900: '#1B262F',
			},
			pink: {
				400: '#DA6D97',
				700: '#BA4270',
			},
			white: {
				100: '#FBFCFE',
			},
		},
	},
	variants: {
		extend: {},
	},
	plugins: [],
}
