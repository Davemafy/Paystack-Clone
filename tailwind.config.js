/** @type {import('tailwindcss').Config} */
export default {
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
        extend: {
            screens: {
                sms: "350px"
            },
            fontFamily: {
                graph: ["Graphic", "system-ui", "sans-serif"],
                roboto: ["Roboto", "system-ui", "sans-serif"],
                boing: ["Boing", "system-ui", "sans-serif"]
            },
            colors: {
                prussianBlue: "#0d283d ",
                oxfordBlue: "#011931",
                greenPantone: "#3bb85d ",
                mediumSeagreen: "#58b872 ",
                honeydew: "#f1fef4 ",
                mintCream: "#F7FFFF ",
                cerulean: "15A0CF ",
                ceruleanlh: "#0BA4DC ",
                aliceBlue: "#EBF6FC "
            }
        }
    },
    plugins: []
};
