/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        'accent-light': '#ffbc7d',
        'accent': '#faa353',
        'accent-dark': '#c67729',
      },
    },
  },
  plugins: [],
};
