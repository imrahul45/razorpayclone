/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*"],
  theme: {
    extend:
     {
      keyframes: {
        scroll: {
          '0%': { transform: 'translateY(0%)' },
          '100%': { transform: 'translateY(-100%)' },
        },
      },
      animation: {
        'scroll': 'scroll 7s linear infinite', // You can adjust the duration and other properties as needed
      },
      
      fontFamily:{
      mullish:["Mullish","sans-serif"],
    },
   colors:{
    deepBlue:"#02042a",
    lightBlue:"#2b84ea",
    lightBlue300:"#4b94ed",
    lightBlue500:"#0b72e7",
    greenLight:"#61cea6",
    grayText:"#818597",
    lighGray:"#e2e2e2",
    grayBlue:"#344a6c",
     deepBlueHead:"#162f56",
     gray2:"#525a76",
     
   }, },
  },
  plugins: [],
}