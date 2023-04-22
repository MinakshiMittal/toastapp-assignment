/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#3CBCB4",
        gray: {
          DEFAULT: "#4A5662",
          100: "rgba(74, 86, 98, 0.4)",
          200: "rgba(74, 86, 98, 1)",
        },
        white: {
          DEFAULT: "#FFFFFF",
          100: "#F1F1F1",
          200: "#F0F3F3",
          300: "#F6F6F6",
          400: "#F5F5F5",
          500: "#F0F0F3",
        },
        red: "rgba(239, 75, 75, 1)",
        blue: {
          100: "#76DFE6",
          200: "rgba(69, 158, 175, 1)",
          300: "rgba(0, 121, 145, 1)",
        },
      },
      borderRadius: {
        xl: "10px",
      },
      boxShadow: {
        default:
          "-1px -1px 3px #FFFFFF, 1.5px 1.5px 3px rgba(174, 174, 192, 0.4)",
        "inner-default":
          "inset -2px 2px 4px rgba(212, 212, 212, 0.2), inset 2px -2px 4px rgba(212, 212, 212, 0.2), inset -2px -2px 4px rgba(255, 255, 255, 0.9), inset 2px 2px 5px rgba(212, 212, 212, 0.9)",
        deep: "-5px 5px 10px rgba(222, 222, 222, 0.2), 5px -5px 10px rgba(222, 222, 222, 0.2), -5px -5px 10px rgba(255, 255, 255, 0.9), 5px 5px 13px rgba(222, 222, 222, 0.9);",
        "inner-blue":
          "inset -2px 2px 4px rgba(28, 111, 128, 0.2), inset 2px -2px 4px rgba(28, 111, 128, 0.2), inset -2px -2px 4px rgba(42, 167, 192, 0.9), inset 2px 2px 5px rgba(28, 111, 128, 0.9)",
      },
    },
  },
  plugins: [],
};
