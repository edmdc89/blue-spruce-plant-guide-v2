import { Auth } from 'aws-amplify';
import { gql, useQuery } from '@apollo/client';
import withApollo from '../lib/apolloClient';
import React, { useEffect } from 'react';
import PlantCard from '../components/PlantCard';
import QuizCard from '../components/QuizCard';
import { IPlantDetails } from '../types/app';
import styles from '../styles/pages/index.module.scss';
import { GET_RANDOM_PLANT_PAGE, GET_RANDOM_QUIZ } from '../lib/apolloClient/queries';
import useQuizTracker from '../lib/hooks/useQuizTracker';
import { isAuthenticated } from '../lib/apolloClient/cache';
import Layout from '../components/Layout';

const GET_CURRENT_USER = gql`
  query getCurrentUser {
    currentUser @client
  }
`;

const Home = (): JSX.Element => {
  const { loading, error, data } = useQuery(GET_RANDOM_PLANT_PAGE);
  const { loading: loadingUser, data: userData, error: userError } = useQuery(
    GET_CURRENT_USER,
  );

  const onLoad = async () => {
    try {
      await Auth.currentSession();
      isAuthenticated(true);
    } catch (e) {
      if (e !== 'No current user') {
        alert(e.message);
      }
    }
  };

  useEffect(() => {
    onLoad();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error.message}</p>;

  return (
    <Layout>
      {loading ? (
        <h1>Loading</h1>
      ) : (
        <section className={styles.container}>
          <article className={styles.cell}>
            <div className={styles.plantPreview}>
              {data.randomPlantCatalog.map((plant: IPlantDetails) => (
                <PlantCard plant={plant} key={plant.id} />
              ))}
            </div>
          </article>
          <article className={styles.cell}>
            <QuizCard />
          </article>
        </section>
      )}
    </Layout>
  );
};

export default withApollo({ ssr: true })(Home);
