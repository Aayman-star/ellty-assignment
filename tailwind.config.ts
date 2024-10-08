import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        "shadow-default": "0 4px 4px rgba(20, 20, 20, 0.12)",
        "shadow-hover": "0 8px 15px rgba(20, 20, 20, 0.14) ",
        //
      },
      colors: {
        "text-color": "#1F2128",
        "btn-default": "#FFCE22",
        "btn-hover": "#FFD84D",
        "border-color": "#CDCDCD",
        "color-checked": "#2469F6",
      },
    },
  },
  plugins: [],
};
export default config;
