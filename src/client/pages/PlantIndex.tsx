import { useQuery } from '@apollo/client';
import { useTheme } from '@emotion/react';
import React from 'react';
import { GET_PLANT_PAGE } from '../../config/store/api/queries/plantIndex';
import { PlantDetails } from '../../types/app';
import Grid from '../ui/common/grid';
import { PlantCard } from '../ui/components';

const PlantIndex = (): JSX.Element => {
  const theme = useTheme();
  const { loading, error, data } = useQuery(GET_PLANT_PAGE);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :( </p>;

  return (
    <Grid maxWidth={109} columnNumber={3} gridGap={theme.gridGap} rowHeight={10}>
      {data.plantCatalog.map((plant: PlantDetails) => (
        <PlantCard plant={plant} key={plant.id} />
      ))}
    </Grid>
  );
};

export default PlantIndex;
