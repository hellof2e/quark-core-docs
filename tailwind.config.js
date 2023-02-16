/** @type {import('tailwindcss').Config} */ 
module.exports = {
    purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
    theme: {
      extend: {
        gridRowStart: {
          '8': '8',
          '9': '9',
          '10': '10',
          '11': '11',
          '12': '12',
          '13': '13',
        },
      },
    },
    darkMode: 'class',
    plugins: [],
}