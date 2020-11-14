import { css, SerializedStyles } from '@emotion/react';
import { stripedLowerBorder } from '../common/borders';

export const linkBaseStyles = css`
  color: rgba(251, 241, 199, 1);
  text-decoration: none;

  &:visited {
    color: rgba(251, 241, 199, 1);
  }
`;

export const activeLinkStyles = (
  borderSize: string,
  color1: string,
  color2: string,
): SerializedStyles => css`
  ${linkBaseStyles}

  &:hover :not(.active) {
    color: rgba(235, 219, 178, 1);
  }

  &.active {
    ${stripedLowerBorder(borderSize, color1, color2)}
  }
`;
