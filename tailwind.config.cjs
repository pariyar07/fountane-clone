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
        textGray: "#203243",
        linkGray: "#6c6a72",
        buttonGray: "#c6cace",
        footerGray: "#b4b9be",
        productGreenLight: "#618e99",
        productGreenDark: "#1d5e6d",
        productBlueLight: "#98bbf2",
        productBlueDark: "#133366",
        dark44: "#414141",
        lemonYellow: "#eafc40",
        gridBlue: "#00aeef",
        gridDarkBlue: "#022143f2",
        gridLightBlue: "#dbf5ff",
        gridLightGreen: "#e8edea",
      },
    },
  },
  plugins: [],
};
