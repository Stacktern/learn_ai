import { Layers, Play, Terminal } from 'lucide-react';
import type { Lesson } from '../../types';
import IntroImpact from './simulators/IntroImpact';
import HistoryTimeline from './simulators/HistoryTimeline';
import Industries from './simulators/Industries';
import Comparison from './simulators/Comparison';
import Lifecycle from './simulators/Lifecycle';
import DataCollection from './simulators/DataCollection';
import MissingValues from './simulators/MissingValues';
import Scaling from './simulators/Scaling';
import Visualization from './simulators/Visualization';
import ModelEval from './simulators/ModelEval';

interface PlaygroundSectionProps {
  lesson: Lesson;
}

export default function PlaygroundSection({ lesson }: PlaygroundSectionProps) {
  const { playground } = lesson;
  return (
    <div className="rounded-2xl border border-border-app bg-gradient-to-br from-[var(--bg-card-grad-from)] to-[var(--bg-card-grad-to)] overflow-hidden">
      <div className="px-5 sm:px-6 py-4 border-b border-border-app bg-gradient-to-r from-pink-500/10 via-surface to-chart-2/10 flex items-center justify-between gap-3">
        <div className="flex items-center gap-2.5 min-w-0">
          <span className="h-9 w-9 rounded-xl bg-gradient-to-br from-pink to-chart-2 text-white flex items-center justify-center shrink-0 shadow-[var(--shadow-sm)]">
            <Layers size={16} />
          </span>
          <div className="min-w-0">
            <div className="text-[10px] font-bold uppercase tracking-widest text-pink">Interactive simulator</div>
            <h3 className="text-base font-bold text-text-primary truncate">{playground.title}</h3>
          </div>
        </div>
        <div className="hidden sm:flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-success-soft border border-success/30">
          <span className="h-2 w-2 rounded-full bg-success animate-pulse-dot" />
          <span className="text-[10px] font-mono uppercase tracking-widest text-success font-bold">Live</span>
        </div>
      </div>

      <div className="p-5 sm:p-6 space-y-4">
        <div className="rounded-xl border border-border-app bg-accent-soft/50 p-4 text-sm sm:text-base text-text-primary leading-relaxed">
          {playground.instructions}
        </div>

        {playground.type === 'intro-impact' && <IntroImpact lesson={lesson} />}
        {playground.type === 'history-timeline' && <HistoryTimeline lesson={lesson} />}
        {playground.type === 'industries' && <Industries lesson={lesson} />}
        {playground.type === 'comparison' && <Comparison lesson={lesson} />}
        {playground.type === 'lifecycle' && <Lifecycle lesson={lesson} />}
        {playground.type === 'data-collection' && <DataCollection lesson={lesson} />}
        {playground.type === 'missing-values' && <MissingValues lesson={lesson} />}
        {playground.type === 'scaling' && <Scaling lesson={lesson} />}
        {playground.type === 'visualization' && <Visualization lesson={lesson} />}
        {playground.type === 'model-eval' && <ModelEval lesson={lesson} />}

        <div className="flex items-start gap-2.5 rounded-xl border-2 border-dashed border-success/40 bg-success-soft/40 p-4 text-sm text-text-primary">
          <Terminal size={16} className="mt-0.5 shrink-0 text-success" />
          <div>
            <strong className="block mb-1 text-success text-[11px] font-bold uppercase tracking-widest">Expected outcome</strong>
            <span className="text-text-secondary leading-relaxed">{playground.expectedOutcome}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
