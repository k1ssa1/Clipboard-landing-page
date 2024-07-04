/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'header': "url('/src/assets/bg-header-desktop.png')",
        'snipets': "url('/src/assets/image-computer.png')",
      },
      screens: {
        'max-sm': {'max': '639px'},
        'max-lg': {'max': '1023px'},
      },
    },
  },
  plugins: [],
}

