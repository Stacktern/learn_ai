import { useMemo, useState } from 'react';
import { ResponsiveContainer, ScatterChart, Scatter, XAxis, YAxis, Tooltip, CartesianGrid, Cell, ReferenceLine, Line } from 'recharts';
import type { Lesson } from '../../../types';
import Slider from '../shared/Slider';
import StatBadge from '../shared/StatBadge';
import { clsx } from 'clsx';

export default function SvmConcept({ lesson: _lesson }: { lesson: Lesson }) {
  const [angle, setAngle] = useState(0);
  const [offset, setOffset] = useState(0);

  const data = useMemo(() => {
    const a: { x: number; y: number; label: number }[] = [];
    const b: { x: number; y: number; label: number }[] = [];
    for (let i = 0; i < 14; i++) {
      a.push({ x: 1 + Math.random() * 1.5, y: 1 + Math.random() * 1.5, label: 0 });
      b.push({ x: 5 + Math.random() * 1.5, y: 4 + Math.random() * 1.5, label: 1 });
    }
    return [...a, ...b];
  }, []);

  const cosA = Math.cos(angle);
  const sinA = Math.sin(angle);
  const w1 = cosA, w2 = sinA, b = -offset;
  const linePts = useMemo(() => {
    const pts: { x: number; y: number }[] = [];
    for (let i = 0; i <= 30; i++) {
      const x = (i / 30) * 8;
      if (Math.abs(w1) < 0.01) continue;
      pts.push({ x, y: (-w1 * x - b) / w2 });
    }
    return pts;
  }, [w1, w2, b]);

  const correct = data.filter((p) => (w1 * p.x + w2 * p.y + b > 0 ? 1 : 0) === p.label).length;
  const margin = data.reduce((m, p) => Math.min(m, Math.abs(w1 * p.x + w2 * p.y + b) / Math.hypot(w1, w2)), Infinity);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-5">
      <div className="lg:col-span-5 space-y-3">
        <div className="rounded-2xl border border-border-app bg-surface p-4 space-y-2">
          <Slider value={angle} onChange={setAngle} min={-Math.PI / 2} max={Math.PI / 2} step={0.05} label="Rotation" formatValue={(v) => `${Math.round((v * 180) / Math.PI)}°`} />
          <Slider value={offset} onChange={setOffset} min={-4} max={4} step={0.1} label="Offset" formatValue={(v) => v.toFixed(1)} />
        </div>
        <div className="grid grid-cols-2 gap-2">
          <StatBadge label="Correct" value={`${Math.round((correct / data.length) * 100)}%`} tone="success" />
          <StatBadge label="Margin" value={margin.toFixed(2)} hint="largest is best" tone="default" />
        </div>
        <div className="rounded-xl border border-accent/40 bg-accent-soft/40 p-3 text-xs text-text-primary">
          The <strong>margin</strong> is the distance between the hyperplane and the nearest points from each class. SVM picks the hyperplane with the largest margin.
        </div>
      </div>
      <div className="lg:col-span-7 rounded-2xl border border-border-app bg-surface p-4 min-h-[380px]">
        <div className="text-[10px] font-mono uppercase tracking-widest text-text-muted mb-2">Hyperplane + margin</div>
        <div className="h-[340px]">
          <ResponsiveContainer width="100%" height="100%">
            <ScatterChart>
              <CartesianGrid strokeDasharray="3 3" stroke="var(--border-app)" />
              <XAxis type="number" dataKey="x" fontSize={10} stroke="var(--text-muted)" domain={[0, 8]} />
              <YAxis type="number" dataKey="y" fontSize={10} stroke="var(--text-muted)" domain={[0, 7]} />
              <Tooltip contentStyle={{ background: 'var(--surface)', border: '1px solid var(--border-app)', borderRadius: 12, fontSize: 12, color: 'var(--text-primary)' }} />
              <Scatter data={data}>
                {data.map((d, i) => <Cell key={i} fill={d.label === 1 ? 'var(--chart-1)' : 'var(--chart-2)'} />)}
              </Scatter>
              <Scatter data={linePts} fill="transparent" line={{ stroke: 'var(--chart-4)', strokeWidth: 2.5 }} shape={() => <g />} />
            </ScatterChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}
