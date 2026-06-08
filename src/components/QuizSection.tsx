import { useState, useEffect } from 'react';
import { Check, X, HelpCircle, ArrowRight, RotateCcw, AlertCircle, Sparkles, ListChecks } from 'lucide-react';
import { clsx } from 'clsx';
import type { Lesson, QuizQuestion } from '../types';

interface QuizSectionProps {
  lesson: Lesson;
  onQuizCompleted: (lessonId: string, score: number, total: number) => void;
  savedScore?: { score: number; total: number };
}

export default function QuizSection({ lesson, onQuizCompleted, savedScore }: QuizSectionProps) {
  const { quiz } = lesson;
  const [selected, setSelected] = useState<Record<string, number>>({});
  const [submitted, setSubmitted] = useState<string[]>([]);
  const [finished, setFinished] = useState<boolean>(savedScore !== undefined);
  const [score, setScore] = useState<number>(savedScore?.score ?? 0);

  useEffect(() => {
    setSelected({});
    setSubmitted([]);
    setFinished(savedScore !== undefined);
    setScore(savedScore?.score ?? 0);
  }, [lesson.id]);

  const handleSelect = (q: QuizQuestion, idx: number) => {
    if (submitted.includes(q.id) || finished) return;
    setSelected({ ...selected, [q.id]: idx });
  };

  const handleSubmit = (q: QuizQuestion) => {
    if (selected[q.id] === undefined || submitted.includes(q.id)) return;
    const correct = selected[q.id] === q.answerIndex;
    if (correct) setScore((s) => s + 1);

    const newSubmitted = [...submitted, q.id];
    setSubmitted(newSubmitted);

    if (newSubmitted.length === quiz.length) {
      const finalScore = score + (correct ? 1 : 0);
      setFinished(true);
      onQuizCompleted(lesson.id, finalScore, quiz.length);
    }
  };

  const handleReset = () => {
    setSelected({});
    setSubmitted([]);
    setFinished(false);
    setScore(0);
  };

  return (
    <div className="rounded-2xl border border-border-app bg-gradient-to-br from-[var(--bg-card-grad-from)] to-[var(--bg-card-grad-to)] overflow-hidden">
      <div className="px-5 sm:px-6 py-4 border-b border-border-app bg-gradient-to-r from-warning/10 via-surface to-chart-5/10 flex items-center justify-between gap-3">
        <div className="flex items-center gap-3">
          <div className="h-9 w-9 rounded-xl bg-gradient-to-br from-chart-5 to-pink text-white flex items-center justify-center shadow-[var(--shadow-sm)]">
            <ListChecks size={16} />
          </div>
          <div>
            <h3 className="text-[11px] font-bold uppercase tracking-widest text-text-muted">Conceptual drill</h3>
            <p className="text-base font-bold text-text-primary">Quick quiz</p>
          </div>
        </div>
        {finished && (
          <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-gradient-to-r from-chart-1 to-chart-2 text-white text-[11px] font-bold uppercase tracking-wider font-mono shadow-[var(--shadow-sm)]">
            <Sparkles size={11} />
            Score: {score} / {quiz.length}
          </div>
        )}
      </div>

      <div className="p-5 sm:p-6 space-y-6">
        {quiz.map((q, qi) => {
          const userIdx = selected[q.id];
          const isSubmitted = submitted.includes(q.id);
          const isCorrect = userIdx === q.answerIndex;

          return (
            <div key={q.id} className="space-y-3">
              <h4 className="text-base sm:text-lg font-semibold text-text-primary flex items-start gap-2.5">
                <span className="h-7 w-7 shrink-0 rounded-lg bg-gradient-to-br from-chart-1 to-chart-2 text-white text-sm font-mono font-bold flex items-center justify-center shadow-[var(--shadow-sm)]">
                  {qi + 1}
                </span>
                <span className="leading-snug">{q.question}</span>
              </h4>

              <div className="grid grid-cols-1 gap-2 pl-0 sm:pl-9">
                {q.options.map((opt, oi) => {
                  const isSelected = userIdx === oi;
                  const isKey = oi === q.answerIndex;
                  let s = 'border-border-app bg-surface text-text-primary hover:bg-surface-2 hover:border-accent/40';
                  if (isSelected && !isSubmitted) s = 'border-accent bg-accent-soft text-accent font-semibold ring-2 ring-accent/20';
                  if (isSubmitted && isKey) s = 'border-success bg-success-soft text-success font-semibold ring-2 ring-success/20';
                  if (isSubmitted && isSelected && !isCorrect) s = 'border-danger bg-danger-soft text-danger';
                  if (isSubmitted && !isKey && !isSelected) s = 'border-border-app bg-surface text-text-muted opacity-50';

                  return (
                    <button
                      key={oi}
                      onClick={() => handleSelect(q, oi)}
                      disabled={isSubmitted || finished}
                      className={clsx('w-full text-left rounded-xl border px-4 py-3 text-sm leading-relaxed transition-all flex items-center justify-between gap-2 min-h-[44px]', s)}
                    >
                      <span>{opt}</span>
                      {isSubmitted && isKey && <Check size={16} className="shrink-0 text-success" />}
                      {isSubmitted && isSelected && !isCorrect && <X size={16} className="shrink-0 text-danger" />}
                    </button>
                  );
                })}
              </div>

              <div className="pl-0 sm:pl-9">
                {!isSubmitted ? (
                  <button
                    onClick={() => handleSubmit(q)}
                    disabled={userIdx === undefined}
                    className="mt-2 inline-flex items-center gap-1.5 text-sm font-bold text-white bg-gradient-to-br from-chart-1 to-chart-2 disabled:opacity-40 hover:from-chart-1 hover:to-chart-1 px-4 py-2.5 rounded-xl transition-all min-h-[44px] shadow-[var(--shadow-sm)]"
                  >
                    Check answer <ArrowRight size={14} />
                  </button>
                ) : (
                  <div className="mt-3 p-4 rounded-xl border border-border-app bg-gradient-to-br from-[var(--bg-card-grad-from)] to-[var(--bg-card-grad-to)]-2/60 flex items-start gap-3">
                    <AlertCircle size={16} className={clsx('mt-0.5 shrink-0', isCorrect ? 'text-success' : 'text-warning')} />
                    <div>
                      <div className="text-[10px] font-bold uppercase tracking-widest text-text-muted mb-0.5">
                        {isCorrect ? 'Correct Â· tutor feedback' : 'Not quite Â· tutor feedback'}
                      </div>
                      <p className="text-sm text-text-secondary leading-relaxed">{q.explanation}</p>
                    </div>
                  </div>
                )}
              </div>
            </div>
          );
        })}

        {finished && (
          <div className="border-t border-border-app pt-4 flex items-center justify-between flex-wrap gap-3">
            <p className="text-sm text-text-secondary">
              You scored <strong className="text-accent">{score}</strong> out of <strong className="text-text-primary">{quiz.length}</strong>.
            </p>
            <button
              onClick={handleReset}
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-text-secondary border border-border-app hover:bg-surface-2 px-3 py-2 rounded-lg transition-colors min-h-[44px]"
            >
              <RotateCcw size={13} /> Retry
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
