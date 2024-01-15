/** @type {import('tailwindcss').Config} */
export default {
  content: [],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        body: ['"Roboto"', "sans-serif"],
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
