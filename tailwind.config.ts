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
        "shadow-default": "0 0 4px  rgba(20, 20, 20, 10)",
        "shadow-hover": "0 8px 15px rgba(20, 20, 20, 12)",
      },
    },
  },
  plugins: [],
};
export default config;
