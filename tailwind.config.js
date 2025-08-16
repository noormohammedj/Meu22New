/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#f4f1f8',
          100: '#e7def2',
          200: '#d1bfe6',
          300: '#b69ad7',
          400: '#9a74c9',
          500: '#8157b7',
          600: '#6c4599',
          700: '#57377c',
          800: '#3e2759',
          900: '#27193a',
        }
      },
      borderRadius: { 'xl2': '1.25rem' }
    },
  },
  plugins: [],
}
