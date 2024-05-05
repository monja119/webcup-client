import daisyui from './node_modules/daisyui'
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {    
      colors: {
        'main': "#ffd1c5",
        'secondary': '#e8166d'
      },
    },
  },
  plugins: [daisyui],
  daisyui: {
    themes: ["light"],
  },
}