const defaultTheme = require("tailwindcss/defaultTheme")

module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["poppins Sans", ...defaultTheme.fontFamily.sans],
        montserrat: ["montserrat Sans", ...defaultTheme.fontFamily.sans],
        // "Josefin": ["Josefin Sans", ...defaultTheme.fontFamily.sans],
        // sans: ['Russo One', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}
