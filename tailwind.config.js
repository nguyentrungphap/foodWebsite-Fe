/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        textColor: "#49557e",
        tomato: "#FF6347",
        button: "#fff4f2",
      },
    },
  },
  plugins: [],
};
