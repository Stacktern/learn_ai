import { useMemo, useState } from 'react';
import { ResponsiveContainer, LineChart, Line, XAxis, YAxis, Tooltip, CartesianGrid, ReferenceLine, BarChart, Bar, Cell } from 'recharts';
import type { Lesson } from '../../../types';
import Slider from '../shared/Slider';
import StatBadge from '../shared/StatBadge';
import { clsx } from 'clsx';

export default function MlTrainEval({ lesson: _lesson }: { lesson: Lesson }) {
  const [complexity, setComplexity] = useState(3);
  const [n, setN] = useState(60);

  const data = useMemo(() => {
    const train: { x: number; y: number }[] = [];
    const val: { x: number; y: number }[] = [];
    for (let i = 0; i < n; i++) {
      const x = (i / (n - 1)) * 6 - 3;
      const trueY = 0.4 * x * x - 0.5;
      const trainY = trueY + (Math.sin(x * complexity) * 0.25) + (Math.random() - 0.5) * 0.1;
      const valY = trueY + (Math.random() - 0.5) * 0.4;
      train.push({ x: Number(x.toFixed(2)), y: Number(trainY.toFixed(2)) });
      val.push({ x: Number(x.toFixed(2)), y: Number(valY.toFixed(2)) });
    }
    return { train, val };
  }, [n, complexity]);

  const trainMse = useMemo(() => {
    const m = data.train.length;
    const meanY = data.train.reduce((a, b) => a + b.y, 0) / m;
    return data.train.reduce((a, b) => a + (b.y - meanY) ** 2, 0) / m;
  }, [data]);

  const verdict = complexity < 2 ? 'underfit' : complexity > 7 ? 'overfit' : 'balanced';

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-5">
      <div className="lg:col-span-5 space-y-3">
        <div className="rounded-2xl border border-border-app bg-surface p-4 space-y-2">
          <Slider value={complexity} onChange={setComplexity} min={1} max={10} step={1} label="Model complexity" formatValue={(v) => `${v}`} />
          <Slider value={n} onChange={setN} min={20} max={200} step={10} label="Training set size" formatValue={(v) => `${v}`} />
        </div>
        <div className="grid grid-cols-2 gap-2">
          <StatBadge label="Train MSE" value={trainMse.toFixed(3)} tone={verdict === 'overfit' ? 'success' : verdict === 'underfit' ? 'warning' : 'default'} hint="lower on train" />
          <StatBadge label="Status" value={verdict} tone={verdict === 'balanced' ? 'success' : 'warning'} />
        </div>
        <div className={clsx(
          'rounded-xl border p-3 text-xs',
          verdict === 'overfit' ? 'border-amber-500/40 bg-amber-500/10 text-amber-700 dark:text-amber-300' :
          verdict === 'underfit' ? 'border-red-500/40 bg-red-500/10 text-red-700 dark:text-red-300' :
          'border-emerald-500/40 bg-emerald-500/10 text-emerald-700 dark:text-emerald-300',
        )}>
          {verdict === 'overfit' && '⚠ The model is too complex — it memorises the training set and will fail on new data.'}
          {verdict === 'underfit' && '→ The model is too simple — it cannot capture the curve in the data.'}
          {verdict === 'balanced' && '✓ Bias-variance trade-off is well-balanced for this complexity.'}
        </div>
        <div className="rounded-xl border border-accent/40 bg-accent-soft/40 p-3 text-xs text-text-primary">
          Metrics the book lists: <strong>accuracy, precision, recall, F1-score, ROC curves</strong>.
        </div>
      </div>
      <div className="lg:col-span-7 rounded-2xl border border-border-app bg-surface p-4 min-h-[380px]">
        <div className="text-[10px] font-mono uppercase tracking-widest text-text-muted mb-2">Train (blue) vs validation (orange)</div>
        <div className="h-[340px]">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart>
              <CartesianGrid strokeDasharray="3 3" stroke="var(--border-app)" />
              <XAxis type="number" dataKey="x" fontSize={10} stroke="var(--text-muted)" domain={[-3, 3]} />
              <YAxis fontSize={10} stroke="var(--text-muted)" domain={[-2, 6]} />
              <Tooltip contentStyle={{ background: 'var(--surface)', border: '1px solid var(--border-app)', borderRadius: 12, fontSize: 12, color: 'var(--text-primary)' }} />
              <Line data={data.train} type="monotone" dataKey="y" stroke="var(--chart-1)" strokeWidth={2.5} dot={{ r: 3 }} name="train" />
              <Line data={data.val} type="monotone" dataKey="y" stroke="var(--chart-4)" strokeWidth={2.5} dot={false} name="val" />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}
