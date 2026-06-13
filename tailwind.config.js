/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        // Muted slate blue accent — #4A6FA5
        accent: {
          DEFAULT: "#4A6FA5",
          fg: "#ffffff",
          soft: "#EEF2F8",
          ring: "#4A6FA5",
        },
        ink: {
          DEFAULT: "#1A1F29", // near-black headings
          soft: "#475467", // body gray
          faint: "#98A2B3", // muted/labels
        },
        line: "#E7E9EE", // hairline borders
      },
      fontFamily: {
        sans: [
          "Inter",
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
      },
      letterSpacing: {
        tightish: "-0.01em",
      },
      transitionTimingFunction: {
        smooth: "cubic-bezier(0.22, 1, 0.36, 1)",
      },
    },
  },
  plugins: [],
};
