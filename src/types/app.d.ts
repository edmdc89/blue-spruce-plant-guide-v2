export interface PlantDetails {
  id: number;
  commonName?: string;
  scientificName: string;
  imageUrl?: string;
  familyCommonName?: string;
  familyScientificName?: string;
}

export interface IQuizChoice {
  choices: PlantDetails[];
  answerID: PlantDetails;
}

export interface IQuizInfo {
  round: number;
  quizLength: number;
  score: number;
  currentQuiz?: QuizChoice[];
}
