import { useMemo, useState } from 'react';
import { ResponsiveContainer, LineChart, Line, XAxis, YAxis, Tooltip, CartesianGrid, Area, AreaChart, ReferenceLine } from 'recharts';
import type { Lesson } from '../../../types';
import Slider from '../shared/Slider';
import StatBadge from '../shared/StatBadge';
import { clsx } from 'clsx';

export default function Deployment({ lesson: _lesson }: { lesson: Lesson }) {
  const [drift, setDrift] = useState(0.3);
  const [retrainMonth, setRetrainMonth] = useState(6);

  const data = useMemo(() => {
    return Array.from({ length: 12 }, (_, m) => {
      const base = 0.92;
      const drop = m < retrainMonth ? drift * (m / 6) * 0.5 : drift * Math.max(0, 1 - (m - retrainMonth) / 4);
      const trainAcc = m === retrainMonth ? base : m > retrainMonth ? base - drift * 0.1 : base - drift * 0.05;
      return {
        month: m + 1,
        accuracy: Number(Math.max(0.4, base - drop).toFixed(3)),
        training: Number(Math.max(0.4, trainAcc).toFixed(3)),
      };
    });
  }, [drift, retrainMonth]);

  const finalAcc = data[data.length - 1].accuracy;
  const alert = finalAcc < 0.7;

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-5">
      <div className="lg:col-span-5 space-y-3">
        <div className="rounded-2xl border border-border-app bg-surface p-4 space-y-3">
          <div className="text-[10px] font-mono uppercase tracking-widest text-text-secondary">Monitoring controls</div>
          <Slider value={drift} onChange={setDrift} min={0} max={0.6} step={0.05} label="Data drift strength" formatValue={(v) => v.toFixed(2)} />
          <Slider value={retrainMonth} onChange={setRetrainMonth} min={1} max={12} step={1} label="Retrain at month" formatValue={(v) => `${v}`} />
        </div>
        <div className="grid grid-cols-2 gap-2">
          <StatBadge label="Month-12 accuracy" value={`${(finalAcc * 100).toFixed(0)}%`} tone={finalAcc > 0.85 ? 'success' : finalAcc > 0.7 ? 'warning' : 'danger'} />
          <StatBadge label="Retrain events" value={data.filter((d) => d.training > d.accuracy).length} />
        </div>
        <div className={clsx(
          'rounded-xl border p-3 text-xs',
          alert ? 'border-red-500/40 bg-red-500/10 text-red-700 dark:text-red-300' : 'border-emerald-500/40 bg-emerald-500/10 text-emerald-700 dark:text-emerald-300',
        )}>
          {alert ? '⚠ Accuracy below SLA — trigger an alert and retrain earlier.' : '✓ Within SLA — schedule quarterly retraining.'}
        </div>
      </div>

      <div className="lg:col-span-7 space-y-3">
        <div className="rounded-2xl p-3 h-[380px]">
          <div className="text-[10px] font-mono uppercase tracking-widest text-text-muted mb-1">Production accuracy over time</div>
          <ResponsiveContainer width="100%" height="92%">
            <AreaChart data={data}>
              <defs>
                <linearGradient id="grad" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="var(--chart-1)" stopOpacity={0.4} />
                  <stop offset="100%" stopColor="var(--chart-1)" stopOpacity={0} />
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="var(--border-app)" />
              <XAxis dataKey="month" fontSize={10} stroke="var(--text-muted)" label={{ value: 'month', fontSize: 10, position: 'insideBottom', offset: -2, fill: 'var(--text-muted)' }} />
              <YAxis fontSize={10} stroke="var(--text-muted)" domain={[0.4, 1]} />
              <Tooltip contentStyle={{ background: 'var(--surface)', border: '1px solid var(--border-app)', borderRadius: 12, fontSize: 12, color: 'var(--text-primary)' }} />
              <ReferenceLine y={0.8} stroke="var(--chart-4)" strokeDasharray="4 4" label={{ value: 'SLA 80%', fontSize: 10, fill: 'var(--chart-4)' }} />
              <ReferenceLine x={retrainMonth} stroke="var(--chart-2)" strokeDasharray="4 4" label={{ value: 'retrain', fontSize: 10, fill: 'var(--chart-2)' }} />
              <Area type="monotone" dataKey="accuracy" stroke="var(--chart-1)" fill="url(#grad)" strokeWidth={2.5} />
              <Line type="monotone" dataKey="training" stroke="var(--chart-2)" strokeWidth={2} dot={false} strokeDasharray="4 4" />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}
