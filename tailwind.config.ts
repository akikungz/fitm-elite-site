import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        green: {
          "50": "#f4fbe6",
          "100": "#def3b0",
          "200": "#ceed8a",
          "300": "#b7e454",
          "400": "#a9df33",
          "500": "#94d700",
          "600": "#87c400",
          "700": "#699900",
          "800": "#517600",
          "900": "#3e5a00"
        },
        gray: {
          "50": "#e9e9e9",
          "100": "#bcbcbc",
          "200": "#9b9b9b",
          "300": "#6e6e6e",
          "400": "#515151",
          "500": "#262626",
          "600": "#232323",
          "700": "#1b1b1b",
          "800": "#151515",
          "900": "#101010"
        },
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))"
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))"
        },
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))"
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))"
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))"
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))"
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))"
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        chart: {
          "1": "hsl(var(--chart-1))",
          "2": "hsl(var(--chart-2))",
          "3": "hsl(var(--chart-3))",
          "4": "hsl(var(--chart-4))",
          "5": "hsl(var(--chart-5))"
        }
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)"
      },
      animation: {
        pulse: "pulse var(--duration) ease-out infinite"
      },
      keyframes: {
        pulse: {
          "0%, 100%": {
            boxShadow: "0 0 0 0 var(--pulse-color)"
          },
          "50%": {
            boxShadow: "0 0 0 8px var(--pulse-color)"
          }
        }
      }
    }
  },
  plugins: [require("tailwindcss-animate")]
} satisfies Config;
