import { useMemo, useState } from 'react';
import { ResponsiveContainer, LineChart, Line, XAxis, YAxis, Tooltip, CartesianGrid, Area, AreaChart, ReferenceLine } from 'recharts';
import type { Lesson } from '../../../types';
import Slider from '../shared/Slider';
import StatBadge from '../shared/StatBadge';
import { clsx } from 'clsx';

function normPdf(x: number, mu: number, sigma: number) {
  return Math.exp(-((x - mu) ** 2) / (2 * sigma * sigma)) / (sigma * Math.sqrt(2 * Math.PI));
}

export default function Bayesian({ lesson: _lesson }: { lesson: Lesson }) {
  const [priorMu, setPriorMu] = useState(0);
  const [priorSigma, setPriorSigma] = useState(2);
  const [dataMu, setDataMu] = useState(1.5);
  const [dataSigma, setDataSigma] = useState(1);
  const [n, setN] = useState(10);

  const postSigma2 = 1 / (1 / (priorSigma * priorSigma) + n / (dataSigma * dataSigma));
  const postSigma = Math.sqrt(postSigma2);
  const postMu = postSigma2 * (priorMu / (priorSigma * priorSigma) + n * dataMu / (dataSigma * dataSigma));

  const data = useMemo(() => {
    const out: { x: number; prior: number; lik: number; post: number }[] = [];
    const pScale = priorSigma * Math.sqrt(2 * Math.PI);
    const dScale = dataSigma * Math.sqrt(2 * Math.PI);
    const postScale = postSigma * Math.sqrt(2 * Math.PI);
    for (let i = 0; i <= 100; i++) {
      const x = -6 + (i / 100) * 12;
      const prior = Math.exp(-((x - priorMu) ** 2) / (2 * priorSigma * priorSigma)) / pScale;
      const lik = Math.exp(-((x - dataMu) ** 2) / (2 * (dataSigma / Math.sqrt(n)) ** 2)) / (dataSigma / Math.sqrt(n) * Math.sqrt(2 * Math.PI));
      const post = Math.exp(-((x - postMu) ** 2) / (2 * postSigma * postSigma)) / postScale;
      out.push({ x: Number(x.toFixed(2)), prior: Number(prior.toFixed(4)), lik: Number(lik.toFixed(4)), post: Number(post.toFixed(4)) });
    }
    return out;
  }, [priorMu, priorSigma, dataMu, dataSigma, n, postMu, postSigma]);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-5">
      <div className="lg:col-span-5 space-y-3">
        <div className="rounded-2xl border border-border-app bg-surface p-4 space-y-2">
          <div className="text-[10px] font-mono uppercase tracking-widest text-text-secondary">Prior ~ N(μ₀, σ₀²)</div>
          <Slider value={priorMu} onChange={setPriorMu} min={-3} max={3} step={0.1} label="Prior μ₀" formatValue={(v) => v.toFixed(1)} />
          <Slider value={priorSigma} onChange={setPriorSigma} min={0.5} max={3} step={0.1} label="Prior σ₀" formatValue={(v) => v.toFixed(1)} />
          <div className="text-[10px] font-mono uppercase tracking-widest text-text-secondary">Likelihood (n obs, x̄, σ)</div>
          <Slider value={dataMu} onChange={setDataMu} min={-3} max={3} step={0.1} label="x̄ (sample mean)" formatValue={(v) => v.toFixed(1)} />
          <Slider value={dataSigma} onChange={setDataSigma} min={0.5} max={3} step={0.1} label="σ (sample std)" formatValue={(v) => v.toFixed(1)} />
          <Slider value={n} onChange={setN} min={1} max={100} step={1} label="n (sample size)" formatValue={(v) => `${v}`} />
        </div>
        <div className="grid grid-cols-2 gap-2">
          <StatBadge label="Posterior μ" value={postMu.toFixed(3)} tone="success" />
          <StatBadge label="Posterior σ" value={postSigma.toFixed(3)} hint="shrinks with n" />
        </div>
        <div className="rounded-xl border border-accent/40 bg-accent-soft/40 p-3 text-xs text-text-primary">
          Prior · Likelihood → Posterior. As n grows, the posterior concentrates near the sample mean.
        </div>
      </div>
      <div className="lg:col-span-7 rounded-2xl border border-border-app bg-surface p-4 min-h-[380px]">
        <div className="text-[10px] font-mono uppercase tracking-widest text-text-muted mb-2">Prior, Likelihood and Posterior</div>
        <div className="h-[340px]">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={data}>
              <defs>
                <linearGradient id="bPrior" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="var(--chart-3)" stopOpacity={0.35} />
                  <stop offset="100%" stopColor="var(--chart-3)" stopOpacity={0.05} />
                </linearGradient>
                <linearGradient id="bLik" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="var(--chart-1)" stopOpacity={0.35} />
                  <stop offset="100%" stopColor="var(--chart-1)" stopOpacity={0.05} />
                </linearGradient>
                <linearGradient id="bPost" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="var(--chart-4)" stopOpacity={0.45} />
                  <stop offset="100%" stopColor="var(--chart-4)" stopOpacity={0.05} />
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="var(--border-app)" />
              <XAxis dataKey="x" fontSize={10} stroke="var(--text-muted)" domain={[-6, 6]} />
              <YAxis fontSize={10} stroke="var(--text-muted)" />
              <Tooltip contentStyle={{ background: 'var(--surface)', border: '1px solid var(--border-app)', borderRadius: 12, fontSize: 12, color: 'var(--text-primary)' }} />
              <Area type="monotone" dataKey="prior" stroke="var(--chart-3)" fill="url(#bPrior)" strokeWidth={2} />
              <Area type="monotone" dataKey="lik" stroke="var(--chart-1)" fill="url(#bLik)" strokeWidth={2} />
              <Area type="monotone" dataKey="post" stroke="var(--chart-4)" fill="url(#bPost)" strokeWidth={2.5} />
              <ReferenceLine x={priorMu} stroke="var(--chart-3)" strokeDasharray="4 4" />
              <ReferenceLine x={dataMu} stroke="var(--chart-1)" strokeDasharray="4 4" />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}
