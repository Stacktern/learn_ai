import { useMemo, useState } from 'react';
import { ResponsiveContainer, ScatterChart, Scatter, XAxis, YAxis, Tooltip, CartesianGrid, Cell, ReferenceLine, Line } from 'recharts';
import type { Lesson } from '../../../types';
import Slider from '../shared/Slider';
import StatBadge from '../shared/StatBadge';
import { clsx } from 'clsx';

function eigen2(a: number, b: number, c: number, d: number) {
  const trace = a + d;
  const det = a * d - b * c;
  const disc = Math.max(0, (trace * trace) / 4 - det);
  const s = Math.sqrt(disc);
  const l1 = trace / 2 + s;
  const l2 = trace / 2 - s;
  const eigvec = (a: number, b: number, c: number, d: number, lambda: number) => {
    if (Math.abs(b) > 1e-9) return { x: b, y: lambda - a };
    if (Math.abs(c) > 1e-9) return { x: lambda - d, y: c };
    return { x: 1, y: 0 };
  };
  const v1 = eigvec(a, b, c, d, l1);
  const v2 = eigvec(a, b, c, d, l2);
  const n1 = Math.hypot(v1.x, v1.y) || 1;
  const n2 = Math.hypot(v2.x, v2.y) || 1;
  return { l1, l2, v1: { x: v1.x / n1, y: v1.y / n1 }, v2: { x: v2.x / n2, y: v2.y / n2 } };
}

export default function LaEigen({ lesson: _lesson }: { lesson: Lesson }) {
  const [a, setA] = useState(2);
  const [b, setB] = useState(1);
  const [c, setC] = useState(1);
  const [d, setD] = useState(2);
  const { l1, l2, v1, v2 } = useMemo(() => eigen2(a, b, c, d), [a, b, c, d]);

  const lines = [
    [{ x: 0, y: 0 }, { x: v1.x * 2, y: v1.y * 2 }],
    [{ x: 0, y: 0 }, { x: v2.x * 2, y: v2.y * 2 }],
  ];

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-5">
      <div className="lg:col-span-5 space-y-3">
        <div className="rounded-2xl border border-border-app bg-surface p-4 space-y-2">
          <Slider value={a} onChange={setA} min={-3} max={3} step={1} label="a" formatValue={(v) => `${v}`} />
          <Slider value={b} onChange={setB} min={-3} max={3} step={1} label="b" formatValue={(v) => `${v}`} />
          <Slider value={c} onChange={setC} min={-3} max={3} step={1} label="c" formatValue={(v) => `${v}`} />
          <Slider value={d} onChange={setD} min={-3} max={3} step={1} label="d" formatValue={(v) => `${v}`} />
        </div>
        <div className="grid grid-cols-2 gap-2">
          <StatBadge label="λ₁" value={l1.toFixed(3)} hint="largest" />
          <StatBadge label="λ₂" value={l2.toFixed(3)} hint="smallest" />
        </div>
        <div className="rounded-xl border border-accent/40 bg-accent-soft/40 p-3 text-xs text-text-primary">
          Eigenvectors change only in scale when multiplied by A — directions are preserved.
        </div>
      </div>
      <div className="lg:col-span-7 rounded-2xl border border-border-app bg-surface p-4 min-h-[380px]">
        <div className="text-[10px] font-mono uppercase tracking-widest text-text-muted mb-2">Eigenvectors of A</div>
        <div className="h-[340px]">
          <ResponsiveContainer width="100%" height="100%">
            <ScatterChart>
              <CartesianGrid strokeDasharray="3 3" stroke="var(--border-app)" />
              <XAxis type="number" dataKey="x" fontSize={10} stroke="var(--text-muted)" domain={[-3, 3]} />
              <YAxis type="number" dataKey="y" fontSize={10} stroke="var(--text-muted)" domain={[-3, 3]} />
              <ReferenceLine x={0} stroke="var(--text-muted)" />
              <ReferenceLine y={0} stroke="var(--text-muted)" />
              <Tooltip contentStyle={{ background: 'var(--surface)', border: '1px solid var(--border-app)', borderRadius: 12, fontSize: 12, color: 'var(--text-primary)' }} />
              <Scatter data={[{ x: 0, y: 0 }]} fill="var(--text-muted)" />
              <Scatter data={[{ x: v1.x * 2, y: v1.y * 2 }]} fill="var(--chart-1)" />
              <Scatter data={[{ x: v2.x * 2, y: v2.y * 2 }]} fill="var(--chart-2)" />
              {lines.map((d, i) => (
                <Scatter key={i} data={d} fill="transparent" line={{ stroke: i === 0 ? 'var(--chart-1)' : 'var(--chart-2)', strokeWidth: 2 }} shape={() => <g />} />
              ))}
            </ScatterChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}
