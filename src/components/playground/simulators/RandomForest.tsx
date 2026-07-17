import { useMemo, useState } from 'react';
import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid, Cell } from 'recharts';
import type { Lesson } from '../../../types';
import Slider from '../shared/Slider';
import StatBadge from '../shared/StatBadge';
import { clsx } from 'clsx';

function simulateForest(nTrees: number, noise: number, seed: number) {
  let s = seed;
  const rand = () => {
    s = (s * 9301 + 49297) % 233280;
    return s / 233280;
  };
  const truth = (x: number) => (x > 50 ? 1 : 0);
  const data = Array.from({ length: 60 }, (_, i) => ({ x: i + 1, label: truth(i + 1) }));
  const trees = Array.from({ length: nTrees }, () => {
    const sample = [];
    for (let i = 0; i < 20; i++) sample.push(data[Math.floor(rand() * data.length)]);
    let correct = 0;
    sample.forEach((p) => {
      const noisyLabel = rand() < noise ? 1 - p.label : p.label;
      if (noisyLabel === truth(p.x)) correct++;
    });
    return { trainAcc: correct / sample.length };
  });
  const avgTrain = trees.reduce((a, b) => a + b.trainAcc, 0) / Math.max(1, nTrees);
  return { trees, avgTrain, nTrees };
}

export default function RandomForest({ lesson: _lesson }: { lesson: Lesson }) {
  const [nTrees, setNTrees] = useState(20);
  const [noise, setNoise] = useState(0.1);
  const [seed, setSeed] = useState(42);

  const result = useMemo(() => simulateForest(nTrees, noise, seed), [nTrees, noise, seed]);
  const singleTreeAcc = 0.85 - noise * 0.4;
  const forestBoost = result.avgTrain - singleTreeAcc;

  const data = result.trees.map((t, i) => ({ idx: i, acc: Number((t.trainAcc * 100).toFixed(1)) }));

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-5">
      <div className="lg:col-span-5 space-y-3">
        <div className="rounded-2xl border border-border-app bg-surface p-4 space-y-4">
          <div className="text-[10px] font-mono uppercase tracking-widest text-text-secondary">Bagging controls</div>
          <Slider value={nTrees} onChange={setNTrees} min={1} max={100} step={1} label="Number of trees" formatValue={(v) => `${v}`} />
          <Slider value={noise} onChange={setNoise} min={0} max={0.5} step={0.02} label="Label noise" formatValue={(v) => `${(v * 100).toFixed(0)}%`} />
          <button onClick={() => setSeed((s) => s + 1)} className="w-full text-xs font-semibold py-2 rounded-lg border border-border-app bg-surface-2 hover:bg-accent-soft text-text-primary">↺ Reseed & re-sample</button>
        </div>
        <div className="grid grid-cols-2 gap-2">
          <StatBadge label="Avg tree acc" value={`${(result.avgTrain * 100).toFixed(1)}%`} tone="success" />
          <StatBadge label="Single tree (est.)" value={`${(singleTreeAcc * 100).toFixed(1)}%`} tone="default" />
        </div>
        <div className={clsx(
          'rounded-xl border p-3 text-xs',
          forestBoost > 0.05 ? 'border-emerald-500/40 bg-emerald-500/10 text-emerald-700 dark:text-emerald-300' : 'border-border-app bg-surface-2/40 text-text-secondary',
        )}>
          {forestBoost > 0.05 ? `✓ Forest beats single tree by +${(forestBoost * 100).toFixed(1)}% — variance reduction at work.` : 'Bagging only helps when trees disagree. Add more trees or noise.'}
        </div>
      </div>

      <div className="lg:col-span-7 rounded-2xl p-4 min-h-[380px] flex flex-col">
        <div className="text-[10px] font-mono uppercase tracking-widest text-text-muted mb-2">Per-tree training accuracy</div>
        <div className="flex-1">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={data} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="var(--border-app)" />
              <XAxis dataKey="idx" fontSize={10} stroke="var(--text-muted)" />
              <YAxis fontSize={10} stroke="var(--text-muted)" domain={[0, 100]} />
              <Tooltip contentStyle={{ background: 'var(--surface)', border: '1px solid var(--border-app)', borderRadius: 12, fontSize: 12, color: 'var(--text-primary)' }} />
              <Bar dataKey="acc" radius={[4, 4, 0, 0]}>
                {data.map((d, i) => (
                  <Cell key={i} fill={d.acc >= result.avgTrain * 100 ? 'var(--chart-1)' : 'var(--chart-3)'} />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}
