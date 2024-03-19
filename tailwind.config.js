/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "shorten-mobile": "url('./img/bg-shorten-mobile.svg')",
        "shorten-desktop": "url('./img/bg-shorten-desktop.svg')",
        "boost-mobile": "url('./img/bg-boost-mobile.svg')",
        "boost-desktop": "url('./img/bg-boost-desktop.svg')",
      },
    },
  },
  plugins: [],
};
