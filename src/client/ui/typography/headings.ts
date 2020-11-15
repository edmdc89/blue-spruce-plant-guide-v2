import { css, SerializedStyles } from '@emotion/react';
import theme from '../common/theme';

type HeaderLevels = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';

interface HeadingOptions {
  italic?: boolean;
  thin?: boolean;
  bodyText?: boolean;
  inverColor?: boolean;
}

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
  options?: HeadingOptions,
): SerializedStyles => {
  return css`
    color: ${options?.inverColor ? theme.colors.textDark : theme.colors.textLight};
    font-size: ${key[type]};
    font-style: ${options?.italic ? 'italic' : 'normal'};
    font-weight: ${options?.thin ? '400' : '700'};
    font-family: ${options?.bodyText ? theme.fonts.body : theme.fonts.heading};
    padding: 0.3rem;
    margin: 0.5rem auto;
  `;
};
