const plugin = require('tailwindcss/plugin');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: 'class',
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    colors: {
      accentDark: '#1E2337',
      accentPurple: {
        light: '#8625CD',
        DEFAULT: '#8613CD',
        dark: '#8600CD',
      },
      lightGray: '#F2F2F2',
      secondaryText: '#D6D6D6',
      dark: '#0303030',
      ligth: '#fdfdfd',
    },
    fontFamily: {
      sans: ['Inter', 'sans-serif'],
      serif: ['Merriweather', 'serif'],
    },
    extend: {
      spacing: {
        128: '32rem',
        144: '36rem',
      },
      borderRadius: {
        '4xl': '2rem',
      },
      keyframes: {
        textShadow: {
          '0%, 100%': { textShadow: '0 0 16px rgb(59 130 246 / 50%)' },
          '50%': { textShadow: '0 0 32px rgb(59 130 246 / 50%)' },
        },
        block: {
          '0%': { top: '50%' },
          '100%': { top: '0' },
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    plugin(function ({ addComponents }) {
      addComponents({
        '.menu': {
          background: 'linear-gradient(180deg, #1E2337 26.15%, rgba(30, 35, 55, 0) 100%)',
          borderRadius: '8px',
        },
      });
    }),
  ],
};
