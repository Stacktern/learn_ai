import { useState } from 'react';
import type { Lesson } from '../../../types';
import { clsx } from 'clsx';

const MODELS = [
  { name: 'Logistic Regression', desc: 'Despite the name, it\'s used for binary classification problems.' },
  { name: 'Decision Trees', desc: 'Predict the class by learning simple decision rules inferred from the features.' },
  { name: 'Random Forests', desc: 'An ensemble of decision trees, typically used to improve the predictive accuracy and control overfitting.' },
  { name: 'Support Vector Machines (SVM)', desc: 'Effective in high-dimensional spaces, and particularly suited for binary classification problems.' },
];

const METRICS = ['Accuracy', 'Precision', 'Recall', 'F1-score', 'ROC AUC'];

export default function MlModelsClass({ lesson: _lesson }: { lesson: Lesson }) {
  const [active, setActive] = useState<number | null>(0);
  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-5">
      <div className="lg:col-span-5 space-y-2">
        {MODELS.map((m, i) => (
          <button
            key={m.name}
            onClick={() => setActive(active === i ? null : i)}
            className={clsx('w-full text-left rounded-xl border p-3 transition-all', active === i ? 'border-accent bg-accent-soft' : 'border-border-app bg-surface hover:bg-accent-soft/40')}
          >
            <div className="text-sm font-bold text-text-primary">{m.name}</div>
            <div className="text-[11px] text-text-secondary leading-snug mt-1">{m.desc}</div>
          </button>
        ))}
      </div>
      <div className="lg:col-span-7 rounded-2xl border border-border-app bg-surface p-4 min-h-[300px] flex flex-col">
        <div className="text-[10px] font-mono uppercase tracking-widest text-text-muted mb-2">Evaluation metrics for classification</div>
        <div className="flex flex-wrap gap-2">
          {METRICS.map((m) => (
            <div key={m} className="px-3 py-2 rounded-lg bg-accent-soft text-accent text-xs font-mono border border-accent/30">{m}</div>
          ))}
        </div>
        <div className="mt-auto pt-3 rounded-xl border border-accent/40 bg-accent-soft/40 p-3 text-xs text-text-primary">
          The book: <em>"Classification models are assessed on accuracy, precision, recall, and sometimes the confusion matrix…"</em>
        </div>
      </div>
    </div>
  );
}
