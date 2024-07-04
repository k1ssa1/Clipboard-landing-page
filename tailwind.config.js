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
      fontFamily: {
      },
    },
  },
  plugins: [],
}

