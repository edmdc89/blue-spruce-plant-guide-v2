import { InMemoryCache, makeVar } from '@apollo/client';

export const cache = new InMemoryCache({
  typePolicies: {
    Query: {
      fields: {
        isLoggedIn: {
          read() {
            return loggedInStatus();
          },
        },
        quizTracker: {
          read() {
            return quizTracker();
          },
        },
      },
    },
  },
});

const quizTrackerDefault = {
  round: 0,
  quizLength: 10,
  score: 0,
  currentQuiz: [],
};

export const loggedInStatus = makeVar(false);
export const quizTracker = makeVar(quizTrackerDefault);
