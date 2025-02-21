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
          foreground: "var(--foreground)",

          primary: "var(--color-gray)",
          secondary: "#4568fc",

          textColor: "var(--color-text-gray)",
          
        },
        fontFamily: {
          roboto: "var(--font-roboto)",
          inter: "var(--font-inter)",
        },
      },
    },
    plugins: [],
  } satisfies Config;
  