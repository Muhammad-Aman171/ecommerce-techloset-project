/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", //Include all React files in the src folder
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      colors: {
        primary: "#EDA415",
        textColor: "#1B5A7D",
        borderColor: "#ADADAD",
      },
      screens: {
        xs: "380px",
        sm: "500px",
        md: "768px",
        lg: "1024px",
        xl: "1130px",
      },
    },
  },
  plugins: [],
};
