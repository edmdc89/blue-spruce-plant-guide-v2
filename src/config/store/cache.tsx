import { InMemoryCache, ReactiveVar, makeVar } from '@apollo/client';

export const cache = new InMemoryCache({
  typePolicies: {
    Query: {
      fields: {
        plantGuide: {
          read() {
            return plantGuideVar();
          },
        },
        currentQuiz: {
          read() {
            return quizVar();
          },
        },
      },
    },
  },
});

type PlantInfo = {
  id: number;
  commonName: string;
  scientificName: string;
  imageUrl: string;
};

type QuizChoice = {
  roundAnswers: PlantInfo[];
  correctAnswer: PlantInfo;
};

type QuizInfo = {
  round: number;
  quizLength: number;
  quizScore: number;
  currentQuiz: QuizChoice[];
};

const initialPlantGuide = [
  {
    id: 146159,
    commonName: 'toad rush',
    scientificName: 'Juncus bufonius',
    imageUrl: 'https://bs.floristic.org/image/o/8f50df8a7970cae2d20a9731738f5de38f2cf2f8',
  },
];

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

export const plantGuideVar: ReactiveVar<PlantInfo[]> = makeVar(initialPlantGuide);

export const quizVar: ReactiveVar<QuizInfo> = makeVar(mockQuizInfo);
