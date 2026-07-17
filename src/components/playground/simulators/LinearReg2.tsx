import { useMemo, useState } from 'react';
import { ResponsiveContainer, ScatterChart, Scatter, Line, LineChart, XAxis, YAxis, Tooltip, CartesianGrid, Cell } from 'recharts';
import type { Lesson } from '../../../types';
import Slider from '../shared/Slider';
import StatBadge from '../shared/StatBadge';
import { clsx } from 'clsx';

export default function LinearReg2({ lesson: _lesson }: { lesson: Lesson }) {
  const [slope, setSlope] = useState(2);
  const [intercept, setIntercept] = useState(1);
  const [n, setN] = useState(40);

  const { train, sse } = useMemo(() => {
    const pts: { x: number; y: number }[] = [];
    let s = 0;
    for (let i = 0; i < n; i++) {
      const x = (i / (n - 1)) * 10;
      const y = 1 + 0.5 * x + (Math.random() - 0.5) * 1.5;
      pts.push({ x: Number(x.toFixed(2)), y: Number(y.toFixed(2)) });
      s += (y - (intercept + slope * x)) ** 2;
    }
    return { train: pts, sse: s };
  }, [slope, intercept, n]);

  const line = useMemo(() => [
    { x: 0, y: intercept },
    { x: 10, y: intercept + 10 * slope },
  ], [intercept, slope]);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-5">
      <div className="lg:col-span-5 space-y-3">
        <div className="rounded-2xl border border-border-app bg-surface p-4 space-y-2">
          <Slider value={slope} onChange={setSlope} min={-2} max={4} step={0.05} label="Slope β₁" formatValue={(v) => v.toFixed(2)} />
          <Slider value={intercept} onChange={setIntercept} min={-5} max={5} step={0.1} label="Intercept β₀" formatValue={(v) => v.toFixed(2)} />
          <Slider value={n} onChange={setN} min={10} max={200} step={5} label="Sample size" formatValue={(v) => `${v}`} />
        </div>
        <StatBadge label="SSE" value={sse.toFixed(2)} tone="warning" hint="minimise via least squares" />
        <div className={clsx('rounded-xl border border-accent/40 bg-accent-soft/40 p-3 text-xs text-text-primary font-mono')}>
          y = {intercept.toFixed(2)} + {slope.toFixed(2)}·x
        </div>
        <div className="rounded-xl border border-accent/40 bg-accent-soft/40 p-3 text-xs text-text-primary">
          Coefficients are estimated using the <strong>least squares criterion</strong>: minimise Σ(yᵢ − ŷᵢ)².
        </div>
      </div>
      <div className="lg:col-span-7 rounded-2xl border border-border-app bg-surface p-4 min-h-[380px]">
        <div className="text-[10px] font-mono uppercase tracking-widest text-text-muted mb-2">Least-squares fit</div>
        <div className="h-[340px]">
          <ResponsiveContainer width="100%" height="100%">
            <ScatterChart>
              <CartesianGrid strokeDasharray="3 3" stroke="var(--border-app)" />
              <XAxis type="number" dataKey="x" fontSize={10} stroke="var(--text-muted)" domain={[0, 10]} />
              <YAxis type="number" dataKey="y" fontSize={10} stroke="var(--text-muted)" domain={[-3, 12]} />
              <Tooltip contentStyle={{ background: 'var(--surface)', border: '1px solid var(--border-app)', borderRadius: 12, fontSize: 12, color: 'var(--text-primary)' }} />
              <Scatter data={train} fill="var(--chart-1)" />
              <Scatter data={line} fill="transparent" line={{ stroke: 'var(--chart-4)', strokeWidth: 2.5 }} shape={() => <g />} />
            </ScatterChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}
