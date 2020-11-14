export interface PlantInfo {
  id: number;
  commonName: string;
  scientificName: string;
  imageUrl: string;
}

export interface QuizChoice {
  roundAnswers: PlantInfo[];
  correctAnswer: PlantInfo;
}

export interface QuizInfo {
  round: number;
  quizLength: number;
  quizScore: number;
  currentQuiz: QuizChoice[];
}
