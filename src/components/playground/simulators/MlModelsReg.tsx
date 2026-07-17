import { useState } from 'react';
import type { Lesson } from '../../../types';
import { clsx } from 'clsx';

const MODELS = [
  { name: 'Linear Regression', desc: 'Predicts the dependent variable based on the linear relationship between variables.' },
  { name: 'Polynomial Regression', desc: 'Extends linear models by adding polynomial terms, enhancing the capability to capture non-linear relationships.' },
  { name: 'Ridge', desc: 'L2 regularisation — shrinks coefficients to reduce overfitting.' },
  { name: 'Lasso', desc: 'L1 regularisation — drives some coefficients to zero (feature selection).' },
];

const APPS = [
  { domain: 'Economics', desc: 'Forecasting, demand models.' },
  { domain: 'Business', desc: 'Sales, customer lifetime value.' },
  { domain: 'Social sciences', desc: 'Survey analysis, behaviour models.' },
  { domain: 'Biology', desc: 'Dose-response curves.' },
];

export default function MlModelsReg({ lesson: _lesson }: { lesson: Lesson }) {
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
        <div className="text-[10px] font-mono uppercase tracking-widest text-text-muted mb-2">Where linear regression is used</div>
        <div className="space-y-2">
          {APPS.map((a) => (
            <div key={a.domain} className="rounded-lg border border-border-app bg-surface-2/40 p-3">
              <div className="text-sm font-bold text-text-primary">{a.domain}</div>
              <div className="text-[11px] text-text-secondary leading-snug mt-1">{a.desc}</div>
            </div>
          ))}
        </div>
        <div className="mt-auto pt-3 rounded-xl border border-accent/40 bg-accent-soft/40 p-3 text-xs text-text-primary">
          Linear regression: simplicity and interpretability make it indispensable in the data scientist's toolkit.
        </div>
      </div>
    </div>
  );
}
