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
        274: '68.5rem',
        '111/240': '46.25%'
      },
      colors: {
        primary: '#4B69FD',
        accent: '#FF5613',
        'blue-light': '#BCC7FF',
        'blue-soft': '#EAFAFE80',
        'lavender-soft': '#FCE7F1',
        'orange-soft': '#FEF6E7',
        'red-error': '#F04438',
        'red-error-soft': '#FDA29B',
        'black-transparent': '#000000B2',
        'custom-gray': {
          25: '#FCFCFD',
          50: '#F9FAFB',
          70: '#F6F6F7',
          100: '#F2F4F7',
          200: '#EAECF0',
          300: '#D0D5DD',
          350: '#C8C5C5',
          400: '#98A2B3',
          450: '#808080',
          500: '#667085',
          600: '#475467',
          700: '#344054',
          750: '#242C32',
          800: '#1D2939',
          900: '#101828',
          '300-transparent': '#D0D5DD66',
          '500-transparent': '#66666640',
          '900-transparent': '#1018284D'
        }
      },
      boxShadow: {
        solid: '4px 4px 0px 0px #000000',
        double: '0px 4px 6px -2px #10182808, 0px 12px 16px -4px #10182814',
        heavy: '0px 8px 10px 0px #00000033, 0px 6px 30px 0px #0000001F, 0px 16px 24px 0px #00000024'
      },
      borderRadius: {
        '0.5xl': '0.625rem'
      },
      backgroundImage: {
        'radial-green':
          'radial-gradient(50% 50% at 50% 50%, rgba(0, 237, 81, 0.12) 0%, rgba(0, 237, 123, 0) 100%)',
        'radial-yellow':
          'radial-gradient(50% 50% at 50% 50%, rgba(255, 212, 38, 0.11) 0%, rgba(255, 212, 38, 0) 100%)',
        'radial-red':
          'radial-gradient(50% 50% at 50% 50%, rgba(240, 66, 72, 0.13) 0%, rgba(240, 66, 72, 0) 100%)',
        'linear-green':
          'linear-gradient(to top, #01E17B, #01E17B 50%, #01E17B80 50%, #01E17B00 100%)',
        'linear-yellow':
          'linear-gradient(to top, #FFD21F, #FFD21F 50%, #FFD21F80 50%, #FFD21F00 100%)',
        'linear-red': 'linear-gradient(to top, #F04349, #F04349 50%, #F0434980 50%, #F0434900 100%)'
      },
      keyframes: {
        reduce: {
          '0%': { transform: 'translate(0%)' },
          '100%': { transform: 'translate(-100%)' }
        }
      },
      animation: {
        reduce: 'reduce 8s linear forwards'
      }
    }
  },
  plugins: []
}
