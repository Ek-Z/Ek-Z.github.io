module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'body': '#4e5a66',
        'selected-text': '#E6C0AD',
        'link': '#DD553F',
        'theme': '#DD553F',
        'hover': '#E6C0AD',
        'nav': '#E6C0AD',
        'dark': '#1D262F'
      },
      fontFamily: {
        'poppings': ["'Poppings'", 'sans-serif']
      },
      backgroundImage: {
        'bg': "url('img/bg.jpg')",
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
