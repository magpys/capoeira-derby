import type { Config } from "tailwindcss";

const config: Config = {
  theme: {
    extend: {
      fontFamily: {
        sans: "var(--font-nunito)", // Default body text
        heading: "var(--font-montserrat)", // Custom for headings
      },
    },
  },
  plugins: [],
};

export default config;
