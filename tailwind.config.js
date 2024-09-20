/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'azul': '#034159',
        'cinza': '#B0BEC5',
        
      }
    },
  },
  plugins: [],
}