export interface IPlantDetails {
  id: number;
  commonName?: string;
  scientificName: string;
  imageUrl?: string;
  familyCommonName?: string;
  familyScientificName?: string;
}

export interface IQuizChoice {
  choices: PlantDetails[];
  answerID: number;
}

export interface IQuizInfo {
  round: number;
  quizLength: number;
  score: number;
  currentQuiz?: QuizChoice[];
}
