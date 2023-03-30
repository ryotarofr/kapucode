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
        0: "0.5px",
        DEFAULT: "0.5px",
      },
      container: {
        center: true,
      },
      extend: {},
      fontFamily: {
        apple: ["San Francisco"],
        poppins: ["Poppins"],
        proxima: ["Proxima Nova"],
      },
      future: {
        hoverOnlyWhenSupported: true,
      },
      screens: {
        // => @media (min-width: 1280px) { ... }
        "2xl": "1536px",

        // => @media (min-width: 768px) { ... }
        lg: "1025px",

        // => @media (min-width: 640px) { ... }
        md: "768px",

        // "c-laptop": { max: "1080px", min: "880px" },
        // desktop: { min: "1500px" },
        // laptop: { max: "1900px", min: "874px" },
        // "mini-laptop": { max: "874px", min: "750px" },
        // mobile: { max: "500px", min: "100px" },
        // tablet: { max: "750px", min: "500px" },
        sm: "640px",

        // => @media (min-width: 1024px) { ... }
        xl: "1280px",
        // => @media (min-width: 1536px) { ... }
      },
    },
  },
};
