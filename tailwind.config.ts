import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        white: "#FFFFFF",
        "off-white": "#F9F8F6",
        pearl: "#F2F0EC",
        ink: "#1C1C1C",
        charcoal: "#3D3D3D",
        stone: "#8C8884",
        "warm-gold": "#B89A6A",
        border: "#E8E6E1",
      },
      fontFamily: {
        playfair: ["var(--font-playfair)", "serif"],
        jost: ["var(--font-jost)", "sans-serif"],
      },
      maxWidth: {
        site: "1200px",
      },
      boxShadow: {
        card: "0 1px 3px rgba(0,0,0,0.06)",
      },
    },
  },
  plugins: [],
};

export default config;
