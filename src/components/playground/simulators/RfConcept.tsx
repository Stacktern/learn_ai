import { useMemo, useState } from 'react';
import { ResponsiveContainer, ScatterChart, Scatter, XAxis, YAxis, Tooltip, CartesianGrid, Cell } from 'recharts';
import type { Lesson } from '../../../types';
import Slider from '../shared/Slider';
import { clsx } from 'clsx';

export default function RfConcept({ lesson: _lesson }: { lesson: Lesson }) {
  const [nTrees, setNTrees] = useState(15);
  const [noise, setNoise] = useState(0.4);

  const trees = useMemo(() => {
    const out: { idx: number; acc: number; size: number }[] = [];
    let s = 42;
    for (let i = 0; i < nTrees; i++) {
      s = (s * 9301 + 49297) % 233280;
      const r = s / 233280;
      const sampleSize = 30 + Math.floor(r * 30);
      const acc = 0.7 + 0.2 * r - noise * 0.4;
      out.push({ idx: i, acc: Number(Math.max(0.4, acc).toFixed(2)), size: sampleSize });
    }
    return out;
  }, [nTrees, noise]);

  const avg = trees.reduce((a, b) => a + b.acc, 0) / Math.max(1, nTrees);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-5">
      <div className="lg:col-span-5 space-y-3">
        <div className="rounded-2xl border border-border-app bg-surface p-4 space-y-2">
          <Slider value={nTrees} onChange={setNTrees} min={1} max={60} step={1} label="Number of trees" formatValue={(v) => `${v}`} />
          <Slider value={noise} onChange={setNoise} min={0} max={1} step={0.05} label="Label noise" formatValue={(v) => v.toFixed(2)} />
        </div>
        <div className="grid grid-cols-2 gap-2">
          <div className="rounded-lg bg-accent-soft p-2 text-center">
            <div className="text-[10px] font-mono text-text-muted">Avg accuracy</div>
            <div className="text-base font-bold text-text-primary">{(avg * 100).toFixed(1)}%</div>
          </div>
          <div className="rounded-lg bg-accent-soft p-2 text-center">
            <div className="text-[10px] font-mono text-text-muted">Trees</div>
            <div className="text-base font-bold text-text-primary">{nTrees}</div>
          </div>
        </div>
        <div className="rounded-xl border border-accent/40 bg-accent-soft/40 p-3 text-xs text-text-primary">
          <strong>Bagging</strong>: each tree is built from a bootstrap sample. <strong>Feature randomness</strong>: the best split is chosen from a random subset of features, reducing correlation between trees.
        </div>
      </div>
      <div className="lg:col-span-7 rounded-2xl border border-border-app bg-surface p-4 min-h-[380px]">
        <div className="text-[10px] font-mono uppercase tracking-widest text-text-muted mb-2">Per-tree bootstrap sample size</div>
        <div className="h-[340px]">
          <ResponsiveContainer width="100%" height="100%">
            <ScatterChart>
              <CartesianGrid strokeDasharray="3 3" stroke="var(--border-app)" />
              <XAxis type="number" dataKey="idx" fontSize={10} stroke="var(--text-muted)" />
              <YAxis type="number" dataKey="size" fontSize={10} stroke="var(--text-muted)" domain={[0, 80]} />
              <Tooltip contentStyle={{ background: 'var(--surface)', border: '1px solid var(--border-app)', borderRadius: 12, fontSize: 12, color: 'var(--text-primary)' }} />
              <Scatter data={trees}>
                {trees.map((t, i) => <Cell key={i} fill={`var(--chart-${(i % 5) + 1})`} />)}
              </Scatter>
            </ScatterChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}
