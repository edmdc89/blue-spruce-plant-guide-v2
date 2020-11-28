/** @jsx jsx */
import { css, jsx } from '@emotion/react';
import { IQuizChoice } from '../../../types/app';
import { addBackgroundImage } from '../../ui/common/mixins';

interface IQuizCardProps {
  changeRound: () => void;
  scoreHandler: (userAnswerID: number) => void;
  currentQuestion: IQuizChoice;
}

export const QuizCard = ({
  currentQuestion,
  scoreHandler,
  changeRound,
}: IQuizCardProps): JSX.Element => {
  const correctAnwer = currentQuestion.choices.find(
    (answerChoice) => currentQuestion.answerID === answerChoice.id,
  );

  return (
    <section
      css={css`
        max-width: 110rem;
        margin: 0 auto;
        display: flex;
        flex-flow: column;
        justify-content: center;
        align-items: center;
      `}
    >
      <div
        css={css`
          ${addBackgroundImage(correctAnwer?.imageUrl)}
          height: 70vh;
          min-width: 60rem;
          background-size: contain;
          background-repeat: no-repeat;
        `}
        role="img"
        aria-label={`${correctAnwer?.scientificName} in the wild`}
      >
        {' '}
      </div>
      <form>
        {currentQuestion.choices.map((answerChoice) => (
          <button
            type="submit"
            key={answerChoice.id}
            onClick={() => {
              scoreHandler(answerChoice.id);
              changeRound();
            }}
          >
            {answerChoice.commonName}
          </button>
        ))}
      </form>
    </section>
  );
};
