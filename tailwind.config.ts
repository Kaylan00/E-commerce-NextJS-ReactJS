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
        customDarkBlue: '#2C2C54',
        customDarkGray: '#0D1321',
        customOliveGreen: '#7B904B',
      },
    },
  },
  plugins: [],
};
export default config;
