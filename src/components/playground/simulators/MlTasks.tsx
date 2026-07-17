import { useState } from 'react';
import type { Lesson } from '../../../types';
import { clsx } from 'clsx';

const TASKS = {
  Supervised: [
    { name: 'Classification', desc: 'Predict categorical labels. Examples: spam detection, image recognition, patient diagnosis. Algorithms: logistic regression, decision trees, SVM, neural networks.' },
    { name: 'Regression', desc: 'Predict continuous values. Examples: sales amounts, temperature forecasts, stock prices. Algorithms: linear regression, polynomial regression, ridge regression.' },
  ],
  Unsupervised: [
    { name: 'Clustering', desc: 'Divide the dataset into groups. Examples: customer segmentation, summarising data. Techniques: K-means, hierarchical cluster analysis (HCA), expectation maximisation.' },
    { name: 'Dimensionality Reduction', desc: 'Reduce the number of random variables. Techniques: PCA, t-SNE.' },
  ],
  Reinforcement: [
    { name: 'Policy Optimization', desc: 'Learn a policy (strategy) that dictates the action to be taken. Algorithms: Policy Gradient, Actor-Critic.' },
    { name: 'Value Learning', desc: 'Estimate how good it is to be in a state or take an action. Techniques: Q-Learning, Value Iteration.' },
  ],
};

const APPS: { industry: string; tasks: string[] }[] = [
  { industry: 'Finance', tasks: ['Regression: stock-price prediction', 'Classification: credit-risk assessment'] },
  { industry: 'Marketing', tasks: ['Clustering: customer segmentation', 'RL: optimise buying strategies'] },
  { industry: 'Healthcare', tasks: ['Classification: disease diagnosis', 'Regression: predict patient recovery time'] },
];

export default function MlTasks({ lesson: _lesson }: { lesson: Lesson }) {
  const [active, setActive] = useState<keyof typeof TASKS>('Supervised');
  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-5">
      <div className="lg:col-span-5 space-y-2">
        {(Object.keys(TASKS) as Array<keyof typeof TASKS>).map((k) => (
          <button
            key={k}
            onClick={() => setActive(k)}
            className={clsx('w-full text-left rounded-xl border p-3 transition-all', active === k ? 'border-accent bg-accent-soft' : 'border-border-app bg-surface hover:bg-accent-soft/40')}
          >
            <div className="text-sm font-bold text-text-primary">{k}</div>
            <div className="text-[11px] text-text-secondary leading-snug mt-1">{TASKS[k].length} task types →</div>
          </button>
        ))}
      </div>
      <div className="lg:col-span-7 space-y-3">
        <div className="rounded-2xl border border-border-app bg-surface p-4 space-y-2">
          <div className="text-[10px] font-mono uppercase tracking-widest text-text-muted">{active} tasks</div>
          {TASKS[active].map((t) => (
            <div key={t.name} className="rounded-lg border border-border-app bg-surface-2/40 p-3">
              <div className="text-sm font-bold text-text-primary">{t.name}</div>
              <div className="text-[11px] text-text-secondary leading-snug mt-1">{t.desc}</div>
            </div>
          ))}
        </div>
        <div className="rounded-2xl border border-accent/40 bg-accent-soft/40 p-3">
          <div className="text-[10px] font-mono uppercase tracking-widest text-accent mb-2">Applications across domains</div>
          <div className="space-y-1.5 text-xs text-text-primary">
            {APPS.map((a) => (
              <div key={a.industry}>
                <strong>{a.industry}:</strong> {a.tasks.join('; ')}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
