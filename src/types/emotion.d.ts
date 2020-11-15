import '@emotion/react';

declare module '@emotion/react' {
  export interface Theme {
    colors: {
      primary: string;
      secondary: string;
      primaryAccent: string;
      secondaryAccent: string;
      textDark: string;
      textLight: string;
    };
    borderRadius: string;
    borderSize: string;
    gridGap: number;
    maxWidth: number;
  }
}
