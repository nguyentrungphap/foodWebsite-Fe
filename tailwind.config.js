/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        textColor: "#49557e",
        tomato: "#FF6347",
        button: "#fff4f2",
        homeButton: "#747474",
        h1Explore: "#262626",
        textExplore: "#808080",
      },
      animation: {
        fadeIn: "fadeIn 3s",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 },
        },
      },
      fontSize: {
        custom: ["max(1.4vw, 16px)", "1.5rem"],
        customh2: [" max(2vw, 24px)"],
        customtext: ["max(3vw, 20px)"],
        customgap: ["max(2vw, 10px)"],
        customimg: ["max(30vw, 120px)"],
        cart: ["max(1vw, 12px)"],
      },
      width: {
        loginpopup: "max(23vw, 330px)",
      },
    },
  },
  plugins: [],
};
