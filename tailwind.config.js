/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: "#0a1628",
          light: "#142240",
          dark: "#060e1a",
        },
        graphite: {
          DEFAULT: "#2d3436",
          light: "#636e72",
          muted: "#b2bec3",
        },
        accent: {
          DEFAULT: "#00a3e0",
          dark: "#0088bb",
          light: "#33b5e6",
        },
        surface: {
          DEFAULT: "#ffffff",
          muted: "#f5f7fa",
          elevated: "#ffffff",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
      fontSize: {
        "display-xl": ["4.5rem", { lineHeight: "1.05", letterSpacing: "-0.02em", fontWeight: "700" }],
        "display-lg": ["3.75rem", { lineHeight: "1.08", letterSpacing: "-0.02em", fontWeight: "700" }],
        "display-md": ["3rem", { lineHeight: "1.1", letterSpacing: "-0.02em", fontWeight: "700" }],
      },
      boxShadow: {
        card: "0 1px 3px rgba(10, 22, 40, 0.04), 0 8px 24px rgba(10, 22, 40, 0.06)",
        "card-hover": "0 4px 12px rgba(10, 22, 40, 0.08), 0 20px 48px rgba(10, 22, 40, 0.12)",
        header: "0 4px 30px rgba(10, 22, 40, 0.08)",
        glow: "0 0 40px rgba(0, 163, 224, 0.15)",
      },
      animation: {
        "fade-in": "fadeIn 0.6s ease-out forwards",
        "slide-up": "slideUp 0.6s ease-out forwards",
        "pulse-slow": "pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      transitionTimingFunction: {
        corporate: "cubic-bezier(0.22, 1, 0.36, 1)",
      },
    },
  },
  plugins: [],
};
