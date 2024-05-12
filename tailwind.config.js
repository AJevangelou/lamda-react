/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {

      colors: {
        background:{
          100: '#fafbfc'
        },
        border:{
          100: '#d7dce7'
        },
        foreground:{
          100: '#1e42a1'
        },
        gray: {
          200: "#D5DAE1"
        },
        black: {
          DEFAULT: "#000",
          500: "#1D2235"
        },
        blue: {
          500: "#2b77e7"
        }
      },
      letterSpacing: {
        widest: '1.05em',
        wider: '1em',
      },
      fontFamily: {
        worksans: ["Work Sans", "sans-serif"],
        poppins: ['Poppins', "sans-serif"]
      },
      boxShadow: {
        card: '0px 35px 60px -15px rgba(0.1, 0.1, 0, 0.1)'
      }
    },
  },
  plugins: [
		require("tailwindcss-animate"),
	],
}

