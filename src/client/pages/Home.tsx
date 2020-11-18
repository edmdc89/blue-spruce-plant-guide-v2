/** @jsx jsx */
import { useQuery } from '@apollo/client';
import { GET_RANDOM_PLANT_PAGE } from '../../config/store/api/queries/plantIndex';
import { PlantDetails } from '../../types/app';
import { PlantCard } from '../components';
import { jsx } from '@emotion/react';
import gridify from '../components/Layout/grid';
import { rowify } from '../components/Layout/Row';
import LoginSignupForm from '../components/Login';

const Home = (): JSX.Element => {
  const { loading, error, data } = useQuery(GET_RANDOM_PLANT_PAGE);
  const randomIndex = Math.floor(Math.random() * 19);
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
      <LoginSignupForm className="row-cell" />
    </section>
  );
};

export default Home;
