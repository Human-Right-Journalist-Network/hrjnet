/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Helvetica", "Arial", "sans-serif"],
      },
      backgroundImage: {
        project1: "url('../src/assets/project1.png')",
        project2: "url('../src/assets/project2.png')",
        project3: "url('../src/assets/project3.png')",
        banner: "url('../src/assets/BG.png')",
        workImage: "url('../src/assets/workImage.png')",
        volunteerImage: "url('../src/assets/volunteerImage.png')",
        WhatWeDo: "url('../src/assets/WhatWeDoImage.png')",
        Chart: "url('../src/assets/Chart.png')",
      },
    },
  },
  plugins: [],
};
