import { Theme } from 'styled-system';

export const colors = {
  darkBlue: '#18232B',
  white: '#F8F8F8',
  offWhite: '#F1F1F2',
  offBlack: '#4C4A5C',
  blue: '#008fc8',
  lightBlue: '#52CAFF',
  lightBlueGradient: 'linear-gradient(90deg, #3DBBFA 0%, #246B8F 100%)',
  socialBackground: '#3C3D4E',
  gray: '#585c62',
};

const theme: Theme = {
  breakpoints: ['40em', '52em', '64em'],

  fontSizes: [10, 12, 14, 16, 18, 20, 22, 24, 28, 32, 48, 64, 72],

  space: {
    ...[0, 2, 4, 8, 16, 32, 64, 128, 256, 512],
    4.5: 24,
    5.5: 48,
    6.5: 96,
  },

  sizes: {
    maxContentWidth: '1200px',
  },

  colors,

  shadows: {
    featureCard: '0 1px 7px 1px rgba(0,0,0,0.09)',
  },

  buttons: {
    gradient: {
      background: colors.lightBlueGradient,
      backgroundSize: '105%',
      backgroundPosition: 'center',
      color: colors.offWhite,
    },

    outline: {
      background: 'transparent',
      color: colors.offWhite,
      borderColor: colors.offWhite,
    },

    outlineSmall: {
      background: 'transparent',
      color: colors.offWhite,
      borderColor: colors.offWhite,
      padding: '8px 16px 7px',
      fontWeight: 'bold',
      fontSize: '10px',
    },

    white: {
      background: colors.offWhite,
      color: colors.blue,
    },
  },
};

export default theme;
