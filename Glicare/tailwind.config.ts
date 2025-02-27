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
          primary: "var(--primary)",
          'primary-gray': "var(--primary-gray)",
          secondary: "#4568FC",
          textColor: "var(--color-text-gray)",
        },
        fontFamily: {
          roboto: "var(--font-roboto)",
          inter: "var(--font-inter)",
        },
        fontSize: {
          '28': '28px',  
        },
        width: {
          '36': '36px', 
          '336': '336px', 
          '700': '700px',
        },
        maxWidth: {
          '624': '624px',  
        },
        height: {
          '36': '36px',
          '74': '74px', 
          '310': '310px',
        },
        spacing: {
          '17': '17px',
          '19': '19px',
          '33': '33px',
          '34': '34px',
          '35': '35px',
          '36': '36px',
          '42': '42px',
          '64': '64px',
          '68': '68px',
          '125': '125px',
        },
        lineHeight: {
          '34': '34px',  
        },
      },
    },
    plugins: [],
  } satisfies Config;
  