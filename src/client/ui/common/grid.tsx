/** @jsx jsx */
import { css, jsx } from '@emotion/react';
import styled from '@emotion/styled';
import { ReactChild, ReactChildren } from 'react';
import { remify } from '../common/helpers';
import { clearfix } from './mixins';

interface GridProps {
  columnNumber: number;
  gridGap: number;
  maxWidth: number;
  children: ReactChild | ReactChildren;
}

enum CellType {
  one = '1/2',
  two = '1/3',
  three = '2/3',
  four = '1/4',
  five = '2/4',
  six = '3/4',
}

type GridKey = {
  [CellType.one]: string;
  [CellType.two]: string;
  [CellType.three]: string;
  [CellType.four]: string;
  [CellType.five]: string;
  [CellType.six]: string;
};

interface CellProps {
  type: CellType;
}

const gridCellKey: GridKey = {
  '1/2': 'calc((100% - ${(props) => props.theme.gridGap}) / 2)',
  '1/3': 'calc((100% - 2 * ${(props) => props.theme.gridGap}) / 3)',
  '2/3':
    'calc(2 * ((100% - 2 * ${(props) => props.theme.gridGap}) / 3) + ${(props) => props.theme.gridGap})',
  '1/4': 'calc((100% - 3 * ${(props) => props.theme.gridGap}) / 4)',
  '2/4':
    'calc( 2 * ((100% - 3 * ${(props) => props.theme.gridGap}) / 4) + ${(props) => props.theme.gridGap})',
  '3/4':
    'calc( 3 * ((100% - 3 * ${(props) => props.theme.gridGap}) / 4) + (2 * ${(props) => props.theme.gridGap}))',
};

const Cell = styled.div<CellProps>`
  width: ${(props) => gridCellKey[props.type]};
`;

const Row = styled.div<GridProps>`
  max-width: ${(props) => (props.maxWidth ? props.maxWidth : '60rem')};
  margin: 0 auto;

  &:not(:last-child) {
    margin-bottom: ${(props) => props.theme.gridGap};
  }

  &:first-child {
    margin-top: 3rem;
  }

  ${clearfix}

  ${Cell} {
    float: left;

    &:not(:last-child) {
      margin-right: ${(props) => props.theme.gridGap};
    }
  }
`;

const Grid = ({ columnNumber, gridGap, maxWidth, children }: GridProps): JSX.Element => {
  return (
    <section
      css={css`
        display: grid;
        grid-template-columns: repeat(
          ${columnNumber},
          calc((100% - ${remify(gridGap)}) / ${columnNumber})
        );
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
