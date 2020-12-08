import { useState } from 'react';

interface IQuizTrackerHook {
  round: number;
  score: number;
  totalRounds: number;
  nextRound: () => void;
  increaseScore: () => void;
}

const useQuizTracker = (): IQuizTrackerHook => {
  const initialState = {
    round: 0,
    score: 0,
    totalRounds: 10,
  };

  const [tracker, setTrackerValue] = useState(initialState);

  return {
    ...tracker,
    nextRound: () => setTrackerValue({ ...tracker, round: tracker.round + 1 }),
    increaseScore: () => setTrackerValue({ ...tracker, score: tracker.score + 1 }),
  };
};

export default useQuizTracker;
