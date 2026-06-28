/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        // Warm off-white canvas background (Chronicle-style)
        canvas: "#F7F6F3",
        // Near-black ink
        ink: {
          DEFAULT: "#111110",
          soft: "#52524E",
          faint: "#A0A09A",
        },
        // Visible warm border (slightly darker for clear dividers)
        line: "#C9C8C3",
        // Dark accent for CTA buttons
        accent: {
          DEFAULT: "#111110",
          fg: "#F7F6F3",
          soft: "#EEEDE9",
          muted: "#D4D3CE",
        },
        // Dark footer
        footer: {
          bg: "#111110",
          text: "#A0A09A",
          heading: "#F7F6F3",
        },
        // Mirantic brand colors
        brand: {
          navy: "#0b1220",
          blue: "#1e7fc2",
          cyan: "#46c5f2",
          "mid-blue": "#5ba8e0",
          "dark-blue": "#0d5a9e",
        },
      },
      fontFamily: {
        sans: [
          "Hanken Grotesk",
          "ui-sans-serif",
          "system-ui",
          "-apple-system",
          "Segoe UI",
          "Roboto",
          "sans-serif",
        ],
      },
      maxWidth: {
        content: "72rem",
        prose: "42rem",
      },
      letterSpacing: {
        tightish: "-0.015em",
        tight: "-0.025em",
        tighter: "-0.03em",
      },
      transitionTimingFunction: {
        smooth: "cubic-bezier(0.22, 1, 0.36, 1)",
      },
    },
  },
  plugins: [],
};
