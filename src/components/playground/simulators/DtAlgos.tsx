import { useState } from 'react';
import type { Lesson } from '../../../types';
import { clsx } from 'clsx';

const ALGOS = [
  { name: 'ID3', metric: 'Entropy + Information gain', desc: 'Iterative Dichotomiser 3 — uses the Entropy function and Information gain as metrics.' },
  { name: 'C4.5', metric: 'Gain Ratio', desc: 'Successor of ID3 — uses Gain Ratio to handle both continuous and categorical variables.' },
  { name: 'CART', metric: 'Gini index / variance reduction', desc: 'Classification and Regression Trees — uses Gini index for classification, and variance reduction for regression.' },
  { name: 'CHAID', metric: 'Chi-square', desc: 'Chi-squared Automatic Interaction Detection — performs multi-level splits when computing classification trees.' },
];

export default function DtAlgos({ lesson: _lesson }: { lesson: Lesson }) {
  const [active, setActive] = useState<number | null>(0);
  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-5">
      <div className="lg:col-span-7 space-y-2">
        {ALGOS.map((a, i) => (
          <button
            key={a.name}
            onClick={() => setActive(active === i ? null : i)}
            className={clsx('w-full text-left rounded-xl border p-3 transition-all', active === i ? 'border-accent bg-accent-soft' : 'border-border-app bg-surface hover:bg-accent-soft/40')}
          >
            <div className="flex items-center justify-between gap-2">
              <div className="text-sm font-bold text-text-primary">{a.name}</div>
              <div className="text-[10px] font-mono uppercase tracking-widest text-accent">{a.metric}</div>
            </div>
            <div className="text-[11px] text-text-secondary leading-snug mt-1">{a.desc}</div>
          </button>
        ))}
      </div>
      <div className="lg:col-span-5 rounded-2xl border border-accent/40 bg-accent-soft/40 p-4 flex flex-col justify-center">
        <div className="text-[10px] font-mono uppercase tracking-widest text-accent">All four split metrics</div>
        <ul className="text-xs text-text-primary mt-2 space-y-1.5">
          <li>· <strong>Gini</strong> — 1 − Σ pᵢ²</li>
          <li>· <strong>Entropy</strong> — −Σ pᵢ log pᵢ</li>
          <li>· <strong>Information gain</strong> — Δ in entropy after a split</li>
          <li>· <strong>Gain ratio</strong> — gain normalised by split info</li>
        </ul>
      </div>
    </div>
  );
}
