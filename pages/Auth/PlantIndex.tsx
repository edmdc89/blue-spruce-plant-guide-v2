/** @jsx jsx */
import { useQuery } from '@apollo/client';
import { GET_PLANT_PAGE } from '../../../config/store/api/plants/queries';
import { IPlantDetails } from '../../../types/app';
import gridify from '../../ui/mixins/grid';
import { PlantCard } from '../../components';
import { jsx } from '@emotion/react';
import { IS_LOGGED_IN } from '../../../config/store/api/user/queries';
import { Redirect } from 'react-router-dom';

const PlantIndex = (): JSX.Element => {
  const { loading, error, data } = useQuery(GET_PLANT_PAGE);
  const {
    data: { isLoggedIn },
  } = useQuery(IS_LOGGED_IN);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :( </p>;

  return !isLoggedIn ? (
    <Redirect to="/" />
  ) : (
    <section css={gridify(4)}>
      {data.plantCatalog.map((plant: IPlantDetails) => (
        <PlantCard plant={plant} key={plant.id} />
      ))}
    </section>
  );
};

export default PlantIndex;
