import { useMemo, useState } from 'react';
import { ResponsiveContainer, LineChart, Line, XAxis, YAxis, Tooltip, CartesianGrid, ScatterChart, Scatter } from 'recharts';
import type { Lesson } from '../../../types';
import Slider from '../shared/Slider';
import StatBadge from '../shared/StatBadge';
import { clsx } from 'clsx';

function loss(theta: number, points: { x: number; y: number }[]) {
  return points.reduce((acc, p) => acc + (theta * p.x - p.y) ** 2, 0) / (2 * points.length);
}

function gradient(theta: number, points: { x: number; y: number }[]) {
  return points.reduce((acc, p) => acc + (theta * p.x - p.y) * p.x, 0) / points.length;
}

export default function GradientDescent({ lesson: _lesson }: { lesson: Lesson }) {
  const [lr, setLr] = useState(0.05);
  const [steps, setSteps] = useState(0);

  const points = useMemo(
    () => Array.from({ length: 30 }, (_, i) => ({ x: i / 10, y: 0.5 + 1.2 * (i / 10) + (Math.random() - 0.5) * 0.4 })),
    [],
  );

  const target = 1.2;
  const theta0 = 0;
  const trajectory = useMemo(() => {
    const out: { step: number; theta: number; loss: number }[] = [];
    let theta = theta0;
    for (let i = 0; i <= steps; i++) {
      out.push({ step: i, theta: Number(theta.toFixed(4)), loss: Number(loss(theta, points).toFixed(4)) });
      if (i < steps) {
        const g = gradient(theta, points);
        theta = theta - lr * g;
      }
    }
    return out;
  }, [steps, lr, points]);

  const current = trajectory[trajectory.length - 1];
  const overshoot = current && Math.abs(current.theta - target) > 0.3;
  const diverged = current && (current.loss > 2 || isNaN(current.loss));

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-5">
      <div className="lg:col-span-5 space-y-3">
        <div className="rounded-2xl border border-border-app bg-surface p-4 space-y-4">
          <div className="text-[10px] font-mono uppercase tracking-widest text-text-secondary">Hyperparameters</div>
          <Slider value={lr} onChange={setLr} min={0.001} max={0.5} step={0.001} label="Learning rate (η)" formatValue={(v) => v.toFixed(3)} />
          <Slider value={steps} onChange={setSteps} min={0} max={80} step={1} label="Steps taken" formatValue={(v) => `${v}`} />
          <button onClick={() => setSteps(0)} className="w-full text-xs font-semibold py-1.5 rounded-lg border border-border-app bg-surface-2 hover:bg-accent-soft text-text-primary">↺ Reset</button>
        </div>

        <div className="grid grid-cols-2 gap-2">
          <StatBadge label="θ (slope)" value={current ? current.theta.toFixed(3) : '—'} tone={overshoot ? 'danger' : 'success'} hint={`target ≈ ${target}`} />
          <StatBadge label="Loss J(θ)" value={current ? current.loss.toFixed(3) : '—'} tone={diverged ? 'danger' : current && current.loss < 0.1 ? 'success' : 'warning'} />
        </div>

        <div className={clsx(
          'rounded-xl border p-3 text-xs',
          diverged ? 'border-red-500/40 bg-red-500/10 text-red-700 dark:text-red-300' :
          overshoot ? 'border-amber-500/40 bg-amber-500/10 text-amber-700 dark:text-amber-300' :
          'border-emerald-500/40 bg-emerald-500/10 text-emerald-700 dark:text-emerald-300',
        )}>
          {diverged ? '⚠ Diverged — η is too large, J is exploding.' : overshoot ? '↔ Oscillating — try a smaller learning rate.' : '✓ Converging — keep going to see θ settle near 1.2.'}
        </div>
      </div>

      <div className="lg:col-span-7 space-y-3">
        <div className="rounded-2xl p-3 h-[180px]">
          <div className="text-[10px] font-mono uppercase tracking-widest text-text-muted mb-1">Loss curve J(θ)</div>
          <ResponsiveContainer width="100%" height="85%">
            <LineChart data={trajectory}>
              <CartesianGrid strokeDasharray="3 3" stroke="var(--border-app)" />
              <XAxis dataKey="step" fontSize={10} stroke="var(--text-muted)" />
              <YAxis fontSize={10} stroke="var(--text-muted)" />
              <Tooltip contentStyle={{ background: 'var(--surface)', border: '1px solid var(--border-app)', borderRadius: 12, fontSize: 12, color: 'var(--text-primary)' }} />
              <Line type="monotone" dataKey="loss" stroke="var(--chart-2)" strokeWidth={2.5} dot={false} animationDuration={300} />
            </LineChart>
          </ResponsiveContainer>
        </div>
        <div className="rounded-2xl p-3 h-[180px]">
          <div className="text-[10px] font-mono uppercase tracking-widest text-text-muted mb-1">Data + current fit</div>
          <ResponsiveContainer width="100%" height="85%">
            <ScatterChart margin={{ top: 8, right: 8, left: -20, bottom: 0 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="var(--border-app)" />
              <XAxis type="number" dataKey="x" fontSize={10} stroke="var(--text-muted)" domain={[0, 3]} />
              <YAxis type="number" fontSize={10} stroke="var(--text-muted)" domain={[0, 4]} />
              <Tooltip contentStyle={{ background: 'var(--surface)', border: '1px solid var(--border-app)', borderRadius: 12, fontSize: 12, color: 'var(--text-primary)' }} />
              <Scatter data={points} fill="var(--chart-1)" />
              <Scatter data={[{ x: 0, y: 0 }, { x: 3, y: current ? current.theta * 3 : 0 }]} fill="var(--chart-4)" line={{ stroke: 'var(--chart-4)', strokeWidth: 2.5 }} shape={() => <g />} />
            </ScatterChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}
