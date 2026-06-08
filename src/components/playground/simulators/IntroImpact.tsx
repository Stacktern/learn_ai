import { useMemo, useState } from 'react';
import { motion } from 'motion/react';
import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid, Cell } from 'recharts';
import type { Lesson } from '../../../types';
import Slider from '../shared/Slider';
import StatBadge from '../shared/StatBadge';
import { Briefcase, Microscope, UserCog, Landmark, Cpu, HeartPulse } from 'lucide-react';

interface ImpactItem {
  id: string;
  name: string;
  baseWeight: number;
  publicGood: number;
  commercial: number;
  example: string;
  icon: typeof Briefcase;
  color: string;
}

const ITEMS: ImpactItem[] = [
  { id: 'business', name: 'Business strategies', baseWeight: 25, publicGood: 10, commercial: 35, example: 'Demand forecasting, inventory optimization, churn prediction.', icon: Briefcase, color: 'var(--chart-1)' },
  { id: 'science', name: 'Scientific research', baseWeight: 20, publicGood: 30, commercial: 10, example: 'Genomic sequencing, climate modeling, drug discovery.', icon: Microscope, color: 'var(--chart-2)' },
  { id: 'personalization', name: 'Personalization', baseWeight: 20, publicGood: 10, commercial: 30, example: 'Recommended products, individualized healthcare plans.', icon: UserCog, color: 'var(--chart-3)' },
  { id: 'policy', name: 'Public policy', baseWeight: 15, publicGood: 35, commercial: 5, example: 'Crime hot-spot prediction, transit route optimization.', icon: Landmark, color: 'var(--chart-4)' },
  { id: 'innovation', name: 'Innovation & AI', baseWeight: 20, publicGood: 15, commercial: 20, example: 'Autonomous vehicles, robotics, IoT applications.', icon: Cpu, color: 'var(--chart-5)' },
];

const PRESETS: Record<string, Record<string, number>> = {
  balanced: {},
  commercial: { business: 35, personalization: 30, innovation: 20, science: 10, policy: 5 },
  'public-good': { policy: 35, science: 30, innovation: 15, personalization: 10, business: 10 },
  healthcare: { science: 35, personalization: 30, policy: 20, business: 10, innovation: 5 },
};

export default function IntroImpact({ lesson: _lesson }: { lesson: Lesson }) {
  const [priorities, setPriorities] = useState<Record<string, number>>(
    Object.fromEntries(ITEMS.map((it) => [it.id, it.baseWeight])),
  );

  const data = useMemo(() => {
    return ITEMS.map((it) => ({
      ...it,
      weight: priorities[it.id] ?? it.baseWeight,
    })).sort((a, b) => b.weight - a.weight);
  }, [priorities]);

  const total = data.reduce((s, d) => s + d.weight, 0);

  const applyPreset = (key: keyof typeof PRESETS) => {
    const preset = PRESETS[key];
    if (Object.keys(preset).length === 0) {
      setPriorities(Object.fromEntries(ITEMS.map((it) => [it.id, it.baseWeight])));
    } else {
      setPriorities({ ...priorities, ...preset });
    }
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-5">
      <div className="lg:col-span-5 space-y-3">
        <div className="flex flex-wrap gap-1.5">
          {(Object.keys(PRESETS) as Array<keyof typeof PRESETS>).map((k) => (
            <button
              key={k}
              onClick={() => applyPreset(k)}
              className="px-2.5 py-1 rounded-lg text-[10px] font-bold uppercase tracking-wider border border-border-app bg-surface hover:bg-surface-2 text-text-secondary transition-colors"
            >
              {k.replace('-', ' ')}
            </button>
          ))}
        </div>
        <div className="space-y-3 rounded-2xl border border-border-app bg-surface p-4">
          {ITEMS.map((it) => (
            <div key={it.id} className="space-y-1">
              <Slider
                value={priorities[it.id] ?? it.baseWeight}
                onChange={(v) => setPriorities({ ...priorities, [it.id]: v })}
                min={0}
                max={50}
                step={1}
                label={it.name}
                accentColor={it.color}
              />
            </div>
          ))}
        </div>
        <div className="grid grid-cols-2 gap-2">
          <StatBadge label="Top impact" value={data[0]?.name ?? 'â€”'} tone="success" />
          <StatBadge label="Total weight" value={total} />
        </div>
      </div>

      <div className="lg:col-span-7 rounded-2xl p-4 space-y-3 min-h-[360px] flex flex-col">
        <div className="text-[10px] font-mono uppercase tracking-widest text-text-muted">Priority mix across the five impact areas</div>
        <div className="flex-1">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={data} layout="vertical" margin={{ top: 5, right: 20, left: 20, bottom: 0 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="var(--border-app)" />
              <XAxis type="number" fontSize={10} stroke="var(--text-muted)" />
              <YAxis type="category" dataKey="name" fontSize={10} width={120} stroke="var(--text-muted)" />
              <Tooltip
                cursor={false}
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
                itemStyle={{ color: 'var(--text-primary)' }}
                labelStyle={{ color: 'var(--text-secondary)', fontWeight: 600, marginBottom: 4 }}
                wrapperStyle={{ outline: 'none' }}
              />
              <Bar dataKey="weight" radius={[0, 8, 8, 0]} animationDuration={500}>
                {data.map((d) => (
                  <Cell key={d.id} fill={d.color} />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>
        <motion.div
          key={data[0]?.id}
          initial={{ opacity: 0, y: 4 }}
          animate={{ opacity: 1, y: 0 }}
          className="rounded-xl border border-border-app bg-surface-2/60 p-3 flex items-start gap-2"
        >
          <HeartPulse size={14} className="mt-0.5 text-accent shrink-0" />
          <p className="text-xs text-text-secondary leading-relaxed">
            <strong className="text-text-primary">{data[0]?.name}</strong> â€” {data[0]?.example}
          </p>
        </motion.div>
      </div>
    </div>
  );
}
