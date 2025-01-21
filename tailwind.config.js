/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        base: '#D29573',
        half: '#D9A17E',
        amazing: '#BE7261',
        ok: '#9F5754',
        tired: '#7D4448',
        sad: '#683842',
        stressed: '#492233',
      },
      fontFamily: {
        montserrat: ['Montserrat', 'sans-serif'],
        yesteryear: ['Yesteryear', 'cursive'],
        libre: ['Libre Barcode 39', 'system-ui'],
      },
    },
  },
  plugins: [],
};
