/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'turkish-red': '#E30A17',
        'turkish-blue': '#003F87',
        'turkish-turquoise': '#00C1DE',
        'turkish-gold': '#FFD700',
      },
      fontFamily: {
        sans: ['var(--font-inter)'],
        serif: ['var(--font-merriweather)'],
      },
    },
  },
  plugins: [],
}
