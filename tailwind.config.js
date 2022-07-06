module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'green': '#ccff00'
      }
    },
  },
  variants: {
    extend: {
      // ...
      scale: ['active', 'group-hover'],
    }
  },
  plugins: [],
}