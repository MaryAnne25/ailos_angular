/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [],
  theme: {
    fontFamily: {
      'sans': ['"Exo 2"', '"Open Sans"', 'sans-serif']
    },
    extend: {
      colors: {
        primary: '#165C7D',
        secondary: '#FFA300',
        background: '#E8EFF2',
        aiLightBlue: '#009ED0',
        aiGreen: '#00C246',
        aiMidBlue: '#007D8A',
        aiCritRed: '#C13018',
        aiCritOrange: '#FFA300',
        aiCritYellow: '#FCD610',
        aiCritGreen: '#00C246',
        aiCritBlue: '#009ED0',
        aiGrey: {
          100: '#E7EEF1',
          300: '#C6CED1',
          500: '#A7B0B5',
          700: '#889499',
          900: '#040F14'
        },
        aiBlue: {
          100: '#D0DEE5',
          200: '#A2BECB',
          300: '#739DB1',
          500: '#457D97',
          700: '#165C7D',
          800: '#013F5C',
          900: '#012F44'
        },
        aiOrange: {
          100: '#FFEDCC',
          200: '#FFDA99',
          300: '#FFC866',
          500: '#FFB533',
          700: '#FFA300',
          800: '#C37D00'
        }
      },
      fontSize: {
        headerPrimary: '36px',
        headerSecondary: '32px',
        headerTertiary: '28px',
        headerSubtitle: '24px',
        pageTitle: '22px',
        panelTitle: '16px',
        sectionTitle: '14px',
        cardTitle: '14px',
        defaultBody: '14px',
        subtitleBody: '11px',
        label: '14px'
      },
    },
  },
  plugins: [],
}
