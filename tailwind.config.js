/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx,css}"],
  theme: {
    extend: {
      colors: {
        // Add custom colors
        whiteColor: '#FFFAFA',
        darkColor:  '#403F3F',
        grayColor:  '#EAEAEA',
        yellowColor:'#F1B416',
        greenColor: '#1ABF48',
        blueColor:  '#15708D',
        redColor:   '#F11623',
      },
      fontFamily: {
        // Add custom fonts
        sans: ['Roboto', 'sans-serif'],
        serif: ['Merriweather', 'serif'],
      },
      spacing: {
        // Add custom spacing
        '72': '18rem',
        '84': '21rem',
      },
    },
  },
  plugins: [],
};
