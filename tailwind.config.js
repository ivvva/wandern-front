/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {

    colors: {
        'blue': '#3365E5',
        'red': '#D32828',
    },
    extend: {
      fontFamily:{
        'Magilio': ['magilio']
      },
    },
  },
  plugins: [],
}