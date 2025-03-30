import { ReactNode } from 'react';

export type GrammarDifficulty = 'beginner' | 'intermediate' | 'advanced';

export type WordSegmentType = 
  | 'noun' 
  | 'adjective' 
  | 'verb-root' 
  | 'person-marker' 
  | 'possessive-marker' 
  | 'possessive'
  | 'present-cont-marker'
  | 'past-tense'
  | 'future-tense'
  | 'tense-marker'
  | 'conditional-suffix'
  | 'plural-marker'
  | 'question-particle'
  | 'question-word'
  | 'negation'
  | 'determiner'
  | 'locative-case'
  | 'dative-case'
  | 'ablative-case'
  | 'verb-stem'
  | 'personal-ending' 
  | 'case-marker' 
  | 'accusative-case'
  | 'genitive-case'
  | 'instrumental-case'
  | 'buffer'
  | 'vowel-harmony'
  | 'consonant-harmony'
  | 'passive'
  | 'causative'
  | 'reflexive'
  | 'reciprocal'
  | 'ability'
  | 'necessity'
  | 'conditional-marker'
  | 'subject-participle'
  | 'object-participle'
  | 'adverbial-marker'
  | 'conjunctive'
  | 'postposition'
  | 'adverb'
  | 'imperative'
  | 'modal'
  | 'verb-to-noun'
  | 'pronoun'
  | 'verbal-connector'
  | 'numeral'
  | 'existence-marker'
  | 'nonexistence-marker'
  | 'question-marker'
  | 'existential'
  | 'past-tense-personal'
  | 'imperative-ending'
  | 'optative-marker'
  | 'reported-past'
  | 'auxiliary-verb'
  | 'present-participle'
  | 'future-participle'
  | 'converb'
  | 'action-noun'
  | 'aorist'
  | 'aorist-negative'
  | 'object-participle';

export interface WordSegment {
  text: string;
  type: WordSegmentType;
  meaning: string;
  notes?: string;
}

export interface WordBreakdownData {
  segments: WordSegment[];
  notes?: string;
  animation?: 'sequential' | 'highlight' | 'stack';
}

export interface ExampleSentence {
  turkish: string;
  english: string;
  breakdown?: WordBreakdownData;
  audio?: string;
  image?: string;
  context?: string;
}

export type GrammarCategory = 
  | 'verb-tenses' 
  | 'noun-cases' 
  | 'pronouns' 
  | 'adjectives' 
  | 'adverbs'
  | 'postpositions'
  | 'conjunctions'
  | 'questions'
  | 'negation'
  | 'compound-verbs'
  | 'verbal-nouns'
  | 'participles'
  | 'conditionals'
  | 'voice'
  | 'verb-moods'
  | 'syntax'
  | 'word-order'
  | 'Nouns'
  | 'Verbs'
  | 'Phonology';

export type PracticeExerciseType = 
  | 'multiple-choice' 
  | 'fill-in-blank' 
  | 'match-pairs' 
  | 'sentence-building'
  | 'error-correction'
  | 'translation'
  | 'conversation-prompt'
  | 'matching'
  | 'reordering';

export interface PracticeExercise {
  type: PracticeExerciseType;
  prompt: string;
  correctAnswer: string;
  alternatives?: string[];
  explanation?: string;
  points?: number;
  difficulty?: GrammarDifficulty;
  relatedRule?: string;
  context?: string;
  pairs?: Array<{item: string; match: string}>;
}

export type VisualAidType = 
  | 'table' 
  | 'diagram' 
  | 'chart' 
  | 'image' 
  | 'flowchart' 
  | 'animation' 
  | 'color-coded-text' 
  | 'comparison-chart' 
  | 'mind-map';

export interface VisualAid {
  type: VisualAidType;
  title: string;
  description?: string;
  data?: TableData | DiagramData | ChartData | ImageData;
}

// Table data structure
export interface TableData {
  headers: string[];
  rows: (string | { text: string; highlight?: boolean })[][];
  caption?: string;
  footnote?: string;
}

// Diagram data structure
export interface DiagramData {
  nodes: DiagramNode[];
  connections?: DiagramConnection[];
  layout?: 'flow' | 'tree' | 'radial' | 'timeline' | 'linear';
}

export interface DiagramNode {
  id: string;
  label: string;
  description?: string;
  examples?: string[];
  position?: { x: number; y: number } | number; // Position as coordinates or as percentage for timelines
  highlight?: boolean;
}

export interface DiagramConnection {
  from: string;
  to: string;
  label?: string;
  type?: 'solid' | 'dashed' | 'dotted';
}

// Chart data structure
export interface ChartData {
  type: 'bar' | 'pie' | 'line' | 'radar';
  labels: string[];
  datasets: {
    label: string;
    data: number[];
    backgroundColor?: string | string[];
    borderColor?: string | string[];
  }[];
}

// Image data structure
export interface ImageData {
  src: string;
  alt: string;
  caption?: string;
  hotspots?: {
    x: number;
    y: number;
    label: string;
    description: string;
  }[];
}

export interface GrammarPattern {
  id: string;
  slug?: string;
  name: string;
  difficulty: GrammarDifficulty;
  category: GrammarCategory | string;
  categories?: string[];
  summary?: string;
  formulas?: string[];
  formula?: string;
  examples: ExampleSentence[];
  explanation: string;
  notes?: string;
  exceptions?: string[];
  usageNotes?: string[];
  relatedPatterns?: string[];
  visualAids?: VisualAid[];
  practiceExercises?: PracticeExercise[];
  learningPath?: string[];
  commonErrors?: string[];
  furtherReadings?: string[];
  culturalContext?: string;
}

export interface GrammarExerciseItem {
  prompt: string;
  answer: string;
  rule: string;
  alternatives?: string[];
}

export interface GrammarExercise {
  description: string;
  items: GrammarExerciseItem[];
}

export interface LearningPath {
  id: string;
  title: string;
  description: string;
  patternIds: string[];
  prerequisites?: string[];
  difficulty: GrammarDifficulty;
  estimatedTime: string;
}

export interface GrammarUserProgress {
  completedLessons: string[];
  savedPatterns: string[];
  exerciseResults: {
    [patternId: string]: {
      attempts: number;
      correctAnswers: number;
      lastAttemptDate: number;
    }
  };
  masteryLevel: {
    [patternId: string]: 'not-started' | 'learning' | 'practicing' | 'mastered'
  };
  recentlyViewed: string[];
  notes: {
    [patternId: string]: string
  };
}

// These interfaces are for the AI grammar tutor features
export interface GrammarTutorMessage {
  id: string;
  role: 'user' | 'tutor';
  content: string;
  timestamp: number;
  aiResponse?: GrammarAIResponse;
}

// Define the structure for AI responses
export interface GrammarAIResponse {
  rule?: {
    name: string;
    formula: string;
    explanation: string;
    examples: {
      turkish: string;
      english: string;
    }[];
  };
  wordBreakdown?: {
    word: string;
    breakdown: WordBreakdownData;
  };
  exercise?: GrammarExercise;
}

export interface GrammarExplanationRequest {
  pattern: GrammarPattern;
  query: string;
  previousMessages: {
    role: 'user' | 'assistant';
    content: string;
  }[];
}

export interface GrammarExplanationResponse {
  explanation: string;
  structuredData?: GrammarAIResponse;
}

// Define Grammar Progress for the user
export interface GrammarProgress {
  userId: string;
  completedPatterns: Array<{
    patternId: string;
    proficiency: number; // 0-100
    lastPracticed: number; // timestamp
  }>;
  savedPatterns: string[];
  recentlyViewed: string[];
}
