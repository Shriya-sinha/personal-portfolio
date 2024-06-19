/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        allura: ["Allura", "cursive"],
        caveat: ["Caveat", "cursive"],
        shadows:["Shadows Into Light" ,"cursive"],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      },
      colors :{
        cyen:'#00fff2b6',
      }
    },
  },
  plugins: [],
}

