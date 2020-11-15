/** @jsx jsx */
/** @jsxFrag jsx */
import { jsx } from '@emotion/react';
import styled from '@emotion/styled';
import { PlantDetails } from '../../../types/app';
import { secondaryGradient, lightGradient } from '../common/gradients';
import { addBackgroundImage } from '../common/mixins';
import { headingStyles } from '../typography/headings';

type PlantCardProps = {
  plant: PlantDetails;
};

const Side = styled.div`
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

const InfoCard = styled.article`
  position: relative;
  perspective: 150rem;
  -moz-perspective: 150rem;
  height: 28.5rem;

  ${Side} {
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
    ${Side} {
      &.front {
        transform: rotateY(-180deg);
      }

      &.back {
        transform: rotateY(0);
      }
    }
  }
`;

const PlantCard = ({ plant }: PlantCardProps): JSX.Element => {
  return (
    <InfoCard>
      <Side className="front">
        <div css={addBackgroundImage(plant.imageUrl)}> </div>
        <h4 css={headingStyles('h4')}>{plant.commonName}</h4>
      </Side>
      <Side className="back">
        <h4 css={headingStyles('h4')}>Scientific Name:</h4>
        <h6>{plant.scientificName}</h6>
        <h4 css={headingStyles('h4')}>Family Name:</h4>
        <h6>{plant.family}</h6>
        <h6>{plant.familyCommonName}</h6>
      </Side>
    </InfoCard>
  );
};

export default PlantCard;
