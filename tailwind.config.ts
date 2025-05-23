// tailwind.config.ts
import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      keyframes: {
        "move-twinkle-back": {
          "0%": { backgroundPosition: "0 0" },
          "100%": { backgroundPosition: "-10000px 5000px" },
        },
      },
      animation: {
        twinkling: "move-twinkle-back 200s linear infinite",
      },
    },
  },
  plugins: [],
};
export default config;
