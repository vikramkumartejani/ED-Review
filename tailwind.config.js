/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
     colors:{
      green: '#54B435',
      white: '#FFFFFF',
      darkgray: '#777777',
      black: '#000000',
      lightgreen: '#67E776',
      hover_bg: "rgba(78, 29, 154, 0.30);",
      footer_bg: '#2C272E',
      borderCourse: '#D0D0D0',
      border_color: 'rgba(78, 29, 154, 0.13)',
      reviews_border: "rgba(78, 29, 154, 0.06)",
      hero_bg: '#4E1D9A',
      border_r: '#8A8A8A',
      tab_border: 'rgba(63, 110, 236, 0.13)',
      // hover_bg: 'rgba(78, 29, 154, 0.1)',
      // hero_bg: 'rgba(78, 29, 154, 0. 81)',

     },
     maxWidth: {
      'widthmax': "1440px",
     }
    },
  },
  plugins: [],
}
