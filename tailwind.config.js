/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      'Grechen': ['Grechen Fuemen', 'cursive'],
      'Poppins': ['Poppins', 'sans-serif'],
      'Podkova': ['Podkova', 'serif'],
    },
    extend: {},
  },
  plugins: [],
}