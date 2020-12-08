import { InMemoryCache, makeVar } from '@apollo/client';
import { Auth } from 'aws-amplify';
import { IQuizInfo } from '../../types/app';

export const cache = new InMemoryCache({
  typePolicies: {
    Query: {
      fields: {
        currentUser: {
          async read() {
            let user;
            try {
              user = await Auth.currentUserInfo();
            } catch (err) {
              console.log(err.message);
            }
            return user;
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

export const quizTrackerDefault: IQuizInfo = {
  round: 0,
  quizLength: 10,
  score: 0,
  currentQuiz: [],
};

export const isAuthenticated = makeVar(false);
export const quizTracker = makeVar(quizTrackerDefault);
