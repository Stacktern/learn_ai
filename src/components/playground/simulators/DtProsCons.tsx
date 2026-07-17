import type { Lesson } from '../../../types';
import { clsx } from 'clsx';

const ADV = [
  { title: 'Simple to understand and interpret', desc: 'Trees can be visualised, making them easy to explain to non-technical team members.' },
  { title: 'Little data preparation', desc: 'No need for normalisation, dummy variables, or missing-value handling.' },
  { title: 'Flexibility', desc: 'Can handle both numerical and categorical data.' },
];
const LIM = [
  { title: 'Overfitting', desc: 'Decision trees can create overly complex trees that do not generalise well. Mitigated by pruning.' },
  { title: 'Variance', desc: 'Small variations in the data might result in a completely different tree being generated.' },
  { title: 'Bias', desc: 'Decision tree learners can create biased trees if some classes dominate.' },
];

export default function DtProsCons({ lesson: _lesson }: { lesson: Lesson }) {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
      <div className="rounded-2xl border border-emerald-500/40 bg-emerald-500/10 p-4">
        <div className="flex items-center gap-2 mb-2">
          <span className="h-7 w-7 rounded-lg bg-emerald-500 text-white flex items-center justify-center text-sm font-bold">+</span>
          <div className="text-base font-bold text-text-primary">Advantages</div>
        </div>
        <div className="space-y-2">
          {ADV.map((a) => (
            <div key={a.title} className="rounded-lg border border-emerald-500/30 bg-surface p-3">
              <div className="text-xs font-bold text-text-primary">{a.title}</div>
              <div className="text-[11px] text-text-secondary leading-snug mt-1">{a.desc}</div>
            </div>
          ))}
        </div>
      </div>
      <div className="rounded-2xl border border-red-500/40 bg-red-500/10 p-4">
        <div className="flex items-center gap-2 mb-2">
          <span className="h-7 w-7 rounded-lg bg-red-500 text-white flex items-center justify-center text-sm font-bold">−</span>
          <div className="text-base font-bold text-text-primary">Limitations</div>
        </div>
        <div className="space-y-2">
          {LIM.map((l) => (
            <div key={l.title} className="rounded-lg border border-red-500/30 bg-surface p-3">
              <div className="text-xs font-bold text-text-primary">{l.title}</div>
              <div className="text-[11px] text-text-secondary leading-snug mt-1">{l.desc}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
