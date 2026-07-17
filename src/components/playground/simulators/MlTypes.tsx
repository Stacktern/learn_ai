import { useState } from 'react';
import type { Lesson } from '../../../types';
import { clsx } from 'clsx';

const TYPES = [
  { id: 'sup', label: 'Supervised', data: 'labeled', desc: 'Trained on a labeled dataset, where the model learns to predict outcomes from input data. Used for fraud detection, risk assessment, customer segmentation.' },
  { id: 'unsup', label: 'Unsupervised', data: 'unlabeled', desc: 'Trained on data without labeled responses — the model learns to identify inherent structures. Used for clustering and association (customer segmentation, market basket analysis).' },
  { id: 'rl', label: 'Reinforcement', data: 'reward', desc: 'Models learn to make decisions by trying to maximize a cumulative reward. Used in navigation, gaming, and real-time decision-making systems.' },
];

const EXAMPLES: Record<string, string[]> = {
  sup: ['Fraud detection', 'Risk assessment', 'Customer segmentation'],
  unsup: ['Customer segmentation', 'Market basket analysis'],
  rl: ['Navigation', 'Gaming', 'Real-time decision-making'],
};

export default function MlTypes({ lesson: _lesson }: { lesson: Lesson }) {
  const [active, setActive] = useState<string>('sup');
  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-5">
      <div className="lg:col-span-5 space-y-2">
        {TYPES.map((t) => (
          <button
            key={t.id}
            onClick={() => setActive(t.id)}
            className={clsx(
              'w-full text-left rounded-xl border p-3 transition-all',
              active === t.id ? 'border-accent bg-accent-soft shadow-[var(--shadow-md)]' : 'border-border-app bg-surface hover:bg-accent-soft/40',
            )}
          >
            <div className="flex items-center gap-2">
              <span className="h-5 px-2 rounded-md bg-accent text-white text-[10px] font-mono font-bold flex items-center justify-center">{t.data}</span>
              <div className="text-sm font-bold text-text-primary">{t.label}</div>
            </div>
            <div className="text-[11px] text-text-secondary leading-snug mt-1">{t.desc}</div>
          </button>
        ))}
      </div>
      <div className="lg:col-span-7 rounded-2xl border border-border-app bg-surface p-4 min-h-[280px] flex flex-col">
        <div className="text-[10px] font-mono uppercase tracking-widest text-text-muted mb-2">Examples of {active}</div>
        <div className="flex flex-wrap gap-2">
          {EXAMPLES[active].map((ex) => (
            <div key={ex} className="px-3 py-2 rounded-lg bg-accent-soft text-accent text-xs font-mono">{ex}</div>
          ))}
        </div>
        <div className="mt-4 rounded-xl border border-accent/40 bg-accent-soft/40 p-3 text-xs text-text-primary leading-relaxed">
          {TYPES.find((t) => t.id === active)?.desc}
        </div>
      </div>
    </div>
  );
}
