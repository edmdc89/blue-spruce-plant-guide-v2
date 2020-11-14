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

  const cardSideRootStyles = css`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    backface-visibility: hidden;
    overflow: hidden;
  `;

  return (
    <article
      css={css`
        perspective: 150rem;
        -moz-perspective: 120rem;
      `}
    >
      <div
        css={css`
          ${cardSideRootStyles}
        `}
      >
        <div css={addBackgroundImage(plant.imageUrl)}> </div>
        <h4 css={headingStyles('h4')}>{plant.commonName}</h4>
      </div>
      <div
        css={css`
          ${cardSideRootStyles}
        `}
      >
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
