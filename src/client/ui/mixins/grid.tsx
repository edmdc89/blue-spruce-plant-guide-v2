/** @jsx jsx */
import { css, SerializedStyles } from '@emotion/react';
import { remify } from '../../ui/common/helpers';
import theme from '../../ui/common/theme';

const gridify = (columnNumber: number, maxWidth?: number): SerializedStyles => css`
  display: grid;
  grid-template-columns: repeat(
    ${columnNumber},
    calc((100% - ((${columnNumber} - 1) * ${remify(theme.gridGap)})) / ${columnNumber})
  );
  grid-gap: ${remify(theme.gridGap)};
  margin: 0 auto;
  max-width: ${maxWidth ? remify(maxWidth) : remify(theme.maxWidth)};
`;

export default gridify;
