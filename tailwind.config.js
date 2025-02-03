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
        secoundTextColor: "#003F62",
        thirdTextColor: "#232323",
        forthTextColor: "#434343",
        fifthTextColor: "#4A4A4A",

        borderColor: "#ADADAD",
        secoundBorderColor: "#BDBDBD",
        thirdBorderColor: "#B6B6B6",
        forthBorderColor: "#BABABA",

        cartProductCardTextColor: "#2F2F2F",
        navbarLinkTextColor: "#3A3A3A",
        latestNewsBorderColor: "#C8C8C8",
        footerSectionTextColor: "#D9D9D9",
        ProductDetailsBgColor: "#EEEEEE",
        allCategroriesTextColor: "#595959",
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
