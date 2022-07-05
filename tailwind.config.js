/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
        extend: {
            fontFamily: {
                Signika: "Signika",
                Kanit: "Kanit",
                Nunito: "Nunito"
            },
            colors : {
                beige : "#fdfffc",
                bleufoncer : "#235789",
                rougefoncer : "#c1292e",
                jaune : "#f1d302",
                blackviolet : "#161925"
            }
        },
    },
    plugins: [],
}
