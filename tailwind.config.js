/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./layouts/**/*.{js,ts,jsx,tsx}",
    "./contexts/**/*.{js,ts,jsx,tsx}",
  ],
  plugins: [],
  theme: {
    theme: {
      borderWidth: {
        DEFAULT: "0.5px",
      },
      container: {
        center: true,
      },
      extend: {},
      fontFamily: {
        ProximaBold: ["ProximaNova Bold"],
        ProximaRegular: ["ProximaNova Regular"],
      },
      future: {
        hoverOnlyWhenSupported: true,
      },
      screens: {
        desktop: {
          min: "1280px",
        },
        laptop: {
          max: "1280px",
          min: "874px",
        },
        lg: "1024px", // ここは追加
        md: "768px", // ここは追加
        "mini-laptop": {
          max: "874px",
          min: "750px",
        },
        mobile: {
          max: "550px",
          min: "100px",
        },
        sm: "640px", // ここを変更
        tablet: {
          max: "750px",
          min: "550px",
        },
        xl: "1280px", // ここは追加
      },
    },
  },
};
