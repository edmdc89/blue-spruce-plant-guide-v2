import { InMemoryCache, ReactiveVar, makeVar } from '@apollo/client';
import { PlantInfo, QuizInfo } from '../../types/app';

export const cache = new InMemoryCache({
  typePolicies: {
    Query: {
      fields: {
        currentQuiz: {
          read() {
            return quizVar();
          },
        },
      },
    },
  },
});

const mockQuizInfo = {
  round: 1,
  quizLength: 4,
  quizScore: 0,
  currentQuiz: [
    {
      correctAnswer: {
        id: 162556,
        commonName: 'marsh grass of Parnassus',
        scientificName: 'Parnassia palustris',
        imageUrl: 'https://bs.floristic.org/image/o/0b38896e0dde2076492e96581cb323e6ccf6fda9',
      },
      roundAnswers: [
        {
          id: 142918,
          commonName: 'narrowleaf hawkweek',
          scientificName: '',
          imageUrl: '',
        },
        {
          id: 131616,
          commonName: 'common spikerush',
          scientificName: '',
          imageUrl: '',
        },
        {
          id: 162556,
          commonName: 'marsh grass of Parnassus',
          scientificName: '',
          imageUrl: '',
        },
        {
          id: 1700413,
          commonName: 'floating pondweed',
          scientificName: '',
          imageUrl: '',
        },
      ],
    },
  ],
};

export const quizVar: ReactiveVar<QuizInfo> = makeVar(mockQuizInfo);
