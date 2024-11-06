/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html",
  ],
  theme: {
    extend: {
      colors: {
        'select-black': '#353437',
        'main-black':'#EBEBEB',
        'main-blue':'#3C4BDC',
        'card-border':'#D8DCF4',
      },
    },
  },
  plugins: [],
}