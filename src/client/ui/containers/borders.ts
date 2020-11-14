import { css, SerializedStyles } from '@emotion/react';

export const stripedLowerBorder = (
  borderSize: string,
  color1: string,
  color2: string,
): SerializedStyles => css`
  padding: ${borderSize};
  border-bottom: ${borderSize} solid transparent;
  border-radius: 0.5rem;
  box-shadow: 0.3rem 0.3rem 2.8rem rgba(60, 56, 54, 0.3);
  background: radial-gradient(${color1}, ${color2}) padding-box,
    repeating-linear-gradient(
        45deg,
        rgba(211, 134, 155, 1) 0,
        rgba(211, 134, 155, 1) 12.5%,
        rgba(254, 128, 25, 1) 0,
        rgba(254, 128, 25, 1) 25%,
        rgba(251, 73, 52, 1) 0,
        rgba(251, 73, 52, 1) 37.5%,
        rgba(250, 189, 47, 1) 0,
        rgba(250, 189, 47, 1) 50%
      )
      0 / 1.4rem 1.4rem;
`;
