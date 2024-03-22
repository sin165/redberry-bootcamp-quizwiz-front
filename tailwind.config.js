/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js}'],
  theme: {
    extend: {
      screens: {
        desktop: '1440px'
      },
      fontFamily: {
        raleway: ['Raleway', 'sans-serif']
      },
      fontSize: {
        '7.5xl': ['5rem', '3.5rem']
      },
      spacing: {
        18: '4.5rem',
        30: '7.5rem',
        43: '10.75rem',
        85: '21.25rem',
        107: '26.75rem',
        118: '29.5rem',
        121: '30.375rem',
        160: '40rem',
        164: '41rem',
        220: '55rem',
        274: '68.5rem'
      },
      colors: {
        primary: '#4B69FD',
        accent: '#FF5613',
        'custom-gray': {
          25: '#FCFCFD',
          50: '#F9FAFB',
          100: '#F2F4F7',
          200: '#EAECF0',
          300: '#D0D5DD',
          400: '#98A2B3',
          450: '#808080',
          500: '#667085',
          600: '#475467',
          700: '#344054',
          800: '#1D2939',
          900: '#101828',
          '300-transparent': '#D0D5DD66',
          '500-transparent': '#66666640'
        }
      },
      boxShadow: {
        solid: '4px 4px 0px 0px #000000'
      }
    }
  },
  plugins: []
}
