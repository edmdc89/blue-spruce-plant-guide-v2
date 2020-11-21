import { css, Theme } from '@emotion/react';

export const theme: Theme = {
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

export const globalStyles = css`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    font-size: 62.5%;
  }

  body {
    box-sizing: border-box;
    overflow-y: hidden;
    font-family: 'Ubuntu', sans-serif;
    background: ${theme.colors.primary};
    height: 100vh;
    overflow-y: scroll;
  }
`;
