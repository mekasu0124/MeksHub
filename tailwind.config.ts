import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        fg: '#8e45cd',
        bg2: '#4c4062',
        btnBg: '#412b51'
      },
    },
    fontFamily: {
      caveat: ["Caveat", "cursive"],
      inkfree: ["Ink Free", "cursive"],
    }
  },
  plugins: [],
};
export default config;
