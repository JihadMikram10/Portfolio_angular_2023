/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      backgroundImage: {
        ciruclalight:
          "repeating-radial-gradient(rgb(0,0,0,0.4)2px, #f5f5f5 5px,#f5f5f5 100px);",
      },
    },
  },
  plugins: [],
};
