import { clsx } from 'clsx';
import { motion } from 'motion/react';
import { CheckCircle2, Clock, BookOpen, Sparkles, BarChart3 } from 'lucide-react';
import type { Lesson } from '../../types';

interface LessonHeroProps {
  lesson: Lesson;
  index: number;
  total: number;
}

export default function LessonHero({ lesson, index, total }: LessonHeroProps) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: [0.2, 0.8, 0.2, 1] }}
      className="relative overflow-hidden rounded-2xl border border-border-app bg-gradient-to-br from-accent-soft via-surface to-purple-soft p-5 sm:p-7"
    >
      <div className="absolute -top-12 -right-12 h-40 w-40 rounded-full bg-gradient-to-br from-chart-1/20 to-pink/20 blur-2xl" aria-hidden />
      <div className="absolute -bottom-8 -left-8 h-32 w-32 rounded-full bg-gradient-to-br from-chart-3/20 to-purple/20 blur-2xl" aria-hidden />

      <div className="relative space-y-4">
        <div className="flex items-center gap-2 flex-wrap">
          <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-[11px] font-bold tracking-widest uppercase bg-gradient-to-r from-chart-1 to-chart-2 text-white shadow-[var(--shadow-sm)]">
            <BookOpen size={12} />
            Data Science
          </span>
          <span className="text-[11px] font-bold tracking-widest uppercase text-text-muted font-mono">
            Lesson {index + 1} of {total}
          </span>
        </div>

        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-text-primary leading-tight">
          {lesson.title.replace(/^\d+\.\s*/, '')}
        </h1>

        <p className="text-sm sm:text-base text-text-secondary leading-relaxed max-w-2xl">
          {lesson.subtitle}
        </p>

        <div className="flex flex-wrap items-center gap-2 pt-1">
          <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs bg-surface border border-border-app text-text-secondary">
            <Clock size={13} className="text-accent" />
            <span className="font-medium">{lesson.readingTime} read</span>
          </div>
          <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs bg-success-soft text-success border border-success/30">
            <Sparkles size={13} />
            <span className="font-medium">Interactive simulator</span>
          </div>
          <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs bg-purple-soft text-purple border border-purple/30">
            <BarChart3 size={13} />
            <span className="font-medium">Hands-on practice</span>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
