import { Theme } from '@emotion/react';

const theme: Theme = {
  colors: {
    primary: 'RGBA(28,49,68,1)',
    primaryAccent: 'rgba(69,133,136,1)',
    secondary: 'RGBA(89,111,98,1)',
    secondaryAccent: 'RGBA(87,116,71,1)',
    textDark: 'rgba(80,73,69,1)',
    textLight: 'rgba(251,241,199,1)',
    offWhite: 'rgba(251,241,199,1)',
    offWhiteAccent: 'rgba(235,219,178,1)',
    gray: 'rgba(146,131,116,1)',
  },
  borderSize: '.3rem',
  borderRadius: '.5rem',
  gridGap: 1.5,
  maxWidth: 110,
  fonts: {
    body: "'Ubuntu', sans-serif",
    heading: "'Fira Sans', sans-serif",
  },
};

export default theme;
