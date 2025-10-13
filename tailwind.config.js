/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        primary: "#0B1211", // deep emerald black
        secondary: "#93B1A6", // muted green-gray text
        tertiary: "#0B1F1A", // dark card bg
        "black-100": "#0A1714",
        "black-200": "#07100D",
        "white-100": "#F0FDF4", // emerald-50
      },
      boxShadow: {
        card: "0px 35px 120px -15px #211e35",
      },
      screens: {
        xs: "450px",
      },
      backgroundImage: {
        "hero-pattern": "radial-gradient(1200px 600px at 20% 0%, rgba(16,185,129,0.25) 0%, rgba(11,18,17,0) 60%), radial-gradient(1000px 500px at 100% 20%, rgba(16,185,129,0.15) 0%, rgba(11,18,17,0) 60%)",
      },
    },
  },
  plugins: [],
};