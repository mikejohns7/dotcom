const colors = require('tailwindcss/colors')
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  purge: [
    "./index.html"
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter var', defaultTheme.fontFamily.sans],
      },
      colors: {
        orange: colors.orange,
        teal: colors.teal,
      },
      scale: {
        '98': '.98',
      },
      animation: {
        'spin-slow': 'spin 3s linear infinite',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/aspect-ratio'),
    require('@tailwindcss/typography'),
  ],
}
