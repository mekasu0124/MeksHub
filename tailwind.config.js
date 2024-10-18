/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        bg: '#221b18',
        bg2: '#523c2c',
        bd: '#6c6257',
        btnHover: '#a2784e',
        fg: '#9ca09d',
      },
    },
    fontFamily: {
      inkfree: ["Inkfree", "cursive"],
    }
  },
  plugins: [],
}

