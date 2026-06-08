import { useMemo, useState } from 'react';
import { motion } from 'motion/react';
import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid, LineChart, Line } from 'recharts';
import type { Lesson } from '../../../types';
import { Check, X, Eye } from 'lucide-react';
import { clsx } from 'clsx';

const DATA = Array.from({ length: 12 }, (_, i) => ({
  month: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'][i],
  revenue: Math.round(50 + 30 * Math.sin(i / 2) + i * 2 + (i === 6 ? 35 : 0)),
  category: ['A', 'B', 'A', 'C', 'B', 'A', 'C', 'B', 'A', 'C', 'B', 'A'][i],
}));

interface Question {
  id: string;
  q: string;
  answer: 'histogram' | 'scatter' | 'line' | 'bar' | 'box';
  options: Array<{ id: 'histogram' | 'scatter' | 'line' | 'bar' | 'box'; label: string }>;
}

const QUESTIONS: Question[] = [
  {
    id: 'q1',
    q: 'How does revenue change month to month?',
    answer: 'line',
    options: [
      { id: 'histogram', label: 'Histogram' },
      { id: 'scatter', label: 'Scatter' },
      { id: 'line', label: 'Line chart' },
      { id: 'bar', label: 'Bar chart' },
    ],
  },
  {
    id: 'q2',
    q: 'Which category generates the most revenue overall?',
    answer: 'bar',
    options: [
      { id: 'histogram', label: 'Histogram' },
      { id: 'bar', label: 'Bar chart' },
      { id: 'line', label: 'Line chart' },
      { id: 'scatter', label: 'Scatter' },
    ],
  },
  {
    id: 'q3',
    q: 'Is the revenue distribution skewed?',
    answer: 'histogram',
    options: [
      { id: 'line', label: 'Line chart' },
      { id: 'histogram', label: 'Histogram' },
      { id: 'bar', label: 'Bar chart' },
      { id: 'scatter', label: 'Scatter' },
    ],
  },
];

type ChartType = 'histogram' | 'line' | 'bar';

export default function Visualization({ lesson: _lesson }: { lesson: Lesson }) {
  const [activeChart, setActiveChart] = useState<ChartType>('line');
  const [answers, setAnswers] = useState<Record<string, string>>({});

  const histogramData = useMemo(() => {
    const bins: Record<string, number> = {};
    DATA.forEach((d) => {
      const bin = Math.floor(d.revenue / 20) * 20;
      bins[bin] = (bins[bin] ?? 0) + 1;
    });
    return Object.entries(bins)
      .sort((a, b) => Number(a[0]) - Number(b[0]))
      .map(([k, v]) => ({ range: `${k}-${Number(k) + 19}`, count: v }));
  }, []);

  const barData = useMemo(() => {
    const cats: Record<string, number> = {};
    DATA.forEach((d) => {
      cats[d.category] = (cats[d.category] ?? 0) + d.revenue;
    });
    return Object.entries(cats).map(([k, v]) => ({ category: k, total: v }));
  }, []);

  const correctCount = QUESTIONS.filter((q) => answers[q.id] === q.answer).length;

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-5">
      <div className="lg:col-span-5 space-y-2">
        <div className="text-[10px] font-mono uppercase tracking-widest text-text-muted">Chart type</div>
        <div className="grid grid-cols-3 gap-1.5">
          {(['line', 'bar', 'histogram'] as ChartType[]).map((c) => (
            <button
              key={c}
              onClick={() => setActiveChart(c)}
              className={clsx(
                'rounded-xl border px-3 py-2.5 text-xs font-semibold capitalize transition-colors',
                activeChart === c
                  ? 'border-accent bg-accent-soft text-accent'
                  : 'border-border-app bg-surface text-text-secondary hover:bg-surface-2',
              )}
            >
              {c}
            </button>
          ))}
        </div>

        <div className="mt-3 space-y-2">
          <div className="text-[10px] font-mono uppercase tracking-widest text-text-muted">Match the question to the chart</div>
          {QUESTIONS.map((q) => {
            const user = answers[q.id];
            const isCorrect = user === q.answer;
            return (
              <div key={q.id} className="rounded-xl border border-border-app bg-surface p-3 space-y-2">
                <p className="text-xs text-text-primary leading-snug">{q.q}</p>
                <div className="grid grid-cols-2 gap-1">
                  {q.options.map((o) => (
                    <button
                      key={o.id}
                      onClick={() => setAnswers({ ...answers, [q.id]: o.id })}
                      className={clsx(
                        'rounded-lg border px-2 py-1.5 text-[11px] font-semibold transition-colors',
                        user === o.id
                          ? isCorrect
                            ? 'border-emerald-500/40 bg-emerald-500/10 text-emerald-700 dark:text-emerald-300'
                            : 'border-amber-500/40 bg-amber-500/10 text-amber-700 dark:text-amber-300'
                          : 'border-border-app bg-surface text-text-secondary hover:bg-surface-2',
                      )}
                    >
                      {o.label}
                    </button>
                  ))}
                </div>
                {user && (
                  <div className={clsx('text-[10px] flex items-center gap-1', isCorrect ? 'text-emerald-600 dark:text-emerald-400' : 'text-amber-600 dark:text-amber-400')}>
                    {isCorrect ? <Check size={11} /> : <X size={11} />}
                    {isCorrect ? 'Good match' : 'Try again â€” pick the chart that best answers the question.'}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {Object.keys(answers).length === QUESTIONS.length && (
          <motion.div
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            className="rounded-xl border border-accent bg-accent-soft p-3 text-xs text-accent"
          >
            <Eye size={12} className="inline mr-1" />
            You got {correctCount} of {QUESTIONS.length} correct.
          </motion.div>
        )}
      </div>

      <div className="lg:col-span-7 rounded-2xl p-4 min-h-[380px] flex flex-col">
        <div className="text-[10px] font-mono uppercase tracking-widest text-text-muted mb-2 capitalize">
          {activeChart} chart
        </div>
        <div className="flex-1">
          <ResponsiveContainer width="100%" height="100%">
            {activeChart === 'line' ? (
              <LineChart data={DATA} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="var(--border-app)" />
                <XAxis dataKey="month" fontSize={10} stroke="var(--text-muted)" />
                <YAxis fontSize={10} stroke="var(--text-muted)" />
                <Tooltip contentStyle={{ background: 'var(--surface)', border: '1px solid var(--border-app)', borderRadius: 12, fontSize: 12, color: 'var(--text-primary)' }} />
                <Line type="monotone" dataKey="revenue" stroke="var(--chart-1)" strokeWidth={2.5} dot={{ r: 4 }} animationDuration={400} />
              </LineChart>
            ) : activeChart === 'bar' ? (
              <BarChart data={barData} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="var(--border-app)" />
                <XAxis dataKey="category" fontSize={10} stroke="var(--text-muted)" />
                <YAxis fontSize={10} stroke="var(--text-muted)" />
                <Tooltip contentStyle={{ background: 'var(--surface)', border: '1px solid var(--border-app)', borderRadius: 12, fontSize: 12, color: 'var(--text-primary)' }} />
                <Bar dataKey="total" fill="var(--chart-2)" radius={[6, 6, 0, 0]} animationDuration={400} />
              </BarChart>
            ) : (
              <BarChart data={histogramData} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="var(--border-app)" />
                <XAxis dataKey="range" fontSize={10} stroke="var(--text-muted)" />
                <YAxis fontSize={10} stroke="var(--text-muted)" />
                <Tooltip contentStyle={{ background: 'var(--surface)', border: '1px solid var(--border-app)', borderRadius: 12, fontSize: 12, color: 'var(--text-primary)' }} />
                <Bar dataKey="count" fill="var(--chart-3)" radius={[6, 6, 0, 0]} animationDuration={400} />
              </BarChart>
            )}
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}
