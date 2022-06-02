const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    fontFamily: {
      sans: ['Inter', ...defaultTheme.fontFamily.sans]
    },
    colors: {
      light: '#fafafa',
      primary: {
        light: '#FFDCCC',
        DEFAULT: '#FF4F00'
      },
      inverse: '#00B0FF',
      gray: {
        1: '#6F6F6F',
        2: '#808080',
        3: '#7B7B7B',
        4: '#6F6F6F',
        5: '#AAAAAA'
      }
    },
    extend: {}
  },
  plugins: []
}
