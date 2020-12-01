/** @jsx jsx */
import { jsx, css } from '@emotion/react';
import { IPlantDetails } from '../../../types/app';
import { lightGradient } from '../../ui/common/gradients';
import gridify from '../../ui/mixins/grid';
import { headingStyles } from '../../ui/typography/headings';

interface IAnswerChoicesProps {
  choices: IPlantDetails[];
  changeRound: () => void;
  scoreHandler: (userAnswerID: number) => void;
}

export const AnswerChoices = ({
  choices,
  scoreHandler,
  changeRound,
}: IAnswerChoicesProps): JSX.Element => {
  return (
    <div
      css={css`
        ${gridify(2, 80)}
        margin-top: 1rem;
      `}
    >
      {choices.map((answerChoice) => (
        <button
          type="submit"
          key={answerChoice.id}
          onClick={() => {
            scoreHandler(answerChoice.id);
            changeRound();
          }}
          css={css`
            ${headingStyles('h5', { inverColor: true })}
            ${lightGradient}
            margin: 0.4rem;
            min-width: 35rem;
            height: 5rem;
          `}
        >
          {answerChoice.commonName}
        </button>
      ))}
    </div>
  );
};
