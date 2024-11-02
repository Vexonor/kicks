import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    './node_modules/preline/preline.js'
  ],
  theme: {
    extend: {
      colors: {
        "Blue" : "#4968E1",
        "Dark-Gray" : "#222220",
        "FA-White" : "#F9F9F9",
        "Gray" : "#E6E6E2",
        "Gray-Main" : "#6F6F6D",
        "Yellow" : "#FEA42E",
        "Quick-Silver" : "#A5A5A5",
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
  },
  plugins: [
      require('preline/plugin')
  ],
};
export default config;
