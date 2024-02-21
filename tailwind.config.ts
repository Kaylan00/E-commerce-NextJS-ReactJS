import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        customGreen: '#0A3200',
        customLightGreen: '#F5F9E9',
        customPurple: '#4C3AAA',
        customDarkBlue2: '#0D1321',
        customAliceBlue: '#DAF5FF',
      },
    },
  },
  plugins: [],
};
export default config;
