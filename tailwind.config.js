/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html, js}"],
  theme: {
    extend: {
      backgroundImage:{
        "home": "url('/src/assets/img/background/bg.png')"
      }
    },
  },
  plugins: [],
}

