/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        forest: {
          50: '#f2fbf6',
          100: '#dff6ea',
          200: '#b9ebd1',
          300: '#82d8ae',
          400: '#4fbe87',
          500: '#2ba468',
          600: '#1f8554',
          700: '#1a6a46',
          800: '#17563a',
          900: '#134731',
        },
        moss: {
          50: '#f6fbf4',
          100: '#e9f6e1',
          200: '#d2eebe',
          300: '#afdf8a',
          400: '#86c95a',
          500: '#63ad35',
          600: '#4d8a28',
          700: '#3e6b22',
          800: '#32551f',
          900: '#2b471d',
        },
      },
      boxShadow: {
        soft: '0 8px 30px rgba(15, 23, 42, 0.08)',
        lift: '0 12px 40px rgba(15, 23, 42, 0.12)',
      },
      borderRadius: {
        xl: '1rem',
        '2xl': '1.25rem',
      },
    },
  },
  plugins: [],
}

