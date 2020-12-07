import { gql } from '@apollo/client';
import { useQuery } from '@apollo/client';
import withApollo from '../lib/apolloClient';
import React from 'react';
import PlantCard from '../components/PlantCard';
import QuizCard from '../components/QuizCard';
import { IPlantDetails } from '../types/app';
import styles from '../styles/pages/index.module.scss';

export const GET_RANDOM_PLANT_PAGE = gql`
  query GetRandomPlantPage {
    randomPlantCatalog {
      commonName
      scientificName
      id
      imageUrl
      familyScientificName
      familyCommonName
    }
    plantQuiz {
      answerID
      choices {
        id
        commonName
        scientificName
        imageUrl
      }
    }
  }
`;

const Home = (): JSX.Element => {
  const { loading, error, data } = useQuery(GET_RANDOM_PLANT_PAGE);

  const randomIndex = Math.floor(Math.random() * 9);

  const scoreHandler = (answerID) => {
    return answerID;
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error.message}</p>;

  return (
    <section>
      {loading ? (
        <h1>Loading</h1>
      ) : (
        <section className={styles.container}>
          <article className={styles.cell}>
            <div className={styles.plantPreview}>
              {data.randomPlantCatalog
                .slice(randomIndex, randomIndex + 4)
                .map((plant: IPlantDetails) => (
                  <PlantCard plant={plant} key={plant.id} />
                ))}
            </div>
          </article>
          <article className={styles.cell}>
            <QuizCard
              nextRound={() => console.log('oops')}
              scoreHandler={scoreHandler}
              currentQuestion={data.plantQuiz[0]}
            />
          </article>
        </section>
      )}
    </section>
  );
};

export default withApollo({ ssr: true })(Home);
