/** @jsx jsx */
import { css, jsx } from '@emotion/react';
import { PlantDetails } from '../../../types/app';
import { addBackgroundImage } from '../common/mixins';

type PlantCardProps = {
  plant: PlantDetails;
};

const PlantCard = ({ plant }: PlantCardProps): JSX.Element => {
  return (
    <article
      css={css`
        background-color: white;
        position: relative;
      `}
    >
      <div
        css={css`
          ${addBackgroundImage(plant.imageUrl)}
        `}
      >
        {' '}
      </div>
      <h4>{plant.commonName}</h4>
    </article>
  );
};

export default PlantCard;
