/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",         // ← dùng cho Vite
    "./src/**/*.{js,ts,jsx,tsx}",  // ← quét các file React
  ],
  theme: {
    extend: {
      fontFamily: {
        ibm: ['"IBM Plex Sans"', 'sans-serif'],
        greatVibes: ['Great Vibes', 'cursive'],
      },
    },
  },
  plugins: [],
};
