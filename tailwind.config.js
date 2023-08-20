/** @type {import('tailwindcss').Config} */

export default {
  important: true,
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },

  plugins: [require("@tailwindcss/typography")],
};
