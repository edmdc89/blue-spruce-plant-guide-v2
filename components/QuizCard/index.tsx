import React, { useEffect, useState } from 'react';
import { useQuery } from '@apollo/client';
import classnames from 'classnames';
import { GET_RANDOM_QUIZ } from '../../lib/apolloClient/queries';
import useQuizTracker from '../../lib/hooks/useQuizTracker';
import styles from './QuizCard.module.scss';
import { IQuizChoice } from '../../types/app';

interface IQuizCardProps {
  className?: string;
}

const QuizCard = ({ className }: IQuizCardProps): JSX.Element => {
  const { round, score, totalRounds, checkUserAnswer, nextRound } = useQuizTracker();
  const { data, loading, error } = useQuery(GET_RANDOM_QUIZ);
  const [correctAnwer, setCorrectAnswer] = useState(null);
  const [choices, setChoices] = useState(null);
  const [feedback, setFeedback] = useState('');

  useEffect(() => {
    const currentQuestion = data.plantQuiz[round];
    const answer = currentQuestion.choices.find(
      (choice) => choice.id === currentQuestion.answerID,
    );
    setCorrectAnswer(answer);
    setChoices(currentQuestion.choices);
  }, [data, round, correctAnwer]);

  const giveFeedback = (answerID: number, correctAnswerId: number) => {
    checkUserAnswer(answerID, correctAnswerId)
      ? setFeedback('Correct!')
      : setFeedback('Incorrect.');
    setTimeout(() => {
      setFeedback('');
      nextRound();
    }, 2000);
  };

  const feedbackType = feedback === 'Correct!' ? styles.correct : styles.incorrect;

  if (round === totalRounds) {
    return (
      <article>
        <h1>{`You got ${score} of ${totalRounds} correct.`}</h1>
      </article>
    );
  }
  if (loading) return <h1>Loading ... </h1>;

  return correctAnwer && choices ? (
    <section className={classnames(styles.quizCard, className)}>
      {correctAnwer?.imageUrl ? (
        <div
          className={styles.image}
          style={{ backgroundImage: `url(${correctAnwer.imageUrl})` }}
          role="img"
          aria-label={`${correctAnwer?.scientificName} in the wild`}
        >
          {' '}
        </div>
      ) : (
        <div className={styles.text}>
          {correctAnwer.scientificName.split(' ').map((word, index) => (
            <span key={index}>
              {word}
              <br />
            </span>
          ))}
        </div>
      )}
      {!!feedback && (
        <div className={classnames(styles.feedback, feedbackType)}>
          <h1>{feedback}</h1>
        </div>
      )}
      <article className={styles.choices}>
        {choices &&
          choices.map((choice) => (
            <button
              key={choice.id}
              onClick={(e) => {
                e.preventDefault();
                giveFeedback(choice.id, correctAnwer.id);
              }}
            >
              {choice.commonName}
            </button>
          ))}
      </article>
    </section>
  ) : (
    <h1>Loading...</h1>
  );
};

export default QuizCard;
