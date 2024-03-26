/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    colors: {
      green: "#53B175",
      white: "#FFF9FF",
      offWhite: "#FCFCFC",
      backdrop: "#00001a",
      yellow: "#FDE598",
      searchbarGrey: "#F2F3F2",
      textGrey: "#7C7C7C",
      cardBorderGrey: "#E2E2E2",
    },
    screens: {
      phone: "375px",
      tablet: "640px",
      // => @media (min-width: 640px) { ... }

      laptop: "1024px",
      // => @media (min-width: 1024px) { ... }

      desktop: "1280px",
      // => @media (min-width: 1280px) { ... }
    },
    extend: {},
  },
  plugins: [],
};
