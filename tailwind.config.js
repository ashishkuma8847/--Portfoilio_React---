/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class', // Dark mode enable
  theme: {
    extend: {
      colors: {
        customTeal: "#12BBB6", 
      },
    },
  },
  plugins: [],
};
