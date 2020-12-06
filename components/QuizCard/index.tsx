import React from 'react';
import { IQuizChoice } from '../../types/app';
import styles from './QuizCard.module.scss';

interface IQuizCardProps {
  nextRound: () => void;
  scoreHandler: (userAnswerID: number) => void;
  currentQuestion: IQuizChoice;
}

const QuizCard = ({
  currentQuestion,
  scoreHandler,
  nextRound,
}: IQuizCardProps): JSX.Element => {
  const correctAnwer = currentQuestion.choices.find(
    (answerChoice) => currentQuestion.answerID === answerChoice.id,
  );

  return (
    <section className={styles.quizCard}>
      <div
        className={styles.image}
        style={{ backgroundImage: `url(${correctAnwer.imageUrl})` }}
        role="img"
        aria-label={`${correctAnwer?.scientificName} in the wild`}
      >
        {' '}
      </div>
      <article className={styles.choices}>
        {currentQuestion.choices &&
          currentQuestion.choices.map((choice) => (
            <button
              key={choice.id}
              onClick={(e) => {
                e.preventDefault();
                scoreHandler(choice.id);
                nextRound();
              }}
            >
              {choice.commonName}
            </button>
          ))}
      </article>
    </section>
  );
};

export default QuizCard;
