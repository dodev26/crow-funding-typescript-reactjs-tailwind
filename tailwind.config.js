/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      screens: {
        xs: '360px',
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1280px'
      },
      fontFamily: {
        primary: ['Epilogue', 'sans-serif']
      },
      colors: {
        primary: '#1DC071',
        secondary: '#6F49FD',
        text1: '#171725',
        text2: '#4B5264',
        text3: '#808191',
        text4: '#B2B3BD',
        'icon-color': '#A2A2A8',
        white: '#FFFFFF',
        whiteSoft: '#FCFBFF',
        graySoft: '#FCFCFC',
        grayf3: '#f3f3f3',
        strock: '#F1F1F3',
        lite: '#FCFCFD',
        error: '#EB5757',
        darkbg: '#13131A',
        darkSecondary: '#1C1C24',
        softDark: '#22222C',
        darkSoft: '#24242C',
        darkStroke: '#3A3A43',
        darkRed: '#422C32'
      },
      boxShadow: {
        sdprimary: '10px 10px 20px rgba(211, 211, 211, 0.25)',
        sdsecondary: '6px 8px 14px 0px rgba(231, 228, 228, 0.10), 6px 8px 14px 0px rgba(231, 228, 228, 0.10)'
      }
    }
  },
  plugins: [require('@tailwindcss/line-clamp')]
}
