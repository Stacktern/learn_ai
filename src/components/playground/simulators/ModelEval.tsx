import { useMemo, useState } from 'react';
import { motion } from 'motion/react';
import { ResponsiveContainer, ScatterChart, Scatter, XAxis, YAxis, Tooltip, CartesianGrid, Line, LineChart, ReferenceLine, Cell } from 'recharts';
import type { Lesson } from '../../../types';
import Slider from '../shared/Slider';
import StatBadge from '../shared/StatBadge';
import { Sparkles, RefreshCw } from 'lucide-react';
import { clsx } from 'clsx';

interface Pt { x: number; y: number; label: 0 | 1 }

const POINTS: Pt[] = [
  { x: 0.3, y: 0.2, label: 0 },
  { x: 0.4, y: 0.5, label: 0 },
  { x: 0.5, y: 0.3, label: 0 },
  { x: 0.6, y: 0.7, label: 0 },
  { x: 0.7, y: 0.4, label: 0 },
  { x: 1.3, y: 1.4, label: 1 },
  { x: 1.4, y: 1.7, label: 1 },
  { x: 1.5, y: 1.2, label: 1 },
  { x: 1.6, y: 1.8, label: 1 },
  { x: 1.7, y: 1.5, label: 1 },
];

function buildDataset(trainRatio: number, complexity: number) {
  const n = POINTS.length;
  const cut = Math.max(2, Math.floor(n * trainRatio));
  const shuffled = [...POINTS].sort(() => 0.5 - Math.random());
  const train = shuffled.slice(0, cut);
  const test = shuffled.slice(cut);

  // higher complexity => more "noise" we can fit
  const noise = (complexity - 1) * 0.08;
  const predict = (x: number) => {
    const base = 0.4 + 1.0 * x;
    const wiggle = Math.sin(x * complexity * 2.2) * noise;
    return base + wiggle;
  };
  const evalSet = (set: Pt[]) => {
    let correct = 0;
    set.forEach((p) => {
      const pred = predict(p.x) > p.y ? 1 : 0;
      if (pred === p.label) correct++;
    });
    return set.length === 0 ? 0 : Math.round((correct / set.length) * 100);
  };
  return {
    trainAcc: evalSet(train),
    testAcc: evalSet(test),
    train,
    test,
    lineData: Array.from({ length: 20 }, (_, i) => {
      const x = i / 19 * 2;
      return { x: Number(x.toFixed(2)), y: Number(predict(x).toFixed(2)) };
    }),
  };
}

export default function ModelEval({ lesson: _lesson }: { lesson: Lesson }) {
  const [ratio, setRatio] = useState<number>(70);
  const [complexity, setComplexity] = useState<number>(2);
  const [seed, setSeed] = useState<number>(0);

  const result = useMemo(() => buildDataset(ratio, complexity), [ratio, complexity, seed]);
  const gap = result.trainAcc - result.testAcc;
  const verdict =
    gap > 25 ? { text: 'Overfitting! Train and test disagree a lot.', tone: 'danger' as const } :
    result.testAcc < 60 ? { text: 'Underfitting â€” model is too simple.', tone: 'warning' as const } :
    { text: 'Healthy fit â€” both accuracies are high and close.', tone: 'success' as const };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-5">
      <div className="lg:col-span-5 space-y-3">
        <div className="rounded-2xl border border-border-app bg-surface p-4 space-y-4">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold uppercase tracking-widest text-text-secondary">Hyperparameters</span>
            <button
              onClick={() => setSeed((s) => s + 1)}
              className="p-1.5 rounded-lg hover:bg-surface-2 text-text-muted hover:text-text-primary transition-colors"
              title="Re-shuffle train/test split"
            >
              <RefreshCw size={14} />
            </button>
          </div>
          <Slider
            value={ratio}
            onChange={setRatio}
            min={30}
            max={90}
            step={5}
            label="Train ratio (%)"
            formatValue={(v) => `${v}%`}
          />
          <Slider
            value={complexity}
            onChange={setComplexity}
            min={1}
            max={6}
            step={1}
            label="Model complexity"
            formatValue={(v) => `${v}Ã—`}
          />
        </div>

        <div className="grid grid-cols-3 gap-2">
          <StatBadge label="Train acc" value={`${result.trainAcc}%`} tone="default" />
          <StatBadge label="Test acc" value={`${result.testAcc}%`} tone={result.testAcc >= 80 ? 'success' : result.testAcc >= 60 ? 'warning' : 'danger'} />
          <StatBadge label="Gap" value={`${gap}%`} tone={gap > 25 ? 'danger' : 'default'} hint="train âˆ’ test" />
        </div>

        <motion.div
          key={verdict.text}
          initial={{ opacity: 0, y: 4 }}
          animate={{ opacity: 1, y: 0 }}
          className={clsx(
            'rounded-xl border p-3 text-xs',
            verdict.tone === 'success' && 'border-emerald-500/40 bg-emerald-500/10 text-emerald-700 dark:text-emerald-300',
            verdict.tone === 'warning' && 'border-amber-500/40 bg-amber-500/10 text-amber-700 dark:text-amber-300',
            verdict.tone === 'danger' && 'border-red-500/40 bg-red-500/10 text-red-700 dark:text-red-300',
          )}
        >
          <Sparkles size={12} className="inline mr-1" />
          {verdict.text}
        </motion.div>
      </div>

      <div className="lg:col-span-7 space-y-3">
        <div className="rounded-2xl p-4 h-[260px]">
          <div className="text-[10px] font-mono uppercase tracking-widest text-text-muted mb-2">Model fit</div>
          <ResponsiveContainer width="100%" height="85%">
            <LineChart data={result.lineData} margin={{ top: 8, right: 8, left: -20, bottom: 0 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="var(--border-app)" />
              <XAxis type="number" dataKey="x" fontSize={10} stroke="var(--text-muted)" domain={[0, 2]} />
              <YAxis fontSize={10} stroke="var(--text-muted)" domain={[0, 2.5]} />
              <Tooltip contentStyle={{ background: 'var(--surface)', border: '1px solid var(--border-app)', borderRadius: 12, fontSize: 12, color: 'var(--text-primary)' }} />
              <ReferenceLine y={1} stroke="var(--text-muted)" strokeDasharray="3 3" />
              <Line type="monotone" dataKey="y" stroke="var(--chart-1)" strokeWidth={2.5} dot={false} animationDuration={400} />
            </LineChart>
          </ResponsiveContainer>
        </div>

        <div className="rounded-2xl p-4 h-[180px]">
          <div className="text-[10px] font-mono uppercase tracking-widest text-text-muted mb-2">Train (filled) + Test (ring)</div>
          <ResponsiveContainer width="100%" height="80%">
            <ScatterChart margin={{ top: 8, right: 8, left: -20, bottom: 0 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="var(--border-app)" />
              <XAxis type="number" dataKey="x" fontSize={10} stroke="var(--text-muted)" domain={[0, 2]} />
              <YAxis type="number" dataKey="y" fontSize={10} stroke="var(--text-muted)" domain={[0, 2]} />
              <Tooltip contentStyle={{ background: 'var(--surface)', border: '1px solid var(--border-app)', borderRadius: 12, fontSize: 12, color: 'var(--text-primary)' }} />
              <Scatter name="train" data={result.train.map((p) => ({ ...p }))} fill="var(--chart-1)" />
              <Scatter name="test" data={result.test.map((p) => ({ ...p }))} fill="var(--chart-2)" shape="circle">
                {result.test.map((_, i) => <Cell key={i} fill="var(--chart-2)" />)}
              </Scatter>
            </ScatterChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}
