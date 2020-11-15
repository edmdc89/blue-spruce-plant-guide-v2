/** @jsx jsx */
import styled from '@emotion/styled';
import { remify } from '../common/helpers';

type validColumnNumber = 2 | 3 | 4;

interface GridProps {
  columnNumber: validColumnNumber;
  maxWidth?: number;
}

const Grid = styled.section<GridProps>`
  display: grid;
  grid-template-columns: repeat(
    ${(props) => props.columnNumber},
    calc(
      (
          100% - (${(props) => props.columnNumber} - 1) *
            ${(props) => remify(props.theme.gridGap)}
        ) / ${(props) => props.columnNumber}
    )
  );
  grid-gap: ${(props) => remify(props.theme.gridGap)};
  margin: 0 auto;
  max-width: ${(props) =>
    props.maxWidth ? remify(props.maxWidth) : remify(props.theme.maxWidth)};
`;

export default Grid;
