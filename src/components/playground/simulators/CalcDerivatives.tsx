import { useMemo, useState } from 'react';
import { ResponsiveContainer, LineChart, Line, XAxis, YAxis, Tooltip, CartesianGrid, ReferenceLine } from 'recharts';
import type { Lesson } from '../../../types';
import Slider from '../shared/Slider';
import StatBadge from '../shared/StatBadge';
import { clsx } from 'clsx';

const FUNCS: { id: string; label: string; f: (x: number) => number; df: (x: number) => number }[] = [
  { id: 'x2', label: 'x²', f: (x) => x * x, df: (x) => 2 * x },
  { id: 'x3', label: 'x³ − 3x', f: (x) => x ** 3 - 3 * x, df: (x) => 3 * x * x - 3 },
  { id: 'sin', label: 'sin(x)', f: (x) => Math.sin(x), df: (x) => Math.cos(x) },
  { id: 'exp', label: 'eˣ', f: (x) => Math.exp(x), df: (x) => Math.exp(x) },
];

export default function CalcDerivatives({ lesson: _lesson }: { lesson: Lesson }) {
  const [funcId, setFuncId] = useState('sin');
  const [at, setAt] = useState(0);
  const fn = FUNCS.find((f) => f.id === funcId)!;
  const data = useMemo(() => Array.from({ length: 80 }, (_, i) => {
    const x = -4 + (i / 79) * 8;
    return { x: Number(x.toFixed(2)), f: Number(fn.f(x).toFixed(3)), df: Number(fn.df(x).toFixed(3)) };
  }), [fn]);
  const slope = fn.df(at);
  const tangent = [{ x: at - 2, y: fn.f(at) - 2 * slope }, { x: at + 2, y: fn.f(at) + 2 * slope }];
  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-5">
      <div className="lg:col-span-5 space-y-3">
        <div className="rounded-2xl border border-border-app bg-surface p-3 space-y-1.5">
          {FUNCS.map((f) => (
            <button key={f.id} onClick={() => setFuncId(f.id)} className={clsx('w-full text-left px-3 py-2 rounded-lg border text-xs font-mono transition-colors', funcId === f.id ? 'border-accent bg-accent-soft text-accent' : 'border-border-app bg-surface text-text-secondary hover:bg-surface-2')}>f(x) = {f.label}</button>
          ))}
        </div>
        <div className="rounded-2xl border border-border-app bg-surface p-4 space-y-2">
          <Slider value={at} onChange={setAt} min={-3} max={3} step={0.05} label="Evaluate at x" formatValue={(v) => v.toFixed(2)} />
        </div>
        <div className="grid grid-cols-2 gap-2">
          <StatBadge label="f(x)" value={fn.f(at).toFixed(3)} />
          <StatBadge label="f′(x)" value={slope.toFixed(3)} tone="success" hint="rate of change" />
        </div>
        <div className="rounded-xl border border-accent/40 bg-accent-soft/40 p-3 text-xs text-text-primary">
          The derivative is the primary tool for measuring how a function changes as its input changes. Used by gradient descent in ML.
        </div>
      </div>
      <div className="lg:col-span-7 rounded-2xl border border-border-app bg-surface p-4 min-h-[380px]">
        <div className="text-[10px] font-mono uppercase tracking-widest text-text-muted mb-2">f(x) and tangent line at x = {at}</div>
        <div className="h-[340px]">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart>
              <CartesianGrid strokeDasharray="3 3" stroke="var(--border-app)" />
              <XAxis type="number" dataKey="x" fontSize={10} stroke="var(--text-muted)" domain={[-4, 4]} />
              <YAxis fontSize={10} stroke="var(--text-muted)" domain={[-4, 6]} />
              <Tooltip contentStyle={{ background: 'var(--surface)', border: '1px solid var(--border-app)', borderRadius: 12, fontSize: 12, color: 'var(--text-primary)' }} />
              <Line data={data} type="monotone" dataKey="f" stroke="var(--chart-1)" strokeWidth={2.5} dot={false} name="f" />
              <Line data={tangent} type="linear" dataKey="y" stroke="var(--chart-4)" strokeWidth={2.5} dot={false} name="tangent" />
              <ReferenceLine x={at} stroke="var(--chart-2)" strokeDasharray="4 4" />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}
