export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        maroon: "#6b1e1e",
        gold: "#e3c77b",
        cream: "#fdf8f0",
        beige: "#f2ebd9",
        brown: "#4a2c2a"
      },
      fontFamily: {
        serif: ["Merriweather", "serif"],
        sans: ["Open Sans", "sans-serif"]
      },
      boxShadow: {
        soft: "0 4px 12px rgba(0,0,0,0.12)"
      }
    },
  },
  plugins: [],
};
