/** @jsx jsx */
import { useQuery } from '@apollo/client';
import { GET_RANDOM_PLANT_PAGE } from '../../config/store/api/queries/plantIndex';
import { PlantDetails } from '../../types/app';
import { PlantCard } from '../ui/components';
import LoginForm from '../ui/components/Login/LoginForm';
import { css, jsx, useTheme } from '@emotion/react';
import gridify from '../ui/common/grid';
import { clearfix } from '../ui/common/mixins';
import { remify } from '../ui/common/helpers';

const Home = (): JSX.Element => {
  const { loading, error, data } = useQuery(GET_RANDOM_PLANT_PAGE);
  const theme = useTheme();
  const randomIndex = Math.floor(Math.random() * 19);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :( </p>;
  return (
    <section
      css={css`
        max-width: ${remify(theme.maxWidth)};
        margin: 0 auto;

        &:not(:last-child) {
          margin-bottom: ${remify(theme.gridGap)};
        }

        ${clearfix};

        [class^='row-cell'] {
        }

        .row-cell {
          width: calc((100% - ${remify(theme.gridGap)}) / 2);
          float: left;
          &:not(:last-child) {
            margin-right: ${remify(theme.gridGap)};
          }
        }
      `}
    >
      <section
        className="row-cell"
        css={css`
          ${gridify(2)}
        `}
      >
        {data.randomPlantCatalog
          .slice(randomIndex, randomIndex + 4)
          .map((plant: PlantDetails) => (
            <PlantCard plant={plant} key={plant.id} />
          ))}
      </section>
      <LoginForm className="row-cell" />
    </section>
  );
};

export default Home;
