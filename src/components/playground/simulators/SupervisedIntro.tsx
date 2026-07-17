import type { Lesson } from '../../../types';
import { clsx } from 'clsx';

const MODELS = [
  { name: 'Linear Regression', task: 'regression' },
  { name: 'Logistic Regression', task: 'classification' },
  { name: 'Support Vector Machines (SVM)', task: 'classification' },
  { name: 'Decision Trees', task: 'both' },
  { name: 'Random Forests', task: 'both' },
  { name: 'Gradient Boosting Machines (GBM)', task: 'both' },
  { name: 'Neural Networks', task: 'both' },
];

const TONE: Record<string, string> = {
  regression: 'border-chart-1/40 bg-chart-1/15 text-chart-1',
  classification: 'border-chart-2/40 bg-chart-2/15 text-chart-2',
  both: 'border-accent/40 bg-accent-soft text-accent',
};

export default function SupervisedIntro({ lesson: _lesson }: { lesson: Lesson }) {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-5">
      <div className="lg:col-span-7 rounded-2xl border border-border-app bg-surface p-4 space-y-3">
        <div className="text-[10px] font-mono uppercase tracking-widest text-text-secondary">The book lists 7 supervised models</div>
        <div className="grid grid-cols-2 gap-2">
          {MODELS.map((m) => (
            <div key={m.name} className={clsx('rounded-xl border p-3', TONE[m.task])}>
              <div className="text-[10px] font-mono uppercase tracking-widest opacity-80">{m.task}</div>
              <div className="text-sm font-bold mt-0.5">{m.name}</div>
            </div>
          ))}
        </div>
      </div>
      <div className="lg:col-span-5 rounded-2xl border border-accent/40 bg-accent-soft/40 p-4 flex flex-col justify-center">
        <div className="text-[10px] font-mono uppercase tracking-widest text-accent">What supervised means</div>
        <p className="text-sm text-text-primary leading-relaxed mt-2">
          Each training example is paired with an output label. The algorithm receives inputs with the corresponding correct outputs and learns a general rule that maps inputs to outputs.
        </p>
        <p className="text-sm text-text-primary leading-relaxed mt-2">
          The primary goal is to build a model that can make accurate predictions for new, unseen data based on the learned relationships from the training data.
        </p>
      </div>
    </div>
  );
}
