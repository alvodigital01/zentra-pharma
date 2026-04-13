import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        zenthra: {
          navy: "#0E2A47",
          deep: "#153B63",
          accent: "#1D4E89",
          surface: "#F5F7FB",
          text: "#5B6575",
          ink: "#0F1720",
          line: "#D9E1EC",
        },
      },
      fontFamily: {
        heading: ["var(--font-heading)"],
        body: ["var(--font-body)"],
      },
      boxShadow: {
        soft: "0 16px 40px rgba(14, 42, 71, 0.08)",
        medium: "0 22px 48px rgba(14, 42, 71, 0.12)",
        dark: "0 26px 60px rgba(8, 20, 36, 0.22)",
      },
      backgroundImage: {
        "hero-radial":
          "radial-gradient(circle at top, rgba(21, 59, 99, 0.1), transparent 42%)",
      },
      letterSpacing: {
        premium: "0.06em",
      },
    },
  },
  plugins: [],
};

export default config;
