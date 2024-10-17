/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './**/*.{html, js}'
  ],
  theme: {
    extend: {
      'colors': {
        'primary': '#228B22',
        'secondary': '#87CEEB',
        'accent': '#F5F5DC',
        'highlight': '#FFD700',
        'text': '#333333'
      }
    },
  },
  plugins: [],
}

