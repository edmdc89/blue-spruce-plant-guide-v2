/** @jsx jsx */
import { css, jsx, useTheme } from '@emotion/react';
import styled from '@emotion/styled';
import { remify } from '../common/helpers';

type validColumnNumber = 2 | 3 | 4;

interface GridProps {
  columnNumber: validColumnNumber;
  rowHeight: number;
  children: JSX.Element[];
}

const Grid = ({ columnNumber, children, rowHeight }: GridProps): JSX.Element => {
  const theme = useTheme();
  return (
    <section
      css={css`
        display: grid;
        grid-template-columns: repeat(
          ${columnNumber},
          calc((100% - ${remify(theme.gridGap)}) / ${columnNumber})
        );
        grid-template-rows: repeat(auto, ${remify(rowHeight)});
        grid-gap: ${remify(theme.gridGap)};
        margin: 0 auto;
        max-width: ${remify(theme.maxWidth)};
      `}
    >
      {children}
    </section>
  );
};

export default Grid;
