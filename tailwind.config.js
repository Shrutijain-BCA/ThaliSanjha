/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: '#cf2f3c',
        'primary-dark': '#b82734',
      },
    },
  },
  plugins: [],
};