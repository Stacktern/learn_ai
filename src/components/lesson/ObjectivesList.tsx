import { CheckCircle2, Target } from 'lucide-react';
import { Card } from '../ui/Card';

interface ObjectivesListProps {
  objectives: string[];
}

export default function ObjectivesList({ objectives }: ObjectivesListProps) {
  return (
    <Card className="overflow-hidden">
      <div className="px-5 sm:px-6 py-4 border-b border-border-app bg-gradient-to-r from-accent-soft/50 to-surface flex items-center gap-3">
        <div className="h-9 w-9 rounded-xl bg-gradient-to-br from-chart-1 to-chart-2 text-white flex items-center justify-center shadow-[var(--shadow-sm)]">
          <Target size={16} />
        </div>
        <div>
          <h3 className="text-[11px] font-bold uppercase tracking-widest text-text-muted">What you will learn</h3>
          <p className="text-base font-bold text-text-primary">Learning objectives</p>
        </div>
      </div>
      <div className="p-5 sm:p-6 space-y-3">
        <ul className="space-y-3">
          {objectives.map((obj, i) => (
            <li key={i} className="flex items-start gap-3 text-sm sm:text-base text-text-primary leading-relaxed">
              <span className="h-6 w-6 rounded-full bg-gradient-to-br from-success to-chart-3 text-white flex items-center justify-center shrink-0 mt-0.5 shadow-[var(--shadow-sm)]">
                <CheckCircle2 size={13} />
              </span>
              <span>{obj}</span>
            </li>
          ))}
        </ul>
      </div>
    </Card>
  );
}
