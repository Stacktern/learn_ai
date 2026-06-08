import { ShoppingBag, ExternalLink, Star, BookOpen } from 'lucide-react';
import { motion } from 'motion/react';
import { clsx } from 'clsx';

interface BookPromoProps {
  variant?: 'inline' | 'sidebar';
}

export default function BookPromo({ variant = 'inline' }: BookPromoProps) {
  return (
    <motion.a
      href="https://topmate.io/debojit_basak"
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, y: 6 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, ease: [0.2, 0.8, 0.2, 1] }}
      className={clsx(
        'group relative block overflow-hidden rounded-2xl border border-border-app bg-surface hover:border-accent/50 transition-colors',
        variant === 'inline' && 'p-4 sm:p-5',
      )}
    >
      <div className="absolute -top-12 -right-12 h-32 w-32 rounded-full bg-gradient-to-br from-chart-1/15 to-pink/15 blur-2xl pointer-events-none" aria-hidden />
      <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-chart-1 via-chart-2 to-pink" aria-hidden />

      <div className="relative flex items-center gap-4">
        <div className="relative shrink-0">
          <div className="absolute -inset-1 rounded-lg bg-gradient-to-br from-chart-1/30 via-chart-2/30 to-pink/30 blur-md opacity-60 group-hover:opacity-100 transition-opacity" aria-hidden />
          <img
            src="/book-cover.png"
            alt="Data Science: A Comprehensive Guide for Beginners — book cover"
            className="relative h-28 w-20 sm:h-32 sm:w-24 object-cover rounded-md shadow-[var(--shadow-md)] ring-1 ring-border-app"
            loading="lazy"
          />
        </div>

        <div className="min-w-0 flex-1">
          <div className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-widest bg-gradient-to-r from-chart-1 to-chart-2 text-white mb-1.5">
            <BookOpen size={10} />
            Source book
          </div>
          <h4 className="text-sm sm:text-base font-bold text-text-primary leading-snug line-clamp-2">
            Data Science — A Comprehensive Guide for Beginners
          </h4>
          <p className="text-xs text-text-secondary mt-1 line-clamp-2">
            The book this interactive course is built on. Get your copy and support the author.
          </p>

          <div className="flex items-center gap-2 mt-2.5">
            <div className="flex items-center gap-0.5 text-warning">
              <Star size={11} fill="currentColor" />
              <Star size={11} fill="currentColor" />
              <Star size={11} fill="currentColor" />
              <Star size={11} fill="currentColor" />
              <Star size={11} fill="currentColor" />
            </div>
            <span className="text-[10px] font-mono text-text-muted uppercase tracking-widest">By Debojit Basak</span>
          </div>

          <div className="mt-3 inline-flex items-center gap-1.5 px-3 py-2 rounded-lg bg-gradient-to-r from-chart-1 to-chart-2 text-white text-xs font-bold shadow-[var(--shadow-sm)] group-hover:shadow-[var(--shadow-md)] transition-shadow">
            <ShoppingBag size={13} />
            Get the book
            <ExternalLink size={11} className="opacity-80" />
          </div>
        </div>
      </div>
    </motion.a>
  );
}
