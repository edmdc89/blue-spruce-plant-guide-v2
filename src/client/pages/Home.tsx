import { useQuery } from '@apollo/client';
import React from 'react';
import { GET_RANDOM_PLANT_PAGE } from '../../config/store/api/queries/plantIndex';
import Grid from '../ui/common/grid';
import { PlantDetails } from '../../types/app';
import { PlantCard } from '../ui/components';
import LoginForm from '../ui/components/Login/LoginForm';

const Home = (): JSX.Element => {
  const { loading, error, data } = useQuery(GET_RANDOM_PLANT_PAGE);
  const randomIndex = Math.floor(Math.random() * 19);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :( </p>;
  return (
    <>
      <LoginForm />
      <Grid columnNumber={4}>
        {data.randomPlantCatalog
          .slice(randomIndex, randomIndex + 4)
          .map((plant: PlantDetails) => (
            <PlantCard plant={plant} key={plant.id} />
          ))}
      </Grid>
    </>
  );
};

export default Home;
