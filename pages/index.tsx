import { Auth } from 'aws-amplify';
import { useQuery } from '@apollo/client';
import withApollo from '../lib/apolloClient';
import React, { useEffect } from 'react';
import PlantCard from '../components/PlantCard';
import QuizCard from '../components/QuizCard';
import { IPlantDetails } from '../types/app';
import styles from '../styles/pages/index.module.scss';
import { GET_RANDOM_PLANT_PAGE, GET_RANDOM_QUIZ } from '../lib/apolloClient/queries';
import { isAuthenticated } from '../lib/apolloClient/cache';

const Home = (): JSX.Element => {
  const { loading, error, data } = useQuery(GET_RANDOM_PLANT_PAGE);
  const { loading: loadingQuiz, data: quizData } = useQuery(GET_RANDOM_QUIZ);

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

  const randomIndex = Math.floor(Math.random() * 9);

  const scoreHandler = (answerID) => {
    return answerID;
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error.message}</p>;

  return (
    <section>
      {loading || loadingQuiz ? (
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
          {quizData && (
            <article className={styles.cell}>
              <QuizCard
                nextRound={() => console.log('oops')}
                scoreHandler={scoreHandler}
                currentQuestion={quizData.plantQuiz[0]}
              />
            </article>
          )}
        </section>
      )}
    </section>
  );
};

export default withApollo({ ssr: true })(Home);
