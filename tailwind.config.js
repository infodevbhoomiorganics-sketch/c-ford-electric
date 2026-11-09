/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        navy: {
          50: '#eef2f8',
          100: '#d4dde9',
          200: '#a8bcd2',
          300: '#7c9bba',
          400: '#537aa1',
          500: '#345987',
          600: '#234570',
          700: '#16365c',
          800: '#0a1f44',
          900: '#06152f',
          950: '#030c1c',
        },
        gold: {
          50: '#fffdf0',
          100: '#fff8d6',
          200: '#ffefa8',
          300: '#ffe270',
          400: '#ffcf2e',
          500: '#f5b400',
          600: '#d99a00',
          700: '#a66e00',
          800: '#6f4a00',
          900: '#3d2800',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'Segoe UI', 'Roboto', 'sans-serif'],
        display: ['Poppins', 'Inter', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        card: '0 1px 3px rgba(10,31,68,0.08), 0 8px 24px -8px rgba(10,31,68,0.18)',
        cardHover: '0 4px 12px rgba(10,31,68,0.12), 0 18px 40px -12px rgba(10,31,68,0.28)',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(16px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideIn: {
          '0%': { opacity: '0', transform: 'translateX(-12px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        pulseRing: {
          '0%': { boxShadow: '0 0 0 0 rgba(245,180,0,0.5)' },
          '70%': { boxShadow: '0 0 0 14px rgba(245,180,0,0)' },
          '100%': { boxShadow: '0 0 0 0 rgba(245,180,0,0)' },
        },
      },
      animation: {
        fadeUp: 'fadeUp 0.6s ease-out both',
        slideIn: 'slideIn 0.5s ease-out both',
        pulseRing: 'pulseRing 2s infinite',
      },
    },
  },
  plugins: [],
};
