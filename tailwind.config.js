module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    display: ['responsive', 'group-hover', 'group-focus'],
    fontWeight: ['responsive', 'hover', 'focus', 'active', 'group-hover'],
    animation: ['hover', 'focus'],
    extend: {},
  },
  plugins: [require('@tailwindcss/forms')],
}
