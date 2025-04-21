/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class", // Enables dark mode support
  content: ["./src/**/*.{js,ts,jsx,tsx}"],

  theme: {
    extend: {
      fontFamily: {
        montserrat: ["Montserrat", "sans-serif"],
        playfair: ["Playfair Display", "serif"],
        heading: ["Gill Sans MT", "sans-serif"],
        classy: ["Playfair Display", "serif"],
        poppins: ["Poppins", "sans-serif"],
        baskervville: ["Baskervville", "serif"],
      },
      colors: {
        primary: "#D9B382", // Your main accent color
        background: "#F5F3EF", // Light theme background
        darkBackground: "#1a1a1a", // Dark mode background
      },
      boxShadow: {
        glass: "0 4px 10px rgba(255, 255, 255, 0.1)", // Glassmorphism effect
      },
      backdropBlur: {
        xs: "2px",
        sm: "4px",
        md: "8px",
      },
    },
  },

  plugins: [],
};
