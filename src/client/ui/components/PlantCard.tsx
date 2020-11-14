/** @jsx jsx */
/** @jsxFrag jsx */
import { css, jsx, useTheme } from '@emotion/react';
import { PlantDetails } from '../../../types/app';
import { addBackgroundImage } from '../common/mixins';
import { headingStyles } from '../typography/headings';

type PlantCardProps = {
  plant: PlantDetails;
};

const PlantCard = ({ plant }: PlantCardProps): JSX.Element => {
  const theme = useTheme();

  return (
    <article
      css={css`
        perspective: 150rem;
        -moz-perspective: 120rem;
        position: relative;
      `}
    >
      <div
        css={css`
          background-image: linear-gradient(
            to bottom right,
            ${theme.colors.secondary},
            ${theme.colors.secondaryAccent}
          );
          border-radius: ${theme.borderRadius};
          text-align: center;
          backface-visibility: hidden;
        `}
      >
        <div css={addBackgroundImage(plant.imageUrl)}> </div>
        <h4 css={headingStyles('h4')}>{plant.commonName}</h4>
      </div>
      <div>
        <h4 css={headingStyles('h4')}>Scientific Name:</h4>
        <h6>{plant.scientificName}</h6>
        <h4 css={headingStyles('h4')}>Family Name:</h4>
        <h6>{plant.family}</h6>
        <h6>{plant.familyCommonName}</h6>
      </div>
    </article>
  );
};

export default PlantCard;
