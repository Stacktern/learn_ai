# Agent notes for LearnAI Tutor

## Run / build

- `npm run dev` — Vite + Express on port 3000.
- `npm run build` — Type-checks the server, runs Vite, bundles the server with esbuild.
- `npm run lint` — `tsc --noEmit`. Always run after any code change.

## Architecture rules

- All lessons live in `src/data/curriculum.ts` as plain data (no JSX). They are typed by `Lesson` in `src/types.ts`.
- A lesson is composed of: `objectives`, `concepts[]` (each with `paragraphs`, optional `analogy`, optional `codeSnippet`), `keyFormulas?`, `glossary?`, `realWorldExample`, `playground` (one of the `PlaygroundSpec` union members), `quiz[]`, `practiceExercise`, `keyTakeaways[]`.
- A new playground type requires three changes: (1) add a member to the `PlaygroundSpec` union in `types.ts`, (2) write a simulator component in `src/components/playground/simulators/`, (3) wire it in `src/components/playground/PlaygroundSection.tsx`.
- Theme is provided by `ThemeProvider` in `src/context/ThemeContext.tsx` and persisted in `localStorage` as `learnai_theme`. Do not set the `dark` class manually outside that file.
- Design tokens live in `src/index.css` under `:root` and `.dark`. Do not introduce new raw color classes (e.g. `slate-450`, `zinc-555`); use `text-text-primary`, `bg-surface`, `border-border-app`, etc.
- Tailwind v4 dark variant is enabled with `@custom-variant dark (&:where(.dark, .dark *));`.

## Conventions

- Use `clsx` for class composition. Avoid template-string classnames.
- Use `motion` from `motion/react` for animations.
- Recharts is the only chart library. Keep `isAnimationActive` default but cap duration at ~500ms.
- Use the `CodeBlock` component for any code shown in the lessons. It supports language hints and a copy button.
- Use the `Card`, `CardHeader`, `CardBody` primitives for boxed sections.

## Tutors / AI

- The Gemini-backed tutor route is `/api/tutor/chat` and the prompt route is `/api/playground/prompt`, both in `server.ts`.
- API key is read from `process.env.GEMINI_API_KEY`.
- Each lesson's tutor history is persisted under `localStorage` key `learnai_chat_<lessonId>`.

## Common pitfalls

- When adding a new simulator, the import path from `src/components/playground/simulators/X.tsx` to the shared widgets is `../shared/Slider` etc.; to `types` it is `../../../types`.
- The path union in `types.ts` is intentionally restricted to `'data-science'` for now. When adding new parts (Part II, etc.), expand the union and add a new `Path` entry to `CURRICULUM_DATA`.
- Recharts `<Cell>` must be passed as children of a chart series, not as a sibling component. For dynamic colors, use the `Cell` child pattern.
