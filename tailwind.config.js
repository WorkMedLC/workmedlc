module.exports = {
  theme: {
    screens: {
      sm: '601px',
      md: '993px',
      lg: '1201px',
      xl: '1601px',
      // => @media (max-width: 600px) { ... }
      'sm-max': { 'max': '600px' },
      'md-max': { 'max': '992px' },
      'lg-max': { 'max': '1200px' }
    },
    colors: {
      black: 'black',
      white: 'white',
      grey: {
        100: '#f5f5f5',
        200: '#f1f1f1',
        300: '#cccccc',
        400: '#999',
        default: '#666',

        600: '#333333',
        700: '#2e2e2e',
        // 800: '#1A202C'
        
        // 90: '#f5f5f5',
        // 100: '#f3f3f3',
        // 200: '#CCCCCC',
        // 300: '#dddddd',
        // 400: '#999',
        // default: '#666666',
        // 600: '#333333',
        // 700: '#2e2e2e'

      },
      orange: {
        //'#FF3F00
        400: '#f77f65',
        default: '#ff6443',
        600: '#f95533',
      }

    },
    fontSize: {
      72: '4.5rem',
      62: '3.875rem',
      60: '3.75rem',
      58: '3.625rem',
      56: '3.5rem',
      54: '3.375rem',
      52: '3.25rem',
      48: '3rem',
      46: '2.875rem',
      44: '2.75rem',
      42: '2.625rem',
      40: '2.5rem',
      38: '2.375rem',
      36: '2.25rem',
      34: '2.125rem',
      32: '2rem',
      30: '1.875rem',
      28: '1.75rem',
      26: '1.625rem',
      24: '1.5rem',
      22: '1.375rem',
      20: '1.25rem',
      18: '1.125rem',
      16: '1rem',
      14: '0.875rem',
      12: '0.75rem',
      10: '0.625rem'
    },
    fontFamily: {
      'header': ['Yanone Kaffeesatz','sans-serif'],
      'body': ['Lato', 'sans-serif']
    },
  },
  variants: {
    opacity: ['responsive', 'hover']
  },
  plugins: [],
  corePlugins: {
    container: false
  }
}
