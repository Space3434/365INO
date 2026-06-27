import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        navy: "#07162f",
        ink: "#111827",
        ocean: "#0891b2",
        skyglass: "#e8fbff"
      },
      boxShadow: {
        enterprise: "0 24px 80px rgba(7, 22, 47, 0.12)"
      },
      backgroundImage: {
        "mesh-grid":
          "linear-gradient(rgba(8,145,178,.08) 1px, transparent 1px), linear-gradient(90deg, rgba(8,145,178,.08) 1px, transparent 1px)"
      }
    }
  },
  plugins: []
};

export default config;
