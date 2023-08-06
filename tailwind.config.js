/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
    //color palette
    colors: {
      "primary-dark": "#2A254B",
      "light-grey": "#F9F9F9",
      "primary-light": "#4E4D93",
      "primary-transparent": "#726E8D",
      "primary-white": "#ffffff",
      "border-dark": "#CAC6DA",
      "border-gray": "#EBE8F4",
    },
    fontSize: {
      "head-2xl": "36pt",
      "head-xl": "32pt",
      "head-lg": "24pt",
      "head-md": "20pt",
      "head-sm": "16pt",
      "head-xs": "14pt",
      "body-lg": "18pt",
      "body-md": "16pt",
      "body-sm": "14pt",
    },
    fontFamily: {
      "font-face": "",
    },
    backgroundImage: {
      "hero-pattern": "url('/images/main-hero.png')",
      "about-hero-1": "url(/images/main_pagehero-image.svg)",
    },
  },
  plugins: [],
};
