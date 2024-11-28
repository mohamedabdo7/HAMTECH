/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@shadcn/ui/**/*.js"
  ],
  theme: {
    extend: {
      fontFamily: {
        primary: ['"Nunito"', "sans-serif"], // Define font stack directly
        secondary: ['"Arial"', "sans-serif"], // Define font stack directly
      },
      animation: {
        'spin-slow': 'spin 20s linear infinite', // Slow spin animation
      },
    },
  },
  plugins: [],
}

