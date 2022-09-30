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
      accentPurple: '#8613CD',
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
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    plugin(function ({ addComponents }) {
      addComponents({
        '.bgText': {
          backgroundImage: 'url(/src/assets/film-roll.png)',
          backgroundSize: 'contain',
          backgroundColor: 'transparent',
        },
      });
    }),
  ],
};
