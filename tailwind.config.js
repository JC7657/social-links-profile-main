/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    extend: {},
    screens: {
      mobile: "375px",
      desktop: "1440px",
    },
    colors: {
      "theme-green": "hsl(75, 94%, 57%)",
      "theme-white": "hsl(0, 0%, 100%)",
      "theme-grey700": "hsl(0, 0%, 20%)",
      "theme-grey800": "hsl(0, 0%, 12%)",
      "theme-grey900": "hsl(0, 0%, 8%)",
    },
    fontFamily: {
      inter: ["Inter", "sans-serif"],
    },
  },
  plugins: [],
};
