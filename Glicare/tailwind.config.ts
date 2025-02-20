import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--color-gray)",
        primary: "var(--color-gray)",
        secondary: "var(--color-blue)",
      },
      fontFamily: {
        roboto: "var(--font-roboto)", 
      },
    },
  },
  plugins: [],
} satisfies Config;
