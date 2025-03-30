export type DifficultyLevel = 'beginner' | 'intermediate' | 'advanced' | 'beginner-intermediate';

export interface Character {
  id: string;
  name: string;
  age: number;
  occupation: string;
  region: string;
  difficultyLevel: DifficultyLevel;
  personality: string;
  speakingStyle: string;
  avatar: string;
  systemPrompt: string;
}

export interface Scenario {
  id: string;
  title: string;
  description: string;
  location: string;
  difficultyLevel: DifficultyLevel;
  estimatedDuration: string;
  keyVocabulary: string[];
  culturalNotes: string;
  initialPrompt: string;
  recommendedCharacters: string[];
}

export interface Message {
  id: string;
  role: 'user' | 'assistant';
  content: {
    turkish: string;
    english: string;
  };
  grammarNotes?: string;
  highlightedVocabulary?: {
    word: string;
    translation: string;
  }[];
  timestamp: number;
}

export interface Conversation {
  id: string;
  characterId: string;
  scenarioId: string;
  messages: Message[];
  startTime: number;
  endTime?: number;
}

export interface Flashcard {
  id: string;
  turkish: string;
  english: string;
  exampleUsage: string;
  notes?: string;
  category: 'vocabulary' | 'grammar' | 'phrase';
  createdAt: number;
  lastReviewed?: number;
  nextReviewDate?: number;
  easinessFactor: number;
  interval: number;
  repetitions: number;
}

export interface UserProgress {
  completedScenarios: string[];
  vocabularyCount: number;
  reviewedFlashcards: number;
  streakDays: number;
  lastActiveDate: string;
}

export interface AIResponse {
  turkish: string;
  english: string;
  grammarNotes?: string;
  vocabulary?: {
    word: string;
    translation: string;
  }[];
  suggestedResponses?: {
    turkish: string;
    english: string;
  }[];
}
