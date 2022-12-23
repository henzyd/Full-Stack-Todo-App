/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      colors: {
        Label: {
          Regular: "#F5DD29",
          Important: "#FF8C38",
          HighPriority: "#FC452B",
        },
        Primary: "#FD4B0F",
        Secondary: "#FD4B0F",
        Ascent: "#FAF6F5",
        Input: {
          Border: "#ADB1BF",
        },
      },
    },
  },
  plugins: [],
};
