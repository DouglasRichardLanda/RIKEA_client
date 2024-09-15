/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      xs: '320px',
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    colors: {
      'custom-bg': '#E0E0E0',
      'custom-dark-green': '#013220',
      'custom-dark-brown': '#4b2e00'
    },
    fontFamily: {
      sans: ['Graphik', 'sans-serif'],
    },
    extend: {},
    plugins: [],
  }
}

