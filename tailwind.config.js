module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      arial: ["Arial", "sans-serif"],
      helvetica: ["Helvetica", "sans-serif"],
      verdana: ["Verdana", "sans-serif"],
    },
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
    extend: {
      colors: {
        gray: {
          100: "#F8F8F8",
          200: "#E7E7E7",
          300: "#9d9fa3",
          350: "#646768",
          400: "#5a5a5a",
          450: "#3B3F40",
          500: "#333436",
          600: "#222628",
          700: "#202425",
          800: "#171B1C",
          900: "#1d1e1f",
        },
        green: {
          500: "#17a65e",
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
