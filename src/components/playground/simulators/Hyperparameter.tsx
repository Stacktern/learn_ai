import { useMemo, useState } from 'react';
import { ResponsiveContainer, LineChart, Line, XAxis, YAxis, Tooltip, CartesianGrid, ScatterChart, Scatter, Cell } from 'recharts';
import type { Lesson } from '../../../types';
import Slider from '../shared/Slider';
import StatBadge from '../shared/StatBadge';
import { clsx } from 'clsx';

function gen(seed: number, n = 80) {
  let s = seed;
  const r = () => { s = (s * 9301 + 49297) % 233280; return s / 233280; };
  const arr: { x: number; y: number; label: 0 | 1 }[] = [];
  for (let i = 0; i < n; i++) {
    const x = r() * 2 - 1;
    const y = r() * 2 - 1;
    const label = x * 0.7 + y * 0.5 + 0.1 > 0 ? 1 : 0;
    arr.push({ x, y, label });
  }
  return arr;
}

function knnPredict(data: { x: number; y: number; label: 0 | 1 }[], qx: number, qy: number, k: number) {
  const dists = data.map((p) => ({ ...p, d: Math.hypot(p.x - qx, p.y - qy) })).sort((a, b) => a.d - b.d).slice(0, k);
  return dists.filter((d) => d.label === 1).length > k / 2 ? 1 : 0;
}

function gridEval(data: { x: number; y: number; label: 0 | 1 }[], k: number) {
  let correct = 0;
  for (let i = 0; i < data.length; i++) {
    const test = data[i];
    const train = data.filter((_, j) => j !== i);
    if (knnPredict(train, test.x, test.y, k) === test.label) correct++;
  }
  return correct / data.length;
}

function curveEval(seed: number) {
  const data = gen(seed, 80);
  const out: { k: number; acc: number }[] = [];
  for (let k = 1; k <= 20; k += 2) {
    out.push({ k, acc: Number((gridEval(data, k) * 100).toFixed(1)) });
  }
  return { data, out };
}

export default function Hyperparameter({ lesson: _lesson }: { lesson: Lesson }) {
  const [k, setK] = useState(5);
  const [split, setSplit] = useState(70);
  const [seed, setSeed] = useState(7);

  const { data, out } = useMemo(() => curveEval(seed), [seed]);
  const trainCut = Math.floor((data.length * split) / 100);
  const train = data.slice(0, trainCut);
  const test = data.slice(trainCut);

  const evalSplit = (kk: number) => {
    let correct = 0;
    test.forEach((p) => {
      if (knnPredict(train, p.x, p.y, kk) === p.label) correct++;
    });
    return test.length === 0 ? 0 : correct / test.length;
  };

  const trainAcc = gridEval(train, k);
  const testAcc = evalSplit(k);
  const gap = (trainAcc - testAcc) * 100;

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-5">
      <div className="lg:col-span-5 space-y-3">
        <div className="rounded-2xl border border-border-app bg-surface p-4 space-y-3">
          <div className="text-[10px] font-mono uppercase tracking-widest text-text-secondary">Hyperparameter search</div>
          <Slider value={k} onChange={setK} min={1} max={19} step={2} label="k (k-NN)" formatValue={(v) => `${v}`} />
          <Slider value={split} onChange={setSplit} min={50} max={90} step={5} label="Train / val split" formatValue={(v) => `${v}%`} />
          <button onClick={() => setSeed((s) => s + 1)} className="w-full text-xs font-semibold py-2 rounded-lg border border-border-app bg-surface-2 hover:bg-accent-soft">↺ New dataset</button>
        </div>
        <div className="grid grid-cols-2 gap-2">
          <StatBadge label="Train acc" value={`${(trainAcc * 100).toFixed(1)}%`} />
          <StatBadge label="Test acc" value={`${(testAcc * 100).toFixed(1)}%`} tone={testAcc > 0.75 ? 'success' : 'warning'} />
        </div>
        <StatBadge label="Gap" value={`${gap.toFixed(1)}%`} tone={gap > 15 ? 'danger' : 'default'} hint=">15% → overfit" />
        <div className="rounded-xl border border-accent/40 bg-accent-soft/40 p-3 text-xs text-text-primary">
          Sweep k across odd values, pick the one with the highest validation accuracy.
        </div>
      </div>

      <div className="lg:col-span-7 space-y-3">
        <div className="rounded-2xl p-3 h-[180px]">
          <div className="text-[10px] font-mono uppercase tracking-widest text-text-muted mb-1">Validation curve (k vs accuracy)</div>
          <ResponsiveContainer width="100%" height="85%">
            <LineChart data={out}>
              <CartesianGrid strokeDasharray="3 3" stroke="var(--border-app)" />
              <XAxis type="number" dataKey="k" fontSize={10} stroke="var(--text-muted)" domain={[1, 20]} />
              <YAxis fontSize={10} stroke="var(--text-muted)" domain={[40, 100]} />
              <Tooltip contentStyle={{ background: 'var(--surface)', border: '1px solid var(--border-app)', borderRadius: 12, fontSize: 12, color: 'var(--text-primary)' }} />
              <Line type="monotone" dataKey="acc" stroke="var(--chart-1)" strokeWidth={2.5} dot={{ r: 3 }} animationDuration={300} />
            </LineChart>
          </ResponsiveContainer>
        </div>
        <div className="rounded-2xl p-3 h-[180px]">
          <div className="text-[10px] font-mono uppercase tracking-widest text-text-muted mb-1">Dataset</div>
          <ResponsiveContainer width="100%" height="85%">
            <ScatterChart margin={{ top: 8, right: 8, left: -20, bottom: 0 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="var(--border-app)" />
              <XAxis type="number" dataKey="x" fontSize={10} stroke="var(--text-muted)" domain={[-1.2, 1.2]} />
              <YAxis type="number" dataKey="y" fontSize={10} stroke="var(--text-muted)" domain={[-1.2, 1.2]} />
              <Tooltip contentStyle={{ background: 'var(--surface)', border: '1px solid var(--border-app)', borderRadius: 12, fontSize: 12, color: 'var(--text-primary)' }} />
              <Scatter data={data}>
                {data.map((p, i) => <Cell key={i} fill={i < trainCut ? 'var(--chart-1)' : 'var(--chart-5)'} />)}
              </Scatter>
            </ScatterChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}
