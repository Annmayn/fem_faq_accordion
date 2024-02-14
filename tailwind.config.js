/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        mobile: "url('./src/assets/images/background-pattern-mobile.svg')",
        desktop: "url('/src/assets/images/background-pattern-desktop.svg')",
      },
    },
    fontSize: {
      sm: "0.8em",
      base: "16px",
      xl: "32px",
    },
    colors: {
      white: "hsl(0, 0%, 100%)",
      pink: "hsl(275, 100%, 97%)",
      purple: {
        gray: "hsl(292, 16%, 49%)",
        dark: "hsl(292, 42%, 14%)",
      },
    },
  },
  plugins: [],
};
