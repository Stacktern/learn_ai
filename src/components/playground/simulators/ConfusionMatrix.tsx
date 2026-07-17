import { useMemo, useState } from 'react';
import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid, LineChart, Line, Cell } from 'recharts';
import type { Lesson } from '../../../types';
import Slider from '../shared/Slider';
import StatBadge from '../shared/StatBadge';
import { clsx } from 'clsx';

export default function ConfusionMatrix({ lesson: _lesson }: { lesson: Lesson }) {
  const [positives, setPositives] = useState(50);
  const [negatives, setNegatives] = useState(950);
  const [tp, setTp] = useState(45);
  const [fp, setFp] = useState(20);

  const fn = Math.max(0, positives - tp);
  const tn = Math.max(0, negatives - fp);
  const total = tp + fp + fn + tn;
  const acc = total > 0 ? ((tp + tn) / total) * 100 : 0;
  const precision = tp + fp > 0 ? tp / (tp + fp) : 0;
  const recall = tp + fn > 0 ? tp / (tp + fn) : 0;
  const f1 = precision + recall > 0 ? (2 * precision * recall) / (precision + recall) : 0;

  const matrix = [
    { name: 'Predicted +', TP: tp, FN: 0 },
    { name: 'Predicted −', FP: 0, TN: tn },
  ];
  const stacked = [
    { name: 'Pred +', TP: tp, FN: 0 },
    { name: 'Pred −', FP: fp, TN: tn },
  ];

  const roc = useMemo(() => {
    const pts: { fpr: number; tpr: number }[] = [];
    for (let t = 0; t <= 20; t++) {
      const thr = t / 20;
      const ttp = Math.round(thr * positives);
      const tfn = positives - ttp;
      const tfp = Math.round((1 - thr) * negatives);
      const tpr = ttp / Math.max(1, positives);
      const fpr = tfp / Math.max(1, negatives);
      pts.push({ fpr: Number(fpr.toFixed(2)), tpr: Number(tpr.toFixed(2)) });
    }
    return pts;
  }, [positives, negatives]);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-5">
      <div className="lg:col-span-5 space-y-3">
        <div className="rounded-2xl border border-border-app bg-surface p-4 space-y-3">
          <div className="text-[10px] font-mono uppercase tracking-widest text-text-secondary">Population</div>
          <Slider value={positives} onChange={setPositives} min={10} max={500} step={10} label="Actual positives" formatValue={(v) => `${v}`} />
          <Slider value={negatives} onChange={setNegatives} min={50} max={5000} step={50} label="Actual negatives" formatValue={(v) => `${v}`} />
        </div>
        <div className="rounded-2xl border border-border-app bg-surface p-4 space-y-3">
          <div className="text-[10px] font-mono uppercase tracking-widest text-text-secondary">Predictions</div>
          <Slider value={tp} onChange={setTp} min={0} max={positives} step={1} label="True positives (TP)" formatValue={(v) => `${v}`} />
          <Slider value={fp} onChange={setFp} min={0} max={negatives} step={1} label="False positives (FP)" formatValue={(v) => `${v}`} />
          <div className="text-[10px] font-mono text-text-muted">FN = positives − TP = <span className="text-text-primary font-bold">{fn}</span></div>
          <div className="text-[10px] font-mono text-text-muted">TN = negatives − FP = <span className="text-text-primary font-bold">{tn}</span></div>
        </div>

        <div className="grid grid-cols-2 gap-2">
          <StatBadge label="Precision" value={precision.toFixed(2)} tone={precision > 0.7 ? 'success' : precision > 0.4 ? 'warning' : 'danger'} hint="TP/(TP+FP)" />
          <StatBadge label="Recall" value={recall.toFixed(2)} tone={recall > 0.7 ? 'success' : recall > 0.4 ? 'warning' : 'danger'} hint="TP/(TP+FN)" />
          <StatBadge label="F1" value={f1.toFixed(2)} tone={f1 > 0.7 ? 'success' : f1 > 0.4 ? 'warning' : 'danger'} />
          <StatBadge label="Accuracy" value={`${acc.toFixed(1)}%`} tone={acc > 90 ? 'success' : 'warning'} hint="misleading on imbalance" />
        </div>
      </div>

      <div className="lg:col-span-7 space-y-3">
        <div className="rounded-2xl border border-border-app bg-surface p-4">
          <div className="text-[10px] font-mono uppercase tracking-widest text-text-muted mb-2">Confusion matrix</div>
          <div className="grid grid-cols-3 gap-1.5 text-center text-xs">
            <div></div>
            <div className="font-bold text-text-secondary py-1.5">Pred +</div>
            <div className="font-bold text-text-secondary py-1.5">Pred −</div>
            <div className="font-bold text-text-secondary py-1.5">Actual +</div>
            <div className={clsx('rounded-lg py-3 font-mono font-bold text-white', tp > 0 ? 'bg-emerald-500' : 'bg-surface-2')}>{tp}<div className="text-[9px] font-normal opacity-80">TP</div></div>
            <div className={clsx('rounded-lg py-3 font-mono font-bold', fn > 0 ? 'bg-red-500/80 text-white' : 'bg-surface-2')}>{fn}<div className="text-[9px] font-normal opacity-80">FN</div></div>
            <div className="font-bold text-text-secondary py-1.5">Actual −</div>
            <div className={clsx('rounded-lg py-3 font-mono font-bold', fp > 0 ? 'bg-amber-500/80 text-white' : 'bg-surface-2')}>{fp}<div className="text-[9px] font-normal opacity-80">FP</div></div>
            <div className={clsx('rounded-lg py-3 font-mono font-bold', tn > 0 ? 'bg-emerald-500/70 text-white' : 'bg-surface-2')}>{tn}<div className="text-[9px] font-normal opacity-80">TN</div></div>
          </div>
        </div>

        <div className="rounded-2xl p-3 h-[180px]">
          <div className="text-[10px] font-mono uppercase tracking-widest text-text-muted mb-1">ROC curve (sweep threshold)</div>
          <ResponsiveContainer width="100%" height="85%">
            <LineChart data={roc}>
              <CartesianGrid strokeDasharray="3 3" stroke="var(--border-app)" />
              <XAxis type="number" dataKey="fpr" fontSize={10} stroke="var(--text-muted)" domain={[0, 1]} label={{ value: 'FPR', fontSize: 10, position: 'insideBottom', offset: -2, fill: 'var(--text-muted)' }} />
              <YAxis type="number" fontSize={10} stroke="var(--text-muted)" domain={[0, 1]} label={{ value: 'TPR', angle: -90, position: 'insideLeft', fontSize: 10, fill: 'var(--text-muted)' }} />
              <Tooltip contentStyle={{ background: 'var(--surface)', border: '1px solid var(--border-app)', borderRadius: 12, fontSize: 12, color: 'var(--text-primary)' }} />
              <Line type="monotone" dataKey="tpr" stroke="var(--chart-1)" strokeWidth={2.5} dot={false} />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}
