import { useMemo, useState } from 'react';
import { ResponsiveContainer, LineChart, Line, XAxis, YAxis, Tooltip, CartesianGrid, ReferenceLine } from 'recharts';
import type { Lesson } from '../../../types';
import Slider from '../shared/Slider';
import StatBadge from '../shared/StatBadge';
import { clsx } from 'clsx';

const FUNCS: { id: string; label: string; f: (x: number) => number; domain: [number, number] }[] = [
  { id: 'quad', label: 'f(x) = x²', f: (x) => x * x, domain: [-3, 3] },
  { id: 'sin', label: 'f(x) = sin(x)', f: (x) => Math.sin(x), domain: [-6, 6] },
  { id: 'exp', label: 'f(x) = eˣ', f: (x) => Math.exp(x), domain: [-3, 2] },
  { id: 'inv', label: 'f(x) = 1/(1+x²)', f: (x) => 1 / (1 + x * x), domain: [-3, 3] },
];

export default function CalcFunctionsLimits({ lesson: _lesson }: { lesson: Lesson }) {
  const [funcId, setFuncId] = useState('sin');
  const [approach, setApproach] = useState(0);
  const fn = FUNCS.find((f) => f.id === funcId)!;
  const data = useMemo(() => Array.from({ length: 80 }, (_, i) => {
    const x = fn.domain[0] + (i / 79) * (fn.domain[1] - fn.domain[0]);
    return { x: Number(x.toFixed(2)), y: Number(fn.f(x).toFixed(3)) };
  }), [fn]);
  const limitVal = fn.f(approach);
  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-5">
      <div className="lg:col-span-5 space-y-3">
        <div className="rounded-2xl border border-border-app bg-surface p-3 space-y-1.5">
          {FUNCS.map((f) => (
            <button key={f.id} onClick={() => setFuncId(f.id)} className={clsx('w-full text-left px-3 py-2 rounded-lg border text-xs font-mono transition-colors', funcId === f.id ? 'border-accent bg-accent-soft text-accent' : 'border-border-app bg-surface text-text-secondary hover:bg-surface-2')}>{f.label}</button>
          ))}
        </div>
        <div className="rounded-2xl border border-border-app bg-surface p-4 space-y-2">
          <div className="text-[10px] font-mono uppercase tracking-widest text-text-secondary">Approach point x → {approach}</div>
          <Slider value={approach} onChange={setApproach} min={fn.domain[0]} max={fn.domain[1]} step={0.05} label="x →" formatValue={(v) => v.toFixed(2)} />
        </div>
        <StatBadge label="lim f(x)" value={Number.isFinite(limitVal) ? limitVal.toFixed(3) : '∞'} tone="success" hint={`as x → ${approach}`} />
        <div className="rounded-xl border border-accent/40 bg-accent-soft/40 p-3 text-xs text-text-primary">
          A limit is the value a function <em>approaches</em> as the input approaches some value. Limits are the basis of differentiation and integration.
        </div>
      </div>
      <div className="lg:col-span-7 rounded-2xl border border-border-app bg-surface p-4 min-h-[380px]">
        <div className="text-[10px] font-mono uppercase tracking-widest text-text-muted mb-2">{fn.label} with the limit marked</div>
        <div className="h-[340px]">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={data}>
              <CartesianGrid strokeDasharray="3 3" stroke="var(--border-app)" />
              <XAxis type="number" dataKey="x" fontSize={10} stroke="var(--text-muted)" domain={[fn.domain[0], fn.domain[1]]} />
              <YAxis fontSize={10} stroke="var(--text-muted)" />
              <ReferenceLine x={approach} stroke="var(--chart-4)" strokeDasharray="4 4" label={{ value: `x = ${approach}`, fontSize: 10, fill: 'var(--chart-4)' }} />
              <Tooltip contentStyle={{ background: 'var(--surface)', border: '1px solid var(--border-app)', borderRadius: 12, fontSize: 12, color: 'var(--text-primary)' }} />
              <Line type="monotone" dataKey="y" stroke="var(--chart-1)" strokeWidth={2.5} dot={false} animationDuration={300} />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}
