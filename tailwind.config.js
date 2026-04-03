module.exports = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#2D004D",      // deep purple background
        gold: "#F5A623",         // gold text
        silver: "#C0C0C0",       // silver accents
        dark: "#0A0014",         // darker shade for sections
      },
      fontFamily: {
        sans: ["Poppins", "sans-serif"],
      },
    },
  },
  plugins: [],
};