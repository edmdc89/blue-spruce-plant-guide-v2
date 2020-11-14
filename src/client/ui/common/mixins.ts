import { css, SerializedStyles } from '@emotion/react';

export const addBackgroundImage = (url: string): SerializedStyles => css`
  background-size: cover;
  height: 24rem;
  background-blend-mode: screen;
  background-image: url(${url});
  margin: 1rem 1rem;
  background-position: center center;
`;

export const clearfix = css`
  &::after {
    content: '';
    display: table;
    clear: both;
  }
`;
