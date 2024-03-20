/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js}'],
  theme: {
    extend: {
      screens: {
        desktop: '1440px'
      },
      spacing: {
        18: '4.5rem'
      },
      colors: {
        primary: '#4B69FD',
        accent: '#FF5613',
        'custom-gray-25': '#FCFCFD',
        'custom-gray-50': '#F9FAFB',
        'custom-gray-100': '#F2F4F7',
        'custom-gray-200': '#EAECF0',
        'custom-gray-300': '#D0D5DD',
        'custom-gray-400': '#98A2B3',
        'custom-gray-500': '#667085',
        'custom-gray-600': '#475467',
        'custom-gray-700': '#344054',
        'custom-gray-800': '#1D2939',
        'custom-gray-900': '#101828'
      },
      boxShadow: {
        solid: '4px 4px 0px 0px #000000'
      }
    }
  },
  plugins: []
}
