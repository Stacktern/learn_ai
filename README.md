# LearnAI Tutor

An interactive tutorial website for **Data Science & Machine Learning**, built around the content of *"Data Science, A Comprehensive Guide for Beginners"*. The current build ships **Part I: Introduction to Data Science** (10 lessons, each with a hands-on interactive simulator).

## Features

- **10 lessons** covering the entire Part I of the source PDF — what data science is, its history and applications, how it differs from traditional analysis, the data science lifecycle, collection, cleaning, transformation, visualization, modeling, and deployment.
- **Interactive simulators** in every lesson: a timeline, a drag-and-drop format matcher, an industries radar chart, a slider-driven scaling playground, a train/test-split overfit explorer, and more.
- **Static code snippets** with syntax highlighting and one-click copy.
- **Key formulas** rendered with KaTeX.
- **Quiz + open-ended practice** per lesson, with progress saved in `localStorage`.
- **AI tutor chat** (Gemini 2.5 Flash) on every lesson, context-aware, with per-lesson history.
- **Light & dark mode** with a real toggle in the top bar (defaults to your OS preference on first visit).
- **Responsive** three-column layout that collapses to a mobile drawer + bottom chat button on small screens.

## Stack

- React 19 + TypeScript + Vite
- Tailwind CSS v4
- Recharts for charts
- KaTeX for math
- `motion` (Framer) for micro-interactions
- Express server providing the Gemini-backed `/api/tutor/chat` route

## Project structure

```
src/
├── App.tsx
├── main.tsx
├── index.css                 # design tokens, dark mode, base layer
├── types.ts
├── data/curriculum.ts        # all 10 Part I lessons
├── context/ThemeContext.tsx
├── hooks/{useLocalStorage, useMediaQuery}.ts
└── components/
    ├── Sidebar.tsx
    ├── TutorChat.tsx
    ├── QuizSection.tsx
    ├── ui/{ThemeToggle, Card, CodeBlock, Callout}.tsx
    ├── lesson/{LessonHero, ObjectivesList, ConceptCard, AnalogyCallout,
    │           KeyFormulas, GlossaryList, RealWorldStudy, ExerciseInput,
    │           KeyTakeaways, LessonFooter}.tsx
    └── playground/
        ├── PlaygroundSection.tsx
        ├── shared/{Slider, StatBadge}.tsx
        └── simulators/{IntroImpact, HistoryTimeline, Industries, Comparison,
                        Lifecycle, DataCollection, MissingValues, Scaling,
                        Visualization, ModelEval}.tsx
```

## Run locally

```bash
npm install
# .env already has GEMINI_API_KEY set
npm run dev
```

Then open <http://localhost:3000>.

## Build

```bash
npm run build
npm start
```

## Adding a lesson

1. Add a new entry to `lessons` in `src/data/curriculum.ts`. The new `Lesson` type requires objectives, concepts, real-world example, playground spec, quiz, practice, and key takeaways.
2. If the lesson needs a new kind of playground, extend the `PlaygroundSpec` union in `src/types.ts` and add a renderer in `src/components/playground/PlaygroundSection.tsx` and a simulator file in `src/components/playground/simulators/`.
3. Theme tokens live in `src/index.css` under `:root` and `.dark`.

## Verification commands

```bash
npm run lint     # TypeScript type check
npm run build    # Production build
```
