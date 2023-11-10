/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        "dark-01": "#151515",
      },
    },
    fontFamily: {
      inter: ["'Inter', 'Fira Sans'"],
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: ["corporate", "business"],
  },
};
