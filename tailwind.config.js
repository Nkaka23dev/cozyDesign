/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'fraunces72ptsupersoft':['Fraunces72ptsupersoft'],
        'fraunces144ptsupersoft':['Fraunces144ptsupersoft'],
        'geomanist':['Geomanist']
      },
      colors:{
        primary:'#e4ded5',
        secondary:'#d4ac8e',
        darkblack:'#223240',
        workColor:'#c47d57',
        happyBgColor:'#223240',
        happyColor:'#000009'
      }
    },
  },
  plugins: [],
}
