import React from 'react';
import { IQuizChoice } from '../../types/app';
import styles from './QuizCard.module.scss';

interface IQuizCardProps {
  scoreHandler: (userAnswerID: number) => void;
  currentQuestion: IQuizChoice;
  round: number;
}

const QuizCard = ({ currentQuestion, scoreHandler, round }: IQuizCardProps): JSX.Element => {
  const correctAnwer = currentQuestion.choices.find(
    (answerChoice) => currentQuestion.answerID === answerChoice.id,
  );

  const createAnswerClue = () => {
    return correctAnwer.imageUrl ? (
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
    );
  };

  return (
    <section className={styles.quizCard}>
      {createAnswerClue()}
      <article className={styles.choices}>
        {currentQuestion.choices &&
          currentQuestion.choices.map((choice) => (
            <button
              key={choice.id}
              onClick={(e) => {
                e.preventDefault();
                scoreHandler(choice.id);
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
