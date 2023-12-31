/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        header: "url('./src/assets/img/thailand_header.jpeg')",
        beach: "url('./src/assets/img/beach.jpg')",
        mountain: "url('./src/assets/img/mountain.jpg')",
      },
    },
  },
  plugins: [],
};
