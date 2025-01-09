/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './templates/**/*.html', // Include Django templates
    './static/**/*.js', // Include static JavaScript files
    './src/**/*.{js,jsx,ts,tsx}', // Include any React files if used
],
  theme: {
    extend: {},
  },
  plugins: [],
}

