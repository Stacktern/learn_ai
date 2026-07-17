import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { BookOpen, CheckCircle2, Search, X, Sparkles, ChevronDown, ChevronLeft, ChevronRight, GraduationCap } from 'lucide-react';
import { clsx } from 'clsx';
import type { Path, Lesson } from '../types';
import Logo from './ui/Logo';

interface SidebarProps {
  paths: Path[];
  currentLesson: Lesson;
  onSelectLesson: (l: Lesson) => void;
  completedLessons: string[];
  variant?: 'full' | 'drawer';
  onClose?: () => void;
  collapsed?: boolean;
  onToggleCollapsed?: () => void;
}

export default function Sidebar({
  paths,
  currentLesson,
  onSelectLesson,
  completedLessons,
  variant = 'full',
  onClose,
  collapsed = false,
  onToggleCollapsed,
}: SidebarProps) {
  const [query, setQuery] = useState('');
  const [expanded, setExpanded] = useState<Record<string, boolean>>({ 'data-science': true, 'data-science-2': true, 'data-science-3': true, 'data-science-4': true, 'data-science-5': true, 'data-science-6': true });

  useEffect(() => {
    if (variant === 'drawer') setQuery('');
  }, [variant]);

  const totalLessons = paths.reduce((acc, p) => acc + p.lessons.length, 0);
  const completedCount = completedLessons.length;
  const percent = totalLessons > 0 ? Math.round((completedCount / totalLessons) * 100) : 0;

  const filtered = paths.map((p) => ({
    ...p,
    lessons: p.lessons.filter(
      (l) => query.trim() === '' || l.title.toLowerCase().includes(query.toLowerCase()),
    ),
  })).filter((p) => p.lessons.length > 0);

  // --- Collapsed rail ---
  if (collapsed) {
    return (
      <div className="h-full flex flex-col bg-surface border-r border-border-app items-center py-3 w-[68px] shrink-0">
        <Logo size={36} />

        <div className="mt-4 flex-1 overflow-y-auto w-full flex flex-col items-center gap-1.5 px-1.5 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          {paths.flatMap((p) => p.lessons).map((lesson, idx) => {
            const isActive = currentLesson.id === lesson.id;
            const isCompleted = completedLessons.includes(lesson.id);
            return (
              <button
                key={lesson.id}
                onClick={() => onSelectLesson(lesson)}
                title={lesson.title.replace(/^\d+\.\s*/, '')}
                aria-label={lesson.title}
                className={clsx(
                  'relative h-10 w-10 rounded-lg text-sm font-mono font-bold flex items-center justify-center transition-all',
                  isActive
                    ? 'bg-gradient-to-br from-chart-1 to-chart-2 text-white shadow-[var(--shadow-md)] scale-105'
                    : isCompleted
                      ? 'bg-success-soft text-success hover:bg-surface-2'
                      : 'bg-surface-2 text-text-secondary hover:bg-accent-soft hover:text-accent',
                )}
              >
                {idx + 1}
                {isCompleted && !isActive && (
                  <span className="absolute -top-1 -right-1 h-2.5 w-2.5 rounded-full bg-success ring-2 ring-surface" />
                )}
              </button>
            );
          })}
        </div>

        {onToggleCollapsed && variant === 'full' && (
          <button
            onClick={onToggleCollapsed}
            className="mt-2 p-2 rounded-lg text-text-secondary hover:bg-accent-soft hover:text-accent transition-colors"
            aria-label="Expand sidebar"
            title="Expand sidebar (→)"
          >
            <ChevronRight size={16} />
          </button>
        )}
      </div>
    );
  }

  return (
    <div className="h-full flex flex-col bg-surface border-r border-border-app w-full">
      {/* Brand header */}
      <div className="px-5 py-5 border-b border-border-app flex items-center justify-between gap-2">
        <div className="flex items-center gap-3 min-w-0">
          <Logo size={40} />
          <div className="min-w-0">
            <h1 className="text-[11px] font-bold tracking-widest uppercase text-text-muted">LearnAI Tutor</h1>
            <h2 className="text-base font-bold text-text-primary tracking-tight truncate">Data Science</h2>
          </div>
        </div>
        <div className="flex items-center gap-1">
          {onToggleCollapsed && variant === 'full' && (
            <button
              onClick={onToggleCollapsed}
              className="p-2 rounded-lg text-text-secondary hover:bg-accent-soft hover:text-accent transition-colors"
              aria-label="Collapse sidebar"
              title="Collapse sidebar (←)"
            >
              <ChevronLeft size={16} />
            </button>
          )}
          {variant === 'drawer' && onClose && (
            <button onClick={onClose} className="p-2 rounded-lg text-text-secondary hover:bg-surface-2">
              <X size={16} />
            </button>
          )}
        </div>
      </div>

      {/* Progress card */}
      <div className="px-4 py-4 border-b border-border-app">
        <div className="rounded-xl border border-border-app bg-gradient-to-br from-accent-soft via-surface to-purple-soft p-3.5 space-y-2.5">
          <div className="flex justify-between items-center text-sm">
            <span className="font-semibold text-text-primary flex items-center gap-1.5">
              <GraduationCap size={14} className="text-accent" />
              Your progress
            </span>
            <span className="font-bold text-accent font-mono">{percent}%</span>
          </div>
          <div className="h-2 bg-surface-2 rounded-full overflow-hidden ring-1 ring-border-app">
            <motion.div
              className="h-full bg-gradient-to-r from-chart-1 via-chart-2 to-pink"
              initial={{ width: 0 }}
              animate={{ width: `${percent}%` }}
              transition={{ duration: 0.6, ease: [0.2, 0.8, 0.2, 1] }}
            />
          </div>
          <div className="flex justify-between text-[11px] font-mono text-text-muted">
            <span>{completedCount} of {totalLessons} complete</span>
            <span className="text-accent">{Math.max(0, totalLessons - completedCount)} to go</span>
          </div>
        </div>
      </div>

      {/* Search */}
      <div className="px-4 py-3 border-b border-border-app">
        <div className="relative">
          <Search size={13} className="absolute left-3 top-1/2 -translate-y-1/2 text-text-muted" />
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search lessons…"
            className="w-full pl-8 pr-3 py-2 text-sm bg-surface-2 border border-border-app rounded-lg text-text-primary placeholder:text-text-muted focus:outline-none focus:border-accent focus:bg-surface transition-colors"
          />
        </div>
      </div>

      {/* Lesson list */}
      <div className="flex-1 overflow-y-auto px-3 py-4 space-y-3 [scrollbar-width:thin]">
        {filtered.length === 0 && (
          <p className="text-sm text-text-muted text-center italic py-6">No lessons match “{query}”.</p>
        )}
        {filtered.map((path, pi) => {
          const open = expanded[path.id] ?? true;
          const palette = ['from-chart-1 to-chart-2', 'from-chart-3 to-teal', 'from-chart-5 to-pink', 'from-pink to-chart-2'];
          const grad = palette[pi % palette.length];
          return (
            <div key={path.id} className="space-y-1.5">
              <button
                onClick={() => setExpanded({ ...expanded, [path.id]: !open })}
                className="w-full flex items-center justify-between px-2.5 py-2 rounded-lg text-text-secondary hover:bg-surface-2 transition-colors"
              >
                <div className="flex items-center gap-2">
                  <span className={clsx('h-7 w-7 rounded-lg bg-gradient-to-br text-white flex items-center justify-center shadow-[var(--shadow-sm)]', grad)}>
                    <BookOpen size={13} />
                  </span>
                  <span className="text-[11px] font-bold uppercase tracking-widest text-text-primary">{path.title}</span>
                </div>
                <ChevronDown size={14} className={clsx('text-text-muted transition-transform', !open && '-rotate-90')} />
              </button>
              {open && (
                <div className="pl-2.5 space-y-1 border-l-2 border-accent/30 ml-3.5">
                  {path.lessons.map((lesson, li) => {
                    const isActive = currentLesson.id === lesson.id;
                    const isCompleted = completedLessons.includes(lesson.id);
                    const num = String(li + 1).padStart(2, '0');
                    return (
                      <button
                        key={lesson.id}
                        onClick={() => onSelectLesson(lesson)}
                        className={clsx(
                          'relative w-full text-left px-2.5 py-2.5 rounded-lg text-sm flex items-start gap-2.5 transition-all',
                          isActive
                            ? 'text-white font-semibold bg-gradient-to-r from-chart-1 to-chart-2 shadow-[var(--shadow-sm)]'
                            : 'text-text-primary hover:bg-surface-2',
                        )}
                      >
                        <span
                          className={clsx(
                            'h-6 w-6 shrink-0 rounded-md text-[10px] font-mono font-bold flex items-center justify-center',
                            isActive
                              ? 'bg-white/20 text-white'
                              : isCompleted
                                ? 'bg-success-soft text-success'
                                : 'bg-surface-2 text-text-muted',
                          )}
                        >
                          {isCompleted ? <CheckCircle2 size={12} /> : num}
                        </span>
                        <span className="flex-1 min-w-0 leading-snug font-medium">
                          {lesson.title.replace(/^\d+\.\s*/, '')}
                        </span>
                        <span
                          className={clsx(
                            'text-[10px] font-mono uppercase tracking-widest shrink-0 px-1.5 py-0.5 rounded',
                            isActive ? 'bg-white/20 text-white' : 'bg-surface-2 text-text-muted',
                          )}
                        >
                          {lesson.readingTime}
                        </span>
                      </button>
                    );
                  })}
                </div>
              )}
            </div>
          );
        })}
      </div>

      <div className="px-4 py-3 border-t border-border-app text-[11px] text-text-muted font-mono text-center bg-surface-2/50">
        <span className="inline-flex items-center gap-1.5">
          <span className="h-1.5 w-1.5 rounded-full bg-success animate-pulse-dot" />
          Part I · Foundations
        </span>
      </div>
    </div>
  );
}
