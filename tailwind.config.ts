import FlowbitePlugin from "flowbite/plugin";
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/flowbite-react/lib/**/*.js",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "news-letter":
          "url('https://wint1703.sirv.com/market/news-letter.png')",
        logo: "url('https://wint1703.sirv.com/market/logo.svg')",
      },
      colors: {
        primary: {
          "100": "#5db0d1",
          "300": "#036c96",
          DEFAULT: "#274C5B",
        },
        secondary: "#EFD372",
        info: {
          "100": "#EFF6F1",
          "300": "#c3f9d2",
          DEFAULT: "#7EB693",
        },
      },
    },
  },
  plugins: [FlowbitePlugin],
};
export default config;
