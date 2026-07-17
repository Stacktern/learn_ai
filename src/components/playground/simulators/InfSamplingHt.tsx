import { useMemo, useState } from 'react';
import { ResponsiveContainer, LineChart, Line, XAxis, YAxis, Tooltip, CartesianGrid, ReferenceLine, BarChart, Bar, Cell } from 'recharts';
import type { Lesson } from '../../../types';
import Slider from '../shared/Slider';
import StatBadge from '../shared/StatBadge';
import { clsx } from 'clsx';

export default function InfSamplingHt({ lesson: _lesson }: { lesson: Lesson }) {
  const [n, setN] = useState(30);
  const [trueMu, setTrueMu] = useState(0);
  const [mu0, setMu0] = useState(1);
  const [alpha, setAlpha] = useState(0.05);

  const data = useMemo(() => {
    const runs = 500;
    const means: number[] = [];
    let s = 1234;
    const r = () => { s = (s * 9301 + 49297) % 233280; return s / 233280; };
    for (let i = 0; i < runs; i++) {
      let sum = 0;
      for (let j = 0; j < n; j++) {
        const u1 = r() || 1e-9;
        const u2 = r();
        const z = Math.sqrt(-2 * Math.log(u1)) * Math.cos(2 * Math.PI * u2);
        sum += trueMu + z;
      }
      means.push(sum / n);
    }
    return means;
  }, [n, trueMu]);

  const hist = useMemo(() => {
    const bins: Record<string, number> = {};
    data.forEach((m) => {
      const k = `${(Math.floor(m * 2) / 2).toFixed(1)}`;
      bins[k] = (bins[k] ?? 0) + 1;
    });
    return Object.entries(bins).map(([k, v]) => ({ bin: k, count: v })).sort((a, b) => Number(a.bin) - Number(b.bin));
  }, [data]);

  const grandMean = data.reduce((a, b) => a + b, 0) / data.length;
  const se = Math.sqrt(1 / n);
  const z = (grandMean - mu0) / se;
  const p = 2 * (1 - normCdf(Math.abs(z)));

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-5">
      <div className="lg:col-span-5 space-y-3">
        <div className="rounded-2xl border border-border-app bg-surface p-4 space-y-2">
          <Slider value={n} onChange={setN} min={5} max={100} step={1} label="Sample size n" formatValue={(v) => `${v}`} />
          <Slider value={trueMu} onChange={setTrueMu} min={-1} max={1} step={0.1} label="True μ" formatValue={(v) => v.toFixed(1)} />
          <Slider value={mu0} onChange={setMu0} min={-2} max={2} step={0.1} label="H₀: μ = μ₀" formatValue={(v) => v.toFixed(1)} />
          <Slider value={alpha} onChange={setAlpha} min={0.001} max={0.2} step={0.005} label="α (significance)" formatValue={(v) => v.toFixed(3)} />
        </div>
        <div className="grid grid-cols-2 gap-2">
          <StatBadge label="Sample mean x̄" value={grandMean.toFixed(3)} hint="500 reps" />
          <StatBadge label="z" value={z.toFixed(2)} />
          <StatBadge label="p-value" value={p.toFixed(3)} tone={p < alpha ? 'danger' : 'success'} hint="2-sided" />
          <StatBadge label="Decision" value={p < alpha ? 'Reject H₀' : 'Fail to reject'} tone={p < alpha ? 'danger' : 'success'} hint={`α = ${alpha.toFixed(2)}`} />
        </div>
        <div className="rounded-xl border border-accent/40 bg-accent-soft/40 p-3 text-xs text-text-primary">
          H₀ is the null hypothesis; H₁ is the alternative. Reject H₀ when the p-value is below α.
        </div>
      </div>
      <div className="lg:col-span-7 space-y-3">
        <div className="rounded-2xl p-3 h-[200px]">
          <div className="text-[10px] font-mono uppercase tracking-widest text-text-muted mb-1">Sampling distribution of the mean (CLT)</div>
          <ResponsiveContainer width="100%" height="88%">
            <BarChart data={hist}>
              <CartesianGrid strokeDasharray="3 3" stroke="var(--border-app)" />
              <XAxis dataKey="bin" fontSize={9} stroke="var(--text-muted)" interval={Math.max(1, Math.floor(hist.length / 6))} />
              <YAxis fontSize={10} stroke="var(--text-muted)" />
              <ReferenceLine x={mu0.toFixed(1)} stroke="var(--chart-4)" strokeDasharray="4 4" label={{ value: 'μ₀', fontSize: 10, fill: 'var(--chart-4)' }} />
              <Tooltip contentStyle={{ background: 'var(--surface)', border: '1px solid var(--border-app)', borderRadius: 12, fontSize: 12, color: 'var(--text-primary)' }} />
              <Bar dataKey="count" fill="var(--chart-1)" />
            </BarChart>
          </ResponsiveContainer>
        </div>
        <div className="rounded-2xl p-3 h-[180px]">
          <div className="text-[10px] font-mono uppercase tracking-widest text-text-muted mb-1">Confidence interval for μ</div>
          <ResponsiveContainer width="100%" height="88%">
            <LineChart data={[{ lo: grandMean - 1.96 * se, hi: grandMean + 1.96 * se, x: 0 }]}>
              <CartesianGrid strokeDasharray="3 3" stroke="var(--border-app)" />
              <XAxis dataKey="x" fontSize={10} stroke="var(--text-muted)" hide />
              <YAxis fontSize={10} stroke="var(--text-muted)" domain={[(grandMean - 2.5 * se).toFixed(2), (grandMean + 2.5 * se).toFixed(2)]} />
              <Tooltip contentStyle={{ background: 'var(--surface)', border: '1px solid var(--border-app)', borderRadius: 12, fontSize: 12, color: 'var(--text-primary)' }} />
              <ReferenceLine y={mu0} stroke="var(--chart-4)" strokeDasharray="4 4" label={{ value: 'μ₀', fontSize: 10, fill: 'var(--chart-4)' }} />
              <Line type="monotone" dataKey="lo" stroke="var(--chart-1)" strokeWidth={2.5} dot={{ r: 4 }} />
              <Line type="monotone" dataKey="hi" stroke="var(--chart-2)" strokeWidth={2.5} dot={{ r: 4 }} />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}

function normCdf(x: number) {
  const t = 1 / (1 + 0.2316419 * Math.abs(x));
  const d = 0.3989423 * Math.exp(-x * x / 2);
  const p = d * t * (0.3193815 + t * (-0.3565638 + t * (1.781478 + t * (-1.821256 + t * 1.330274))));
  return x > 0 ? 1 - p : p;
}
