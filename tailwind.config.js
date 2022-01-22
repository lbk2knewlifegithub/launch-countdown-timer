const defaultTheme = require("tailwindcss/defaultTheme");
const plugin = require("tailwindcss/plugin");
const { join } = require("path");

module.exports = {
  content: [join(__dirname, "src/**/*.{html,ts}")],
  darkMode: "class",
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1.5rem",
        sm: "2rem",
        lg: "4rem",
        xl: "10rem",
      },
    },
    fontSize: {
      sm: ["7px", { letterSpacing: "2.96px" }],
      base: ["14px", { letterSpacing: "5.92px" }],
      lg: ["18px", { letterSpacing: "6.14px" }],
      xl: ["22px", { letterSpacing: "7.5px" }],
      "2xl": ["36px", { lineHeight: "71px", letterSpacing: "-1.08" }],
      "3xl": ["80px", { lineHeight: "71px", letterSpacing: "-2.4px" }],
    },
    extend: {
      // create custom fonts here
      fontFamily: {
        mono: ["'Red Hat Text'", ...defaultTheme.fontFamily.mono],
      },
      colors: {
        "primary-900": "hsl(237, 18%, 59%)",
        "primary-800": "hsl(345, 95%, 68%)",
        "dark-900": "hsl(234, 17%, 12%)",
        "dark-800": "hsl(235, 16%, 14%)",
        "dark-700": "hsl(236, 21%, 26%)",
      },
    },
  },
  plugins: [
    plugin(function ({ addComponents }) {
      addComponents({
        ".container": {
          maxWidth: "1440px",
        },
      });
    }),
  ],
};
