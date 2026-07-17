import type { Lesson } from '../../../types';

const ADV = [
  'Accuracy: corrects for decision trees\' habit of overfitting to their training set.',
  'Robustness: handles outliers and nonlinear data with high dimensional spaces efficiently.',
  'Variable importance estimation: ranks features in regression or classification problems.',
];
const LIM = [
  'Complexity: more complex and computationally intensive than decision trees.',
  'Model size: many trees can be cumbersome for real-time predictions.',
  'Interpretability: more like a black box than a single decision tree.',
];
const APPS = [
  { industry: 'Biomedical', desc: 'Identify disease likelihood from patient data.' },
  { industry: 'Banking', desc: 'Credit scoring, predicting loan defaults.' },
  { industry: 'Stock market', desc: 'Identify stock behaviour trends, predict future movements.' },
  { industry: 'E-commerce', desc: 'Recommend products based on customer behaviour patterns.' },
];

export default function RfProsCons({ lesson: _lesson }: { lesson: Lesson }) {
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
