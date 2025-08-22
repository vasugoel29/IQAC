// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'burgundy': '#a7161b',
      },
      maxWidth: {
        '7xl': '1200px',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-100%)' }
        },
        slideLeft: {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(-100%)' }
        }
      },
      animation: {
        'marquee': 'marquee 10s linear infinite',
        'slide-left': 'slideLeft 20s linear infinite'
      },
      spacing: {
        '128': '32rem',
      },
      fontSize: {
        'xxs': '0.625rem',
        '2xl': '1.5rem',
      },
      height: {
        'logo': '60px'
      },
      width: {
        '90': '90%',
      },
      screens: {
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
        '2xl': '1536px',
      },
    },
  },
  variants: {
    extend: {
      scale: ['active', 'group-hover'],
      transform: ['hover', 'focus'],
    },
  },
  plugins: [],
}