import { useMemo, useState } from 'react';
import { ResponsiveContainer, LineChart, Line, XAxis, YAxis, Tooltip, CartesianGrid, BarChart, Bar, Cell } from 'recharts';
import type { Lesson } from '../../../types';
import Slider from '../shared/Slider';
import { clsx } from 'clsx';

export default function RfBuild({ lesson: _lesson }: { lesson: Lesson }) {
  const [nTrees, setNTrees] = useState(20);
  const [maxFeatures, setMaxFeatures] = useState(2);

  const data = useMemo(() => {
    let s = 7;
    const r = () => { s = (s * 9301 + 49297) % 233280; return s / 233280; };
    const trees: { t: number; acc: number }[] = [];
    let running = 0.6;
    for (let i = 0; i < nTrees; i++) {
      const noise = (r() - 0.5) * 0.1;
      running = running + (0.85 - running) * 0.15 + noise - maxFeatures * 0.02;
      trees.push({ t: i + 1, acc: Number(Math.min(0.95, Math.max(0.5, running)).toFixed(3)) });
    }
    const final = trees[trees.length - 1].acc;
    const featureImp: Record<string, number> = { 'feature_A': 0.35, 'feature_B': 0.22, 'feature_C': 0.18, 'feature_D': 0.14, 'feature_E': 0.11 };
    const feat = Object.entries(featureImp).map(([k, v]) => ({ name: k, value: v }));
    return { trees, final, feat };
  }, [nTrees, maxFeatures]);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-5">
      <div className="lg:col-span-5 space-y-3">
        <div className="rounded-2xl border border-border-app bg-surface p-4 space-y-2">
          <Slider value={nTrees} onChange={setNTrees} min={1} max={80} step={1} label="Trees" formatValue={(v) => `${v}`} />
          <Slider value={maxFeatures} onChange={setMaxFeatures} min={1} max={5} step={1} label="Random features per split" formatValue={(v) => `${v}`} />
        </div>
        <div className="rounded-2xl border border-border-app bg-surface p-3">
          <div className="text-[10px] font-mono uppercase tracking-widest text-text-muted">Final accuracy (vote average)</div>
          <div className="text-2xl font-mono font-bold text-text-primary">{(data.final * 100).toFixed(1)}%</div>
        </div>
        <div className="rounded-xl border border-accent/40 bg-accent-soft/40 p-3 text-xs text-text-primary">
          Classification: each tree votes; the forest picks the class with the most votes. Regression: average the trees' predictions.
        </div>
      </div>
      <div className="lg:col-span-7 space-y-3">
        <div className="rounded-2xl p-3 h-[200px]">
          <div className="text-[10px] font-mono uppercase tracking-widest text-text-muted mb-1">Cumulative accuracy as trees are added</div>
          <ResponsiveContainer width="100%" height="88%">
            <LineChart data={data.trees}>
              <CartesianGrid strokeDasharray="3 3" stroke="var(--border-app)" />
              <XAxis dataKey="t" fontSize={10} stroke="var(--text-muted)" />
              <YAxis fontSize={10} stroke="var(--text-muted)" domain={[0.4, 1]} />
              <Tooltip contentStyle={{ background: 'var(--surface)', border: '1px solid var(--border-app)', borderRadius: 12, fontSize: 12, color: 'var(--text-primary)' }} />
              <Line type="monotone" dataKey="acc" stroke="var(--chart-1)" strokeWidth={2.5} dot={false} />
            </LineChart>
          </ResponsiveContainer>
        </div>
        <div className="rounded-2xl p-3 h-[160px]">
          <div className="text-[10px] font-mono uppercase tracking-widest text-text-muted mb-1">Variable importance (intrinsic to RF)</div>
          <ResponsiveContainer width="100%" height="85%">
            <BarChart data={data.feat} layout="vertical" margin={{ left: 60 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="var(--border-app)" />
              <XAxis type="number" fontSize={10} stroke="var(--text-muted)" domain={[0, 0.5]} />
              <YAxis type="category" dataKey="name" fontSize={10} stroke="var(--text-muted)" width={70} />
              <Tooltip contentStyle={{ background: 'var(--surface)', border: '1px solid var(--border-app)', borderRadius: 12, fontSize: 12, color: 'var(--text-primary)' }} />
              <Bar dataKey="value" radius={[0, 6, 6, 0]}>
                {data.feat.map((_, i) => <Cell key={i} fill={`var(--chart-${(i % 5) + 1})`} />)}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}
