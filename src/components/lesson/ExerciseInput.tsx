import { useState, useEffect } from 'react';
import { CheckCircle2, XCircle, Lightbulb, Send, Sparkles, NotebookPen, Trophy } from 'lucide-react';
import { clsx } from 'clsx';
import type { Lesson } from '../../types';

interface ExerciseInputProps {
  lesson: Lesson;
  onCorrect: () => void;
}

function normalize(s: string) {
  return s.toLowerCase().trim().replace(/[^a-z0-9 ]/g, '');
}

function checkAnswer(input: string, expected: string): boolean {
  const a = normalize(input);
  const b = normalize(expected);
  if (a === b) return true;
  if (b.split(' ').length <= 2 && a.includes(b)) return true;
  if (a.length > 5 && (b.includes(a) || a.includes(b.split(' ')[0]))) return true;
  return false;
}

export default function ExerciseInput({ lesson, onCorrect }: ExerciseInputProps) {
  const [input, setInput] = useState('');
  const [status, setStatus] = useState<'idle' | 'correct' | 'wrong'>('idle');

  useEffect(() => {
    setInput('');
    setStatus('idle');
  }, [lesson.id]);

  const handleSubmit = () => {
    if (!input.trim()) return;
    const ok = checkAnswer(input, lesson.practiceExercise.expectedAnswer);
    setStatus(ok ? 'correct' : 'wrong');
    if (ok) onCorrect();
  };

  return (
    <div className="rounded-2xl border border-border-app bg-gradient-to-br from-[var(--bg-card-grad-from)] to-[var(--bg-card-grad-to)] overflow-hidden">
      <div className="px-5 sm:px-6 py-4 border-b border-border-app bg-gradient-to-r from-emerald-500/10 via-surface to-chart-3/10 flex items-center gap-3">
        <div className="h-9 w-9 rounded-xl bg-gradient-to-br from-success to-chart-3 text-white flex items-center justify-center shadow-[var(--shadow-sm)]">
          <NotebookPen size={16} />
        </div>
        <div>
          <h3 className="text-[11px] font-bold uppercase tracking-widest text-text-muted">Hands on</h3>
          <p className="text-base font-bold text-text-primary">Try it yourself</p>
        </div>
      </div>
      <div className="p-5 sm:p-6 space-y-4">
        <div className="space-y-2">
          <p className="text-base text-text-primary leading-relaxed font-medium">
            {lesson.practiceExercise.task}
          </p>
          <div className="flex items-start gap-2 text-sm text-text-secondary leading-relaxed p-3 rounded-lg bg-warning-soft/60 border border-warning/20">
            <Lightbulb size={14} className="mt-0.5 text-warning shrink-0" />
            <span className="italic"><strong className="not-italic text-warning">Hint:</strong> {lesson.practiceExercise.hint}</span>
          </div>
        </div>

        <div className="space-y-3">
          <div className="flex flex-col sm:flex-row gap-2">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSubmit()}
              placeholder="Type your answer…"
              className="flex-1 px-4 py-3 bg-surface-2 border border-border-app rounded-xl text-sm sm:text-base font-mono text-text-primary placeholder:text-text-muted focus:outline-none focus:border-accent focus:ring-2 focus:ring-accent/20 transition-all"
            />
            <button
              onClick={handleSubmit}
              disabled={!input.trim()}
              className="px-5 py-3 bg-gradient-to-br from-success to-chart-3 hover:from-success hover:to-success text-white rounded-xl text-sm font-bold inline-flex items-center justify-center gap-1.5 transition-all disabled:opacity-40 shadow-[var(--shadow-sm)] hover:shadow-[var(--shadow-md)]"
            >
              <Send size={14} /> Submit
            </button>
          </div>

          {status !== 'idle' && (
            <div
              className={clsx(
                'p-4 rounded-xl border flex items-start gap-3 text-sm',
                status === 'correct'
                  ? 'border-success/40 bg-success-soft text-success'
                  : 'border-warning/40 bg-warning-soft text-warning',
              )}
            >
              {status === 'correct' ? (
                <Trophy size={18} className="mt-0.5 shrink-0" />
              ) : (
                <XCircle size={18} className="mt-0.5 shrink-0" />
              )}
              <div>
                <strong className="block text-[11px] uppercase tracking-widest font-mono mb-0.5">
                  {status === 'correct' ? 'Nice — that matches.' : 'Not quite.'}
                </strong>
                <p className="mt-0.5 leading-relaxed text-text-primary">
                  {status === 'correct'
                    ? 'Lesson marked as practiced.'
                    : 'Re-read the simulator panel and try again. There is no penalty for retries.'}
                </p>
              </div>
            </div>
          )}
          {status === 'correct' && (
            <div className="inline-flex items-center gap-1.5 text-[11px] font-mono text-success">
              <Sparkles size={11} /> Progress auto-saved
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
