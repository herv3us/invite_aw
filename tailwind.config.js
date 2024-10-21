/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
     "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        HALLOWEEN: ["HALLOWEEN", "sans-serif"], 
        HalloweenMorning: ["HalloweenMorning", "sans-serif"],
        Munsteria: ["Munsteria", "sans-serif"]
      }
    },
  },
  plugins: [],
}

