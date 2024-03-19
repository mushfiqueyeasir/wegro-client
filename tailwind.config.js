/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
        colors: {
            primary: "#00AE42",
            secondary: "#FF8300",
            primaryBG: "#F9FAFB",
            dark: "#161C24",
            darkSecondary: "#091820",
            darkBG: "#0A151B",
            error: "#D32F2F",
            success: "#089164"
        }
    }
},
  plugins: [require("daisyui")],
  daisyui: {
    themes: ["light"],
  },
}