/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        // orange gradint 
        primary: "#fdba74", 
        secondary: "#fb923c",

        //text color
        texlight: "#a7a7a7",
        //text headind
        WHITE : "#f0f0f0",

        // black background 
        bgPrimary: "#171717",
        Black: "#0C0C0C",
      },
    },
  },
  plugins: [],
};