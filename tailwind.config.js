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
      backgroundImage: {
        camouflage: "url(/camouflage.png)",
      },
      fontFamily: {
        heading: ["Orbitron", "sans-serif"],
        content: ["Marcellus", "serif"],
      },
    },
  },
  plugins: [],
};
