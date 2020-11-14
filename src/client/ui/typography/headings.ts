import { css, SerializedStyles } from '@emotion/react';

type HeaderLevels = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';

const key = {
  h1: '4.1rem',
  h2: '3.6rem',
  h3: '2.7rem',
  h4: '2.4rem',
  h5: '2.1rem',
  h6: '1.8rem',
};

export const headingStyles = (
  type: HeaderLevels,
  color = 'rgba(251, 241, 199, 1)',
): SerializedStyles => css`
  color: ${color};
  font-size: ${key[type]};
  padding: 0.3rem;
  margin: 0.5rem auto;
  font-family: 'Fira Sans', sans-serif;
`;
