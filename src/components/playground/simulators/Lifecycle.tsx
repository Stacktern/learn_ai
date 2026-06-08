import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import type { Lesson } from '../../../types';
import { Database, Brush, Shuffle, BarChart3, Brain, Rocket, Check } from 'lucide-react';
import { clsx } from 'clsx';

interface Stage {
  id: string;
  label: string;
  description: string;
  effort: number;
  icon: typeof Database;
}

const STAGES: Stage[] = [
  { id: 'collect', label: 'Data collection', description: 'Gather internal, external, sensor, and user-generated data.', effort: 12, icon: Database },
  { id: 'clean', label: 'Data cleaning', description: 'Fix missing values, outliers, duplicates, and inconsistencies.', effort: 30, icon: Brush },
  { id: 'transform', label: 'Data transformation', description: 'Normalize, standardize, encode, and engineer features.', effort: 25, icon: Shuffle },
  { id: 'explore', label: 'Exploration & visualization', description: 'Descriptive stats and charts to understand the data.', effort: 13, icon: BarChart3 },
  { id: 'model', label: 'Data modeling', description: 'Train, test, and evaluate candidate models.', effort: 12, icon: Brain },
  { id: 'deploy', label: 'Deployment & maintenance', description: 'Ship predictions and monitor for drift.', effort: 8, icon: Rocket },
];

const PRESETS: Record<string, number[]> = {
  textbook: STAGES.map((s) => s.effort),
  'ml-heavy': [10, 15, 20, 12, 30, 13],
  'data-messy': [15, 45, 20, 8, 8, 4],
  'production-first': [15, 20, 15, 8, 12, 30],
};

export default function Lifecycle({ lesson: _lesson }: { lesson: Lesson }) {
  const [completed, setCompleted] = useState<string[]>(['collect']);
  const [efforts, setEfforts] = useState<number[]>(STAGES.map((s) => s.effort));
  const total = efforts.reduce((a, b) => a + b, 0);

  const toggle = (id: string) => {
    setCompleted((prev) => (prev.includes(id) ? prev : [...prev, id]));
  };

  const applyPreset = (key: keyof typeof PRESETS) => {
    setEfforts(PRESETS[key]);
  };

  return (
    <div className="space-y-5">
      <div className="flex flex-wrap gap-1.5">
        {(Object.keys(PRESETS) as Array<keyof typeof PRESETS>).map((k) => (
          <button
            key={k}
            onClick={() => applyPreset(k)}
            className="px-2.5 py-1 rounded-lg text-[10px] font-bold uppercase tracking-wider border border-border-app bg-surface hover:bg-surface-2 text-text-secondary transition-colors"
          >
            {k.replace('-', ' ')}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-3">
        {STAGES.map((s, i) => {
          const Icon = s.icon;
          const isDone = completed.includes(s.id);
          const percent = (efforts[i] / total) * 100;
          return (
            <button
              key={s.id}
              onClick={() => toggle(s.id)}
              className={clsx(
                'rounded-2xl border p-4 text-left space-y-2 transition-all',
                isDone
                  ? 'border-accent bg-accent-soft'
                  : 'border-border-app bg-surface hover:bg-surface-2',
              )}
            >
              <div className="flex items-center gap-2">
                <span
                  className={clsx(
                    'h-7 w-7 rounded-lg flex items-center justify-center text-xs font-mono font-bold',
                    isDone ? 'bg-accent text-white' : 'bg-surface-2 text-text-muted',
                  )}
                >
                  {isDone ? <Check size={12} /> : i + 1}
                </span>
                <Icon size={14} className={isDone ? 'text-accent' : 'text-text-muted'} />
                <h4 className="text-xs font-bold uppercase tracking-widest text-text-primary">{s.label}</h4>
                <span className="ml-auto text-[10px] font-mono text-text-muted">{percent.toFixed(0)}%</span>
              </div>
              <p className="text-xs text-text-secondary leading-relaxed">{s.description}</p>
              <div className="h-1.5 rounded-full bg-surface-2 overflow-hidden">
                <motion.div
                  className="h-full bg-gradient-to-r from-chart-1 to-chart-3"
                  initial={{ width: 0 }}
                  animate={{ width: `${percent}%` }}
                  transition={{ duration: 0.4 }}
                />
              </div>
            </button>
          );
        })}
      </div>

      <AnimatePresence>
        {completed.length === STAGES.length && (
          <motion.div
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            className="rounded-xl border border-emerald-500/40 bg-emerald-500/10 p-3 text-xs text-emerald-700 dark:text-emerald-300"
          >
            You walked the entire lifecycle. Notice that the cleaning and transformation stages together take roughly half the total effort.
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
