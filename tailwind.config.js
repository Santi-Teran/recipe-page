/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "Eggshell": 'hsl(30, 54%, 90%)',
        "Nutmeg": 'hsl(14, 45%, 36%)',
        "Raspberry": 'hsl(332, 51%, 32%)',
        "Rose": 'hsl(330, 100%, 98%)',
        "Grey": 'hsl(30, 18%, 87%)',
        "Brown": 'hsl(30, 10%, 34%)',
        "Charcoal": 'hsl(24, 5%, 18%)',
      },
    },
  },
  plugins: [],
};
