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
      borderGray: 'rgba(180,180,180,.25)',
      gray: '#D9D9D9',
      accentDark: '#1E2337',
      accentWrapper: 'rgba(30, 35, 55, .8)',
      accentPurple: {
        light: '#8625CD',
        DEFAULT: '#8613CD',
        dark: '#8600CD',
      },
      lightGray: '#F2F2F2',
      secondaryText: '#D6D6D6',
      dark: '#030303',
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
          borderBottomLeftRadius: '8px',
          borderBottomRightRadius: '8px',
        },
        '.coverShadow': {
          background: 'linear-gradient(270deg, rgba(0, 0, 0, 0) 0%, #1E2337 70.78%);',
        },
        '.cover': {
          background:
            'radial-gradient(158.18% 131.57% at 151.18% 50%, rgba(0, 0, 0, 0) 0%, #1E2337 96.4%);',
        },
        '.rightArrowGradient': {
          background: 'linear-gradient(270deg, #1e2337 25%,rgba(0, 0,0,0))',
        },

        '.leftArrowGradient': {
          background: 'linear-gradient(90deg, #1e2337 25%,rgba(0, 0,0,0))',
        },

        '.leftGradient': {
          content: '',
          display: 'block',
          height: '100%',
          pointerEvents: 'none',
          position: 'absolute',
          top: 0,
          width: '90px',
        },
        '.blockGradient': {
          background:
            'radial-gradient(100% 73.05% at 100% 50%, rgba(0, 0, 0, 0) 54.69%, #1E2337 100%);',
        },
      });
    }),
  ],
};
