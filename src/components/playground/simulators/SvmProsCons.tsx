import type { Lesson } from '../../../types';
import { clsx } from 'clsx';

const ADV = [
  'Effective in high-dimensional spaces, even when dimensions exceed samples.',
  'Memory efficient — uses a subset of training points (support vectors) in the decision function.',
  'Versatile — kernel trick adapts the classifier to different scenarios.',
];
const LIM = [
  'Choosing and fine-tuning the right kernel and parameters can be complex.',
  'SVMs can be computationally intensive for large datasets.',
  'SVMs do not directly provide probability estimates (calculated via 5-fold cross-validation).',
];

export default function SvmProsCons({ lesson: _lesson }: { lesson: Lesson }) {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
      <div className="rounded-2xl border border-emerald-500/40 bg-emerald-500/10 p-4">
        <div className="flex items-center gap-2 mb-2">
          <span className="h-7 w-7 rounded-lg bg-emerald-500 text-white flex items-center justify-center text-sm font-bold">+</span>
          <div className="text-base font-bold text-text-primary">Advantages</div>
        </div>
        <div className="space-y-2">
          {ADV.map((a) => (
            <div key={a} className="rounded-lg border border-emerald-500/30 bg-surface p-3 text-xs text-text-primary">{a}</div>
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
            <div key={l} className="rounded-lg border border-red-500/30 bg-surface p-3 text-xs text-text-primary">{l}</div>
          ))}
        </div>
      </div>
      <div className="lg:col-span-2 rounded-2xl border border-accent/40 bg-accent-soft/40 p-3 text-xs text-text-primary">
        SVMs are particularly effective for complex small- or medium-sized datasets where the decision boundary is not readily apparent. The choice of kernel and SVM parameters can greatly affect performance.
      </div>
    </div>
  );
}
