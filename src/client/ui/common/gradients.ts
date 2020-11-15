import { css } from '@emotion/react';
import { theme } from '../theme';

export const primaryGradient = css`
  background-image: linear-gradient(
    to bottom right,
    ${theme.colors.primary},
    ${theme.colors.primaryAccent}
  );
`;

export const secondaryGradient = css`
  background-image: linear-gradient(
    to bottom right,
    ${theme.colors.secondary},
    ${theme.colors.secondaryAccent}
  );
`;

export const lightGradient = css`
  background-image: linear-gradient(
    to bottom right,
    rgba(251, 241, 199, 1),
    rgba(235, 219, 178, 1)
  );
`;
