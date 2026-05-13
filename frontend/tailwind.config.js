/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
      extend: {
        colors:{
          primary:"#2F80ED",
          seeWarnings:"#F1F510",
          save:"#07C400",
          black2:"#1D1D1D",
          gray4: "#BDBDBD",
        }
      },
      screens: {
        xs: "480px", // Custom extra-small screens
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1536px",
      },
    
    },
    plugins: [ require('tailwind-scrollbar-hide')],
  };
  