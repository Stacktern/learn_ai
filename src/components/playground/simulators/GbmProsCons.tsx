import type { Lesson } from '../../../types';

const ADV = [
  'Flexibility: can optimise different loss functions and provides several hyperparameter tuning options.',
  'Predictive power: often provides predictive accuracy that cannot be trumped by other algorithms.',
  'Handles different data types: capable of handling data of mixed types — quantitative, categorical.',
];
const LIM = [
  'Scaling: due to the sequential nature of boosting it can hardly be parallelised.',
  'Overfitting: if not tuned properly, the model can overfit — performs well on training but poorly on unseen data.',
  'Complexity: requires careful tuning of the number of trees, depth, learning rate, and more.',
];
const APPS = [
  { industry: 'Finance', desc: 'Credit scoring, risk management.' },
  { industry: 'Medicine', desc: 'Identify various risk factors in patient management.' },
  { industry: 'E-commerce', desc: 'Recommendation systems, customer segmentation.' },
];

export default function GbmProsCons({ lesson: _lesson }: { lesson: Lesson }) {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-5">
      <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-3">
        <div className="rounded-2xl border border-emerald-500/40 bg-emerald-500/10 p-4">
          <div className="flex items-center gap-2 mb-2">
            <span className="h-7 w-7 rounded-lg bg-emerald-500 text-white flex items-center justify-center text-sm font-bold">+</span>
            <div className="text-sm font-bold text-text-primary">Advantages</div>
          </div>
          <div className="space-y-1.5">
            {ADV.map((a) => <div key={a} className="text-[11px] text-text-primary leading-snug">· {a}</div>)}
          </div>
        </div>
        <div className="rounded-2xl border border-red-500/40 bg-red-500/10 p-4">
          <div className="flex items-center gap-2 mb-2">
            <span className="h-7 w-7 rounded-lg bg-red-500 text-white flex items-center justify-center text-sm font-bold">−</span>
            <div className="text-sm font-bold text-text-primary">Limitations</div>
          </div>
          <div className="space-y-1.5">
            {LIM.map((l) => <div key={l} className="text-[11px] text-text-primary leading-snug">· {l}</div>)}
          </div>
        </div>
      </div>
      <div className="lg:col-span-5 rounded-2xl border border-accent/40 bg-accent-soft/40 p-4">
        <div className="text-[10px] font-mono uppercase tracking-widest text-accent">Applications</div>
        <div className="mt-2 space-y-1.5">
          {APPS.map((a) => (
            <div key={a.industry} className="rounded-lg bg-surface p-2.5 border border-border-app">
              <div className="text-xs font-bold text-text-primary">{a.industry}</div>
              <div className="text-[11px] text-text-secondary leading-snug mt-0.5">{a.desc}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
