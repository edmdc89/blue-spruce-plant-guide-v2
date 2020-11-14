import { useQuery } from '@apollo/client';
import React from 'react';
import { GET_PLANT_PAGE } from '../../config/store/api/queries/plantIndex';

const PlantIndex = (): JSX.Element => {
  const { loading, error, data } = useQuery(GET_PLANT_PAGE);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :( </p>;

  console.log(data.plantCatalog);

  return (
    <>
      {data.plantCatalog.map((plant: any) => {
        return (
          <div key={plant.id}>
            <p>{plant.commonName}</p>
            <p>{plant.scientificName}</p>
            <p>{plant.imageUrl}</p>
          </div>
        );
      })}
    </>
  );
};

export default PlantIndex;
