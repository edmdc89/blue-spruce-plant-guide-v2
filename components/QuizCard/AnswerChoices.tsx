/** @jsx jsx */
import { IPlantDetails } from '../../types/app';
import { headingStyles } from '../../ui/typography/headings';

interface IAnswerChoicesProps {
  choices: IPlantDetails[];
  nextRound: () => void;
  scoreHandler: (userAnswerID: number) => void;
}

export const AnswerChoices = ({
  choices,
  scoreHandler,
  nextRound,
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
            nextRound();
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
