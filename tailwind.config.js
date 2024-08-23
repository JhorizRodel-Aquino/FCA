/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        primary: "#f2f2f2",
        secondary: "#008542",
        buttonblue: "#3b5897",
        buttonyellow: "#daa625",
        fbHover: "#1573e5",
      },
      fontFamily: {
        raleway: "Raleway",
      }
    },
  },
  plugins: [],
};
