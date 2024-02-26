/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')

module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ...colors,
        'bgpink': '#FF407D',
        'lightPink': '#FFCAD4',
        'lightBlue': '#61C0BF',
        'grayNavy': '#1B3C73'
      },
    },
  },
  plugins: [

  ],
}