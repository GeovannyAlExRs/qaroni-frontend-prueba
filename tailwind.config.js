/** @type {import('tailwindcss').Config} */
module.exports = {
  important: true,
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'not-found': "url('https://firebasestorage.googleapis.com/v0/b/inmueble-ec.appspot.com/o/img-static%2Fbk_404.png?alt=media&token=7fd3876d-38bc-4a4b-98f5-662565dedfe6')",
      }
    },
  },
  plugins: [],
}
