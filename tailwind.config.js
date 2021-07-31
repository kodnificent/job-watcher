module.exports = {
  mode: 'jit',
  purge: [
    './resources/**/*.html',
    './resources/**/*.js',
    './resources/**/*.vue',
    './resources/**/*.blade.php',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'primary': '#2588BF'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/forms')({
      strategy: 'class'
    })
  ],
}
