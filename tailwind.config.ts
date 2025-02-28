import type { Config } from "tailwindcss";
import plugin from 'tailwindcss/plugin'
import { default as flattenColorPalette } from 'tailwindcss/lib/util/flattenColorPalette'
import svgToDataUri from 'mini-svg-data-uri'

export default {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      animation: {
        rotate: "rotate 5s linear infinite",
        gradient: "gradient 5s linear infinite",
      },
      keyframes: {
        rotate: {
          "0%": { transform: "rotate(0deg) scale(10)" },
          "100%": { transform: "rotate(-360deg) scale(10)" },
        },
        gradient: {
          to: {
            "background-position": "200% center",
          },
        },
      },
    },
    container: {
      center: true,
      padding: {
        DEFAULT: '1.1rem',
        sm: '1.1rem',
        md: '1.3rem',
        lg: '1.5rem',
        xl: '1.2rem',
        '2xl': '1rem',
      },
      screens: {
        sm: '640px',
        md: '768px',
        lg: '1000px',
        xl: '1280px',
        '2xl': '1520px',
      },
    },
  },
  plugins: [
    plugin(function ({ matchUtilities, theme }) {
      matchUtilities(
        {
          'bg-grid': (value: string) => ({
            backgroundImage: `url("${svgToDataUri(
              `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="32" height="32" fill="none" stroke="${value}"><path d="M0 .5H31.5V32"/></svg>`
            )}")`,
          }),
        },
        {
          values: flattenColorPalette(theme('backgroundColor')) as Record<string, string>,
          type: 'color',
        }
      )
    }),
  ],
} satisfies Config;
