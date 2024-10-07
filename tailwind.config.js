module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        custom: ['MyCustomFont', 'sans-serif'],
      },
      colors: {
        customGreen: 'rgb(197, 248, 42)', 
        customGrey: 'rgb(51, 51, 51)', 
        customBlack: 'rgb(31, 31, 31)',
        customDarkBlack: 'rgb(20, 20, 20)',
      },
    },
  },
  plugins: [],
};