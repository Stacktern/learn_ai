import { useMemo, useState } from 'react';
import { ResponsiveContainer, ScatterChart, Scatter, XAxis, YAxis, Tooltip, CartesianGrid, Cell } from 'recharts';
import type { Lesson } from '../../../types';
import Slider from '../shared/Slider';
import StatBadge from '../shared/StatBadge';
import { clsx } from 'clsx';

interface Pt { x: number; y: number; label: 0 | 1 }

const CLASS_A: Pt[] = [
  { x: 2, y: 2, label: 0 }, { x: 2.5, y: 2.2, label: 0 }, { x: 2.1, y: 2.7, label: 0 },
  { x: 2.8, y: 1.8, label: 0 }, { x: 3, y: 2.5, label: 0 }, { x: 1.8, y: 3, label: 0 },
];
const CLASS_B: Pt[] = [
  { x: 4, y: 4, label: 1 }, { x: 4.5, y: 3.7, label: 1 }, { x: 3.7, y: 4.4, label: 1 },
  { x: 4.2, y: 4.8, label: 1 }, { x: 5, y: 4.3, label: 1 },
];

export default function Svm({ lesson: _lesson }: { lesson: Lesson }) {
  const [w1, setW1] = useState(1);
  const [w2, setW2] = useState(-1);
  const [b, setB] = useState(0);
  const [margin, setMargin] = useState(1.5);

  const all = [...CLASS_A, ...CLASS_B];
  const lineData = useMemo(() => {
    const pts: { x: number; y: number }[] = [];
    for (let i = 0; i <= 30; i++) {
      const x = 1 + (i / 30) * 5;
      if (Math.abs(w1) < 0.01) continue;
      pts.push({ x, y: (-w1 * x - b) / w2 });
    }
    return pts;
  }, [w1, w2, b]);

  const marginPts = useMemo(() => {
    const out: { x: number; y: number }[] = [];
    for (let i = 0; i <= 30; i++) {
      const x = 1 + (i / 30) * 5;
      if (Math.abs(w1) < 0.01) continue;
      out.push({ x, y: (-w1 * x - b + margin) / w2 });
      out.push({ x, y: (-w1 * x - b - margin) / w2 });
    }
    return out;
  }, [w1, w2, b, margin]);

  const correctA = CLASS_A.filter((p) => w1 * p.x + w2 * p.y + b < 0).length;
  const correctB = CLASS_B.filter((p) => w1 * p.x + w2 * p.y + b > 0).length;
  const acc = ((correctA + correctB) / all.length) * 100;

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-5">
      <div className="lg:col-span-5 space-y-3">
        <div className="rounded-2xl border border-border-app bg-surface p-4 space-y-4">
          <div className="text-[10px] font-mono uppercase tracking-widest text-text-secondary">Hyperplane</div>
          <div className="font-mono text-xs text-text-primary">{w1.toFixed(2)}·x + {w2.toFixed(2)}·y + {b.toFixed(2)} = 0</div>
          <Slider value={w1} onChange={setW1} min={-3} max={3} step={0.1} label="w₁" formatValue={(v) => v.toFixed(2)} />
          <Slider value={w2} onChange={setW2} min={-3} max={3} step={0.1} label="w₂" formatValue={(v) => v.toFixed(2)} />
          <Slider value={b} onChange={setB} min={-3} max={3} step={0.1} label="b (offset)" formatValue={(v) => v.toFixed(2)} />
          <Slider value={margin} onChange={setMargin} min={0.5} max={3} step={0.1} label="Margin width" formatValue={(v) => v.toFixed(2)} />
        </div>
        <StatBadge label="Linear accuracy" value={`${acc.toFixed(0)}%`} tone={acc === 100 ? 'success' : acc >= 80 ? 'warning' : 'danger'} hint="linear SVM only" />
        <div className="rounded-xl border border-accent/40 bg-accent-soft/40 p-3 text-xs text-text-primary">
          Linear SVMs cannot separate non-linearly-separable classes. Use kernel SVM (RBF) to lift into higher dimensions.
        </div>
      </div>

      <div className="lg:col-span-7 rounded-2xl p-4 min-h-[380px] flex flex-col">
        <div className="text-[10px] font-mono uppercase tracking-widest text-text-muted mb-2">Hyperplane + margin</div>
        <div className="flex-1">
          <ResponsiveContainer width="100%" height="100%">
            <ScatterChart margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="var(--border-app)" />
              <XAxis type="number" dataKey="x" fontSize={10} stroke="var(--text-muted)" domain={[1, 6]} />
              <YAxis type="number" dataKey="y" fontSize={10} stroke="var(--text-muted)" domain={[1, 6]} />
              <Tooltip contentStyle={{ background: 'var(--surface)', border: '1px solid var(--border-app)', borderRadius: 12, fontSize: 12, color: 'var(--text-primary)' }} />
              <Scatter data={all}>
                {all.map((p, i) => <Cell key={i} fill={p.label === 1 ? 'var(--chart-5)' : 'var(--chart-1)'} />)}
              </Scatter>
              <Scatter data={lineData} fill="var(--chart-4)" line={{ stroke: 'var(--chart-4)', strokeWidth: 2.5 }} shape={() => <g />} />
              <Scatter data={marginPts} fill="var(--text-muted)" line={{ stroke: 'var(--text-muted)', strokeWidth: 1, strokeDasharray: '4 4' }} shape={() => <g />} />
            </ScatterChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}
