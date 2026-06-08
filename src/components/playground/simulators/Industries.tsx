import { useState } from 'react';
import { motion } from 'motion/react';
import { ResponsiveContainer, RadarChart, Radar, PolarAngleAxis, PolarGrid, Tooltip } from 'recharts';
import type { Lesson } from '../../../types';
import { HeartPulse, Landmark, ShoppingCart, Truck, Factory, Radio, Megaphone, Banknote, Brain } from 'lucide-react';
import { clsx } from 'clsx';

interface Industry {
  id: string;
  name: string;
  icon: typeof HeartPulse;
  techniques: Record<string, number>;
  example: string;
  color: string;
}

const TECHNIQUES = ['Classification', 'Regression', 'Clustering', 'Anomaly detection', 'Recommendation', 'NLP'] as const;

const INDUSTRIES: Industry[] = [
  { id: 'healthcare', name: 'Healthcare', icon: HeartPulse, techniques: { Classification: 9, Regression: 7, Clustering: 4, 'Anomaly detection': 6, Recommendation: 5, NLP: 7 }, example: 'Predicting disease outbreaks, tailoring treatments from genomic data.', color: 'var(--chart-4)' },
  { id: 'finance', name: 'Finance', icon: Banknote, techniques: { Classification: 8, Regression: 9, Clustering: 5, 'Anomaly detection': 10, Recommendation: 4, NLP: 6 }, example: 'Loan default risk, fraud detection, algorithmic trading.', color: 'var(--chart-5)' },
  { id: 'marketing', name: 'Marketing & Sales', icon: Megaphone, techniques: { Classification: 7, Regression: 8, Clustering: 8, 'Anomaly detection': 4, Recommendation: 9, NLP: 9 }, example: 'Customer segmentation, sentiment analysis on social media.', color: 'var(--chart-1)' },
  { id: 'ecom', name: 'E-commerce', icon: ShoppingCart, techniques: { Classification: 6, Regression: 5, Clustering: 7, 'Anomaly detection': 5, Recommendation: 10, NLP: 7 }, example: 'Recommender systems, dynamic pricing, chatbots.', color: 'var(--chart-2)' },
  { id: 'supply', name: 'Supply chain', icon: Truck, techniques: { Classification: 5, Regression: 9, Clustering: 5, 'Anomaly detection': 7, Recommendation: 6, NLP: 3 }, example: 'Demand forecasting, route optimization.', color: 'var(--chart-3)' },
  { id: 'public', name: 'Public sector', icon: Landmark, techniques: { Classification: 7, Regression: 8, Clustering: 7, 'Anomaly detection': 6, Recommendation: 4, NLP: 6 }, example: 'Predictive policing, public health monitoring.', color: 'var(--chart-4)' },
  { id: 'mfg', name: 'Manufacturing', icon: Factory, techniques: { Classification: 8, Regression: 9, Clustering: 4, 'Anomaly detection': 9, Recommendation: 4, NLP: 3 }, example: 'Predictive maintenance, real-time quality control.', color: 'var(--chart-5)' },
  { id: 'telecom', name: 'Telecom', icon: Radio, techniques: { Classification: 9, Regression: 6, Clustering: 7, 'Anomaly detection': 8, Recommendation: 7, NLP: 5 }, example: 'Churn prediction, network optimization.', color: 'var(--chart-6)' },
];

export default function Industries({ lesson: _lesson }: { lesson: Lesson }) {
  const [active, setActive] = useState<string>('healthcare');
  const industry = INDUSTRIES.find((i) => i.id === active) ?? INDUSTRIES[0];
  const radarData = TECHNIQUES.map((t) => ({ technique: t, value: industry.techniques[t] ?? 0 }));

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-5">
      <div className="lg:col-span-5 grid grid-cols-2 gap-2">
        {INDUSTRIES.map((ind) => {
          const Icon = ind.icon;
          return (
            <button
              key={ind.id}
              onClick={() => setActive(ind.id)}
              className={clsx(
                'rounded-xl border p-3 text-left flex items-start gap-2.5 transition-all',
                active === ind.id
                  ? 'border-accent bg-accent-soft text-accent shadow-[var(--shadow-sm)]'
                  : 'border-border-app bg-surface text-text-secondary hover:bg-surface-2',
              )}
            >
              <span
                className="h-8 w-8 shrink-0 rounded-lg flex items-center justify-center"
                style={{ background: `${ind.color}22`, color: ind.color }}
              >
                <Icon size={14} />
              </span>
              <div className="min-w-0">
                <div className="text-xs font-semibold leading-tight">{ind.name}</div>
                <div className="text-[10px] text-text-muted mt-0.5 line-clamp-2 leading-snug">
                  {ind.example}
                </div>
              </div>
            </button>
          );
        })}
      </div>

      <div className="lg:col-span-7 rounded-2xl p-4 space-y-3 min-h-[380px] flex flex-col">
        <div className="flex items-center gap-2">
          <Brain size={14} className="text-accent" />
          <div className="text-[10px] font-mono uppercase tracking-widest text-text-muted">
            Technique mix â€” {industry.name}
          </div>
        </div>
        <div className="flex-1">
          <ResponsiveContainer width="100%" height="100%">
            <RadarChart data={radarData} margin={{ top: 10, right: 20, left: 20, bottom: 10 }}>
              <PolarGrid stroke="var(--border-app)" />
              <PolarAngleAxis dataKey="technique" tick={{ fill: 'var(--text-secondary)', fontSize: 10 }} />
              <Radar
                key={industry.id}
                name={industry.name}
                dataKey="value"
                stroke={industry.color}
                fill={industry.color}
                fillOpacity={0.35}
                isAnimationActive
                animationDuration={500}
              />
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
            </RadarChart>
          </ResponsiveContainer>
        </div>
        <motion.p
          key={industry.id}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-xs text-text-secondary leading-relaxed border-t border-border-app pt-3"
        >
          <strong className="text-text-primary">Example:</strong> {industry.example}
        </motion.p>
      </div>
    </div>
  );
}
