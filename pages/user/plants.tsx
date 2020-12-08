import React from 'react';
import withApollo from '../../lib/apolloClient';
import { useQuery } from '@apollo/client';
import { GET_PLANT_PAGE } from '../../lib/apolloClient/queries';
import { IPlantDetails } from '../../types/app';
import PlantCard from '../../components/PlantCard';
import styles from '../../styles/pages/plants.module.scss';
import Layout from '../../components/Layout';

const PlantIndex = (): JSX.Element => {
  const { loading, error, data } = useQuery(GET_PLANT_PAGE);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error.message}</p>;

  return (
    <Layout>
      <section className={styles.plants}>
        {data.plantCatalog.map((plant: IPlantDetails) => (
          <PlantCard plant={plant} key={plant.id} />
        ))}
      </section>
    </Layout>
  );
};

export default withApollo({ ssr: true })(PlantIndex);
