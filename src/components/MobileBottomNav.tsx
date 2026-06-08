import { BookOpen, MessageSquare, Sparkles, Menu, Library } from 'lucide-react';
import { clsx } from 'clsx';

interface MobileBottomNavProps {
  onOpenSidebar: () => void;
  onOpenChat: () => void;
}

export default function MobileBottomNav({ onOpenSidebar, onOpenChat }: MobileBottomNavProps) {
  return (
    <nav
      className="xl:hidden fixed bottom-0 inset-x-0 z-30 bg-surface/95 backdrop-blur border-t border-border-app px-2 py-2 flex items-stretch gap-1.5 shadow-[0_-4px_16px_-4px_rgb(0_0_0_/_0.08)]"
      aria-label="Quick navigation"
    >
      <button
        onClick={onOpenSidebar}
        className="flex-1 flex flex-col items-center justify-center gap-0.5 py-2 rounded-xl text-text-secondary hover:bg-accent-soft hover:text-accent active:scale-95 transition-all min-h-[52px]"
        aria-label="Browse lessons"
      >
        <Library size={20} />
        <span className="text-[10px] font-bold uppercase tracking-widest">Lessons</span>
      </button>

      <button
        onClick={onOpenChat}
        className="flex-1 flex flex-col items-center justify-center gap-0.5 py-2 rounded-xl text-text-secondary hover:bg-accent-soft hover:text-accent active:scale-95 transition-all min-h-[52px]"
        aria-label="Ask the AI tutor"
      >
        <MessageSquare size={20} />
        <span className="text-[10px] font-bold uppercase tracking-widest">Ask AI</span>
      </button>

      <a
        href="#playground-card"
        className="flex-1 flex flex-col items-center justify-center gap-0.5 py-2 rounded-xl text-text-secondary hover:bg-accent-soft hover:text-accent active:scale-95 transition-all min-h-[52px]"
      >
        <Sparkles size={20} />
        <span className="text-[10px] font-bold uppercase tracking-widest">Play</span>
      </a>

      <a
        href="#"
        onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
        className="flex-1 flex flex-col items-center justify-center gap-0.5 py-2 rounded-xl text-text-secondary hover:bg-accent-soft hover:text-accent active:scale-95 transition-all min-h-[52px]"
        aria-label="Scroll to top"
      >
        <BookOpen size={20} />
        <span className="text-[10px] font-bold uppercase tracking-widest">Top</span>
      </a>
    </nav>
  );
}
