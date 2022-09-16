/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    fontFamily: {
      sans: ['Inter', ...defaultTheme.fontFamily.sans],
      display: ['Lexend']
    },
    fontSize: {
      ...defaultTheme.fontSize,
      base: ['1rem', { lineHeight: '1.75rem' }],
      sm: ['0.875rem', { lineHeight: '1.5rem' }],
      lg: ['1.125rem', { lineHeight: '2rem' }],
      '5xl': ['3rem', { lineHeight: '3.5rem' }],
      '4xl': ['2.5rem', { lineHeight: '3.5rem' }],
      '7xl': ['4.5rem', { lineHeight: '1.1' }]
    },
    extend: {
      maxWidth: {
        ...defaultTheme.maxWidth,
        '2xl': '40rem'
      }
    }
  },
  plugins: []
};
