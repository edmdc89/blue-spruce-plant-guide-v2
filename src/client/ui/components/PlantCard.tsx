/** @jsx jsx */
import { css, jsx } from '@emotion/react';
import { PlantDetails } from '../../../types/app';

type PlantCardProps = {
  plant: PlantDetails;
};

const PlantCard = ({ plant }: PlantCardProps): JSX.Element => {
  return (
    <article
      css={css`
        background-color: white;
      `}
    >
      <img src={plant.imageUrl} alt={plant.scientificName} />
      <h4>{plant.commonName}</h4>
    </article>
  );
};

export default PlantCard;
