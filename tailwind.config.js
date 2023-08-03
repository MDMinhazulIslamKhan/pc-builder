/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/Components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {},
    },
  },
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#2aa59d",
          secondary: "#2c8aaa",
          accent: "#bec4cf",
          neutral: "#4d586f",
          bac: "a1d9ed",
          "base-100": "#ffffff",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
};
