/** @type {import('tailwindcss').Config} */

const defaultTheme = require('tailwindcss/defaultTheme');
const colors = require('tailwindcss/colors');

module.exports = {
  mode: 'jit',
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Ubuntu', ...defaultTheme.fontFamily.sans],
      },
    },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      gray: colors.gray,
      yellow: colors.yellow,
      sky: colors.sky,
      blue: colors.blue,
			white: '#ffffff',
			black: '#000000',
    },
  },

  variants: {
    extend: {
      backgroundColor: ['hover'],
      shadow: ['hover'],
    }
  },

  plugins: [require('@tailwindcss/typography')],
};
