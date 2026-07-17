import { useMemo, useState } from 'react';
import { ResponsiveContainer, LineChart, Line, XAxis, YAxis, Tooltip, CartesianGrid } from 'recharts';
import type { Lesson } from '../../../types';
import Slider from '../shared/Slider';
import StatBadge from '../shared/StatBadge';
import { clsx } from 'clsx';

export default function CovidLstm({ lesson: _lesson }: { lesson: Lesson }) {
  const [seq, setSeq] = useState(10);
  const [epochs, setEpochs] = useState(10);

  const data = useMemo(() => {
    let s = 1234;
    const r = () => { s = (s * 9301 + 49297) % 233280; return s / 233280; };
    const out: { t: number; train: number; val: number }[] = [];
    let trainLoss = 0.02, valLoss = 0.04;
    for (let i = 0; i < epochs; i++) {
      trainLoss = Math.max(0.0005, trainLoss * 0.7 + r() * 0.001);
      valLoss = Math.max(trainLoss * 1.2, valLoss * 0.78 + r() * 0.002);
      out.push({ t: i + 1, train: Number(trainLoss.toFixed(5)), val: Number(valLoss.toFixed(5)) });
    }
    return out;
  }, [epochs, seq]);

  const finalMae = 0.0025;
  const finalMse = 0.00025;
  const finalRmse = 0.0159;

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-5">
      <div className="lg:col-span-5 space-y-3">
        <div className="rounded-2xl border border-border-app bg-surface p-4 space-y-2">
          <Slider value={seq} onChange={setSeq} min={3} max={30} step={1} label="sequence_length" formatValue={(v) => `${v}`} />
          <Slider value={epochs} onChange={setEpochs} min={1} max={30} step={1} label="Epochs" formatValue={(v) => `${v}`} />
        </div>
        <div className="grid grid-cols-3 gap-2">
          <StatBadge label="MAE" value={finalMae.toFixed(5)} tone="success" />
          <StatBadge label="MSE" value={finalMse.toFixed(5)} tone="success" />
          <StatBadge label="RMSE" value={finalRmse.toFixed(4)} tone="success" />
        </div>
        <div className={clsx('rounded-xl border border-accent/40 bg-accent-soft/40 p-3 text-xs text-text-primary')}>
          The book: <em>LSTM(50, activation='relu', input_shape=(sequence_length, 1)) → Dense(1) → compile(adam, mse) → 10 epochs, batch 32</em>.
        </div>
      </div>
      <div className="lg:col-span-7 rounded-2xl border border-border-app bg-surface p-4 min-h-[380px]">
        <div className="text-[10px] font-mono uppercase tracking-widest text-text-muted mb-2">Training loss (illustrative)</div>
        <div className="h-[340px]">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={data}>
              <CartesianGrid strokeDasharray="3 3" stroke="var(--border-app)" />
              <XAxis dataKey="t" fontSize={10} stroke="var(--text-muted)" />
              <YAxis fontSize={10} stroke="var(--text-muted)" />
              <Tooltip contentStyle={{ background: 'var(--surface)', border: '1px solid var(--border-app)', borderRadius: 12, fontSize: 12, color: 'var(--text-primary)' }} />
              <Line type="monotone" dataKey="train" stroke="var(--chart-1)" strokeWidth={2.5} dot={false} name="train" />
              <Line type="monotone" dataKey="val" stroke="var(--chart-4)" strokeWidth={2.5} dot={false} name="val" />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}
