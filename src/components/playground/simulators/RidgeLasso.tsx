import { useMemo, useState } from 'react';
import { ResponsiveContainer, LineChart, Line, XAxis, YAxis, Tooltip, CartesianGrid, ReferenceLine } from 'recharts';
import type { Lesson } from '../../../types';
import Slider from '../shared/Slider';
import StatBadge from '../shared/StatBadge';
import { clsx } from 'clsx';

function fit(beta: number[], lambda: number, l1: number, n: number) {
  const X: number[][] = [];
  for (let i = 0; i < n; i++) X.push([1, i / (n - 1) * 10]);
  const y = X.map(([_, x]) => 0.5 + 0.3 * x + (Math.random() - 0.5) * 0.5);
  let b0 = 0, b1 = 1;
  for (let it = 0; it < 200; it++) {
    let g0 = 0, g1 = 0;
    for (let i = 0; i < n; i++) { const r = b0 + b1 * X[i][1] - y[i]; g0 += r; g1 += r * X[i][1]; }
    g0 = g0 / n + 2 * lambda * b0;
    g1 = g1 / n + 2 * lambda * b1 + l1 * Math.sign(b1);
    b0 -= 0.2 * g0;
    b1 -= 0.2 * g1;
  }
  return { b0, b1, beta: [b0, b1] };
}

export default function RidgeLasso({ lesson: _lesson }: { lesson: Lesson }) {
  const [ridge, setRidge] = useState(0.05);
  const [lasso, setLasso] = useState(0.05);
  const [n, setN] = useState(50);

  const data = useMemo(() => {
    const out: { x: number; y: number; ridge: number; lasso: number }[] = [];
    const r1 = fit([], ridge, 0, n);
    const r2 = fit([], 0, lasso, n);
    for (let i = 0; i < n; i++) {
      const x = (i / (n - 1)) * 10;
      out.push({ x: Number(x.toFixed(2)), y: r1.b0 + r1.b1 * x, ridge: r1.b0 + r1.b1 * x, lasso: r2.b0 + r2.b1 * x });
    }
    return { data: out, ridgeB1: r1.b1, lassoB1: r2.b1 };
  }, [ridge, lasso, n]);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-5">
      <div className="lg:col-span-5 space-y-3">
        <div className="rounded-2xl border border-border-app bg-surface p-4 space-y-2">
          <Slider value={ridge} onChange={setRidge} min={0} max={0.5} step={0.005} label="Ridge (L2) λ" formatValue={(v) => v.toFixed(3)} />
          <Slider value={lasso} onChange={setLasso} min={0} max={0.5} step={0.005} label="Lasso (L1) α" formatValue={(v) => v.toFixed(3)} />
          <Slider value={n} onChange={setN} min={20} max={150} step={5} label="Sample size" formatValue={(v) => `${v}`} />
        </div>
        <div className="grid grid-cols-2 gap-2">
          <StatBadge label="Ridge β₁" value={data.ridgeB1.toFixed(3)} hint="shrinks" />
          <StatBadge label="Lasso β₁" value={data.lassoB1.toFixed(3)} hint="shrinks to 0" tone="warning" />
        </div>
        <div className="rounded-xl border border-accent/40 bg-accent-soft/40 p-3 text-xs text-text-primary">
          Both add bias but reduce variance vs. ordinary least squares. Choose Ridge when most variables are useful; Lasso when you need feature selection.
        </div>
      </div>
      <div className="lg:col-span-7 rounded-2xl border border-border-app bg-surface p-4 min-h-[380px]">
        <div className="text-[10px] font-mono uppercase tracking-widest text-text-muted mb-2">Ridge vs Lasso fits</div>
        <div className="h-[340px]">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={data.data}>
              <CartesianGrid strokeDasharray="3 3" stroke="var(--border-app)" />
              <XAxis type="number" dataKey="x" fontSize={10} stroke="var(--text-muted)" domain={[0, 10]} />
              <YAxis fontSize={10} stroke="var(--text-muted)" domain={[0, 5]} />
              <Tooltip contentStyle={{ background: 'var(--surface)', border: '1px solid var(--border-app)', borderRadius: 12, fontSize: 12, color: 'var(--text-primary)' }} />
              <Line type="monotone" dataKey="ridge" stroke="var(--chart-1)" strokeWidth={2.5} dot={false} name="Ridge" />
              <Line type="monotone" dataKey="lasso" stroke="var(--chart-4)" strokeWidth={2.5} dot={false} name="Lasso" />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}
