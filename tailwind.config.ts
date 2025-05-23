/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#000000",
        light: "#f8f9fa",
        accent: "#ff6b35",
        dark: "#1a1a1a",
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
        bebas: ["Bebas Neue", "cursive"],
      },
    },
  },
  plugins: [],
};
