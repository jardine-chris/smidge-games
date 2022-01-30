module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        grurp: {
          100: "#9992b4",
          200: "#867ea6",
          300: "#736a98",
          400: "#645b85",
          500: "#544d71",
          600: "#45405c",
          700: "#363248",
          800: "#272434",
          900: "#181620",
        },
      },
      fontFamily: {
        montserrat: ["Montserrat", "sans-serif"],
        lato: ["Lato", "sans-serif"],
        spooky: ["Special Elite", "sans-serif"],
      },
    },
  },
  plugins: [],
};
