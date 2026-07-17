import { useMemo, useState } from 'react';
import { ResponsiveContainer, LineChart, Line, XAxis, YAxis, Tooltip, CartesianGrid, ReferenceLine, BarChart, Bar, Cell } from 'recharts';
import type { Lesson } from '../../../types';
import Slider from '../shared/Slider';
import { clsx } from 'clsx';

export default function ProbLlnClt({ lesson: _lesson }: { lesson: Lesson }) {
  const [samples, setSamples] = useState(60);
  const [n, setN] = useState(40);

  const lln = useMemo(() => Array.from({ length: samples }, (_, i) => {
    const k = i + 1;
    let s = 0;
    for (let j = 0; j < k; j++) s += (Math.random() + Math.random() + Math.random() + Math.random() + Math.random() + Math.random()) / 6;
    return { k, mean: Number((s / k).toFixed(3)) };
  }), [samples]);

  const clt = useMemo(() => {
    const out: { x: number; count: number }[] = [];
    for (let i = 0; i < 1500; i++) {
      let s = 0;
      for (let j = 0; j < n; j++) s += Math.random() + Math.random() + Math.random() + Math.random() + Math.random() + Math.random() - 3;
      out.push({ x: Number(s.toFixed(3)), count: 1 });
    }
    return out;
  }, [n]);

  const cltHist = useMemo(() => {
    const bins: Record<string, number> = {};
    clt.forEach(({ x }) => {
      const k = `${Math.floor(x * 2) / 2}`;
      bins[k] = (bins[k] ?? 0) + 1;
    });
    return Object.entries(bins).map(([k, v]) => ({ bin: k, count: v })).sort((a, b) => Number(a.bin) - Number(b.bin));
  }, [clt]);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-5">
      <div className="lg:col-span-5 space-y-3">
        <div className="rounded-2xl border border-border-app bg-surface p-4 space-y-2">
          <div className="text-[10px] font-mono uppercase tracking-widest text-text-secondary">LLN (sample size for the running mean)</div>
          <Slider value={samples} onChange={setSamples} min={10} max={300} step={10} label="Sample size n" formatValue={(v) => `${v}`} />
        </div>
        <div className="rounded-2xl border border-border-app bg-surface p-4 space-y-2">
          <div className="text-[10px] font-mono uppercase tracking-widest text-text-secondary">CLT (samples summed to make the histogram)</div>
          <Slider value={n} onChange={setN} min={1} max={60} step={1} label="Trials per sample" formatValue={(v) => `${v}`} />
        </div>
        <div className="rounded-xl border border-accent/40 bg-accent-soft/40 p-3 text-xs text-text-primary">
          LLN: as more observations are collected, the sample mean converges to E[X] (= 0.5 here). CLT: the distribution of the sample mean approaches a normal distribution.
        </div>
      </div>
      <div className="lg:col-span-7 space-y-3">
        <div className="rounded-2xl p-3 h-[180px]">
          <div className="text-[10px] font-mono uppercase tracking-widest text-text-muted mb-1">LLN — running mean of uniform(0,1)</div>
          <ResponsiveContainer width="100%" height="88%">
            <LineChart data={lln}>
              <CartesianGrid strokeDasharray="3 3" stroke="var(--border-app)" />
              <XAxis dataKey="k" fontSize={10} stroke="var(--text-muted)" />
              <YAxis fontSize={10} stroke="var(--text-muted)" domain={[0, 1]} />
              <ReferenceLine y={0.5} stroke="var(--chart-4)" strokeDasharray="4 4" label={{ value: 'E[X] = 0.5', fontSize: 10, fill: 'var(--chart-4)' }} />
              <Tooltip contentStyle={{ background: 'var(--surface)', border: '1px solid var(--border-app)', borderRadius: 12, fontSize: 12, color: 'var(--text-primary)' }} />
              <Line type="monotone" dataKey="mean" stroke="var(--chart-1)" strokeWidth={2.5} dot={false} />
            </LineChart>
          </ResponsiveContainer>
        </div>
        <div className="rounded-2xl p-3 h-[180px]">
          <div className="text-[10px] font-mono uppercase tracking-widest text-text-muted mb-1">CLT — sum of n uniforms</div>
          <ResponsiveContainer width="100%" height="88%">
            <BarChart data={cltHist}>
              <CartesianGrid strokeDasharray="3 3" stroke="var(--border-app)" />
              <XAxis dataKey="bin" fontSize={9} stroke="var(--text-muted)" interval={Math.max(1, Math.floor(cltHist.length / 6))} />
              <YAxis fontSize={10} stroke="var(--text-muted)" />
              <Tooltip contentStyle={{ background: 'var(--surface)', border: '1px solid var(--border-app)', borderRadius: 12, fontSize: 12, color: 'var(--text-primary)' }} />
              <Bar dataKey="count" fill="var(--chart-2)" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}
