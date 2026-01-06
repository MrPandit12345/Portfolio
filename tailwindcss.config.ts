/** @type {import('tailwindcss').Config} */
const tailwindConfig = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: "#259df4",
        "background-light": "#f5f7f8",
        "background-dark": "#0b0c15",
        "glass-dark": "rgba(17, 25, 40, 0.75)",
        "glass-border": "rgba(255, 255, 255, 0.125)",
      },
      fontFamily: {
        display: ["Space Grotesk", "sans-serif"],
      },
      backgroundImage: {
        "cosmic-gradient":
          "radial-gradient(circle at 50% 50%, #1a2c4e 0%, #0b0c15 100%)",
        "neon-glow":
          "conic-gradient(from 180deg at 50% 50%, #259df4 0deg, #a855f7 180deg, #259df4 360deg)",
      },
      animation: {
        float: "float 6s ease-in-out infinite",
        "pulse-slow": "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-20px)" },
        },
      },
    },
  },
  plugins: [],
};
export default tailwindConfig;
