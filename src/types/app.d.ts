export interface PlantDetails {
  id: number;
  commonName?: string;
  scientificName: string;
  imageUrl: string;
  familyCommonName?: string;
  familyScientificName: string;
}

export interface QuizChoice {
  roundAnswers: PlantDetails[];
  correctAnswer: PlantDetails;
}

export interface QuizInfo {
  round: number;
  quizLength: number;
  quizScore: number;
  currentQuiz: QuizChoice[];
}
