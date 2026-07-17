import { useMemo, useState } from 'react';
import { ResponsiveContainer, LineChart, Line, XAxis, YAxis, Tooltip, CartesianGrid, ReferenceLine, Area, AreaChart } from 'recharts';
import type { Lesson } from '../../../types';
import Slider from '../shared/Slider';
import StatBadge from '../shared/StatBadge';
import { clsx } from 'clsx';

export default function ProbBayes({ lesson: _lesson }: { lesson: Lesson }) {
  const [prior, setPrior] = useState(0.05);
  const [sens, setSens] = useState(0.9);
  const [spec, setSpec] = useState(0.95);

  const fpr = 1 - spec;
  const post = useMemo(() => {
    const numerator = sens * prior;
    const denom = sens * prior + fpr * (1 - prior);
    return denom === 0 ? 0 : numerator / denom;
  }, [prior, sens, spec, fpr]);

  const data = useMemo(() => Array.from({ length: 100 }, (_, i) => {
    const p = i / 99;
    const num = sens * p;
    const den = sens * p + fpr * (1 - p);
    return { p: Number(p.toFixed(3)), post: Number((den === 0 ? 0 : num / den).toFixed(3)) };
  }), [sens, spec, fpr]);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-5">
      <div className="lg:col-span-5 space-y-3">
        <div className="rounded-2xl border border-border-app bg-surface p-4 space-y-2">
          <div className="text-[10px] font-mono uppercase tracking-widest text-text-secondary">P(C) — prior, P(+/C) — sens, P(−/¬C) — spec</div>
          <Slider value={prior} onChange={setPrior} min={0.01} max={0.5} step={0.01} label="Prior P(C)" formatValue={(v) => v.toFixed(2)} />
          <Slider value={sens} onChange={setSens} min={0.5} max={1} step={0.01} label="Sensitivity P(+ | C)" formatValue={(v) => v.toFixed(2)} />
          <Slider value={spec} onChange={setSpec} min={0.5} max={1} step={0.01} label="Specificity P(− | ¬C)" formatValue={(v) => v.toFixed(2)} />
        </div>
        <div className="grid grid-cols-2 gap-2">
          <StatBadge label="Posterior P(C | +)" value={(post * 100).toFixed(1) + '%'} tone="success" hint="updated belief" />
          <StatBadge label="P(+ | ¬C)" value={fpr.toFixed(2)} tone="warning" hint="false positive rate" />
        </div>
        <div className="rounded-xl border border-accent/40 bg-accent-soft/40 p-3 text-xs text-text-primary">
          Bayes: P(C | +) = P(+ | C) · P(C) / P(+).
        </div>
      </div>
      <div className="lg:col-span-7 rounded-2xl border border-border-app bg-surface p-4 min-h-[380px]">
        <div className="text-[10px] font-mono uppercase tracking-widest text-text-muted mb-2">Posterior as a function of the prior</div>
        <div className="h-[340px]">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={data}>
              <defs>
                <linearGradient id="bayesGrad" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="var(--chart-1)" stopOpacity={0.6} />
                  <stop offset="100%" stopColor="var(--chart-1)" stopOpacity={0.05} />
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="var(--border-app)" />
              <XAxis type="number" dataKey="p" fontSize={10} stroke="var(--text-muted)" domain={[0, 1]} label={{ value: 'Prior P(C)', position: 'insideBottom', offset: -2, fontSize: 10, fill: 'var(--text-muted)' }} />
              <YAxis fontSize={10} stroke="var(--text-muted)" domain={[0, 1]} label={{ value: 'Posterior', angle: -90, position: 'insideLeft', fontSize: 10, fill: 'var(--text-muted)' }} />
              <Tooltip contentStyle={{ background: 'var(--surface)', border: '1px solid var(--border-app)', borderRadius: 12, fontSize: 12, color: 'var(--text-primary)' }} />
              <ReferenceLine x={prior} stroke="var(--chart-4)" strokeDasharray="4 4" />
              <Area type="monotone" dataKey="post" stroke="var(--chart-1)" fill="url(#bayesGrad)" strokeWidth={2.5} />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}
