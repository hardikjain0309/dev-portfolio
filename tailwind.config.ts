import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#030526",
        primary: "#ccd6f6",
        secondary: "#495670",
        interactive: "#8552F2"
      }
    },
  },
  plugins: [],
} satisfies Config;
