/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      fontFamily: {
        sora: ['Sora', 'sans-serif']
      },
      fontSize: {
        heading: '2.5rem',
        body: '1.25rem',
        'sm-body': '1rem',
        'list-items': '.875rem'
      },
      colors: {
        yellow: '#F5C044',
        green: '#4CA154',
        dark: '#18181B',
        gray: '#52525A',
        'light-gray': '#D4D4D8',
        'semi-white': '#FAFAF9'
      }
    }
  },
  plugins: []
}
