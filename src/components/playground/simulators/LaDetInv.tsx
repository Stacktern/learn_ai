import { useMemo, useState } from 'react';
import type { Lesson } from '../../../types';
import Slider from '../shared/Slider';
import StatBadge from '../shared/StatBadge';
import { clsx } from 'clsx';

export default function LaDetInv({ lesson: _lesson }: { lesson: Lesson }) {
  const [a, setA] = useState(1);
  const [b, setB] = useState(2);
  const [c, setC] = useState(3);
  const [d, setD] = useState(4);

  const det = a * d - b * c;
  const invertible = det !== 0;
  const inv = invertible ? [[d / det, -b / det], [-c / det, a / det]] : null;

  const matrix = useMemo(() => [
    [a, b],
    [c, d],
  ], [a, b, c, d]);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-5">
      <div className="lg:col-span-5 space-y-3">
        <div className="rounded-2xl border border-border-app bg-surface p-4 space-y-2">
          <div className="text-[10px] font-mono uppercase tracking-widest text-text-secondary">A = [[a, b], [c, d]]</div>
          <Slider value={a} onChange={setA} min={-3} max={3} step={1} label="a" formatValue={(v) => `${v}`} />
          <Slider value={b} onChange={setB} min={-3} max={3} step={1} label="b" formatValue={(v) => `${v}`} />
          <Slider value={c} onChange={setC} min={-3} max={3} step={1} label="c" formatValue={(v) => `${v}`} />
          <Slider value={d} onChange={setD} min={-3} max={3} step={1} label="d" formatValue={(v) => `${v}`} />
        </div>
        <div className="grid grid-cols-2 gap-2">
          <StatBadge label="det(A) = ad − bc" value={det} tone={invertible ? 'success' : 'danger'} hint="nonzero ⇒ unique solution" />
          <StatBadge label="Invertible?" value={invertible ? 'Yes' : 'No'} tone={invertible ? 'success' : 'danger'} />
        </div>
        <div className={clsx('rounded-xl border p-3 text-xs', 'border-accent/40 bg-accent-soft/40 text-text-primary')}>
          The book: <em>Determinants: a scalar that indicates whether a system has a unique solution (if nonzero).</em>
        </div>
      </div>
      <div className="lg:col-span-7 space-y-3">
        <div className="rounded-2xl border border-border-app bg-surface p-4">
          <div className="text-[10px] font-mono uppercase tracking-widest text-text-muted">A</div>
          <div className="grid grid-cols-2 gap-2 mt-2 text-center font-mono text-lg">
            {matrix.flatMap((row, i) => row.map((v, j) => (
              <div key={`${i}-${j}`} className="rounded-lg bg-accent-soft text-accent py-3">{v}</div>
            )))}
          </div>
        </div>
        <div className="rounded-2xl border border-border-app bg-surface p-4">
          <div className="text-[10px] font-mono uppercase tracking-widest text-text-muted">A⁻¹</div>
          {inv ? (
            <div className="grid grid-cols-2 gap-2 mt-2 text-center font-mono text-lg">
              {inv.flatMap((row, i) => row.map((v, j) => (
                <div key={`${i}-${j}`} className="rounded-lg bg-chart-3/20 text-text-primary py-3">{Number.isFinite(v) ? v.toFixed(3) : '∞'}</div>
              )))}
            </div>
          ) : (
            <div className="mt-2 text-xs text-amber-600 dark:text-amber-400">Matrix is singular — no inverse exists.</div>
          )}
        </div>
      </div>
    </div>
  );
}
