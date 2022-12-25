/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,jsx}' ,
    './components/**/*.{js,jsx}' 
  
  ],
  theme: {
    screens: {
      'sm': '479px',
     

      'md': '768px',
      

      'lg': '990px',
     

      'xl': '1280px',
     

      '2xl': '1536px',
    
    },
    fontFamily: {
      mono: [
        'Proxima Novo',
        ,
      ],
    },
    extend: {},
  },
  plugins: [],
}
