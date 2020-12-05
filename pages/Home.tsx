/** @jsx jsx */
import { useQuery } from '@apollo/client';
import { GET_RANDOM_PLANT_PAGE } from '../../config/store/api/plants/queries';
import { IPlantDetails } from '../../types/app';
import { PlantCard } from '../components';
import { jsx } from '@emotion/react';
import gridify from '../ui/mixins/grid';
import { rowify } from '../ui/mixins/Row';
import LoginSingupForm from '../components/Login';
import { IS_LOGGED_IN } from '../../config/store/api/user/queries';
import { Redirect } from 'react-router-dom';
import { Loading } from '../components/Common/Loading';

const Home = (): JSX.Element => {
  const { loading, error, data } = useQuery(GET_RANDOM_PLANT_PAGE);
  const {
    data: { isLoggedIn },
  } = useQuery(IS_LOGGED_IN);

  const randomIndex = Math.floor(Math.random() * 9);
  if (error) return <p>Error :( </p>;
  if (isLoggedIn) return <Redirect to="/plant-index" />;
  return (
    <section css={rowify()}>
      {loading ? (
        <Loading className="row-cell" />
      ) : (
        <section className="row-cell" css={gridify(2)}>
          {data.randomPlantCatalog
            .slice(randomIndex, randomIndex + 4)
            .map((plant: IPlantDetails) => (
              <PlantCard plant={plant} key={plant.id} />
            ))}
        </section>
      )}
      <LoginSingupForm className="row-cell" />
    </section>
  );
};

export default Home;
