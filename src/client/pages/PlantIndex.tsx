import { useQuery } from '@apollo/client';
import React from 'react';
import { GET_PLANT_PAGE } from '../../config/store/api/queries/plantIndex';
import { PlantInfo } from '../../types/app';
import Grid from '../ui/containers/grid';

const PlantIndex = (): JSX.Element => {
  const { loading, error, data } = useQuery(GET_PLANT_PAGE);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :( </p>;

  console.log(data.plantCatalog);

  return (
    <Grid maxWidth={110} columnNumber={4} gridGap={0.5} rowHeight={10}>
      {data.plantCatalog.map((plant: PlantInfo) => {
        return (
          <div key={plant.id}>
            <p>{plant.commonName}</p>
            <p>{plant.scientificName}</p>
            <p>{plant.imageUrl}</p>
          </div>
        );
      })}
    </Grid>
  );
};

export default PlantIndex;
