/** @type {import('tailwindcss').Config} */
export default {
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
        extend: {
            colors: {
                prussianBlue: "#0d283d ",
                oxfordBlue: "#011931",
                greenPantone: "#3bb85d ",
                mediumSeagreen: "#58b872 ",
                honeydew: "#f1fef4 ",
            }
        }
    },
    plugins: []
};
