/** @type {import('tailwindcss').Config} */
export default {
  content: [ "./index.html", "./src/**/*.{js,ts,jsx,tsx}" ],
  theme: {
    extend: {
      
        
      fontfamily: {
        poppins: ['Poppins', 'sans-serif'],
      },
      colors: {
        primary: '#f7ba34',
        secondary: '#69a79c', 
        danger: '#e3342f',   
      },
      container: {
        center:true,
        padding:{
          DEFAULT:"1rem",
          sm: "2rem",
          lg: "4rem",
          xl: "5rem",
          "2xl": "6rem",
        },
        },
       },
      },
  
  plugins: [],
  };


