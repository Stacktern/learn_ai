import { useMemo, useState } from 'react';
import { ResponsiveContainer, ScatterChart, Scatter, XAxis, YAxis, Tooltip, CartesianGrid, Cell, Line, LineChart, ReferenceLine } from 'recharts';
import type { Lesson } from '../../../types';
import Slider from '../shared/Slider';
import StatBadge from '../shared/StatBadge';
import { clsx } from 'clsx';

function f(x: number, y: number) { return (x - 2) ** 2 + (y + 1) ** 2 + 1; }
function grad(x: number, y: number) { return [2 * (x - 2), 2 * (y + 1)]; }

export default function CalcPartialOptim({ lesson: _lesson }: { lesson: Lesson }) {
  const [lr, setLr] = useState(0.1);
  const [steps, setSteps] = useState(20);
  const x0 = 5; const y0 = 4;
  const traj = useMemo(() => {
    const out: { i: number; x: number; y: number; z: number }[] = [];
    let x = x0, y = y0;
    for (let i = 0; i <= steps; i++) {
      out.push({ i, x: Number(x.toFixed(3)), y: Number(y.toFixed(3)), z: Number(f(x, y).toFixed(3)) });
      if (i < steps) {
        const [gx, gy] = grad(x, y);
        x = x - lr * gx; y = y - lr * gy;
      }
    }
    return out;
  }, [lr, steps]);
  const last = traj[traj.length - 1];
  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-5">
      <div className="lg:col-span-5 space-y-3">
        <div className="rounded-2xl border border-border-app bg-surface p-4 space-y-2">
          <div className="text-[10px] font-mono uppercase tracking-widest text-text-secondary">f(x, y) = (x-2)² + (y+1)² + 1</div>
          <Slider value={lr} onChange={setLr} min={0.01} max={0.5} step={0.01} label="Learning rate η" formatValue={(v) => v.toFixed(2)} />
          <Slider value={steps} onChange={setSteps} min={0} max={50} step={1} label="Iterations" formatValue={(v) => `${v}`} />
        </div>
        <div className="grid grid-cols-2 gap-2">
          <StatBadge label="x" value={last.x.toFixed(3)} />
          <StatBadge label="y" value={last.y.toFixed(3)} />
          <StatBadge label="f(x, y)" value={last.z.toFixed(3)} tone="success" hint="min ≈ 1" />
          <StatBadge label="||∇f||" value={Math.hypot(grad(last.x, last.y)[0], grad(last.x, last.y)[1]).toFixed(3)} />
        </div>
        <div className={clsx('rounded-xl border p-3 text-xs', 'border-accent/40 bg-accent-soft/40 text-text-primary')}>
          Optimization finds the maxima and minima of functions — gradient descent is the workhorse of ML.
        </div>
      </div>
      <div className="lg:col-span-7 space-y-3">
        <div className="rounded-2xl p-3 h-[200px]">
          <div className="text-[10px] font-mono uppercase tracking-widest text-text-muted mb-1">Loss f over iterations</div>
          <ResponsiveContainer width="100%" height="88%">
            <LineChart data={traj}>
              <CartesianGrid strokeDasharray="3 3" stroke="var(--border-app)" />
              <XAxis dataKey="i" fontSize={10} stroke="var(--text-muted)" />
              <YAxis fontSize={10} stroke="var(--text-muted)" />
              <Tooltip contentStyle={{ background: 'var(--surface)', border: '1px solid var(--border-app)', borderRadius: 12, fontSize: 12, color: 'var(--text-primary)' }} />
              <Line type="monotone" dataKey="z" stroke="var(--chart-1)" strokeWidth={2.5} dot={{ r: 3 }} />
            </LineChart>
          </ResponsiveContainer>
        </div>
        <div className="rounded-2xl p-3 h-[180px]">
          <div className="text-[10px] font-mono uppercase tracking-widest text-text-muted mb-1">Optimization path in (x, y)</div>
          <ResponsiveContainer width="100%" height="85%">
            <ScatterChart>
              <CartesianGrid strokeDasharray="3 3" stroke="var(--border-app)" />
              <XAxis type="number" dataKey="x" fontSize={10} stroke="var(--text-muted)" domain={[0, 8]} />
              <YAxis type="number" dataKey="y" fontSize={10} stroke="var(--text-muted)" domain={[-3, 6]} />
              <Tooltip contentStyle={{ background: 'var(--surface)', border: '1px solid var(--border-app)', borderRadius: 12, fontSize: 12, color: 'var(--text-primary)' }} />
              <Scatter data={traj} fill="var(--chart-2)">
                {traj.map((_, i) => <Cell key={i} fill={`color-mix(in srgb, var(--chart-2) ${100 - i * 3}%, var(--chart-4))`} />)}
              </Scatter>
            </ScatterChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}
