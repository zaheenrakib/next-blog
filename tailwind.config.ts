import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/common/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/home/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        dark: {
          bg: "#0f172a",
          surface: "#1e293b",
          border: "#334155",
        },
      },
      typography: {
        DEFAULT: {
          css: {
            color: "rgb(55 65 81)",
            a: {
              color: "#3b82f6",
              "&:hover": {
                color: "#1d4ed8",
              },
            },
          },
        },
        dark: {
          css: {
            color: "rgb(209 213 219)",
            a: {
              color: "#60a5fa",
              "&:hover": {
                color: "#93c5fd",
              },
            },
          },
        },
      },
      animation: {
        "fade-in": "fadeIn 0.5s ease-in",
        "slide-up": "slideUp 0.5s ease-out",
        float: "float 3s ease-in-out infinite",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%": {
            opacity: "0",
            transform: "translateY(10px)",
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0)",
          },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        },
      },
      boxShadow: {
        "glow-sm": "0 0 10px rgba(59, 130, 246, 0.3)",
        "glow-md": "0 0 20px rgba(59, 130, 246, 0.4)",
        "glow-lg": "0 0 30px rgba(59, 130, 246, 0.5)",
        "glow-purple": "0 0 20px rgba(139, 92, 246, 0.3)",
      },
    },
  },
  plugins: [],
};

export default config;
