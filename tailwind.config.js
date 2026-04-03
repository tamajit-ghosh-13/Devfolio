/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  theme: {
    extend: {
      colors: {
        green: "#00ff88",
        cyan: "#00d4ff",
        bg: "#0a0a0f",
        bg2: "#0d0d14",
        bg3: "#111118",
        bg4: "#1a1a24",
      },
      fontFamily: {
        mono: ['"Space Mono"', "monospace"],
        display: ["Syne", "sans-serif"],
      },
    },
  },
  plugins: [],
};
