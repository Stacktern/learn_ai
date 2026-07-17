import { useMemo, useState } from 'react';
import { ResponsiveContainer, RadarChart, Radar, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Tooltip } from 'recharts';
import type { Lesson } from '../../../types';
import { clsx } from 'clsx';

const LIBRARIES = [
  { id: 'numpy', name: 'NumPy', icon: '🧮', desc: 'High-performance arrays and matrices; foundation for numerical computing.', scores: { Speed: 9, Ease: 7, Stats: 6, ML: 8, Viz: 0, BigData: 7 } },
  { id: 'pandas', name: 'Pandas', icon: '🐼', desc: 'Tabular data structures (DataFrame, Series) for analysis and manipulation.', scores: { Speed: 7, Ease: 9, Stats: 8, ML: 7, Viz: 3, BigData: 6 } },
  { id: 'matplotlib', name: 'Matplotlib', icon: '📊', desc: 'Low-level static, animated and interactive plots.', scores: { Speed: 6, Ease: 5, Stats: 6, ML: 3, Viz: 9, BigData: 4 } },
  { id: 'seaborn', name: 'Seaborn', icon: '🎨', desc: 'High-level statistical graphics built on Matplotlib.', scores: { Speed: 6, Ease: 9, Stats: 9, ML: 3, Viz: 9, BigData: 3 } },
  { id: 'scikit', name: 'Scikit-learn', icon: '🤖', desc: 'Comprehensive ML library for classical algorithms.', scores: { Speed: 6, Ease: 9, Stats: 7, ML: 10, Viz: 4, BigData: 5 } },
  { id: 'tf', name: 'TensorFlow / PyTorch', icon: '🧠', desc: 'Deep-learning frameworks for large neural networks.', scores: { Speed: 9, Ease: 4, Stats: 4, ML: 10, Viz: 5, BigData: 10 } },
];

export default function LibPurpose({ lesson: _lesson }: { lesson: Lesson }) {
  const [highlight, setHighlight] = useState<string | null>(null);

  const traits = ['Speed', 'Ease', 'Stats', 'ML', 'Viz', 'BigData'] as const;
  const radarData = useMemo(() => traits.map((t) => {
    const entry: Record<string, number | string> = { trait: t };
    LIBRARIES.forEach((lib) => { entry[lib.name] = lib.scores[t]; });
    return entry;
  }), []);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-5">
      <div className="lg:col-span-5 space-y-3">
        <div className="grid grid-cols-2 gap-2">
          {LIBRARIES.map((lib) => (
            <button
              key={lib.id}
              onClick={() => setHighlight(highlight === lib.id ? null : lib.id)}
              className={clsx(
                'rounded-xl border p-3 text-left transition-all',
                highlight === lib.id
                  ? 'border-accent bg-accent-soft shadow-[var(--shadow-md)]'
                  : 'border-border-app bg-surface hover:border-accent/40 hover:bg-accent-soft/30',
              )}
            >
              <div className="text-2xl mb-1">{lib.icon}</div>
              <div className="font-bold text-sm text-text-primary">{lib.name}</div>
              <div className="text-[10px] text-text-secondary leading-snug mt-1">{lib.desc}</div>
            </button>
          ))}
        </div>
        <div className="rounded-xl border border-accent/40 bg-accent-soft/40 p-3 text-xs text-text-primary">
          The Python data-science ecosystem is built so these libraries work together: <strong>NumPy</strong> provides the array foundation, <strong>Pandas</strong> adds labelled tables, <strong>Matplotlib</strong> and <strong>Seaborn</strong> visualise them.
        </div>
      </div>

      <div className="lg:col-span-7 rounded-2xl p-4 min-h-[380px] flex flex-col">
        <div className="text-[10px] font-mono uppercase tracking-widest text-text-muted mb-2">
          Capability radar {highlight ? `· highlighted: ${highlight}` : ''}
        </div>
        <div className="flex-1">
          <ResponsiveContainer width="100%" height="100%">
            <RadarChart data={radarData} outerRadius="75%">
              <PolarGrid stroke="var(--border-app)" />
              <PolarAngleAxis dataKey="trait" tick={{ fontSize: 11, fill: 'var(--text-muted)' }} />
              <PolarRadiusAxis domain={[0, 10]} tick={{ fontSize: 9, fill: 'var(--text-muted)' }} />
              <Tooltip contentStyle={{ background: 'var(--surface)', border: '1px solid var(--border-app)', borderRadius: 12, fontSize: 12, color: 'var(--text-primary)' }} />
              {LIBRARIES.map((lib) => (
                <Radar
                  key={lib.id}
                  name={lib.name}
                  dataKey={lib.name}
                  stroke={`var(--chart-${(LIBRARIES.indexOf(lib) % 5) + 1})`}
                  fill={`var(--chart-${(LIBRARIES.indexOf(lib) % 5) + 1})`}
                  fillOpacity={highlight === lib.id ? 0.5 : highlight === null ? 0.12 : 0.04}
                  strokeWidth={highlight === lib.id ? 3 : 1.5}
                />
              ))}
            </RadarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}
