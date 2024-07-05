/** @type {import('tailwindcss').Config} */
module.exports = {
  content:  ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
    colors:{
      ...require('tailwindcss/colors'),
      Gray900:'#272727',
      Blue900:'#060d1b',
      Yellow:'#f3ff34'
    },
    screens: {
      'sm': '340px', // Small screens (default)
      'md': '768px', // Medium screens (default)
      'lg': '1024px', // Large screens (default)
      'xl': '1280px', // Extra large screens (default)
      // Your custom breakpoint
      'custom': '900px', // Example: Custom breakpoint for 900px wide screens
    },
  },
  plugins: [],
}

