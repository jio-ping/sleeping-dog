/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "dark-gray": "#D9D9D9",
        "light-black": "#141414",
        "dark-txt-1": "rgba(232, 228, 228, 1)",
      },
    },
  },
  plugins: [],
};
