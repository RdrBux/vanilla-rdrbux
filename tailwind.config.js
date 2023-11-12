/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        heading: ['ws', 'Inter', 'sans-serif'],
      },
      colors: {
        lightgreen: '#9FE870',
        darkgreen: '#163300',
        'content-primary': '#0E0F0C',
        'content-secondary': '#454745',
        'content-tertiary': '#6A6C6A',
        'content-link': '#163300',
        'interactive-primary': '#163300',
        'interactive-accent': '#9FE870',
        'interactive-hover': '#80E142',
        'interactive-secondary': '#868685',
        'background-neutral': '#ECEFEB',
        'border-neutral': '#0E0F0C1F',
        'base-dark': '#121511',
      },
    },
  },
  plugins: [],
};
