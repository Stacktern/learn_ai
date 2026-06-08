import { useMemo, useState } from 'react';
import { motion } from 'motion/react';
import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid, Cell } from 'recharts';
import type { Lesson } from '../../../types';
import { Braces, Sigma, FunctionSquare, Layers, Replace, Type } from 'lucide-react';
import { clsx } from 'clsx';

type Strategy = 'listwise' | 'mean' | 'median' | 'knn' | 'indicator';

interface Cell {
  id: string;
  v: number | null;
  imputed: number | null;
}

const RAW: Cell[] = [
  { id: 'a', v: 12, imputed: 12 },
  { id: 'b', v: null, imputed: null },
  { id: 'c', v: 18, imputed: 18 },
  { id: 'd', v: 22, imputed: 22 },
  { id: 'e', v: 16, imputed: 16 },
  { id: 'f', v: null, imputed: null },
  { id: 'g', v: 24, imputed: 24 },
  { id: 'h', v: 20, imputed: 20 },
  { id: 'i', v: null, imputed: null },
  { id: 'j', v: 14, imputed: 14 },
];

const STRATEGIES: { id: Strategy; label: string; desc: string; icon: typeof Sigma }[] = [
  { id: 'listwise', label: 'Listwise deletion', desc: 'Drop any row with a missing value.', icon: Layers },
  { id: 'mean', label: 'Mean imputation', desc: 'Replace missing with the column mean.', icon: Sigma },
  { id: 'median', label: 'Median imputation', desc: 'Replace missing with the column median.', icon: FunctionSquare },
  { id: 'knn', label: 'k-NN imputation', desc: 'Estimate missing from nearest neighbors.', icon: Braces },
  { id: 'indicator', label: 'Indicator + median', desc: 'Median fill + a binary â€œwas-missingâ€ flag.', icon: Replace },
];

export default function MissingValues({ lesson: _lesson }: { lesson: Lesson }) {
  const [strategy, setStrategy] = useState<Strategy>('mean');

  const filled = useMemo(() => {
    const present = RAW.map((c) => c.v).filter((v): v is number => v !== null);
    const mean = present.reduce((a, b) => a + b, 0) / present.length;
    const sorted = [...present].sort((a, b) => a - b);
    const median = sorted.length % 2 === 0
      ? (sorted[sorted.length / 2 - 1] + sorted[sorted.length / 2]) / 2
      : sorted[Math.floor(sorted.length / 2)];

    return RAW.map((c) => {
      let imputed: number | null = c.v;
      if (strategy === 'listwise') {
        imputed = c.v;
      } else if (strategy === 'mean' && c.v === null) {
        imputed = mean;
      } else if (strategy === 'median' && c.v === null) {
        imputed = median;
      } else if (strategy === 'knn' && c.v === null) {
        const above = present.find((v) => v > mean) ?? mean;
        const below = present.find((v) => v < mean) ?? mean;
        imputed = Number(((above + below) / 2).toFixed(1));
      } else if (strategy === 'indicator' && c.v === null) {
        imputed = median;
      }
      return { ...c, imputed };
    });
  }, [strategy]);

  const stats = useMemo(() => {
    const values = filled
      .map((c) => c.imputed)
      .filter((v): v is number => v !== null);
    const mean = values.reduce((a, b) => a + b, 0) / values.length;
    const variance = values.reduce((a, b) => a + (b - mean) ** 2, 0) / values.length;
    return { mean: Number(mean.toFixed(2)), variance: Number(variance.toFixed(2)) };
  }, [filled]);

  const chartData = useMemo(() => {
    return filled.map((c) => ({
      id: c.id.toUpperCase(),
      value: c.imputed,
      wasMissing: c.v === null,
    }));
  }, [filled]);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-5">
      <div className="lg:col-span-5 space-y-2">
        <div className="text-[10px] font-mono uppercase tracking-widest text-text-muted">Imputation strategy</div>
        {STRATEGIES.map((s) => {
          const Icon = s.icon;
          const active = strategy === s.id;
          return (
            <button
              key={s.id}
              onClick={() => setStrategy(s.id)}
              className={clsx(
                'w-full text-left rounded-xl border p-3 flex items-start gap-2.5 transition-all',
                active
                  ? 'border-accent bg-accent-soft'
                  : 'border-border-app bg-surface hover:bg-surface-2',
              )}
            >
              <span
                className={clsx(
                  'h-8 w-8 shrink-0 rounded-lg flex items-center justify-center',
                  active ? 'bg-accent text-white' : 'bg-surface-2 text-text-muted',
                )}
              >
                <Icon size={14} />
              </span>
              <div>
                <div className="text-xs font-semibold text-text-primary">{s.label}</div>
                <div className="text-[11px] text-text-secondary leading-snug">{s.desc}</div>
              </div>
            </button>
          );
        })}
      </div>

      <div className="lg:col-span-7 space-y-3">
        <div className="rounded-2xl border border-border-app bg-surface p-4">
          <div className="text-[10px] font-mono uppercase tracking-widest text-text-muted mb-2">Resulting table</div>
          <div className="grid grid-cols-5 gap-1.5">
            {chartData.map((c) => (
              <motion.div
                key={c.id}
                layout
                className={clsx(
                  'rounded-lg border p-2 text-center',
                  c.wasMissing
                    ? 'border-amber-500/40 bg-amber-500/10 text-amber-700 dark:text-amber-300'
                    : 'border-border-app bg-surface-2/40 text-text-primary',
                )}
              >
                <div className="text-[10px] font-mono text-text-muted">{c.id}</div>
                <div className="text-sm font-mono font-bold">{c.value ?? 'â€”'}</div>
                {strategy === 'indicator' && c.wasMissing && (
                  <div className="text-[8px] font-mono text-amber-600 dark:text-amber-400 flex items-center justify-center gap-0.5">
                    <Type size={8} />flag=1
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>

        <div className="rounded-2xl p-4 h-[180px]">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={chartData} margin={{ top: 8, right: 8, left: -20, bottom: 0 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="var(--border-app)" />
              <XAxis dataKey="id" fontSize={10} stroke="var(--text-muted)" />
              <YAxis fontSize={10} stroke="var(--text-muted)" />
              <Tooltip
                contentStyle={{
                  background: 'color-mix(in srgb, var(--bg-surface) 82%, transparent)',
                  backdropFilter: 'blur(8px)',
                  WebkitBackdropFilter: 'blur(8px)',
                  border: '1px solid var(--border-app)',
                  borderRadius: 12,
                  fontSize: 12,
                  color: 'var(--text-primary)',
                  boxShadow: 'var(--shadow-md)',
                  padding: '8px 12px',
                }}
                cursor={{ strokeDasharray: '3 3', stroke: 'var(--text-muted)' }}
                itemStyle={{ color: 'var(--text-primary)' }}
                labelStyle={{ color: 'var(--text-secondary)', fontWeight: 600, marginBottom: 4 }}
                wrapperStyle={{ outline: 'none' }}
              />
              <Bar dataKey="value" radius={[6, 6, 0, 0]}>
                {chartData.map((d, i) => (
                  <Cell key={i} fill={d.wasMissing ? 'var(--chart-5)' : 'var(--chart-1)'} />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>

        <div className="grid grid-cols-3 gap-2">
          <div className="rounded-xl border border-border-app bg-surface-2/60 px-3 py-2">
            <div className="text-[10px] font-mono uppercase tracking-widest text-text-muted">Mean</div>
            <div className="text-base font-mono font-bold text-text-primary">{stats.mean}</div>
          </div>
          <div className="rounded-xl border border-border-app bg-surface-2/60 px-3 py-2">
            <div className="text-[10px] font-mono uppercase tracking-widest text-text-muted">Variance</div>
            <div className={clsx('text-base font-mono font-bold', strategy === 'mean' || strategy === 'median' ? 'text-amber-600 dark:text-amber-400' : 'text-text-primary')}>
              {strategy === 'listwise' ? 'n/a' : stats.variance}
            </div>
          </div>
          <div className="rounded-xl border border-border-app bg-surface-2/60 px-3 py-2">
            <div className="text-[10px] font-mono uppercase tracking-widest text-text-muted">Rows kept</div>
            <div className="text-base font-mono font-bold text-text-primary">
              {strategy === 'listwise' ? 7 : 10}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
