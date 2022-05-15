const colors = require('tailwindcss/colors');
module.exports = {
  content: [
    './components/**/*.tsx',
    './pages/**/*.tsx',
    './styles/globals.css',
  ],
  theme: {
    extend: {},
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      black: colors.black,
      white: colors.white,
      gray: colors.gray,
      indigo: colors.indigo,
      red: colors.rose,
      yellow: colors.amber,
      pink: colors.pink,
      primary: 'var(--primary-color)',
      background: 'var(--background-color)',
      'color-6': 'var(--color-6)',
      'color-5': 'var(--color-5)',
      'color-4': 'var(--color-4)',
      'color-3': 'var(--color-3)',
      'color-2': 'var(--color-2)',
      'color-1': 'var(--color-1)',
      'facebook-blue': 'var(--facebook-blue)',
      'google-red': 'var(--google-red)',
      'color-white': 'var(--color-white)',
    },
  },
  plugins: [],
};
