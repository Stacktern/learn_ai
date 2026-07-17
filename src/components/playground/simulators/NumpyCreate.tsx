import { useMemo, useState } from 'react';
import type { Lesson } from '../../../types';
import { clsx } from 'clsx';
import { Layers, Grid3x3, Hash, Eye } from 'lucide-react';

type Creator = 'array' | 'zeros' | 'ones' | 'arange' | 'eye' | 'linspace';

const CREATE: { id: Creator; label: string; code: string; build: (n: number) => number[][] }[] = [
  { id: 'array', label: 'np.array([…])', code: 'a = np.array([1,2,3])', build: () => [[1, 2, 3]] },
  { id: 'zeros', label: 'np.zeros((2,3))', code: 'c = np.zeros((2, 3))', build: () => [[0, 0, 0], [0, 0, 0]] },
  { id: 'ones', label: 'np.ones((2,3))', code: 'd = np.ones((2, 3))', build: () => [[1, 1, 1], [1, 1, 1]] },
  { id: 'arange', label: 'np.arange(10)', code: 'e = np.arange(10)', build: () => [Array.from({ length: 10 }, (_, i) => i)] },
  { id: 'eye', label: 'np.eye(3)', code: 'f = np.eye(3)', build: () => [[1, 0, 0], [0, 1, 0], [0, 0, 1]] },
  { id: 'linspace', label: 'np.linspace(0,1,5)', code: 'x = np.linspace(0, 1, 5)', build: () => [Array.from({ length: 5 }, (_, i) => Number((i / 4).toFixed(2)))] },
];

export default function NumpyCreate({ lesson: _lesson }: { lesson: Lesson }) {
  const [active, setActive] = useState<Creator>('arange');
  const def = CREATE.find((c) => c.id === active)!;
  const grid = useMemo(() => def.build(5), [def]);

  const color = (v: number) => {
    if (v === 0) return 'var(--surface-2)';
    if (v === 1) return 'var(--accent)';
    const t = Math.min(1, Math.max(0, v));
    return `color-mix(in srgb, var(--accent) ${Math.round(t * 100)}%, var(--chart-2) 0%)`;
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-5">
      <div className="lg:col-span-5 space-y-3">
        <div className="rounded-2xl border border-border-app bg-surface p-3 space-y-1.5">
          {CREATE.map((c) => (
            <button
              key={c.id}
              onClick={() => setActive(c.id)}
              className={clsx(
                'w-full text-left px-3 py-2 rounded-lg border text-xs font-mono transition-colors',
                active === c.id ? 'border-accent bg-accent-soft text-accent' : 'border-border-app bg-surface text-text-secondary hover:bg-surface-2',
              )}
            >
              {c.label}
            </button>
          ))}
        </div>
        <div className="rounded-xl border border-accent/40 bg-accent-soft/40 p-3 font-mono text-xs text-text-primary">
          {def.code}
        </div>
      </div>

      <div className="lg:col-span-7 rounded-2xl border border-border-app bg-surface p-4 min-h-[300px] flex flex-col">
        <div className="flex items-center gap-2 text-[10px] font-mono uppercase tracking-widest text-text-muted mb-3">
          <Grid3x3 size={11} /> ndarray preview · shape ({grid.length}, {grid[0]?.length ?? 0})
        </div>
        <div className="flex-1 grid place-items-center">
          <div className="grid gap-1.5" style={{ gridTemplateColumns: `repeat(${grid[0]?.length ?? 1}, minmax(0, 1fr))` }}>
            {grid.flatMap((row, ri) => row.map((v, ci) => (
              <div key={`${ri}-${ci}`} className="h-10 w-10 rounded-md flex items-center justify-center text-xs font-mono font-bold text-white" style={{ background: color(v) }}>
                {v}
              </div>
            )))}
          </div>
        </div>
        <div className="mt-3 grid grid-cols-3 gap-2 text-[10px] font-mono text-text-muted">
          <div className="flex items-center gap-1"><Hash size={10} /> {grid.flat().length} elements</div>
          <div className="flex items-center gap-1"><Layers size={10} /> ndim = {grid.length === 1 ? 1 : 2}</div>
          <div className="flex items-center gap-1"><Eye size={10} /> dtype = float64</div>
        </div>
      </div>
    </div>
  );
}
