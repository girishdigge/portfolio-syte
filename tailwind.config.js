/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        syte: {
          primary: '#FFDF16',
          secondary: '#FFE74D',
          red: '#D21F3C',
          black: '#1F1F1F',
          orange: '#f7ca2f',
          orangeLight: '#ffd74d',
        },
      },
    },
  },
  plugins: [],
};
