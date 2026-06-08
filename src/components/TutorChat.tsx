import { useEffect, useRef, useState } from 'react';
import { Send, X, Sparkles, Trash2, Bot, User, ChevronLeft, ChevronRight, MessageCircle, ShieldCheck, BookOpenCheck } from 'lucide-react';
import { clsx } from 'clsx';
import { motion, AnimatePresence } from 'motion/react';
import type { Lesson, ChatMessage } from '../types';
import Logo from './ui/Logo';

interface TutorChatProps {
  lesson: Lesson;
  variant?: 'panel' | 'drawer';
  onClose?: () => void;
  isOpen?: boolean;
  collapsed?: boolean;
  onToggleCollapsed?: () => void;
}

const STORAGE_PREFIX = 'learnai_chat_';

export default function TutorChat({
  lesson,
  variant = 'panel',
  onClose,
  isOpen = true,
  collapsed = false,
  onToggleCollapsed,
}: TutorChatProps) {
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  const storageKey = `${STORAGE_PREFIX}${lesson.id}`;

  useEffect(() => {
    try {
      const raw = localStorage.getItem(storageKey);
      if (raw) {
        setMessages(JSON.parse(raw));
        return;
      }
    } catch {}
    setMessages([
      {
        id: `welcome-${lesson.id}`,
        role: 'assistant',
        content: `Hi! I'm your tutor for **${lesson.title.replace(/^\d+\.\s*/, '')}**.\n\nAsk me to explain a concept, walk through the simulator, or expand on any of the formulas.`,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      },
    ]);
  }, [lesson.id]);

  useEffect(() => {
    if (messages.length > 0) {
      try {
        localStorage.setItem(storageKey, JSON.stringify(messages));
      } catch {}
    }
  }, [messages, storageKey]);

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: 'smooth' });
  }, [messages, loading]);

  const send = async () => {
    if (!input.trim() || loading) return;
    const userMsg: ChatMessage = {
      id: `u-${Date.now()}`,
      role: 'user',
      content: input.trim(),
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    };
    const next = [...messages, userMsg];
    setMessages(next);
    setInput('');
    setLoading(true);

    try {
      const res = await fetch('/api/tutor/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ messages: next, lesson }),
      });
      const data = await res.json();
      if (res.ok) {
        setMessages((prev) => [
          ...prev,
          {
            id: `a-${Date.now()}`,
            role: 'assistant',
            content: data.reply,
            timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
          },
        ]);
      } else {
        setMessages((prev) => [
          ...prev,
          {
            id: `e-${Date.now()}`,
            role: 'assistant',
            content: `⚠️ ${data.error || 'Tutor service is unavailable. Make sure GEMINI_API_KEY is set in .env.'}`,
            timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
          },
        ]);
      }
    } catch (e: any) {
      setMessages((prev) => [
        ...prev,
        {
          id: `n-${Date.now()}`,
          role: 'assistant',
          content: `⚠️ Network error: ${e?.message || e}`,
          timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        },
      ]);
    } finally {
      setLoading(false);
    }
  };

  const clear = () => {
    localStorage.removeItem(storageKey);
    setMessages([
      {
        id: `welcome-${lesson.id}-${Date.now()}`,
        role: 'assistant',
        content: `Fresh start. What would you like to explore in **${lesson.title.replace(/^\d+\.\s*/, '')}**?`,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      },
    ]);
  };

  if (!isOpen && variant === 'drawer') return null;

  // --- Collapsed rail (panel only, desktop) ---
  if (collapsed && variant === 'panel') {
    const lastUser = [...messages].reverse().find((m) => m.role === 'user');
    const lastAssistant = [...messages].reverse().find((m) => m.role === 'assistant');
    const previewSrc = (lastAssistant ?? lastUser)?.content ?? 'Tutor is ready.';
    const preview = previewSrc.length > 80 ? previewSrc.slice(0, 80) + '…' : previewSrc;
    return (
      <div className="h-full w-[68px] shrink-0 bg-surface border-l border-border-app flex flex-col items-center py-3">
        <Logo size={36} />
        <span className="mt-2 text-[10px] font-mono uppercase tracking-widest font-bold text-text-muted [writing-mode:vertical-rl] rotate-180">
          AI tutor
        </span>

        <div className="mt-3 flex-1 w-full flex flex-col items-center gap-2 px-1.5">
          <div title={preview} className="relative">
            <MessageCircle size={18} className="text-accent" />
            {messages.length > 1 && (
              <span className="absolute -top-1 -right-1 h-4 min-w-4 px-1 rounded-full bg-gradient-to-br from-chart-1 to-chart-2 text-white text-[9px] font-bold flex items-center justify-center shadow-[var(--shadow-sm)]">
                {messages.length - 1}
              </span>
            )}
          </div>
          {loading && (
            <span className="h-2 w-2 rounded-full bg-accent animate-pulse-dot" />
          )}
        </div>

        <div className="flex flex-col items-center gap-1.5 text-text-muted">
          <span title="Scoped to this course" className="p-2 rounded-lg text-success">
            <ShieldCheck size={15} />
          </span>
          {onToggleCollapsed && (
            <button
              onClick={onToggleCollapsed}
              className="p-2 rounded-lg text-text-secondary hover:bg-accent-soft hover:text-accent transition-colors"
              aria-label="Expand tutor"
              title="Expand tutor (←)"
            >
              <ChevronLeft size={16} />
            </button>
          )}
        </div>
      </div>
    );
  }

  return (
    <div
      className={clsx(
        'h-full flex flex-col bg-surface',
        variant === 'panel' && 'border-l border-border-app',
      )}
    >
      <div className="px-4 py-3.5 border-b border-border-app flex items-center justify-between gap-2 bg-gradient-to-r from-accent-soft/40 via-surface to-purple-soft/40">
        <div className="flex items-center gap-2.5 min-w-0">
          <Logo size={36} />
          <div className="min-w-0">
            <div className="text-[10px] font-bold uppercase tracking-widest text-text-muted">AI tutor</div>
            <div className="text-sm font-semibold text-text-primary truncate">Ask about this lesson</div>
          </div>
        </div>
        <div className="flex items-center gap-1">
          <span
            title="Scoped to this course only"
            className="hidden sm:inline-flex items-center gap-1 px-2 py-0.5 rounded-md text-[10px] font-bold uppercase tracking-widest bg-success-soft text-success border border-success/30"
          >
            <ShieldCheck size={11} /> Course only
          </span>
          <button
            onClick={clear}
            className="p-2 rounded-lg text-text-muted hover:text-danger hover:bg-danger-soft transition-colors"
            title="Clear history"
          >
            <Trash2 size={14} />
          </button>
          {onToggleCollapsed && variant === 'panel' && (
            <button
              onClick={onToggleCollapsed}
              className="p-2 rounded-lg text-text-secondary hover:bg-accent-soft hover:text-accent transition-colors"
              title="Collapse tutor (→)"
              aria-label="Collapse tutor"
            >
              <ChevronRight size={16} />
            </button>
          )}
          {variant === 'drawer' && onClose && (
            <button
              onClick={onClose}
              className="p-2 rounded-lg text-text-muted hover:text-danger hover:bg-danger-soft transition-colors"
            >
              <X size={15} />
            </button>
          )}
        </div>
      </div>

      <div ref={scrollRef} className="flex-1 overflow-y-auto p-4 space-y-3.5 [scrollbar-width:thin]">
        <AnimatePresence>
          {messages.map((m) => (
            <motion.div
              key={m.id}
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              className={clsx('flex gap-2.5 items-start', m.role === 'user' ? 'flex-row-reverse' : 'flex-row')}
            >
              <span
                className={clsx(
                  'h-8 w-8 rounded-lg flex items-center justify-center shrink-0 shadow-[var(--shadow-sm)]',
                  m.role === 'user'
                    ? 'bg-gradient-to-br from-chart-1 to-chart-2 text-white'
                    : 'bg-gradient-to-br from-chart-3 to-teal text-white',
                )}
              >
                {m.role === 'user' ? <User size={14} /> : <Bot size={14} />}
              </span>
              <div
                className={clsx(
                  'rounded-2xl px-4 py-2.5 text-sm leading-relaxed max-w-[85%] shadow-[var(--shadow-sm)] backdrop-blur-sm',
                  m.role === 'user'
                    ? 'bg-gradient-to-br from-chart-1 to-chart-2 text-white rounded-tr-sm'
                    : 'bg-gradient-to-br from-[var(--bg-card-grad-from)] to-[var(--bg-card-grad-to)] text-text-primary border border-border-app rounded-tl-sm',
                )}
              >
                <div className="whitespace-pre-wrap break-words">{m.content}</div>
                <div className={clsx('text-[10px] font-mono mt-1.5 opacity-70', m.role === 'user' ? 'text-white/80' : 'text-text-muted')}>
                  {m.timestamp}
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>

        {loading && (
          <div className="flex gap-2.5 items-start">
            <span className="h-8 w-8 rounded-lg bg-gradient-to-br from-chart-3 to-teal text-white flex items-center justify-center shrink-0">
              <Bot size={14} />
            </span>
            <div className="rounded-2xl bg-surface-2 px-4 py-3 flex items-center gap-1.5">
              <span className="h-2 w-2 rounded-full bg-accent animate-pulse-dot" />
              <span className="h-2 w-2 rounded-full bg-chart-2 animate-pulse-dot [animation-delay:200ms]" />
              <span className="h-2 w-2 rounded-full bg-pink animate-pulse-dot [animation-delay:400ms]" />
              <span className="ml-1.5 text-xs text-text-muted">Tutor is thinking…</span>
            </div>
          </div>
        )}
      </div>

      <div className="p-3.5 border-t border-border-app bg-surface-2/40">
        <div className="flex gap-2">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && send()}
            placeholder="Ask the tutor…"
            className="flex-1 px-3.5 py-2.5 bg-surface border border-border-app rounded-xl text-sm text-text-primary placeholder:text-text-muted focus:outline-none focus:border-accent focus:ring-2 focus:ring-accent/20 transition-all"
          />
          <button
            onClick={send}
            disabled={!input.trim() || loading}
            className="px-3.5 py-2.5 bg-gradient-to-br from-chart-1 to-chart-2 hover:from-chart-1 hover:to-chart-1 text-white rounded-xl transition-all disabled:opacity-40 shadow-[var(--shadow-sm)] hover:shadow-[var(--shadow-md)]"
            aria-label="Send"
          >
            <Send size={14} />
          </button>
        </div>
        <p className="text-[10px] text-text-muted mt-1.5 px-1 flex items-center gap-1">
          <BookOpenCheck size={10} className="text-success" />
          Scoped to this course — off-topic questions are politely refused.
        </p>
      </div>
    </div>
  );
}
