const {nextui} = require("@nextui-org/react");
/** @type {import('tailwindcss').Config} */

export default {
  important: true,
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}", "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  darkMode: "class",
  plugins: [
    require('@tailwindcss/typography'),
    nextui({
      prefix: "nextui", // prefix for themes variables
      addCommonColors: true, // override common colors (e.g. "blue", "green", "pink").
      defaultTheme: "dark", // default theme from the themes object
      defaultExtendTheme: "dark", // default theme to extend on custom themes
      layout: {}, // common layout tokens (applied to all themes)
      themes: {
        dark: {
          layout: {}, // dark theme layout tokens
          colors: {
            foreground: "#e4e4e7"
          }, // dark theme colors
        },
        // ... custom themes
      },
    }),
  ],
};
