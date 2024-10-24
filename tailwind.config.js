/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        montserrat: ['Montserrat', 'sans-serif'],
      },
    },
    colors: {
      blueForm:"#0367A6",
      BTN:"#32A65A",
      BTNHover:"#228A3C",
      
    
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: ["light"],
  },
}

