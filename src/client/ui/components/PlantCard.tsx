/** @jsx jsx */
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
        background-image: linear-gradient(
          to bottom right,
          ${theme.colors.secondary},
          ${theme.colors.secondaryAccent}
        );
        border-radius: ${theme.borderRadius};
        text-align: center;
      `}
    >
      <div
        css={css`
          ${addBackgroundImage(plant.imageUrl)}
        `}
      >
        {' '}
      </div>
      <h4
        css={css`
          ${headingStyles('h4')}
        `}
      >
        {plant.commonName}
      </h4>
    </article>
  );
};

export default PlantCard;
