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
        primary: "#000000", // Black for brutalist design
        light: "#f8f9fa", // Light gray background
        accent: "#ff6b35", // Orange accent color
        dark: "#1a1a1a", // Dark gray
        teal: "#008080", // Teal color
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
        bebas: ["Bebas Neue", "cursive"],
      },
    },
  },
  plugins: [],
};
