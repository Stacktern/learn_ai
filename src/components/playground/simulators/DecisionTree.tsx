import { useMemo, useState } from 'react';
import { ResponsiveContainer, ScatterChart, Scatter, XAxis, YAxis, Tooltip, CartesianGrid, Cell } from 'recharts';
import type { Lesson } from '../../../types';
import Slider from '../shared/Slider';
import StatBadge from '../shared/StatBadge';
import { clsx } from 'clsx';

interface Pt { x: number; y: number; label: 0 | 1 }

const POINTS: Pt[] = [
  { x: 1, y: 1, label: 0 },
  { x: 1.5, y: 1.8, label: 0 },
  { x: 2.2, y: 1.1, label: 0 },
  { x: 1.8, y: 2.4, label: 0 },
  { x: 2.8, y: 1.7, label: 0 },
  { x: 3.5, y: 3, label: 1 },
  { x: 4.1, y: 2.6, label: 1 },
  { x: 4.6, y: 3.4, label: 1 },
  { x: 3.8, y: 3.8, label: 1 },
  { x: 4.9, y: 3.1, label: 1 },
];

function split(depth: number, maxDepth: number, points: Pt[]): { axis: 'x' | 'y' | null; value: number; left: Pt[]; right: Pt[] } {
  if (depth >= maxDepth || points.length <= 1) return { axis: null, value: 0, left: points, right: [] };
  const useX: 'x' | 'y' = depth % 2 === 0 ? 'x' : 'y';
  const sorted = [...points].sort((a, b) => (useX === 'x' ? a.x - b.x : a.y - b.y));
  const mid = Math.floor(sorted.length / 2);
  const v = useX === 'x' ? sorted[mid].x : sorted[mid].y;
  return {
    axis: useX,
    value: v,
    left: sorted.slice(0, mid),
    right: sorted.slice(mid),
  };
}

export default function DecisionTree({ lesson: _lesson }: { lesson: Lesson }) {
  const [maxDepth, setMaxDepth] = useState(3);
  const tree = useMemo(() => {
    const out: { depth: number; axis: 'x' | 'y' | null; value: number; left: Pt[]; right: Pt[] }[] = [];
    function rec(depth: number, pts: Pt[]) {
      const s = split(depth, maxDepth, pts);
      out.push({ depth, ...s });
      if (s.axis && depth + 1 < maxDepth) {
        rec(depth + 1, s.left);
        rec(depth + 1, s.right);
      }
    }
    rec(0, POINTS);
    return out;
  }, [maxDepth]);

  const totalLeaves = tree.filter((n) => !n.axis).length;
  const acc = Math.min(0.99, 0.5 + totalLeaves * 0.13);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-5">
      <div className="lg:col-span-5 space-y-3">
        <div className="rounded-2xl border border-border-app bg-surface p-4 space-y-4">
          <div className="text-[10px] font-mono uppercase tracking-widest text-text-secondary">Tree complexity</div>
          <Slider value={maxDepth} onChange={setMaxDepth} min={1} max={6} step={1} label="Max depth" formatValue={(v) => `${v}`} />
        </div>

        <div className="rounded-2xl border border-border-app bg-surface-2/40 p-3 space-y-1 font-mono text-[11px]">
          {tree.slice(0, 8).map((n, i) => (
            <div key={i} className="text-text-secondary">
              <span className="text-accent">d{n.depth}</span>: {n.axis ? `${n.axis} < ${n.value.toFixed(1)}` : 'leaf'} · {n.left.length + n.right.length} pts
            </div>
          ))}
        </div>

        <StatBadge label="Train accuracy" value={`${(acc * 100).toFixed(0)}%`} tone={acc > 0.95 ? 'warning' : acc > 0.8 ? 'success' : 'danger'} hint={acc > 0.95 ? 'overfitting?' : ''} />
      </div>

      <div className="lg:col-span-7 rounded-2xl p-4 min-h-[380px] flex flex-col">
        <div className="text-[10px] font-mono uppercase tracking-widest text-text-muted mb-2">Recursive splits</div>
        <div className="flex-1">
          <ResponsiveContainer width="100%" height="100%">
            <ScatterChart margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="var(--border-app)" />
              <XAxis type="number" dataKey="x" fontSize={10} stroke="var(--text-muted)" domain={[0, 6]} />
              <YAxis type="number" dataKey="y" fontSize={10} stroke="var(--text-muted)" domain={[0, 5]} />
              <Tooltip contentStyle={{ background: 'var(--surface)', border: '1px solid var(--border-app)', borderRadius: 12, fontSize: 12, color: 'var(--text-primary)' }} />
              <Scatter data={POINTS}>
                {POINTS.map((p, i) => (
                  <Cell key={i} fill={p.label === 1 ? 'var(--chart-5)' : 'var(--chart-1)'} />
                ))}
              </Scatter>
            </ScatterChart>
          </ResponsiveContainer>
        </div>
        <div className="text-[10px] text-text-muted italic mt-1">The decision tree axis-flips (x, y, x, …) at every depth to make orthogonal splits.</div>
      </div>
    </div>
  );
}
