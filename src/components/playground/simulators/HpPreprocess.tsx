import { useState } from 'react';
import type { Lesson } from '../../../types';
import { clsx } from 'clsx';

const NUMERIC_STEPS = [
  { name: 'Imputer', desc: 'SimpleImputer(strategy="mean")' },
  { name: 'Scaler', desc: 'StandardScaler() — zero mean, unit variance' },
];
const CATEGORICAL_STEPS = [
  { name: 'Imputer', desc: 'SimpleImputer(strategy="most_frequent")' },
  { name: 'One-Hot', desc: 'OneHotEncoder(handle_unknown="ignore")' },
];

export default function HpPreprocess({ lesson: _lesson }: { lesson: Lesson }) {
  const [tab, setTab] = useState<'num' | 'cat'>('num');
  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-5">
      <div className="lg:col-span-5 space-y-2">
        <button onClick={() => setTab('num')} className={clsx('w-full text-left rounded-xl border p-3', tab === 'num' ? 'border-accent bg-accent-soft' : 'border-border-app bg-surface')}>
          <div className="text-sm font-bold text-text-primary">Numerical pipeline</div>
          <div className="text-[11px] text-text-muted">int64, float64 columns</div>
        </button>
        <button onClick={() => setTab('cat')} className={clsx('w-full text-left rounded-xl border p-3', tab === 'cat' ? 'border-accent bg-accent-soft' : 'border-border-app bg-surface')}>
          <div className="text-sm font-bold text-text-primary">Categorical pipeline</div>
          <div className="text-[11px] text-text-muted">object, category columns</div>
        </button>
        <div className="rounded-xl border border-accent/40 bg-accent-soft/40 p-3 text-xs text-text-primary">
          The book: a <strong>ColumnTransformer</strong> with these two pipelines feeds into a single preprocessing step for the model.
        </div>
      </div>
      <div className="lg:col-span-7 rounded-2xl border border-border-app bg-surface p-4 min-h-[300px]">
        <div className="text-[10px] font-mono uppercase tracking-widest text-text-muted mb-2">{(tab === 'num' ? NUMERIC_STEPS : CATEGORICAL_STEPS).length} steps</div>
        <div className="space-y-2">
          {(tab === 'num' ? NUMERIC_STEPS : CATEGORICAL_STEPS).map((s, i) => (
            <div key={s.name} className="rounded-lg border border-border-app bg-surface-2/40 p-3">
              <div className="flex items-center gap-2">
                <span className="h-6 w-6 rounded-md bg-accent text-white text-[10px] font-mono font-bold flex items-center justify-center">{i + 1}</span>
                <div className="text-sm font-bold text-text-primary">{s.name}</div>
              </div>
              <div className="text-[11px] text-text-secondary leading-snug mt-1 font-mono">{s.desc}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
