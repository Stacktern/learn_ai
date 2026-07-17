import type { Lesson } from '../../../types';
import { clsx } from 'clsx';

const ASPECTS = [
  { id: 'def', label: 'Definition & Purpose', desc: 'ML is a method of data analysis that automates analytical model building. It uses algorithms that iteratively learn from data to find hidden insights without being explicitly programmed where to look.' },
  { id: 'train', label: 'Model Training & Evaluation', desc: 'Training: select an algorithm and fit it to the data. Evaluation: test on held-out data with accuracy, precision, recall, F1-score, ROC curves.' },
  { id: 'challenge', label: 'Challenges', desc: 'Overfitting (too complex) and underfitting (too simple). The bias-variance tradeoff: manage the balance between erroneous assumptions and randomness in the training data.' },
  { id: 'apps', label: 'Applications', desc: 'Chatbots, recommendation systems, medical diagnosis, predictive analytics, self-driving cars — vast and varied.' },
];

export default function MlIntro({ lesson: _lesson }: { lesson: Lesson }) {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-5">
      <div className="lg:col-span-7 rounded-2xl border border-border-app bg-surface p-4 space-y-3">
        {ASPECTS.map((a) => (
          <div key={a.id} className="rounded-xl border border-border-app bg-surface-2/40 p-3">
            <div className="text-sm font-bold text-text-primary">{a.label}</div>
            <div className="text-[11px] text-text-secondary leading-snug mt-1">{a.desc}</div>
          </div>
        ))}
      </div>
      <div className="lg:col-span-5 rounded-2xl border border-accent/40 bg-accent-soft/40 p-4 flex flex-col justify-center">
        <div className="text-[10px] font-mono uppercase tracking-widest text-accent">Why ML matters</div>
        <p className="text-sm text-text-primary leading-relaxed mt-2">
          ML enhances data science by providing powerful tools to automate decision-making processes and offer predictions that are based on data patterns — not possible with traditional statistical methods alone.
        </p>
        <div className="mt-4 grid grid-cols-2 gap-2">
          <div className="rounded-lg bg-surface p-2 text-center">
            <div className="text-[10px] font-mono text-text-muted">Automates</div>
            <div className="text-base font-bold text-text-primary">Insights</div>
          </div>
          <div className="rounded-lg bg-surface p-2 text-center">
            <div className="text-[10px] font-mono text-text-muted">Boosts</div>
            <div className="text-base font-bold text-text-primary">Accuracy</div>
          </div>
        </div>
      </div>
    </div>
  );
}
