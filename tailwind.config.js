/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{html,js}"],
  theme: {
    fontFamily: {
      'poppins': ["Poppins"],
      'bebas'  : ["Bebas Neue"]
    },
    extend: {
      colors :{
        primary : '#A4F7BF',
        secondary : '#08B987',
        dark : '#121415',
        dark_2 : '#181A1B',
        dark_3 : '#242424',
        tag_bg : '#E7E7E7',
        tag_bg_2 : '#122B39',
        tag_color : '#666666',
        tag_color_2 : '#58DAC7',  
        gray_font : '#B3B3B3',
      }
    },
  },
  plugins: [],
}

