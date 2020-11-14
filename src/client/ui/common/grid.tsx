/** @jsx jsx */
import { css, jsx } from '@emotion/react';
import { ReactChild, ReactChildren } from 'react';
import { remify } from '../common/helpers';

interface GridProps {
  rowHeight: number;
  columnNumber: number;
  gridGap: number;
  maxWidth: number;
  children: ReactChild | ReactChildren;
}

const Grid = ({
  rowHeight,
  columnNumber,
  gridGap,
  maxWidth,
  children,
}: GridProps): JSX.Element => {
  return (
    <section
      css={css`
        display: grid;
        grid-template-columns: repeat(
          ${columnNumber},
          calc((100% - ${remify(gridGap)}) / ${columnNumber})
        );
        grid-template-rows: repeat(auto, ${remify(rowHeight)});
        grid-gap: ${remify(gridGap)};
        margin: 0 auto;
        max-width: ${remify(maxWidth)};
      `}
    >
      {children}
    </section>
  );
};

export default Grid;
