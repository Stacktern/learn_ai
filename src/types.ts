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
  keyFormulas?: { latex: string; caption: string }[];
}

export type PathId = 'data-science' | 'data-science-2' | 'data-science-3' | 'data-science-4' | 'data-science-5' | 'data-science-6';

export interface Lesson {
  id: string;
  number: number;
  title: string;
  subtitle: string;
  pathId: PathId;
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
  | { type: 'deployment'; title: string; instructions: string; expectedOutcome: string }
  | { type: 'linear-regression'; title: string; instructions: string; expectedOutcome: string }
  | { type: 'gradient-descent'; title: string; instructions: string; expectedOutcome: string }
  | { type: 'polynomial-regression'; title: string; instructions: string; expectedOutcome: string }
  | { type: 'logistic-regression'; title: string; instructions: string; expectedOutcome: string }
  | { type: 'confusion-matrix'; title: string; instructions: string; expectedOutcome: string }
  | { type: 'knn'; title: string; instructions: string; expectedOutcome: string }
  | { type: 'decision-tree'; title: string; instructions: string; expectedOutcome: string }
  | { type: 'random-forest'; title: string; instructions: string; expectedOutcome: string }
  | { type: 'svm'; title: string; instructions: string; expectedOutcome: string }
  | { type: 'naive-bayes'; title: string; instructions: string; expectedOutcome: string }
  | { type: 'hyperparameter'; title: string; instructions: string; expectedOutcome: string }
  | { type: 'kmeans'; title: string; instructions: string; expectedOutcome: string }
  | { type: 'hierarchical'; title: string; instructions: string; expectedOutcome: string }
  | { type: 'dbscan'; title: string; instructions: string; expectedOutcome: string }
  | { type: 'cluster-eval'; title: string; instructions: string; expectedOutcome: string }
  | { type: 'svd'; title: string; instructions: string; expectedOutcome: string }
  | { type: 'pca'; title: string; instructions: string; expectedOutcome: string }
  | { type: 'tsne'; title: string; instructions: string; expectedOutcome: string }
  | { type: 'apriori'; title: string; instructions: string; expectedOutcome: string }
  | { type: 'anomaly'; title: string; instructions: string; expectedOutcome: string }
  | { type: 'lib-purpose'; title: string; instructions: string; expectedOutcome: string }
  | { type: 'lib-overview'; title: string; instructions: string; expectedOutcome: string }
  | { type: 'numpy-features'; title: string; instructions: string; expectedOutcome: string }
  | { type: 'numpy-create'; title: string; instructions: string; expectedOutcome: string }
  | { type: 'numpy-ops'; title: string; instructions: string; expectedOutcome: string }
  | { type: 'pandas-features'; title: string; instructions: string; expectedOutcome: string }
  | { type: 'pandas-create-view'; title: string; instructions: string; expectedOutcome: string }
  | { type: 'pandas-select'; title: string; instructions: string; expectedOutcome: string }
  | { type: 'pandas-missing'; title: string; instructions: string; expectedOutcome: string }
  | { type: 'pandas-operations'; title: string; instructions: string; expectedOutcome: string }
  | { type: 'pandas-groupby'; title: string; instructions: string; expectedOutcome: string }
  | { type: 'mpl-line'; title: string; instructions: string; expectedOutcome: string }
  | { type: 'mpl-basics'; title: string; instructions: string; expectedOutcome: string }
  | { type: 'mpl-stats'; title: string; instructions: string; expectedOutcome: string }
  | { type: 'seaborn-dist'; title: string; instructions: string; expectedOutcome: string }
  | { type: 'seaborn-categorical'; title: string; instructions: string; expectedOutcome: string }
  | { type: 'seaborn-regression'; title: string; instructions: string; expectedOutcome: string }
  | { type: 'math-role'; title: string; instructions: string; expectedOutcome: string }
  | { type: 'stats-role'; title: string; instructions: string; expectedOutcome: string }
  | { type: 'math-stats-integration'; title: string; instructions: string; expectedOutcome: string }
  | { type: 'math-key-areas'; title: string; instructions: string; expectedOutcome: string }
  | { type: 'la-vectors'; title: string; instructions: string; expectedOutcome: string }
  | { type: 'la-matrices'; title: string; instructions: string; expectedOutcome: string }
  | { type: 'la-det-inv'; title: string; instructions: string; expectedOutcome: string }
  | { type: 'la-eigen'; title: string; instructions: string; expectedOutcome: string }
  | { type: 'la-svd'; title: string; instructions: string; expectedOutcome: string }
  | { type: 'calc-functions-limits'; title: string; instructions: string; expectedOutcome: string }
  | { type: 'calc-derivatives'; title: string; instructions: string; expectedOutcome: string }
  | { type: 'calc-integrals'; title: string; instructions: string; expectedOutcome: string }
  | { type: 'calc-partial-optim'; title: string; instructions: string; expectedOutcome: string }
  | { type: 'prob-rv-dists'; title: string; instructions: string; expectedOutcome: string }
  | { type: 'prob-ev-variance'; title: string; instructions: string; expectedOutcome: string }
  | { type: 'prob-bayes'; title: string; instructions: string; expectedOutcome: string }
  | { type: 'prob-lln-clt'; title: string; instructions: string; expectedOutcome: string }
  | { type: 'desc-central-dispersion'; title: string; instructions: string; expectedOutcome: string }
  | { type: 'desc-shape'; title: string; instructions: string; expectedOutcome: string }
  | { type: 'inf-sampling-ht'; title: string; instructions: string; expectedOutcome: string }
  | { type: 'inf-errors-reg-anova'; title: string; instructions: string; expectedOutcome: string }
  | { type: 'bayesian'; title: string; instructions: string; expectedOutcome: string }
  | { type: 'ml-intro'; title: string; instructions: string; expectedOutcome: string }
  | { type: 'ml-types'; title: string; instructions: string; expectedOutcome: string }
  | { type: 'ml-train-eval'; title: string; instructions: string; expectedOutcome: string }
  | { type: 'ml-tasks'; title: string; instructions: string; expectedOutcome: string }
  | { type: 'supervised-intro'; title: string; instructions: string; expectedOutcome: string }
  | { type: 'reg-vs-class'; title: string; instructions: string; expectedOutcome: string }
  | { type: 'ml-models-reg'; title: string; instructions: string; expectedOutcome: string }
  | { type: 'ml-models-class'; title: string; instructions: string; expectedOutcome: string }
  | { type: 'linear-reg-2'; title: string; instructions: string; expectedOutcome: string }
  | { type: 'ridge-lasso'; title: string; instructions: string; expectedOutcome: string }
  | { type: 'logistic-reg-2'; title: string; instructions: string; expectedOutcome: string }
  | { type: 'svm-concept'; title: string; instructions: string; expectedOutcome: string }
  | { type: 'svm-kernel'; title: string; instructions: string; expectedOutcome: string }
  | { type: 'svm-pros-cons'; title: string; instructions: string; expectedOutcome: string }
  | { type: 'dt-structure'; title: string; instructions: string; expectedOutcome: string }
  | { type: 'dt-how'; title: string; instructions: string; expectedOutcome: string }
  | { type: 'dt-algos'; title: string; instructions: string; expectedOutcome: string }
  | { type: 'dt-pros-cons'; title: string; instructions: string; expectedOutcome: string }
  | { type: 'rf-concept'; title: string; instructions: string; expectedOutcome: string }
  | { type: 'rf-build'; title: string; instructions: string; expectedOutcome: string }
  | { type: 'rf-pros-cons'; title: string; instructions: string; expectedOutcome: string }
  | { type: 'gbm-concept'; title: string; instructions: string; expectedOutcome: string }
  | { type: 'gbm-train'; title: string; instructions: string; expectedOutcome: string }
  | { type: 'gbm-pros-cons'; title: string; instructions: string; expectedOutcome: string }
  | { type: 'hp-overview'; title: string; instructions: string; expectedOutcome: string }
  | { type: 'hp-eda'; title: string; instructions: string; expectedOutcome: string }
  | { type: 'hp-preprocess'; title: string; instructions: string; expectedOutcome: string }
  | { type: 'hp-rf'; title: string; instructions: string; expectedOutcome: string }
  | { type: 'hp-svm'; title: string; instructions: string; expectedOutcome: string }
  | { type: 'covid-overview'; title: string; instructions: string; expectedOutcome: string }
  | { type: 'covid-load'; title: string; instructions: string; expectedOutcome: string }
  | { type: 'covid-prep'; title: string; instructions: string; expectedOutcome: string }
  | { type: 'covid-eda'; title: string; instructions: string; expectedOutcome: string }
  | { type: 'covid-lstm'; title: string; instructions: string; expectedOutcome: string }
  | { type: 'covid-svr'; title: string; instructions: string; expectedOutcome: string }
  | { type: 'pneu-overview'; title: string; instructions: string; expectedOutcome: string }
  | { type: 'pneu-prep'; title: string; instructions: string; expectedOutcome: string }
  | { type: 'cnn-core'; title: string; instructions: string; expectedOutcome: string }
  | { type: 'cnn-how'; title: string; instructions: string; expectedOutcome: string }
  | { type: 'cnn-advantages'; title: string; instructions: string; expectedOutcome: string }
  | { type: 'pneumodel'; title: string; instructions: string; expectedOutcome: string }
  | { type: 'pneu-train'; title: string; instructions: string; expectedOutcome: string }
  | { type: 'pneu-eval'; title: string; instructions: string; expectedOutcome: string }
  | { type: 'pneu-summary'; title: string; instructions: string; expectedOutcome: string };

export interface QuizQuestion {
  id: string;
  question: string;
  options: string[];
  answerIndex: number;
  explanation: string;
}

export interface Path {
  id: PathId;
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
