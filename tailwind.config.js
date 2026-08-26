/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        // Near-black ground, biased toward the brand navy rather than a neutral
        // grey — the whole palette is one hue family so the accent belongs to it.
        canvas: "#060A12",
        raised: "#0D1524",
        ink: {
          DEFAULT: "#EEF2F8",
          soft: "#A2B0C6",
          faint: "#697993",
        },
        line: "#1B2740",
        // On a dark ground the primary button inverts: light fill, dark label.
        accent: {
          DEFAULT: "#EEF2F8",
          fg: "#060A12",
          soft: "#101A2B",
          muted: "#22304A",
        },
        // The footer is the one light block on the site: a deliberate close
        // rather than the page fading out into more of the same dark.
        footer: {
          bg: "#EEF2F8",
          text: "#4A5A72",
          heading: "#0B1220",
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
        // Large editorial serif for display type, set light and tight — the
        // weight is what keeps it from reading as a wedding invitation.
        display: ["Newsreader", "Georgia", "Times New Roman", "serif"],
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
