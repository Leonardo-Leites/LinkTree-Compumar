/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.tsx'
  ],
  theme: {
    screens: {
      'md-max': {'max': '767px'},
      'md-min': {'min': '767px'}, 
      'md-mb': {'max': '480px'}
    },
    
    extend: {
      backgroundImage: {
        'pattern01': "url('/src/assets/fachada.jpeg')",
      },
      fontFamily:{
        sans: 'Cabin, sans-serif',
      },
    },
  },
  plugins: [],
}
