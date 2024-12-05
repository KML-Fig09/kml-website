/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        backgroundDark: "#0a192f",
        foregroundLight: "#e6f1ff",
        textMuted: "#8892b0",
        primaryGreen: "#64ffda",
        primaryPurple: "#6b46c1",
        secondaryDark: "#112240",
        borderColor: "#233554",
      },
      fontFamily: {
        body: ["Calibre", "Inter", "San Francisco", "SF Pro Text", "-apple-system", "system-ui", "sans-serif"],
        heading: ["Space Grotesk", "sans-serif"],
      },
    },
  },
  plugins: [],
};
