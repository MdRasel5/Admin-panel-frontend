/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "primary": "#2275fc",
        "secondary": "#f2f7fb",
        "dark-bg": "#1e293b",
        "dark-bg-two": "#0f172a",
        "border-color": "#ecf0f4",
        "dark-border-color": "#324055",
      },
    },
  },
  plugins: [],
  darkMode: "class",
};
