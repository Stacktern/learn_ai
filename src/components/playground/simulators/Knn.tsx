import { useMemo, useState } from 'react';
import { ResponsiveContainer, ScatterChart, Scatter, XAxis, YAxis, Tooltip, CartesianGrid, Cell } from 'recharts';
import type { Lesson } from '../../../types';
import Slider from '../shared/Slider';
import StatBadge from '../shared/StatBadge';
import { clsx } from 'clsx';

interface Pt { x: number; y: number; label: 0 | 1 }

const POINTS: Pt[] = [
  { x: 1, y: 1, label: 0 },
  { x: 1.4, y: 1.6, label: 0 },
  { x: 1.8, y: 1.1, label: 0 },
  { x: 2.2, y: 1.7, label: 0 },
  { x: 2.6, y: 2.3, label: 0 },
  { x: 3.4, y: 2.8, label: 1 },
  { x: 3.8, y: 3.2, label: 1 },
  { x: 4.2, y: 2.9, label: 1 },
  { x: 4.5, y: 3.6, label: 1 },
  { x: 4.9, y: 3.3, label: 1 },
  { x: 5.3, y: 4.1, label: 1 },
];

function dist(a: Pt, b: Pt) {
  return Math.hypot(a.x - b.x, a.y - b.y);
}

export default function Knn({ lesson: _lesson }: { lesson: Lesson }) {
  const [queryIdx, setQueryIdx] = useState(5);
  const [k, setK] = useState(3);
  const [weighted, setWeighted] = useState(false);

  const query = POINTS[queryIdx];
  const ordered = useMemo(() => POINTS.map((p, i) => ({ ...p, i, d: dist(p, query) })).sort((a, b) => a.d - b.d), [query]);
  const neighbors = ordered.slice(1, k + 1);

  const votes: Record<0 | 1, number> = { 0: 0, 1: 0 };
  neighbors.forEach((n) => {
    const w = weighted ? 1 / (n.d + 0.1) : 1;
    votes[n.label] += w;
  });
  const predicted: 0 | 1 = votes[1] > votes[0] ? 1 : 0;
  const correct = predicted === query.label;

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-5">
      <div className="lg:col-span-5 space-y-3">
        <div className="rounded-2xl border border-border-app bg-surface p-4 space-y-4">
          <div className="text-[10px] font-mono uppercase tracking-widest text-text-secondary">Hyperparameters</div>
          <Slider value={k} onChange={setK} min={1} max={Math.min(7, POINTS.length - 1)} step={2} label="k (neighbors)" formatValue={(v) => `${v}`} />
          <button onClick={() => setWeighted((w) => !w)} className={clsx('w-full text-xs font-semibold py-2 rounded-lg border transition-colors', weighted ? 'border-accent bg-accent-soft text-accent' : 'border-border-app bg-surface text-text-secondary')}>
            {weighted ? '✓ Distance-weighted voting' : 'Use plain (majority) voting'}
          </button>
        </div>

        <div className="grid grid-cols-2 gap-2">
          <StatBadge label="Class 0 votes" value={votes[0].toFixed(2)} />
          <StatBadge label="Class 1 votes" value={votes[1].toFixed(2)} />
        </div>
        <div className={clsx(
          'rounded-xl border p-3 text-xs',
          correct ? 'border-emerald-500/40 bg-emerald-500/10 text-emerald-700 dark:text-emerald-300' : 'border-red-500/40 bg-red-500/10 text-red-700 dark:text-red-300',
        )}>
          Prediction: <span className="font-bold">class {predicted}</span> · Actual: <span className="font-bold">class {query.label}</span> · {correct ? '✓ correct' : '✗ wrong'}
        </div>
        <div className="text-[10px] text-text-muted italic">
          Click any point in the chart to make it the query.
        </div>
      </div>

      <div className="lg:col-span-7 rounded-2xl p-4 min-h-[380px] flex flex-col">
        <div className="text-[10px] font-mono uppercase tracking-widest text-text-muted mb-2">Click a point to query (✦) — neighbors highlight</div>
        <div className="flex-1">
          <ResponsiveContainer width="100%" height="100%">
            <ScatterChart margin={{ top: 10, right: 10, left: -20, bottom: 0 }} onClick={(e) => {
              const ev = e as unknown as { activePayload?: { payload: Pt }[] } | null;
              if (ev && ev.activePayload && ev.activePayload[0]) {
                const p = ev.activePayload[0].payload as Pt;
                const idx = POINTS.findIndex((pt) => pt.x === p.x && pt.y === p.y);
                if (idx >= 0) setQueryIdx(idx);
              }
            }}>
              <CartesianGrid strokeDasharray="3 3" stroke="var(--border-app)" />
              <XAxis type="number" dataKey="x" fontSize={10} stroke="var(--text-muted)" domain={[0, 6]} />
              <YAxis type="number" dataKey="y" fontSize={10} stroke="var(--text-muted)" domain={[0, 5]} />
              <Tooltip contentStyle={{ background: 'var(--surface)', border: '1px solid var(--border-app)', borderRadius: 12, fontSize: 12, color: 'var(--text-primary)' }} />
              <Scatter data={POINTS}>
                {POINTS.map((p, i) => {
                  const isQuery = i === queryIdx;
                  const isNeighbor = neighbors.some((n) => n.i === i);
                  const fill = isQuery ? 'var(--chart-4)' : isNeighbor ? 'var(--chart-2)' : p.label === 1 ? 'var(--chart-5)' : 'var(--chart-1)';
                  return <Cell key={i} fill={fill} />;
                })}
              </Scatter>
            </ScatterChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}
