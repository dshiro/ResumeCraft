/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'selector',
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",],
  theme: {
    extend: {
      fontFamily: {
        'fira-mono': ['"Fira Mono"', 'monospace'],
      },
    },
  },
  plugins: [],
}

