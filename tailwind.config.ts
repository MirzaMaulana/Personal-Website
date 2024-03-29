import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        "forest-green": "#294B29",
        "pearl-white": "#FBF6EE",
        "minty-fresh": "#C1F2B0",
        "moss-green": "#65B741",
      },
      fontFamily: {
        poppins: "Poppins",
        "poppins-bold": "PoppinsBold",
        "poppins-black": "PoppinsBlack",
      },
    },
  },
  plugins: [],
};
export default config;
