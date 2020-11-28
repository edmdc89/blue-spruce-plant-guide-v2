/** @jsx jsx */
import { jsx } from '@emotion/react';
import { IQuizChoice } from '../../../types/app';

interface IQuizCardProps {
  changeRound: () => void;
  scoreHandler: React.Dispatch<number>;
  currentQuestion: IQuizChoice;
}

export const QuizCard = ({
  currentQuestion,
  scoreHandler,
  changeRound,
}: IQuizCardProps): JSX.Element => {
  const correctAnwer = currentQuestion.choices.find(
    (answer) => currentQuestion.answerID === answer.id,
  );

  return <img src={correctAnwer?.imageUrl} />;
};
