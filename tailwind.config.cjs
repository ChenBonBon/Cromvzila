/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        chat: "SimHei, Microsoft JhengHei, STHeiti, LiHei Pro Medium",
      },
      animation: {
        dot: "dot 1.5s infinite",
      },
      keyframes: {
        dot: {
          "0%": {
            opacity: 0,
          },
          "50%": {
            opacity: 1,
          },
          "100%": {
            opacity: 0,
          },
        },
      },
    },
  },
  plugins: [],
};
