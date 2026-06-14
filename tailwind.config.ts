import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        cream: "#FAF7F2",
        sage: {
          DEFAULT: "#5C6B4A",
          dark: "#4A5740",
          light: "#7A8B68",
        },
        warm: {
          DEFAULT: "#C4A574",
          dark: "#A88858",
          light: "#D9C4A0",
        },
        earth: "#8B7355",
      },
      fontFamily: {
        serif: ["Georgia", "Times New Roman", "serif"],
        sans: ["Segoe UI", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
