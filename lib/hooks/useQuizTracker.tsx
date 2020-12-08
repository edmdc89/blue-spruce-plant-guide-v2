import { useState } from 'react';

const useQuizTracker = () => {
  const initialState = {
    round: 0,
    score: 0,
    totalRounds: 10,
  };

  const [tracker, setTrackerValue] = useState(initialState);

  return {
    ...tracker,
    nextRound: setTrackerValue({ ...tracker, round: tracker.round++ }),
    increaseScore: setTrackerValue({ ...tracker, score: tracker.score++ }),
  };
};
