/** @jsx jsx */
/** @jsxFrag jsx */
import { jsx } from '@emotion/react';
import { PlantDetails } from '../../types/app';
import { addBackgroundImage } from '../ui/common/mixins';
import { CardSide, InfoCard } from '../ui/components/InfoCard';
import { headingStyles } from '../ui/typography/headings';

type PlantCardProps = {
  plant: PlantDetails;
};

const PlantCard = ({ plant }: PlantCardProps): JSX.Element => {
  return (
    <InfoCard>
      <CardSide className="front">
        <div css={addBackgroundImage(plant.imageUrl)}> </div>
        <h4 css={headingStyles('h4')}>{plant.commonName}</h4>
      </CardSide>
      <CardSide className="back">
        <h5 css={headingStyles('h5', { inverColor: true })}>Scientific Name:</h5>
        <h6
          css={headingStyles('h6', {
            inverColor: true,
            bodyText: true,
            italic: true,
            thin: true,
          })}
        >
          {plant.scientificName}
        </h6>
        <h5 css={headingStyles('h5', { inverColor: true })}>Family Name:</h5>
        <h6 css={headingStyles('h6', { inverColor: true, bodyText: true, thin: true })}>
          {plant.familyCommonName}
        </h6>
        <h6
          css={headingStyles('h6', {
            inverColor: true,
            bodyText: true,
            italic: true,
            thin: true,
          })}
        >
          {plant.familyScientificName}
        </h6>
      </CardSide>
    </InfoCard>
  );
};

export default PlantCard;
