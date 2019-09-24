 //let first = '#333D51'; let second = '#CBD0D8'; let third = '#D3AC2B'; let fourth = '#F4F3EA';
 //let first = '#354649'; let second = '#6C7A89'; let third = '#A3C6C4'; let fourth = '#E0E7E9';
 //let first = '#433E49'; let second = '#928490'; let third = '#DBC1AD'; let fourth = '#F3E8EB';
 //let first = '#acb7ae'; let second = '#82716e'; let third = '#e4decd'; let fourth = '#c2b490';
 //let first = '#3a4660'; let second = '#c9af98'; let third = '#ed8a63'; let fourth = '#845007';
 let first = '#ff6443'; let second = '#f77f65'; let third = '#333D51'; let fourth = '#CBD0D8';

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
      // Scholar: 333D51 / D3AC2B / CBD0D8 / F4F3EA
      // Harbor: 354649 / 6C7A89 / A3C6C4 / E0E7E9
      // Pebble: 433E49 / 928490 / DBC1AD / F3E8EB
      trans: 'transparent',
      first: first,
      second: second,
      third: third,
      fourth: fourth,
      black: 'black',
      white: 'white',
      'color-1': '#32325d',
      'color-2': '#525f7f',
      grey: {
        default: '#f5f9fc',
        200: '#dfe4eb',
        300: '#c6c9d4',
        400: '#8899ab'
      }
      // grey: {
      //   100: '#f5f5f5',
      //   200: '#f1f1f1',
      //   300: '#cccccc',
      //   400: '#999',
      //   default: '#666',

      //   600: '#333333',
      //   700: '#2e2e2e',
      //   // 800: '#1A202C'
        
      //   // 90: '#f5f5f5',
      //   // 100: '#f3f3f3',
      //   // 200: '#CCCCCC',
      //   // 300: '#dddddd',
      //   // 400: '#999',
      //   // default: '#666666',
      //   // 600: '#333333',
      //   // 700: '#2e2e2e'

      // },
      // orange: {
      //   //'#FF3F00
      //   400: '#f77f65',
      //   default: '#ff6443',
      //   600: '#f95533',
      // }

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
