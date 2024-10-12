/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
    './src/pages/**/*.{js,jsx,ts,tsx}',
    './src/components/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        foreground: '#8E45CD',
        bg2: '#4C4062',
        btnBg: '#412B51',
      }
    },
    fontFamily: {
      inkfree: ["Inkfree", "cursive"],
    }
  },
  plugins: [],
}

