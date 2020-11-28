import { css, SerializedStyles } from '@emotion/react';

export const addBackgroundImage = (url?: string): SerializedStyles => css`
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

export const softShadow = css`
  box-shadow: 0.2rem 0.3rem 1.3rem rgba(40, 40, 40, 0.55);
`;

export const darkShadow = css`
  box-shadow: 0.3rem 0.5rem 1.7rem rgba(40, 40, 40, 0.7);
`;

export const thinShadow = css`
  box-shadow: 0.1rem 0.2rem 0.8rem rgba(40, 40, 40, 0.5);
`;

export const inputFocusShadow = css`
  box-shadow: 0 0 0.5rem 0.3rem rgba(40, 40, 40, 1);
`;
