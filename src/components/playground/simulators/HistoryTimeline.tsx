import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import type { Lesson } from '../../../types';
import { Lightbulb, Database, Server, Cpu, Brain, Cloud } from 'lucide-react';
import { clsx } from 'clsx';

interface Milestone {
  id: string;
  decade: string;
  title: string;
  short: string;
  long: string;
  icon: typeof Lightbulb;
  color: string;
}

const MILESTONES: Milestone[] = [
  { id: 'stats', decade: '1700sâ€“1900s', title: 'Statistics & probability', short: 'Demographic & economic analysis.', long: 'Roots of data science: 18th and 19th century probability theory used by governments and businesses for demographic and economic analysis.', icon: Lightbulb, color: 'var(--chart-1)' },
  { id: 'fisher', decade: '1900s', title: 'Modern statistics', short: 'Hypothesis testing & regression.', long: 'Ronald Fisher develops hypothesis testing; Karl Pearson contributes regression and correlation. These tools become fundamental in scientific research.', icon: Lightbulb, color: 'var(--chart-2)' },
  { id: 'computer', decade: '1950s', title: 'Computers', short: 'Real-time data processing.', long: 'The mid-20th century saw the introduction of computers, which significantly impacted data analysis. Data could be processed faster and on a larger scale.', icon: Cpu, color: 'var(--chart-3)' },
  { id: 'rdbms', decade: '1970s', title: 'Relational databases & SQL', short: 'Organized data storage.', long: 'The development of relational databases and SQL revolutionized how organizations stored and retrieved large amounts of data.', icon: Database, color: 'var(--chart-4)' },
  { id: 'mining', decade: '1990s', title: 'Data mining', short: 'Patterns in large datasets.', long: 'The term "Data Mining" appeared, combining statistics, artificial intelligence, and computer graphics to discover patterns and relationships in large datasets.', icon: Server, color: 'var(--chart-5)' },
  { id: 'bigdata', decade: '2000s', title: 'Big data', short: 'Datasets too large for classical tools.', long: 'The early 21st century introduced the concept of "Big Data" â€” datasets too large or complex for traditional software. Storage, analytics, and processing power all evolved.', icon: Cloud, color: 'var(--chart-6)' },
  { id: 'ds', decade: '2000s+', title: 'Formalization of data science', short: 'Unified discipline.', long: 'William S. Cleveland and others advocated an interdisciplinary approach unifying statistics, data analysis, and machine learning into one field.', icon: Brain, color: 'var(--chart-1)' },
  { id: 'ai', decade: '2010s+', title: 'AI era', short: 'Predictive automation.', long: 'AI, machine learning, and deep learning automate predictive modeling and decision-making â€” the era we are in now.', icon: Brain, color: 'var(--chart-2)' },
];

export default function HistoryTimeline({ lesson: _lesson }: { lesson: Lesson }) {
  const [active, setActive] = useState<string>('mining');
  const activeMilestone = MILESTONES.find((m) => m.id === active) ?? MILESTONES[0];

  return (
    <div className="space-y-5">
      <div className="relative">
        <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-surface-2 -translate-y-1/2" />
        <div className="relative flex justify-between items-center overflow-x-auto pb-2">
          {MILESTONES.map((m) => {
            const Icon = m.icon;
            const isActive = active === m.id;
            return (
              <button
                key={m.id}
                onClick={() => setActive(m.id)}
                className={clsx(
                  'relative z-10 flex flex-col items-center gap-1 px-2 py-1 transition-transform',
                  isActive ? 'scale-110' : 'opacity-60 hover:opacity-100',
                )}
                title={m.title}
              >
                <span
                  className={clsx(
                    'h-9 w-9 rounded-full flex items-center justify-center border-2 transition-colors',
                    isActive ? 'border-transparent shadow-[var(--shadow-md)]' : 'border-border-app bg-surface',
                  )}
                  style={isActive ? { background: m.color, color: 'white' } : undefined}
                >
                  <Icon size={14} />
                </span>
                <span className="text-[9px] font-mono uppercase tracking-widest text-text-muted whitespace-nowrap">
                  {m.decade}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={activeMilestone.id}
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          transition={{ duration: 0.25 }}
          className="rounded-2xl border border-border-app bg-surface p-5 space-y-2"
        >
          <div className="flex items-center gap-2">
            <span
              className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest"
              style={{ background: `${activeMilestone.color}22`, color: activeMilestone.color }}
            >
              {activeMilestone.decade}
            </span>
            <h4 className="text-sm font-semibold text-text-primary">{activeMilestone.title}</h4>
          </div>
          <p className="text-sm text-text-secondary leading-relaxed">{activeMilestone.long}</p>
        </motion.div>
      </AnimatePresence>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
        {MILESTONES.map((m) => (
          <button
            key={m.id}
            onClick={() => setActive(m.id)}
            className={clsx(
              'rounded-xl border p-3 text-left transition-colors',
              active === m.id
                ? 'border-accent bg-accent-soft text-accent'
                : 'border-border-app bg-surface text-text-secondary hover:bg-surface-2',
            )}
          >
            <div className="text-[10px] font-mono uppercase tracking-widest text-text-muted">{m.decade}</div>
            <div className="text-xs font-semibold mt-0.5">{m.title}</div>
          </button>
        ))}
      </div>
    </div>
  );
}
