/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{html,js,jsx,css}"],
    theme: {
        extend: {
            fontFamily: {
                sans: ['Gilroy', 'sans-serif']
            },
            colors: {
                "fill": {
                    "budle-purple": "#654DF6",
                    "bulde-dark-purple": "#4E16C5",
                    "budle-white": "#FFFFFF",
                },
                "text": {
                    "bulde-gray": "#B6C1CE",
                    "budle-black": "#181818"
                },
                "background": {
                    "budle-light-blue": "#EEF5F9"
                },
                "message": {
                    "budle-correct": "#0ACF1E",
                    "budle-wrong": "#FF406E"
                }
            }
        },
    },
    plugins: [
        require('tailwind-scrollbar-hide'),
        require('tailwindcss'),
        require('autoprefixer')
    ]
}

