/** @type {import('tailwindcss').Config} */

//www.realtimecolors.com/?colors=0f0f0f-ffffff-f37362-4ef9ac-f64d41&fonts=Poppins-Poppins
https: module.exports = {
  content: ["./src/**/*.{js,jsx}", "./public/index.html"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#eb7363",
          dark: "#9D1D0C",
        },
        secondary: {
          DEFAULT: "#79FBC1",
          dark: "#06B264",
        },
        accent: "#F64C41",
      },
      textColor: {
        "custom-black": "#0F0F0F",
        "custom-white": "#F0F0F0",
      },
    },
  },
  plugins: [],
};
