export interface Concept {
  title: string;
  paragraphs: string[];
  analogy?: {
    concept: string;
    metaphor: string;
    why: string;
  };
  codeSnippet?: {
    language?: string;
    code: string;
  };
}

export interface Lesson {
  id: string;
  number: number;
  title: string;
  subtitle: string;
  pathId: 'data-science';
  pathTitle: string;
  readingTime: string;
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced';
  objectives: string[];
  concepts: Concept[];
  keyFormulas?: { latex: string; caption: string }[];
  glossary?: { term: string; definition: string }[];
  realWorldExample: {
    scenario: string;
    application: string;
    impact: string;
  };
  playground: PlaygroundSpec;
  quiz: QuizQuestion[];
  practiceExercise: {
    task: string;
    hint: string;
    expectedAnswer: string;
  };
  keyTakeaways: string[];
}

export type PlaygroundSpec =
  | { type: 'intro-impact'; title: string; instructions: string; expectedOutcome: string }
  | { type: 'history-timeline'; title: string; instructions: string; expectedOutcome: string }
  | { type: 'industries'; title: string; instructions: string; expectedOutcome: string }
  | { type: 'comparison'; title: string; instructions: string; expectedOutcome: string }
  | { type: 'lifecycle'; title: string; instructions: string; expectedOutcome: string }
  | { type: 'data-collection'; title: string; instructions: string; expectedOutcome: string }
  | { type: 'missing-values'; title: string; instructions: string; expectedOutcome: string }
  | { type: 'scaling'; title: string; instructions: string; expectedOutcome: string }
  | { type: 'visualization'; title: string; instructions: string; expectedOutcome: string }
  | { type: 'model-eval'; title: string; instructions: string; expectedOutcome: string }
  | { type: 'deployment'; title: string; instructions: string; expectedOutcome: string };

export interface QuizQuestion {
  id: string;
  question: string;
  options: string[];
  answerIndex: number;
  explanation: string;
}

export interface Path {
  id: 'data-science';
  title: string;
  description: string;
  icon: string;
  lessons: Lesson[];
}

export interface ChatMessage {
  id: string;
  role: 'user' | 'assistant';
  content: string;
  timestamp: string;
  codeContext?: string;
}
