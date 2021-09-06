const colors = require('tailwindcss/colors')

module.exports = {
  mode: 'jit',
  purge: [
    './src/**/*.html',
    './src/**/*.ts',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        gray: colors.gray
      },
      fontFamily: {
        sans: ["Inter"]
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
