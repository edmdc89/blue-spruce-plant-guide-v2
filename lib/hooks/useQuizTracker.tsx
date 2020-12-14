import { useState } from 'react';

interface IQuizTrackerHook {
  round: number;
  score: number;
  totalRounds: number;
  nextRound: () => void;
  checkUserAnswer: (userAnswerID: number, correctAnswerId: number) => boolean;
}

const useQuizTracker = (): IQuizTrackerHook => {
  const [round, setRound] = useState(1);
  const [score, setScore] = useState(0);
  const [totalRounds, setTotalRounds] = useState(10);

  const increaseScore = () => setScore(score + 1);

  const checkUserAnswer = (userAnswerID: number, correctAnswerId: number): boolean => {
    if (userAnswerID === correctAnswerId) {
      increaseScore();
      return true;
    }
    return false;
  };

  return {
    round,
    score,
    totalRounds,
    checkUserAnswer,
    nextRound: () => setRound(round + 1),
  };
};

export default useQuizTracker;
