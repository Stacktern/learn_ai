import { useMemo, useState } from 'react';
import { ResponsiveContainer, LineChart, Line, XAxis, YAxis, Tooltip, CartesianGrid, Area, AreaChart } from 'recharts';
import type { Lesson } from '../../../types';
import Slider from '../shared/Slider';
import StatBadge from '../shared/StatBadge';
import { clsx } from 'clsx';

export default function PneuTrain({ lesson: _lesson }: { lesson: Lesson }) {
  const [epochs, setEpochs] = useState(10);
  const [lr, setLr] = useState(1);

  const data = useMemo(() => {
    let s = 99;
    const r = () => { s = (s * 9301 + 49297) % 233280; return s / 233280; };
    const out: { t: number; loss: number; acc: number; valLoss: number; valAcc: number }[] = [];
    let loss = 0.7, acc = 0.55, vl = 0.7, va = 0.55;
    for (let i = 0; i < epochs; i++) {
      loss = Math.max(0.04, loss * 0.78 + r() * 0.01);
      vl = Math.max(0.07, vl * 0.82 + r() * 0.02);
      acc = Math.min(0.99, acc + 0.04 + r() * 0.01);
      va = Math.min(0.98, va + 0.035 + r() * 0.015);
      out.push({
        t: i + 1,
        loss: Number(loss.toFixed(4)),
        acc: Number(acc.toFixed(4)),
        valLoss: Number(vl.toFixed(4)),
        valAcc: Number(va.toFixed(4)),
      });
    }
    return out;
  }, [epochs, lr]);

  const last = data[data.length - 1];

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-5">
      <div className="lg:col-span-5 space-y-3">
        <div className="rounded-2xl border border-border-app bg-surface p-4 space-y-2">
          <Slider value={epochs} onChange={setEpochs} min={1} max={30} step={1} label="Epochs" formatValue={(v) => `${v}`} />
          <Slider value={lr} onChange={setLr} min={0.1} max={2} step={0.1} label="LR multiplier" formatValue={(v) => `${v.toFixed(1)}×`} />
        </div>
        <div className="grid grid-cols-2 gap-2">
          <StatBadge label="Train acc" value={`${(last.acc * 100).toFixed(1)}%`} tone="success" />
          <StatBadge label="Val acc" value={`${(last.valAcc * 100).toFixed(1)}%`} tone="default" />
        </div>
        <div className={clsx('rounded-xl border border-accent/40 bg-accent-soft/40 p-3 text-xs text-text-primary')}>
          The book plots training & validation loss and accuracy curves — best <code>val_accuracy</code> is the metric to track.
        </div>
      </div>
      <div className="lg:col-span-7 space-y-3">
        <div className="rounded-2xl p-3 h-[180px]">
          <div className="text-[10px] font-mono uppercase tracking-widest text-text-muted mb-1">Loss</div>
          <ResponsiveContainer width="100%" height="88%">
            <LineChart data={data}>
              <CartesianGrid strokeDasharray="3 3" stroke="var(--border-app)" />
              <XAxis dataKey="t" fontSize={10} stroke="var(--text-muted)" />
              <YAxis fontSize={10} stroke="var(--text-muted)" domain={[0, 0.8]} />
              <Tooltip contentStyle={{ background: 'var(--surface)', border: '1px solid var(--border-app)', borderRadius: 12, fontSize: 12, color: 'var(--text-primary)' }} />
              <Line type="monotone" dataKey="loss" stroke="var(--chart-1)" strokeWidth={2.5} dot={false} name="train loss" />
              <Line type="monotone" dataKey="valLoss" stroke="var(--chart-4)" strokeWidth={2.5} dot={false} name="val loss" />
            </LineChart>
          </ResponsiveContainer>
        </div>
        <div className="rounded-2xl p-3 h-[180px]">
          <div className="text-[10px] font-mono uppercase tracking-widest text-text-muted mb-1">Accuracy</div>
          <ResponsiveContainer width="100%" height="88%">
            <AreaChart data={data}>
              <defs>
                <linearGradient id="accArea" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="var(--chart-2)" stopOpacity={0.5} />
                  <stop offset="100%" stopColor="var(--chart-2)" stopOpacity={0.05} />
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="var(--border-app)" />
              <XAxis dataKey="t" fontSize={10} stroke="var(--text-muted)" />
              <YAxis fontSize={10} stroke="var(--text-muted)" domain={[0, 1]} />
              <Tooltip contentStyle={{ background: 'var(--surface)', border: '1px solid var(--border-app)', borderRadius: 12, fontSize: 12, color: 'var(--text-primary)' }} />
              <Area type="monotone" dataKey="acc" stroke="var(--chart-2)" fill="url(#accArea)" strokeWidth={2.5} />
              <Area type="monotone" dataKey="valAcc" stroke="var(--chart-3)" strokeWidth={2.5} fill="transparent" />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}
