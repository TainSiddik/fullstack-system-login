/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'custom-pattern': "url('./assets/bg2.jpg')",
        'custom-gradient': 'linear-gradient(to right, #94a3b8, #6b7280)',
      },
      colors: {

      }
    },
  },
  plugins: [],
}