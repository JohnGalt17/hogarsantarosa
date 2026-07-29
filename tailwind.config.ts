import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: "#1E3347",
          dark: "#152535",
        },
        sage: {
          DEFAULT: "#6E8569",
          dark: "#5A6F55",
          light: "#8FA389",
        },
        cream: "#F7F5F0",
        peach: "#F5E6DC",
        sky: "#E8F2F8",
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
