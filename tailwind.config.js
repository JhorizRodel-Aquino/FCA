/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        primary: "#008542",
        secondary: "#f2f2f2",
        buttonblue: "#3b5897",
        buttonyellow: "#daa625",
        fbHover: "#1573e5",
      },
      fontFamily: {
        raleway: "Raleway",
      },
    },
  },
  plugins: [],
};
