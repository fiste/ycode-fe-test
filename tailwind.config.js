module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      arial: ["Arial", "sans-serif"],
      helvetica: ["Helvetica", "sans-serif"],
      verdana: ["Verdana", "sans-serif"]
    },
    extend: {
      colors: {
        gray: {
          100: "#F8F8F8",
          200: "#E7E7E7",
          300: "#B3B6B7",
          350: "#646768",
          400: "#56595A",
          450: "#3B3F40",
          500: "#333436",
          600: "#282c2d",
          700: "#202425",
          800: "#171B1C",
          900: "#101314",
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
