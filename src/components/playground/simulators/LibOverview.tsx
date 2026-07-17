import { useState } from 'react';
import type { Lesson } from '../../../types';
import { clsx } from 'clsx';

const LIBRARIES = [
  {
    family: 'Numerical computing',
    name: 'NumPy',
    icon: '🧮',
    summary: 'High-performance arrays and matrices; large toolkit of mathematical functions.',
    gives: 'ndarray, vectorised math, broadcasting',
  },
  {
    family: 'Data manipulation',
    name: 'Pandas',
    icon: '🐼',
    summary: 'Tabular data: DataFrames and Series with indexing, subsetting, slicing, and pivoting.',
    gives: 'DataFrame, Series, groupby, time series',
  },
  {
    family: 'Visualisation',
    name: 'Matplotlib',
    icon: '📊',
    summary: 'Static, animated, and interactive visualisations — the foundation of Python plotting.',
    gives: 'plt.plot, scatter, hist, bar, pie, boxplot, imshow',
  },
  {
    family: 'Visualisation',
    name: 'Seaborn',
    icon: '🎨',
    summary: 'High-level statistical graphics built on top of Matplotlib.',
    gives: 'histplot, boxplot, violin, pairplot, heatmap, regplot, catplot',
  },
  {
    family: 'Machine learning',
    name: 'Scikit-learn',
    icon: '🤖',
    summary: 'Comprehensive library for ML: data mining and analysis on top of NumPy, SciPy, and Matplotlib.',
    gives: 'fit / predict, pipelines, model selection',
  },
  {
    family: 'Deep learning',
    name: 'TensorFlow / PyTorch',
    icon: '🧠',
    summary: 'Frameworks for building and training complex neural networks that scale to large datasets.',
    gives: 'tf.keras / torch.nn, autograd, GPU',
  },
];

export default function LibOverview({ lesson: _lesson }: { lesson: Lesson }) {
  const [open, setOpen] = useState<string | null>('NumPy');
  const families = Array.from(new Set(LIBRARIES.map((l) => l.family)));

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-5">
      <div className="lg:col-span-5 space-y-3">
        {families.map((fam) => (
          <div key={fam} className="space-y-1.5">
            <div className="text-[10px] font-mono uppercase tracking-widest text-text-muted">{fam}</div>
            {LIBRARIES.filter((l) => l.family === fam).map((lib) => (
              <button
                key={lib.name}
                onClick={() => setOpen(open === lib.name ? null : lib.name)}
                className={clsx(
                  'w-full text-left rounded-xl border p-3 transition-all',
                  open === lib.name
                    ? 'border-accent bg-accent-soft'
                    : 'border-border-app bg-surface hover:bg-accent-soft/30',
                )}
              >
                <div className="flex items-center gap-2">
                  <span className="text-xl">{lib.icon}</span>
                  <span className="font-bold text-sm text-text-primary">{lib.name}</span>
                </div>
              </button>
            ))}
          </div>
        ))}
      </div>

      <div className="lg:col-span-7 rounded-2xl border border-border-app bg-surface p-4 min-h-[300px] flex flex-col">
        {open ? (
          (() => {
            const lib = LIBRARIES.find((l) => l.name === open)!;
            return (
              <>
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-3xl">{lib.icon}</span>
                  <div>
                    <div className="text-lg font-bold text-text-primary">{lib.name}</div>
                    <div className="text-[10px] font-mono uppercase tracking-widest text-accent">{lib.family}</div>
                  </div>
                </div>
                <p className="text-sm text-text-secondary leading-relaxed">{lib.summary}</p>
                <div className="mt-3 rounded-lg border border-border-app bg-surface-2/40 p-3 text-xs font-mono text-text-primary">
                  <span className="text-text-muted">Key API surface: </span>
                  {lib.gives}
                </div>
              </>
            );
          })()
        ) : (
          <p className="text-sm text-text-muted italic m-auto">Click a library on the left to see its summary and key API surface.</p>
        )}
      </div>
    </div>
  );
}
