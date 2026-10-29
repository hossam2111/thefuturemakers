/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#0057a8',
          hover: '#004687',
          container: '#d9e8fb',
          fixed: '#b9d6f8',
          'fixed-dim': '#9bc4f5',
        },
        secondary: {
          DEFAULT: '#00a896',
          container: '#e0f6f3',
          'fixed-dim': '#008c7c',
        },
        warning: '#fcb900',
        tertiary: '#028090',
        surface: {
          DEFAULT: '#fcfcfc',
          container: '#f0f4f8',
          'container-low': '#f8fafd',
          'container-lowest': '#ffffff',
        },
        'on-surface': '#1b1c1e',
        'on-surface-variant': '#44474e',
        'outline-variant': '#c4c7cf',
        outline: '#74777f',
      },
      fontFamily: {
        headline: ['DIN Next LT Arabic', 'Cairo', 'sans-serif'],
        body: ['Cairo', 'Plus Jakarta Sans', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
