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

export interface QuizInfo {
  round: number;
  quizLength: number;
  quizScore: number;
  currentQuiz: QuizChoice[];
}
