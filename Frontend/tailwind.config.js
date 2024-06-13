/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        caveat: ["Caveat", "cursive"],
        shadows:["Shadows Into Light" ,"cursive"],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      },
      colors :{
        cyen:'#014854',
      }
    },
  },
  plugins: [],
}

