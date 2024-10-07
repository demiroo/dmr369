import type { Config } from "tailwindcss";
import { fontFamily } from "tailwindcss/defaultTheme";

const config: Config = {
  darkMode: ["class"], // Enables dark mode with class strategy
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true, // Centers the container
      padding: "2rem", // Adds padding to the container
      screens: {
        "2xl": "1400px", // Sets max width for 2xl screens
      },
    },
    extend: {
      fontFamily: {
        sans: ["var(--font-sans)", ...fontFamily.sans], // Extends default sans fonts with CSS variable support
      },
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        lg: "var(--radius)", // Custom radius value
        md: "calc(var(--radius) - 2px)", // Reduced radius for medium size
        sm: "calc(var(--radius) - 4px)", // Reduced radius for small size
      },
      borderWidth: {
        DEFAULT: "3px", // Sets default border width to 3px
      },
      keyframes: {
        borderBeam: {
          '0%': { borderColor: '#38bdf8', transform: 'scale(1)' },
          '50%': { borderColor: '#f87171', transform: 'scale(1.05)' },
          '100%': { borderColor: '#38bdf8', 'offset-distance': '100%', transform: 'scale(1)' },
        },
        "shine-pulse": {
          "0%": { "background-position": "0% 0%" },
          "50%": { "background-position": "100% 100%" },
          "100%": { "background-position": "0% 0%" },
        },
        gradient: {
          to: {
            backgroundPosition: "var(--bg-size) 0",
          },
        },
        subtleGradientAnimationLight: {
          "0%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
          "100%": { backgroundPosition: "0% 50%" },
        },
        subtleGradientAnimationDark: {
          "0%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
          "100%": { backgroundPosition: "0% 50%" },
        },
      },
      animation: {
        'border-beam': 'borderBeam 12s linear infinite',
        'shine-pulse': 'shine-pulse 3s ease-in-out infinite',
        gradient: "gradient 8s linear infinite",
        'subtle-gradient-light': 'subtleGradientAnimationLight 30s ease infinite',
        'subtle-gradient-dark': 'subtleGradientAnimationDark 30s ease infinite',
      },
      spacing: {
        '9': '2.25rem', // For icon size adjustments
        '4': '1rem', // For smaller icon sizing
      },
    },
  },
  plugins: [
    require("tailwindcss-animate"), // Plugin for handling animations
    require("@tailwindcss/typography"), // Plugin for better typography support
  ],
};

export default config;
