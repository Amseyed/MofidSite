/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        teal: {
          DEFAULT: '#008ea6',
          50: '#e6f7fa',
          100: '#ccf0f5',
          200: '#99e0eb',
          300: '#66d1e0',
          400: '#33c1d6',
          500: '#008ea6',
          600: '#007a8d',
          700: '#006675',
          800: '#00525e',
          900: '#003d47',
        },
        orange: {
          DEFAULT: '#fca311',
          50: '#fef5e7',
          100: '#fdebcf',
          200: '#fad89f',
          300: '#f8c56f',
          400: '#f5b23f',
          500: '#fca311',
          600: '#e08a00',
          700: '#b86e00',
          800: '#905200',
          900: '#683700',
        },
        navy: '#1e293b',
        neutral: {
          bg: '#f8fafc',
          card: '#ffffff',
        },
      },
      fontFamily: {
        sans: ['Vazirmatn', 'Tahoma', 'sans-serif'],
      },
      borderRadius: {
        xl: '0.75rem',
        '2xl': '1rem',
        '3xl': '1.5rem',
      },
      boxShadow: {
        card: '0 2px 8px rgba(30, 41, 59, 0.06)',
        'card-hover': '0 8px 24px rgba(30, 41, 59, 0.12)',
        'card-lg': '0 4px 16px rgba(30, 41, 59, 0.08)',
      },
      keyframes: {
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        'fade-up': 'fade-up 0.5s ease-out',
      },
    },
  },
  plugins: [],
}
