import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Ayurveda gold / cream palette (matched to Figma)
        brand: {
          gold: "#9A7B2E",
          goldDark: "#6E5719",
          goldDeep: "#5B481A",
          goldLight: "#C7A64F",
          cream: "#FBF8F1",
          beige: "#F4ECDA",
          card: "#F6EFDF",
          ink: "#2C2A24",
          body: "#57534A",
          muted: "#8A8377",
          line: "#E6DBC2",
        },
      },
      fontFamily: {
        sans: ["var(--font-karla)", "system-ui", "sans-serif"],
      },
      maxWidth: {
        container: "1200px",
      },
      boxShadow: {
        card: "0 10px 30px -12px rgba(91, 72, 26, 0.18)",
        soft: "0 8px 24px -14px rgba(0,0,0,0.15)",
      },
    },
  },
  plugins: [],
};

export default config;
