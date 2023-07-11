/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontSize: {
        '2xs': '0.65rem'
      },
      colors: {
        primary: '#4192D4'
      }
    },
  },
  plugins: [],
}

