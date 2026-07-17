import { useMemo, useState } from 'react';
import { ResponsiveContainer, LineChart, Line, XAxis, YAxis, Tooltip, CartesianGrid, ReferenceLine, AreaChart, Area, Cell } from 'recharts';
import type { Lesson } from '../../../types';
import Slider from '../shared/Slider';
import { clsx } from 'clsx';

export default function GbmConcept({ lesson: _lesson }: { lesson: Lesson }) {
  const [lr, setLr] = useState(0.2);
  const [nTrees, setNTrees] = useState(8);

  const data = useMemo(() => {
    const out: { t: number; truth: number; pred: number }[] = [];
    const N = 60;
    const truth: number[] = [];
    for (let i = 0; i < N; i++) {
      const x = (i / (N - 1)) * 6;
      truth.push(0.5 + 0.4 * x * Math.sin(x * 0.5) + 0.3 * x);
    }
    let pred = truth.map(() => truth[0]);
    const ensemble: number[] = new Array(N).fill(0);
    for (let step = 0; step < nTrees; step++) {
      const residuals = truth.map((t, i) => t - ensemble[i]);
      // Toy weak tree: approximate residuals with a small bump in the middle
      const bump = (x: number) => Math.exp(-((x - 3) ** 2) / 2) * 0.5 - 0.3;
      for (let i = 0; i < N; i++) {
        const x = (i / (N - 1)) * 6;
        ensemble[i] += lr * bump(x) * residuals[i] * 0.05;
      }
      pred = ensemble.slice();
    }
    for (let i = 0; i < N; i++) {
      const x = (i / (N - 1)) * 6;
      out.push({ t: Number(x.toFixed(2)), truth: Number(truth[i].toFixed(3)), pred: Number(pred[i].toFixed(3)) });
    }
    return out;
  }, [lr, nTrees]);

  const finalError = data.reduce((a, d) => a + (d.truth - d.pred) ** 2, 0) / data.length;

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-5">
      <div className="lg:col-span-5 space-y-3">
        <div className="rounded-2xl border border-border-app bg-surface p-4 space-y-2">
          <Slider value={nTrees} onChange={setNTrees} min={1} max={20} step={1} label="Trees (iterations)" formatValue={(v) => `${v}`} />
          <Slider value={lr} onChange={setLr} min={0.05} max={1} step={0.05} label="Learning rate" formatValue={(v) => v.toFixed(2)} />
        </div>
        <div className="grid grid-cols-2 gap-2">
          <div className="rounded-lg bg-accent-soft p-2 text-center">
            <div className="text-[10px] font-mono text-text-muted">Final MSE</div>
            <div className="text-base font-bold text-text-primary">{finalError.toFixed(3)}</div>
          </div>
          <div className="rounded-lg bg-accent-soft p-2 text-center">
            <div className="text-[10px] font-mono text-text-muted">Trees added</div>
            <div className="text-base font-bold text-text-primary">{nTrees}</div>
          </div>
        </div>
        <div className="rounded-xl border border-accent/40 bg-accent-soft/40 p-3 text-xs text-text-primary">
          GBM has <strong>three components</strong>: a loss function, a weak learner (shallow decision tree), and an additive model that adds weak learners to minimise the loss.
        </div>
      </div>
      <div className="lg:col-span-7 rounded-2xl border border-border-app bg-surface p-4 min-h-[380px]">
        <div className="text-[10px] font-mono uppercase tracking-widest text-text-muted mb-2">Truth (blue) vs boosted ensemble (orange)</div>
        <div className="h-[340px]">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={data}>
              <CartesianGrid strokeDasharray="3 3" stroke="var(--border-app)" />
              <XAxis dataKey="t" fontSize={10} stroke="var(--text-muted)" />
              <YAxis fontSize={10} stroke="var(--text-muted)" />
              <Tooltip contentStyle={{ background: 'var(--surface)', border: '1px solid var(--border-app)', borderRadius: 12, fontSize: 12, color: 'var(--text-primary)' }} />
              <Line type="monotone" dataKey="truth" stroke="var(--chart-1)" strokeWidth={2.5} dot={false} name="truth" />
              <Line type="monotone" dataKey="pred" stroke="var(--chart-4)" strokeWidth={2.5} dot={false} name="ensemble" />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}
