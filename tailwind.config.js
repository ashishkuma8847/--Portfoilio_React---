/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class', // Enable dark mode via class
  theme: {
    extend: {
      colors: {
        customTeal: "#12BBB6",
        customBlack: "#0D0D0D",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        inter: ["Inter", "sans-serif"],
      },
      backgroundImage: {
        "teal-glow": "linear-gradient(135deg, #12BBB6, #6EE7B7, #3B82F6)",
      },
    },
  },
  plugins: [],
};
