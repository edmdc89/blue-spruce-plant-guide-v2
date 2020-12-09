import { useState } from 'react';

interface IQuizTrackerHook {
  round: number;
  score: number;
  totalRounds: number;
  nextRound: () => void;
  increaseScore: () => void;
}

const useQuizTracker = (): IQuizTrackerHook => {
  const [round, setRound] = useState(0);
  const [score, setScore] = useState(0);
  const [totalRounds, setTotalRounds] = useState(10);

  return {
    round,
    score,
    totalRounds,
    nextRound: () => setRound(round + 1),
    increaseScore: () => setScore(score + 1),
  };
};

export default useQuizTracker;
