/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        primary:"#242a2b",
        secondary:"#808080",
        accent:{
          DEFAULT:"#1cdccf",
          secondary:"#18abbc",
          tertiary:"#90c6cd"
        },
        grey:"#e8f0f1"
      },
      fontFamily:{
        primary:"Poppins"
      },
      boxShadow:{
        custom1:"0px 2px 40px 0px rgba(8,70,78,0.08)",
        custom2:"0px 0px 30 0px rgba(8,73,81,0.06)",
      },
      backgroundImage:{
        services:"url(../../public/assets/img/services/bg.svg)",
        testimoials:"url(../../public/assets/img/testimonials/bg.svg)",
        departemnts:"url(../../public/assets/img/departments/bg.svg)",
        quoteleft:"url(../../public/assets/icons/testimonials/quote-left.svg)",
        quoteright:"url(../../public/assets/icons/testimonials/quote-right.svg)"
      },
    },
  },
  plugins: [],
}

