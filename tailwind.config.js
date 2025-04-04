/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#3D50DF',
        transparent: 'transparent',
        current: 'currentColor',
        'white': '#ffffff',
        'purple': '#3f3cbb',
        'midnight': '#121063',  
        'metal': '#565584',
        'tahiti': '#3ab7bf',
        'silver': '#ecebff',
        'bubble-gum': '#ff77e9',
        'bermuda': '#78dcca',
        'black': '#000',
        'secondary': '#ceaf7f',
      },
      fontFamily: {
      cormorant: ['Cormorant', 'serif'],
      MrDeHaviland: ['Mr De Haviland', 'cursive'],
      Mluvka: ['Mluvka-SemiBold', 'sans-serif'],
      MluvkaRegular: ['Mluvka-Regular', 'sans-serif'],
      MluvkaBold: ['Mluvka-Bold', 'sans-serif'],
      MluvkaLight: ['Mluvka-Light', 'sans-serif'],
      OoohBaby: ['Oooh Baby', 'cursive'],
      },
    },
  },
  plugins: [],
};


