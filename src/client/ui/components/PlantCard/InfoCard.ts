import styled from '@emotion/styled';
import { secondaryGradient, lightGradient } from '../../common/gradients';

export const CardSide = styled.div`
  height: 28.5rem;
  transition: all 1s ease;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  backface-visibility: hidden;
  --webkit-backface-visibility: hidden;
  overflow: hidden;
`;

export const InfoCard = styled.article`
  position: relative;
  perspective: 150rem;
  -moz-perspective: 150rem;
  height: 28.5rem;

  ${CardSide} {
    &.front {
      ${secondaryGradient}
      text-align: center;
    }

    &.back {
      ${lightGradient}
      text-align: left;
      transform: rotateY(180deg);
    }
  }

  &:hover {
    ${CardSide} {
      &.front {
        transform: rotateY(-180deg);
      }

      &.back {
        transform: rotateY(0);
      }
    }
  }
`;
