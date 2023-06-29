/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './src/**/*.{vue,js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {},
    fontFamily: {
      lora: ['Lora', 'serif'],
      roboto: ['Roboto', 'serif'],
    },
    colors: {

      'primary-dark': '#495057',
      'primary-light': '#e5e5e5',
      'orange': '#d4a373',
    },
    screens: {
      xl: { max: '1279px' },

      lg: { max: '1023px' },

      md: { max: '767px' },

      sm: { max: '639px' },
    },
  },
  plugins: [],
}
