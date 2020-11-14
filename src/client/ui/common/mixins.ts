import { css, SerializedStyles } from '@emotion/react';

export const addBackgroundImage = (url: string): SerializedStyles => css`
  background-size: cover;
  height: 24rem;
  background-blend-mode: screen;
  background-image: url(${url});
  background-position: center center;
  padding: 0.3rem;
  border-radius: 0.3rem;
`;

export const clearfix = css`
  &::after {
    content: '';
    display: table;
    clear: both;
  }
`;
