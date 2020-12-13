import React, { useState } from 'react';
import classnames from 'classnames';
import { IQuizChoice } from '../../types/app';
import styles from './QuizCard.module.scss';

interface IQuizCardProps {
  className?: string;
  checkUserAnswer: (userAnswerID: number) => boolean;
  currentQuestion: IQuizChoice;
  round: number;
  nextRound: () => void;
}

const QuizCard = ({
  currentQuestion,
  checkUserAnswer,
  round,
  nextRound,
  className,
}: IQuizCardProps): JSX.Element => {
  const correctAnwer = currentQuestion.choices.find(
    (answerChoice) => currentQuestion.answerID === answerChoice.id,
  );
  const [feedback, setFeedback] = useState('');

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

  const giveFeedback = (answerID) => {
    checkUserAnswer(answerID) ? setFeedback('Correct!') : setFeedback('Incorrect.');
    setTimeout(() => {
      setFeedback('');
      nextRound();
    }, 2000);
  };

  return (
    <section className={classnames(styles.quizCard, className)}>
      {createAnswerClue()}
      {!!feedback && (
        <div className={styles.feedback}>
          <h1>{feedback}</h1>
        </div>
      )}
      <article className={styles.choices}>
        {currentQuestion.choices &&
          currentQuestion.choices.map((choice) => (
            <button
              key={choice.id}
              onClick={(e) => {
                e.preventDefault();
                giveFeedback(choice.id);
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
