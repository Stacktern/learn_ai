import { motion } from 'motion/react';
import type React from 'react';
import { BookOpen, Lightbulb, Hash } from 'lucide-react';
import { clsx } from 'clsx';
import type { Concept } from '../../types';
import AnalogyCallout from './AnalogyCallout';
import CodeBlock from '../ui/CodeBlock';

interface ConceptCardProps {
  concept: Concept;
  index: number;
  key?: React.Key;
}

const CONCEPT_PALETTE = [
  { dot: 'bg-chart-1', ring: 'ring-chart-1/30', grad: 'from-chart-1 to-chart-2', light: 'bg-accent-soft', text: 'text-accent' },
  { dot: 'bg-chart-2', ring: 'ring-chart-2/30', grad: 'from-chart-2 to-pink', light: 'bg-purple-soft', text: 'text-purple' },
  { dot: 'bg-chart-3', ring: 'ring-chart-3/30', grad: 'from-chart-3 to-teal', light: 'bg-success-soft', text: 'text-success' },
  { dot: 'bg-chart-5', ring: 'ring-chart-5/30', grad: 'from-chart-5 to-pink', light: 'bg-warning-soft', text: 'text-warning' },
  { dot: 'bg-pink', ring: 'ring-pink/30', grad: 'from-pink to-chart-2', light: 'bg-pink-soft', text: 'text-pink' },
  { dot: 'bg-teal', ring: 'ring-teal/30', grad: 'from-teal to-chart-3', light: 'bg-teal-soft', text: 'text-teal' },
];

export default function ConceptCard({ concept, index }: ConceptCardProps) {
  const c = CONCEPT_PALETTE[index % CONCEPT_PALETTE.length];
  return (
    <motion.article
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.4, delay: index * 0.04, ease: [0.2, 0.8, 0.2, 1] }}
      className={clsx('relative rounded-2xl border border-border-app bg-gradient-to-br from-[var(--bg-card-grad-from)] to-[var(--bg-card-grad-to)] overflow-hidden ring-1', c.ring)}
    >
      <div className={clsx('h-1 w-full bg-gradient-to-r', c.grad)} aria-hidden />

      <div className="p-5 sm:p-6 space-y-4">
        <div className="flex items-center gap-3">
          <span className={clsx('h-10 w-10 rounded-xl text-white flex items-center justify-center font-bold text-sm shadow-[var(--shadow-sm)] bg-gradient-to-br', c.grad)}>
            {index + 1}
          </span>
          <div className="min-w-0">
            <div className={clsx('text-[10px] font-mono font-bold uppercase tracking-widest', c.text)}>
              Concept #{String(index + 1).padStart(2, '0')}
            </div>
            <h3 className="text-lg sm:text-xl font-bold text-text-primary tracking-tight leading-tight">
              {concept.title}
            </h3>
          </div>
        </div>

        <div className="space-y-3 text-sm sm:text-base text-text-secondary leading-relaxed">
          {concept.paragraphs.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </div>

        {concept.codeSnippet && (
          <CodeBlock code={concept.codeSnippet.code} language={concept.codeSnippet.language || 'python'} />
        )}

        {concept.analogy && (
          <AnalogyCallout
            concept={concept.analogy.concept}
            metaphor={concept.analogy.metaphor}
            why={concept.analogy.why}
          />
        )}
      </div>
    </motion.article>
  );
}

export function ConceptsEmpty() {
  return (
    <div className="rounded-xl border border-dashed border-border-app p-6 text-center text-sm text-text-muted">
      <BookOpen size={20} className="mx-auto mb-2 text-text-muted" />
      <p>No concepts yet for this lesson.</p>
    </div>
  );
}

export { Lightbulb, Hash };
