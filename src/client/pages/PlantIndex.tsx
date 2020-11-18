/** @jsx jsx */
import { useQuery } from '@apollo/client';
import { GET_PLANT_PAGE } from '../../config/store/api/queries/plantIndex';
import { PlantDetails } from '../../types/app';
import gridify from '../components/Layout/grid';
import { PlantCard } from '../components';
import { jsx } from '@emotion/react';

const PlantIndex = (): JSX.Element => {
  const { loading, error, data } = useQuery(GET_PLANT_PAGE);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :( </p>;

  return (
    <section css={gridify(4)}>
      {data.plantCatalog.map((plant: PlantDetails) => (
        <PlantCard plant={plant} key={plant.id} />
      ))}
    </section>
  );
};

export default PlantIndex;
