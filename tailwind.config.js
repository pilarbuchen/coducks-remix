/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./app/**/{**,.client,.server}/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        blue: "#495CEF",
        yellow: "#FFC328",
        "gray-dark": "#8D8D8D",
        "gray-med": "#D9D9D9",
        "gray-light": "#F3F3F3",
      },
    },
  },
  plugins: [],
};
