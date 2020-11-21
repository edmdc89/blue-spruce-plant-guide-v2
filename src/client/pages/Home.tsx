/** @jsx jsx */
import { useQuery } from '@apollo/client';
import { GET_RANDOM_PLANT_PAGE } from '../../config/store/api/queries/plantIndex';
import { PlantDetails } from '../../types/app';
import { PlantCard } from '../components';
import { jsx } from '@emotion/react';
import gridify from '../ui/mixins/grid';
import { rowify } from '../ui/mixins/Row';
import LoginSingupForm from '../components/Login';

const Home = (): JSX.Element => {
  const { loading, error, data } = useQuery(GET_RANDOM_PLANT_PAGE);
  const randomIndex = Math.floor(Math.random() * 9);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :( </p>;
  return (
    <section css={rowify()}>
      <section className="row-cell" css={gridify(2)}>
        {data.randomPlantCatalog
          .slice(randomIndex, randomIndex + 4)
          .map((plant: PlantDetails) => (
            <PlantCard plant={plant} key={plant.id} />
          ))}
      </section>
      <LoginSingupForm className="row-cell" />
    </section>
  );
};

export default Home;
