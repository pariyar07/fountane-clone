/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins"],
        sans: ["Open Sans"],
        inter: ["Inter"],
      },
      colors: {
        lightBlue: "#0887ff",
        footerBlue: "#041728",
        primaryGray: "#363b41",
        lightGray: "#9da0a3",
        buttonGray: "#c6cace",
        footerGray: "#b4b9be",
      },
    },
  },
  plugins: [],
};
