import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid, Cell, ReferenceLine, AreaChart, Area } from 'recharts';
import type { Lesson } from '../../../types';
import StatBadge from '../shared/StatBadge';

const CONFUSION = [
  { name: 'TN', value: 380 },
  { name: 'FP', value: 14 },
  { name: 'FN', value: 9 },
  { name: 'TP', value: 221 },
];

export default function PneuEval({ lesson: _lesson }: { lesson: Lesson }) {
  const tp = 221, fp = 14, fn = 9, tn = 380;
  const total = tp + fp + fn + tn;
  const accuracy = (tp + tn) / total;
  const precision = tp / (tp + fp);
  const recall = tp / (tp + fn);
  const f1 = 2 * (precision * recall) / (precision + recall);

  const roc = Array.from({ length: 30 }, (_, i) => {
    const fpr = i / 30;
    const tpr = Math.min(1, 1 - Math.exp(-3 * fpr));
    return { fpr: Number(fpr.toFixed(2)), tpr: Number(tpr.toFixed(2)) };
  });

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-5">
      <div className="lg:col-span-5 space-y-3">
        <div className="rounded-2xl border border-border-app bg-surface p-4">
          <div className="text-[10px] font-mono uppercase tracking-widest text-text-muted mb-2">Confusion matrix (illustrative)</div>
          <div className="h-[220px]">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={CONFUSION} layout="vertical" margin={{ top: 8, right: 30, left: 30, bottom: 0 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="var(--border-app)" />
                <XAxis type="number" fontSize={10} stroke="var(--text-muted)" />
                <YAxis type="category" dataKey="name" fontSize={10} stroke="var(--text-muted)" />
                <Tooltip contentStyle={{ background: 'var(--surface)', border: '1px solid var(--border-app)', borderRadius: 12, fontSize: 12, color: 'var(--text-primary)' }} />
                <Bar dataKey="value" radius={[0, 6, 6, 0]}>
                  {CONFUSION.map((d, i) => <Cell key={i} fill={d.name === 'FP' || d.name === 'FN' ? 'var(--chart-4)' : 'var(--chart-1)'} />)}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-2">
          <StatBadge label="Accuracy" value={`${(accuracy * 100).toFixed(1)}%`} tone="success" />
          <StatBadge label="Precision" value={precision.toFixed(3)} tone="default" />
          <StatBadge label="Recall" value={recall.toFixed(3)} tone="default" />
          <StatBadge label="F1" value={f1.toFixed(3)} tone="success" />
        </div>
      </div>
      <div className="lg:col-span-7 rounded-2xl border border-border-app bg-surface p-4 min-h-[380px]">
        <div className="text-[10px] font-mono uppercase tracking-widest text-text-muted mb-2">ROC curve (illustrative)</div>
        <div className="h-[340px]">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={roc}>
              <defs>
                <linearGradient id="rocGrad" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="var(--chart-2)" stopOpacity={0.4} />
                  <stop offset="100%" stopColor="var(--chart-2)" stopOpacity={0.05} />
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="var(--border-app)" />
              <XAxis type="number" dataKey="fpr" fontSize={10} stroke="var(--text-muted)" domain={[0, 1]} label={{ value: 'FPR', position: 'insideBottom', offset: -2, fontSize: 10, fill: 'var(--text-muted)' }} />
              <YAxis type="number" fontSize={10} stroke="var(--text-muted)" domain={[0, 1]} label={{ value: 'TPR', angle: -90, position: 'insideLeft', fontSize: 10, fill: 'var(--text-muted)' }} />
              <Tooltip contentStyle={{ background: 'var(--surface)', border: '1px solid var(--border-app)', borderRadius: 12, fontSize: 12, color: 'var(--text-primary)' }} />
              <Area type="monotone" dataKey="tpr" stroke="var(--chart-2)" fill="url(#rocGrad)" strokeWidth={2.5} />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}
