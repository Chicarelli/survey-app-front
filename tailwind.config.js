/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
    ".src/pages/**/*.{js,ts,jsx,tsx}",
    ".src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    colors: {
      blue: {
        primary: "#386374",
        secondary: "#89A3A6"
      },
      gray: {
        primary: "#8B9EA8"
      },
      white: {
        primary: "#F4F4F0"
      },
      salmon: {
        primary: "#B7746F",
        secondary: "#E2C7BF"
      }
    }
  },
  plugins: [],
}
