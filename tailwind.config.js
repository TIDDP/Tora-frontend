/** @type {import('tailwindcss').Config} */
export default {
  content: [
       "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    screens:{
        sm:'480px',
        md: '768px',
        lg:'976px',
    },
    colors: {
        'light-orange': '#FAE0C9',
        'light-pink' : '#FE787F',
        'btn-color': '#30B39F',
        'txt-color': '#000000',
        'logo-color': '#fcb603'
    },
    extend: {
        fontFamily: {
            Poppins: [' Poppins', 'sans-serif'],
        }
    },
  },
  plugins: [],
}
