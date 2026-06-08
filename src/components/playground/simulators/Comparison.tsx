import { useState, useMemo } from 'react';
import { motion } from 'motion/react';
import type { Lesson } from '../../../types';
import Slider from '../shared/Slider';
import { Layers, Sparkles } from 'lucide-react';
import { clsx } from 'clsx';

interface Axis {
  id: string;
  label: string;
  traditional: string;
  dataScience: string;
  icon: typeof Layers;
}

const AXES: Axis[] = [
  { id: 'scope', label: 'Scope', traditional: 'Smaller, structured datasets; specific questions.', dataScience: 'Structured + unstructured (text, images, video); broad questions.', icon: Layers },
  { id: 'tools', label: 'Tools', traditional: 'Excel, SAS, SPSS.', dataScience: 'Python, R, Hadoop, Spark.', icon: Sparkles },
  { id: 'mindset', label: 'Mindset', traditional: 'Descriptive, reactive â€” â€œwhat happened?â€', dataScience: 'Predictive, prescriptive â€” â€œwhat will happen?â€', icon: Sparkles },
  { id: 'power', label: 'Predictive power', traditional: 'Correlations, regressions, hypothesis tests.', dataScience: 'Machine learning, deep learning, AI.', icon: Sparkles },
];

export default function Comparison({ lesson: _lesson }: { lesson: Lesson }) {
  const [pos, setPos] = useState<number>(50);

  const samples = useMemo(() => {
    return AXES.map((axis) => ({
      ...axis,
      blended: axis.traditional.slice(0, Math.round((pos / 100) * axis.traditional.length)) +
        (pos < 100 ? '...' : ''),
    }));
  }, [pos]);

  return (
    <div className="space-y-5">
      <div className="rounded-2xl border border-border-app bg-surface p-5 space-y-3">
        <div className="flex items-center justify-between text-xs font-medium">
          <span className="text-text-secondary">Traditional analysis</span>
          <span className="font-mono text-text-muted">{pos}%</span>
          <span className="text-accent font-semibold">Data science</span>
        </div>
        <Slider
          value={pos}
          onChange={setPos}
          min={0}
          max={100}
          step={1}
          label="Mix slider"
          showValue={false}
        />
        <div className="relative h-2 rounded-full bg-surface-2 overflow-hidden">
          <motion.div
            className="absolute left-0 top-0 h-full bg-gradient-to-r from-chart-1 to-chart-2"
            animate={{ width: `${pos}%` }}
            transition={{ type: 'spring', stiffness: 200, damping: 24 }}
          />
        </div>
        <p className="text-[10px] text-text-muted text-center">
          Slide toward <span className="text-accent font-semibold">data science</span> to see how the field evolves.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
        {AXES.map((axis) => {
          const Icon = axis.icon;
          const tradWeight = (100 - pos) / 100;
          const dsWeight = pos / 100;
          return (
            <div
              key={axis.id}
              className="rounded-2xl border border-border-app bg-surface p-4 space-y-3"
            >
              <div className="flex items-center gap-2">
                <span className="h-7 w-7 rounded-lg bg-accent-soft text-accent flex items-center justify-center">
                  <Icon size={13} />
                </span>
                <h4 className="text-xs font-bold uppercase tracking-widest text-text-secondary">{axis.label}</h4>
              </div>

              <div className="space-y-2">
                <div className={clsx('p-3 rounded-xl border', tradWeight > 0.4 ? 'border-blue-500/40 bg-blue-500/5' : 'border-border-app bg-surface-2/40')}>
                  <div className="text-[10px] font-mono uppercase tracking-widest text-text-muted mb-1">Traditional</div>
                  <p className="text-xs text-text-secondary leading-relaxed">{axis.traditional}</p>
                </div>
                <div className={clsx('p-3 rounded-xl border', dsWeight > 0.4 ? 'border-accent bg-accent-soft' : 'border-border-app bg-surface-2/40')}>
                  <div className="text-[10px] font-mono uppercase tracking-widest text-text-muted mb-1">Data science</div>
                  <p className="text-xs text-text-secondary leading-relaxed">{axis.dataScience}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
