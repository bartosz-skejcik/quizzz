/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",

        // Or if using `src` directory:
        "./src/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: "#3b82f6",
                error: "#ef4444",
                warning: "#eab308",
            },
            boxShadow: {
                sharp: "12px 12px 0px 0px rgb(66, 68, 90)",
            },
        },
    },
    plugins: [],
};
