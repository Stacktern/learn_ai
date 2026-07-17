import { useMemo, useState } from 'react';
import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid, Cell } from 'recharts';
import type { Lesson } from '../../../types';
import Slider from '../shared/Slider';
import StatBadge from '../shared/StatBadge';
import { clsx } from 'clsx';

const CLASSES = ['spam', 'promo', 'social', 'primary'];
const VOCAB = ['free', 'win', 'offer', 'meeting', 'lunch', 'project', 'urgent', 'discount'];

function train() {
  const prior = { spam: 0.2, promo: 0.25, social: 0.2, primary: 0.35 };
  const wordGiven: Record<string, Record<string, number>> = {
    spam: { free: 0.4, win: 0.35, offer: 0.3, meeting: 0.02, lunch: 0.01, project: 0.02, urgent: 0.25, discount: 0.3 },
    promo: { free: 0.2, win: 0.15, offer: 0.25, meeting: 0.05, lunch: 0.05, project: 0.03, urgent: 0.05, discount: 0.4 },
    social: { free: 0.05, win: 0.05, offer: 0.05, meeting: 0.05, lunch: 0.1, project: 0.05, urgent: 0.02, discount: 0.02 },
    primary: { free: 0.02, win: 0.02, offer: 0.02, meeting: 0.4, lunch: 0.3, project: 0.35, urgent: 0.2, discount: 0.02 },
  };
  return { prior, wordGiven };
}

export default function NaiveBayes({ lesson: _lesson }: { lesson: Lesson }) {
  const { prior, wordGiven } = useMemo(train, []);
  const [doc, setDoc] = useState<string[]>(['free', 'offer']);
  const [smoothing, setSmoothing] = useState(1);

  const scores = useMemo(() => {
    return CLASSES.map((c) => {
      const logPrior = Math.log(prior[c]);
      const logLik = VOCAB.reduce((acc, w) => {
        const count = doc.filter((d) => d === w).length;
        if (count === 0) return acc;
        const p = (wordGiven[c][w] * 999 + smoothing) / (999 + smoothing * VOCAB.length);
        return acc + count * Math.log(p);
      }, 0);
      return { class: c, score: logPrior + logLik };
    });
  }, [doc, smoothing]);

  const max = Math.max(...scores.map((s) => s.score));
  const norm = scores.map((s) => ({ ...s, prob: Math.exp(s.score - max) }));
  const sum = norm.reduce((a, b) => a + b.prob, 0);
  const final = norm.map((s) => ({ ...s, prob: s.prob / sum }));

  const predicted = final.reduce((a, b) => (a.prob > b.prob ? a : b)).class;

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-5">
      <div className="lg:col-span-5 space-y-3">
        <div className="rounded-2xl border border-border-app bg-surface p-4 space-y-3">
          <div className="text-[10px] font-mono uppercase tracking-widest text-text-secondary">Document</div>
          <div className="flex flex-wrap gap-1.5 min-h-[2rem]">
            {doc.map((w, i) => (
              <button key={i} onClick={() => setDoc(doc.filter((_, j) => j !== i))} className="px-2 py-1 rounded-lg bg-accent-soft text-accent text-xs font-mono border border-accent/30">{w} ✕</button>
            ))}
          </div>
          <div className="text-[10px] font-mono uppercase tracking-widest text-text-secondary">Tap words to add</div>
          <div className="flex flex-wrap gap-1.5">
            {VOCAB.map((w) => (
              <button key={w} onClick={() => setDoc([...doc, w])} className="px-2 py-1 rounded-lg bg-surface-2 text-text-secondary text-xs font-mono border border-border-app hover:bg-accent-soft hover:text-accent">+ {w}</button>
            ))}
          </div>
        </div>
        <div className="rounded-2xl border border-border-app bg-surface p-4 space-y-3">
          <Slider value={smoothing} onChange={setSmoothing} min={0.01} max={5} step={0.05} label="Laplace smoothing α" formatValue={(v) => v.toFixed(2)} />
        </div>
        <div className={clsx(
          'rounded-xl border p-3 text-xs',
          'border-accent/40 bg-accent-soft/40 text-text-primary',
        )}>
          Predicted class: <strong className="text-accent font-bold">{predicted}</strong>
        </div>
      </div>

      <div className="lg:col-span-7 space-y-3">
        <div className="rounded-2xl p-4 min-h-[300px] flex flex-col">
          <div className="text-[10px] font-mono uppercase tracking-widest text-text-muted mb-2">P(class | document)</div>
          <div className="flex-1">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={final} layout="vertical" margin={{ top: 10, right: 30, left: 30, bottom: 0 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="var(--border-app)" />
                <XAxis type="number" fontSize={10} stroke="var(--text-muted)" domain={[0, 1]} />
                <YAxis type="category" dataKey="class" fontSize={10} stroke="var(--text-muted)" />
                <Tooltip contentStyle={{ background: 'var(--surface)', border: '1px solid var(--border-app)', borderRadius: 12, fontSize: 12, color: 'var(--text-primary)' }} />
                <Bar dataKey="prob" radius={[0, 6, 6, 0]}>
                  {final.map((f, i) => <Cell key={i} fill={f.class === predicted ? 'var(--chart-1)' : 'var(--chart-3)'} />)}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
        <div className="grid grid-cols-4 gap-2">
          {final.map((f) => (
            <div key={`cls-${f.class}`}>
              <StatBadge label={f.class} value={`${(f.prob * 100).toFixed(1)}%`} tone={f.class === predicted ? 'success' : 'default'} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
