/** @type {import('tailwindcss').Config} */

const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
    darkMode: "class",
    content: [
        "./app/**/*.{js,ts,jsx,tsx}",
        "./pages/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",

        // Or if using `src` directory:
        "./src/**/*.{js,ts,jsx,tsx}",
        "./node_modules/react-tailwindcss-datepicker/dist/index.esm.js",
    ],
    theme: {
        screens: {
            sm: "350px",
            md: "1024px",
            lg: "1440px",
            xl: "1536px",
        },
        extend: {
            // fontFamily: {
            //   'sans': ['Inter', ...defaultTheme.fontFamily.sans],
            // },
            keyframes: {
                wave: {
                    "0%": { transform: "translate(0%, 0%)" },
                    "25%": { transform: "translate(130%, 0%)" },
                    "50%": { transform: "translate(260%, 0%)" },
                    "75%": { transform: "translate(130%, 0%)" },
                    "100%": { transform: "translate(0%, 0%)" },
                },
            },

            animation: {
                wave: "wave 1.25s linear infinite",
                gradientWave: "gradientWave 1.25s linear infinite",
            },
        },
    },
    plugins: [
        require("@tailwindcss/typography"),
        require("@tailwindcss/forms"),
    ],
};
