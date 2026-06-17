/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        'brand-bg': '#eac672',
        'brand-bg-2': '#E9C46A',
        'brand-gold': '#D4AF37',
        'brand-brown': '#8B5E34',
        'brand-brown-2': '#6F4E37',
        'brand-text': '#3A2A20'
      },
      fontFamily: {
        sans: ['Montserrat', 'ui-sans-serif', 'system-ui', 'Segoe UI', 'Roboto', 'sans-serif'],
        script: ['"Great Vibes"', 'cursive']
      }
    },
  },
  plugins: [],
}