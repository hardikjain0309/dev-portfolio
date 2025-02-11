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
        background: "#0a192f",
        primary: "#ccd6f6",
        secondary: "#495670",
        interactive: "#64ffda"
      },
    },
  },
  plugins: [],
} satisfies Config;
