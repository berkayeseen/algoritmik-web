/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "./app/**/*.{js,jsx}",
      "./components/**/*.{js,jsx}",
    ],
    theme: {
      extend: {
        colors: {
          'brand-blue': '#1A3C6E',
          'brand-gold': '#D4A017',
          'brand-dark': '#0F172A',
          'brand-bg': '#F8FAFC',
        },
        fontFamily: {
          sans: ['Inter', 'sans-serif'],
        },
      },
    },
    plugins: [],
  }