import '@emotion/react';

declare module '@emotion/react' {
  export interface Theme {
    color: {
      primary: string;
      secondary: string;
      primaryAccent: string;
      secondaryAccent: string;
      textDark: string;
      textLight: string;
    };
    borderRadius: string;
    borderSize: string;
    gridGap: string;
  }
}
