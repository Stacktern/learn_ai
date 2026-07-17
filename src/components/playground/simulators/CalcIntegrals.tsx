import { useMemo, useState } from 'react';
import { ResponsiveContainer, AreaChart, Area, XAxis, YAxis, Tooltip, CartesianGrid, ReferenceLine } from 'recharts';
import type { Lesson } from '../../../types';
import Slider from '../shared/Slider';
import StatBadge from '../shared/StatBadge';
import { clsx } from 'clsx';

const FUNCS: { id: string; label: string; f: (x: number) => number }[] = [
  { id: 'x2', label: 'x²', f: (x) => x * x },
  { id: 'sin', label: 'sin(x)', f: (x) => Math.sin(x) },
  { id: 'exp', label: 'eˣ', f: (x) => Math.exp(x) },
  { id: 'norm', label: '1/(1+x²)', f: (x) => 1 / (1 + x * x) },
];

export default function CalcIntegrals({ lesson: _lesson }: { lesson: Lesson }) {
  const [funcId, setFuncId] = useState('x2');
  const [a, setA] = useState(0);
  const [b, setB] = useState(2);
  const fn = FUNCS.find((f) => f.id === funcId)!;
  const data = useMemo(() => Array.from({ length: 120 }, (_, i) => {
    const x = -3 + (i / 119) * 8;
    return { x: Number(x.toFixed(2)), y: Number(fn.f(x).toFixed(3)) };
  }), [fn]);
  const lo = Math.min(a, b);
  const hi = Math.max(a, b);
  const N = 1000;
  const dx = (hi - lo) / N;
  let area = 0;
  for (let i = 0; i < N; i++) area += fn.f(lo + i * dx) * dx;
  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-5">
      <div className="lg:col-span-5 space-y-3">
        <div className="rounded-2xl border border-border-app bg-surface p-3 space-y-1.5">
          {FUNCS.map((f) => (
            <button key={f.id} onClick={() => setFuncId(f.id)} className={clsx('w-full text-left px-3 py-2 rounded-lg border text-xs font-mono transition-colors', funcId === f.id ? 'border-accent bg-accent-soft text-accent' : 'border-border-app bg-surface text-text-secondary hover:bg-surface-2')}>f(x) = {f.label}</button>
          ))}
        </div>
        <div className="rounded-2xl border border-border-app bg-surface p-4 space-y-2">
          <Slider value={a} onChange={setA} min={-3} max={3} step={0.1} label="a (lower)" formatValue={(v) => v.toFixed(1)} />
          <Slider value={b} onChange={setB} min={-3} max={3} step={0.1} label="b (upper)" formatValue={(v) => v.toFixed(1)} />
        </div>
        <StatBadge label={`∫ f(x) dx from ${lo.toFixed(1)} to ${hi.toFixed(1)}`} value={area.toFixed(3)} tone="success" hint="Riemann sum (N=1000)" />
        <div className="rounded-xl border border-accent/40 bg-accent-soft/40 p-3 text-xs text-text-primary">
          Integration is the inverse of differentiation. In DS, used for probabilistic models to find total probability.
        </div>
      </div>
      <div className="lg:col-span-7 rounded-2xl border border-border-app bg-surface p-4 min-h-[380px]">
        <div className="text-[10px] font-mono uppercase tracking-widest text-text-muted mb-2">Area under f(x) from {lo.toFixed(1)} to {hi.toFixed(1)}</div>
        <div className="h-[340px]">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={data}>
              <defs>
                <linearGradient id="intGrad" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="var(--chart-1)" stopOpacity={0.7} />
                  <stop offset="100%" stopColor="var(--chart-1)" stopOpacity={0.1} />
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="var(--border-app)" />
              <XAxis type="number" dataKey="x" fontSize={10} stroke="var(--text-muted)" domain={[-3, 5]} />
              <YAxis fontSize={10} stroke="var(--text-muted)" />
              <Tooltip contentStyle={{ background: 'var(--surface)', border: '1px solid var(--border-app)', borderRadius: 12, fontSize: 12, color: 'var(--text-primary)' }} />
              {Number.isFinite(fn.f(lo)) && Number.isFinite(fn.f(hi)) && (
                <>
                  <ReferenceLine x={lo} stroke="var(--chart-4)" strokeDasharray="4 4" />
                  <ReferenceLine x={hi} stroke="var(--chart-4)" strokeDasharray="4 4" />
                </>
              )}
              <Area type="monotone" dataKey="y" stroke="var(--chart-1)" fill="url(#intGrad)" strokeWidth={2.5} />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}
