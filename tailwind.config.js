// const colors = require('tailwindcss/colors')

module.exports = {
  content: ['index.html', './src/**/*.{js,jsx,ts,tsx,vue,html}'],
  theme: {
    extend: {
      colors: {
        primary: '#0B3F36',
        lightgray: '#AEAEAE',
        secondary: '#F8B63C'
      }
    }
  },
  plugins: []
}
