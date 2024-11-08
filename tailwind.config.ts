import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      textShadow: {
        DEFAULT: '2px 2px 4px rgba(0, 0, 0, 0.1)',
        md: '2px 2px 6px rgba(0, 0, 0, 0.2)',
        lg: '3px 3px 8px rgba(0, 0, 0, 0.3)',
        xl: '4px 4px 10px rgba(0, 0, 0, 0.4)',
      },
    },
  },
  plugins: [],
};
export default config;
