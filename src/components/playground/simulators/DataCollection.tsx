import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import type { Lesson } from '../../../types';
import { Database, Cloud, Cpu, Users, ShoppingBag, FileJson, FileText, Check } from 'lucide-react';
import { clsx } from 'clsx';

interface Scenario {
  id: string;
  text: string;
  format: 'csv' | 'json' | 'sql' | 'nosql';
  why: string;
  icon: typeof Database;
}

const SCENARIOS: Scenario[] = [
  { id: 's1', text: 'Monthly sales spreadsheet from finance.', format: 'csv', why: 'CSV is perfect for flat tabular data that fits in a spreadsheet.', icon: FileText },
  { id: 's2', text: 'Real-time GPS coordinates from delivery trucks.', format: 'nosql', why: 'High-velocity time-series data is best stored in a NoSQL time-series store (e.g. Cassandra, InfluxDB).', icon: Cloud },
  { id: 's3', text: 'Customer profile with nested purchase history returned by an API.', format: 'json', why: 'JSON handles nested, hierarchical data and is the lingua franca of web APIs.', icon: FileJson },
  { id: 's4', text: 'Billing records needing complex joins across departments.', format: 'sql', why: 'Relational queries and joins are what SQL databases are built for.', icon: Database },
];

const FORMATS = [
  { id: 'csv', name: 'CSV', icon: FileText, color: 'var(--chart-1)', desc: 'Flat tabular data, easy to share.' },
  { id: 'json', name: 'JSON', icon: FileJson, color: 'var(--chart-5)', desc: 'Hierarchical, great for web APIs.' },
  { id: 'sql', name: 'SQL DB', icon: Database, color: 'var(--chart-2)', desc: 'Relational queries and joins.' },
  { id: 'nosql', name: 'NoSQL', icon: Cloud, color: 'var(--chart-3)', desc: 'Flexible, high-velocity streams.' },
] as const;

export default function DataCollection({ lesson: _lesson }: { lesson: Lesson }) {
  const [placements, setPlacements] = useState<Record<string, string | null>>({});
  const [dragging, setDragging] = useState<string | null>(null);

  const onDrop = (formatId: string) => {
    if (!dragging) return;
    setPlacements({ ...placements, [dragging]: formatId });
    setDragging(null);
  };

  const correct = SCENARIOS.every((s) => placements[s.id] === s.format);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-5">
      <div className="lg:col-span-5 space-y-2">
        <div className="text-[10px] font-mono uppercase tracking-widest text-text-muted mb-1">Scenarios</div>
        {SCENARIOS.map((s) => {
          const Icon = s.icon;
          const placed = placements[s.id];
          return (
            <div
              key={s.id}
              draggable={!placed}
              onDragStart={() => setDragging(s.id)}
              onDragEnd={() => setDragging(null)}
              className={clsx(
                'rounded-xl border p-3 flex items-start gap-2.5 cursor-grab active:cursor-grabbing transition-all',
                placed
                  ? 'border-emerald-500/40 bg-emerald-500/10'
                  : dragging === s.id
                    ? 'border-accent bg-accent-soft opacity-50'
                    : 'border-border-app bg-surface hover:bg-surface-2',
              )}
            >
              <span className="h-7 w-7 shrink-0 rounded-lg bg-surface-2 text-text-secondary flex items-center justify-center">
                <Icon size={13} />
              </span>
              <div className="flex-1 min-w-0">
                <p className="text-xs text-text-primary leading-snug">{s.text}</p>
                {placed && (
                  <p className="text-[10px] text-emerald-700 dark:text-emerald-300 mt-1 font-mono">
                    âœ“ placed on {FORMATS.find((f) => f.id === placed)?.name}
                  </p>
                )}
              </div>
            </div>
          );
        })}
      </div>

      <div className="lg:col-span-7 grid grid-cols-2 gap-2">
        {FORMATS.map((f) => {
          const Icon = f.icon;
          const items = SCENARIOS.filter((s) => placements[s.id] === f.id);
          return (
            <div
              key={f.id}
              onDragOver={(e) => e.preventDefault()}
              onDrop={() => onDrop(f.id)}
              className="rounded-2xl border-2 border-dashed border-border-app bg-surface p-3 space-y-2 min-h-[180px]"
            >
              <div className="flex items-center gap-2">
                <span
                  className="h-8 w-8 rounded-lg flex items-center justify-center"
                  style={{ background: `${f.color}22`, color: f.color }}
                >
                  <Icon size={14} />
                </span>
                <div className="min-w-0">
                  <div className="text-xs font-bold text-text-primary">{f.name}</div>
                  <div className="text-[10px] text-text-muted">{f.desc}</div>
                </div>
              </div>
              <div className="space-y-1">
                <AnimatePresence>
                  {items.map((s) => (
                    <motion.div
                      key={s.id}
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.9 }}
                      className="rounded-lg bg-surface-2/60 border border-border-app p-2 text-[10px] text-text-secondary"
                    >
                      {s.text}
                    </motion.div>
                  ))}
                </AnimatePresence>
                {items.length === 0 && (
                  <div className="text-[10px] text-text-muted italic text-center py-4">
                    Drop a scenario here
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>

      <AnimatePresence>
        {correct && (
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            className="lg:col-span-12 rounded-xl border border-emerald-500/40 bg-emerald-500/10 p-4 text-xs text-emerald-700 dark:text-emerald-300"
          >
            <Check size={14} className="inline mr-1" /> All scenarios placed correctly. {SCENARIOS[0].why}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
