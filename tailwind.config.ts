import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        cream: "#FFF9F6",
        almond: "#F6E8DF",
        coffee: "#4A3B32",
        burgundy: {
          DEFAULT: "#8B454E",
          hover: "#71373F",
        },
        sage: {
          DEFAULT: "#5A7D65",
          hover: "#486654",
          light: "#E8F0EA",
        },
      },
      fontFamily: {
        serif: ["var(--font-serif)", "Georgia", "serif"],
        sans: ["var(--font-sans)", "Segoe UI", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
