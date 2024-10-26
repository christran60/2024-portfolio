/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontFamily: {
        sans: ["var(--font-montserrat)"],
      },
      animation: {
        "fade-up": "fadeUp 0.5s ease-in-out forwards",
        "fade-up-delay-1": "fadeUp 0.5s ease-in-out forwards 0.1s",
        "fade-up-delay-2": "fadeUp 0.5s ease-in-out forwards 0.2s",
        "fade-up-delay-3": "fadeUp 0.5s ease-in-out forwards 0.3s",
        "fade-up-delay-4": "fadeUp 0.5s ease-in-out forwards 0.4s",
        "fade-up-delay-5": "fadeUp 0.5s ease-in-out forwards 0.5s",
        "fade-up-delay-6": "fadeUp 0.5s ease-in-out forwards 0.6s",
        "fade-up-delay-7": "fadeUp 0.5s ease-in-out forwards 0.7s",
        "fade-up-delay-8": "fadeUp 0.5s ease-in-out forwards 0.8s",
        "fade-up-delay-9": "fadeUp 0.5s ease-in-out forwards 0.9s",
        "fade-up-delay-10": "fadeUp 0.5s ease-in-out forwards 1s",
        "fade-up-delay-11": "fadeUp 0.5s ease-in-out forwards 1.1s",
        "fade-up-delay-12": "fadeUp 0.5s ease-in-out forwards 1.2s",
        "fade-up-delay-13": "fadeUp 0.5s ease-in-out forwards 1.3s",
        "fade-up-delay-14": "fadeUp 0.5s ease-in-out forwards 1.4s",
        "fade-up-delay-15": "fadeUp 0.5s ease-in-out forwards 1.5s",
        "fade-up-delay-16": "fadeUp 0.5s ease-in-out forwards 1.6s",
        "fade-up-delay-17": "fadeUp 0.5s ease-in-out forwards 1.7s",
        "fade-up-delay-18": "fadeUp 0.5s ease-in-out forwards 1.8s",
        "fade-up-delay-19": "fadeUp 0.5s ease-in-out forwards 1.9s",
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(15px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
    },
  },
  plugins: [],
};
