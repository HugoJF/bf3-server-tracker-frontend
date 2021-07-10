module.exports = {
  mode: 'jit',
  purge: [
    './src/**/*.html',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
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
