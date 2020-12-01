/** @jsx jsx */
import { css, jsx } from '@emotion/react';
import { IQuizChoice } from '../../../types/app';
import { secondaryGradient } from '../../ui/common/gradients';
import { addBackgroundImage } from '../../ui/common/mixins';
import gridify from '../../ui/mixins/grid';
import { AnswerChoices } from './AnswerChoices';

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
        max-width: 85rem;
        margin: 0 auto;
        display: flex;
        flex-flow: column;
        justify-content: center;
        align-items: center;
        padding: 1rem;
        ${secondaryGradient}
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
      <form
        css={css`
          ${gridify(2, 75)}
        `}
      >
        {currentQuestion.choices && (
          <AnswerChoices
            choices={currentQuestion.choices}
            scoreHandler={scoreHandler}
            changeRound={changeRound}
          />
        )}
      </form>
    </section>
  );
};
