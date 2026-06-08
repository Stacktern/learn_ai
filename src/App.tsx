import { useState, useEffect, useMemo, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, MessageSquare, ChevronRight, Clock, BookOpen, X, ChevronLeft, ChevronRight as ChevronRightIcon, Sparkles, Library, ScrollText, GraduationCap } from 'lucide-react';
import { clsx } from 'clsx';
import { CURRICULUM_DATA } from './data/curriculum';
import type { Lesson } from './types';
import { useLocalStorage } from './hooks/useLocalStorage';
import { ThemeProvider } from './context/ThemeContext';
import ThemeToggle from './components/ui/ThemeToggle';
import Logo from './components/ui/Logo';
import Sidebar from './components/Sidebar';
import LessonHero from './components/lesson/LessonHero';
import ObjectivesList from './components/lesson/ObjectivesList';
import ConceptCard from './components/lesson/ConceptCard';
import KeyFormulas from './components/lesson/KeyFormulas';
import RealWorldStudy from './components/lesson/RealWorldStudy';
import GlossaryList from './components/lesson/GlossaryList';
import KeyTakeaways from './components/lesson/KeyTakeaways';
import LessonFooter from './components/lesson/LessonFooter';
import ExerciseInput from './components/lesson/ExerciseInput';
import SectionHeading from './components/lesson/SectionHeading';
import PlaygroundSection from './components/playground/PlaygroundSection';
import QuizSection from './components/QuizSection';
import TutorChat from './components/TutorChat';
import MobileBottomNav from './components/MobileBottomNav';
import BookPromo from './components/BookPromo';

function AppShell() {
  const path = CURRICULUM_DATA[0];
  const allLessons = useMemo(() => path.lessons, [path]);
  const [activeLesson, setActiveLesson] = useState<Lesson>(allLessons[0]);
  const [completed, setCompleted] = useLocalStorage<string[]>('learnai_completed', []);
  const [quizScores, setQuizScores] = useLocalStorage<Record<string, { score: number; total: number }>>('learnai_quizzes', {});
  const [sidebarCollapsed, setSidebarCollapsed] = useLocalStorage<boolean>('learnai_sidebar_collapsed', false);
  const [chatCollapsed, setChatCollapsed] = useLocalStorage<boolean>('learnai_chat_collapsed', false);

  const [mobileSidebarOpen, setMobileSidebarOpen] = useState(false);
  const [mobileChatOpen, setMobileChatOpen] = useState(false);

  const [scrollProgress, setScrollProgress] = useState(0);
  const contentRef = useRef<HTMLDivElement>(null);

  const lessonIndex = allLessons.findIndex((l) => l.id === activeLesson.id);
  const hasPrev = lessonIndex > 0;
  const hasNext = lessonIndex < allLessons.length - 1;

  const totalLessons = allLessons.length;
  const completedCount = completed.length;
  const coursePercent = totalLessons > 0 ? Math.round((completedCount / totalLessons) * 100) : 0;

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [activeLesson.id]);

  useEffect(() => {
    setScrollProgress(0);
  }, [activeLesson.id]);

  useEffect(() => {
    const el = contentRef.current;
    if (!el) return;
    const onScroll = () => {
      const max = el.scrollHeight - el.clientHeight;
      const pct = max > 0 ? Math.min(100, Math.max(0, (el.scrollTop / max) * 100)) : 0;
      setScrollProgress(pct);
    };
    onScroll();
    el.addEventListener('scroll', onScroll, { passive: true });
    const ro = new ResizeObserver(onScroll);
    ro.observe(el);
    return () => {
      el.removeEventListener('scroll', onScroll);
      ro.disconnect();
    };
  }, [activeLesson.id]);

  const markComplete = () => {
    if (completed.includes(activeLesson.id)) return;
    setCompleted([...completed, activeLesson.id]);
  };

  const handleQuiz = (lessonId: string, score: number, total: number) => {
    setQuizScores({ ...quizScores, [lessonId]: { score, total } });
    if (score >= Math.ceil(total / 2) && !completed.includes(lessonId)) {
      setCompleted([...completed, lessonId]);
    }
  };

  const goPrev = () => hasPrev && setActiveLesson(allLessons[lessonIndex - 1]);
  const goNext = () => hasNext && setActiveLesson(allLessons[lessonIndex + 1]);

  return (
    <div className="min-h-screen bg-bg-app text-text-primary transition-colors">
      <div className="flex h-screen overflow-hidden">
        {/* Desktop sidebar */}
        <aside className="hidden lg:block shrink-0">
          <motion.div
            initial={false}
            animate={{ width: sidebarCollapsed ? 68 : 288 }}
            transition={{ type: 'spring', stiffness: 300, damping: 32 }}
            className="h-full overflow-hidden"
          >
            <Sidebar
              paths={CURRICULUM_DATA}
              currentLesson={activeLesson}
              onSelectLesson={setActiveLesson}
              completedLessons={completed}
              collapsed={sidebarCollapsed}
              onToggleCollapsed={() => setSidebarCollapsed(!sidebarCollapsed)}
            />
          </motion.div>
        </aside>

        {/* Mobile sidebar drawer */}
        <AnimatePresence>
          {mobileSidebarOpen && (
            <>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setMobileSidebarOpen(false)}
                className="fixed inset-0 z-40 bg-black/50 backdrop-blur-sm lg:hidden"
              />
              <motion.aside
                initial={{ x: '-100%' }}
                animate={{ x: 0 }}
                exit={{ x: '-100%' }}
                transition={{ type: 'spring', stiffness: 300, damping: 32 }}
                className="fixed left-0 top-0 bottom-0 z-50 w-80 sm:w-96 lg:hidden"
              >
                  <Sidebar
                    paths={CURRICULUM_DATA}
                    currentLesson={activeLesson}
                    onSelectLesson={(l) => {
                      setActiveLesson(l);
                      setMobileSidebarOpen(false);
                    }}
                    completedLessons={completed}
                    variant="drawer"
                    onClose={() => setMobileSidebarOpen(false)}
                  />
              </motion.aside>
            </>
          )}
        </AnimatePresence>

        {/* Main column */}
        <main className="flex-1 min-w-0 flex flex-col">
          {/* Topbar */}
          <div className="sticky top-0 z-20 bg-bg-app/90 backdrop-blur-md border-b border-border-app">
            <div className="flex items-center justify-between px-3 sm:px-5 lg:px-6 py-2.5 sm:py-3 gap-2">
              <div className="flex items-center gap-1.5 sm:gap-2 min-w-0">
                <button
                  onClick={() => setMobileSidebarOpen(true)}
                  className="lg:hidden p-2 rounded-lg border border-border-app text-text-secondary hover:bg-surface min-h-[40px] min-w-[40px] flex items-center justify-center"
                  aria-label="Open menu"
                >
                  <Menu size={18} />
                </button>
                <button
                  onClick={() => setSidebarCollapsed(!sidebarCollapsed)}
                  className="hidden lg:inline-flex p-2 rounded-lg border border-border-app text-text-secondary hover:bg-accent-soft hover:text-accent hover:border-accent/40 transition-colors min-h-[40px] min-w-[40px] justify-center"
                  aria-label={sidebarCollapsed ? 'Expand sidebar' : 'Collapse sidebar'}
                  title={sidebarCollapsed ? 'Expand sidebar (→)' : 'Collapse sidebar (←)'}
                >
                  {sidebarCollapsed ? <ChevronRightIcon size={16} /> : <ChevronLeft size={16} />}
                </button>

                <div className="hidden md:flex items-center gap-2 ml-1">
                  <Logo size={28} withWordmark />
                </div>

                <div className="hidden lg:flex items-center gap-1.5 text-sm text-text-muted min-w-0 ml-2">
                  <span className="truncate font-medium">{path.title}</span>
                  <ChevronRight size={12} className="text-text-muted shrink-0" />
                  <span className="text-text-primary font-bold truncate">
                    {activeLesson.title.replace(/^\d+\.\s*/, '')}
                  </span>
                </div>
                <div className="md:hidden flex items-center gap-1.5 text-sm min-w-0">
                  <Logo size={26} />
                  <span className="font-bold text-text-primary truncate">
                    {activeLesson.title.replace(/^\d+\.\s*/, '')}
                  </span>
                </div>
              </div>

              {/* Right cluster: clock · difficulty · ask · theme · collapse-tutor (last) */}
              <div className="flex items-center gap-1.5 sm:gap-2 shrink-0">
                <div className="hidden sm:inline-flex items-center gap-1.5 text-xs text-text-muted">
                  <Clock size={13} />
                  <span className="font-medium">{activeLesson.readingTime}</span>
                </div>
                <span className="hidden md:inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-bold uppercase tracking-widest bg-accent-soft text-accent border border-accent/30">
                  <GraduationCap size={11} />
                  {activeLesson.difficulty}
                </span>
                <button
                  onClick={() => setMobileChatOpen(true)}
                  className="xl:hidden p-2 rounded-lg border border-border-app text-accent hover:bg-accent-soft transition-colors inline-flex items-center gap-1.5 min-h-[40px]"
                  aria-label="Open tutor chat"
                >
                  <MessageSquare size={15} />
                  <span className="text-[10px] font-bold uppercase tracking-widest hidden sm:inline">Ask</span>
                </button>
                <ThemeToggle size="sm" />
                <button
                  onClick={() => setChatCollapsed(!chatCollapsed)}
                  className="hidden xl:inline-flex p-2 rounded-lg border border-border-app text-text-secondary hover:bg-accent-soft hover:text-accent hover:border-accent/40 transition-colors min-h-[40px] min-w-[40px] justify-center"
                  aria-label={chatCollapsed ? 'Expand tutor' : 'Collapse tutor'}
                  title={chatCollapsed ? 'Expand tutor (←)' : 'Collapse tutor (→)'}
                >
                  {chatCollapsed ? <ChevronLeft size={16} /> : <ChevronRightIcon size={16} />}
                </button>
              </div>
            </div>

            {/* Scroll progress bar just below the navbar */}
            <div className="relative h-1 bg-surface-2">
              <motion.div
                className="absolute inset-y-0 left-0 bg-gradient-to-r from-chart-1 via-chart-2 to-pink"
                style={{ width: `${Math.round(scrollProgress)}%` }}
                transition={{ duration: 0.15, ease: 'linear' }}
              />
            </div>
          </div>

          {/* Lesson content */}
          <div ref={contentRef} className="flex-1 overflow-y-auto pb-24 xl:pb-0">
            <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-10 py-6 sm:py-8 space-y-6 sm:space-y-10">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeLesson.id}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -4 }}
                  transition={{ duration: 0.3, ease: [0.2, 0.8, 0.2, 1] }}
                  className="space-y-6 sm:space-y-10"
                >
                  <LessonHero lesson={activeLesson} index={lessonIndex} total={allLessons.length} />

                  <ObjectivesList objectives={activeLesson.objectives} />

                  <section className="space-y-5 sm:space-y-6">
                    <SectionHeading
                      tone="blue"
                      label="Core concepts"
                      icon={<BookOpen size={15} />}
                    />
                    <div className="space-y-4 sm:space-y-5">
                      {activeLesson.concepts.map((c, i) => (
                        <ConceptCard key={i} concept={c} index={i} />
                      ))}
                    </div>
                  </section>

                  {activeLesson.keyFormulas && activeLesson.keyFormulas.length > 0 && (
                    <KeyFormulas formulas={activeLesson.keyFormulas} />
                  )}

                  <RealWorldStudy {...activeLesson.realWorldExample} />

                  <section className="space-y-3" id="playground-card">
                    <SectionHeading
                      tone="pink"
                      label="Interactive playground"
                      icon={<Sparkles size={15} />}
                    />
                    <PlaygroundSection lesson={activeLesson} />
                  </section>

                  <section className="space-y-3">
                    <SectionHeading
                      tone="emerald"
                      label="Practice exercise"
                      icon={<ScrollText size={15} />}
                    />
                    <ExerciseInput lesson={activeLesson} onCorrect={markComplete} />
                  </section>

                  <BookPromo />

                  <section className="space-y-3">
                    <SectionHeading
                      tone="amber"
                      label="Knowledge check"
                      icon={<Library size={15} />}
                    />
                    <QuizSection
                      lesson={activeLesson}
                      onQuizCompleted={handleQuiz}
                      savedScore={quizScores[activeLesson.id]}
                    />
                  </section>

                  {activeLesson.glossary && activeLesson.glossary.length > 0 && (
                    <GlossaryList terms={activeLesson.glossary} />
                  )}

                  <KeyTakeaways takeaways={activeLesson.keyTakeaways} />

                  <LessonFooter
                    lessonId={activeLesson.id}
                    isCompleted={completed.includes(activeLesson.id)}
                    onMarkComplete={markComplete}
                    onPrev={goPrev}
                    onNext={goNext}
                    hasPrev={hasPrev}
                    hasNext={hasNext}
                  />
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </main>

        {/* Desktop tutor */}
        <aside className="hidden xl:block shrink-0">
          <motion.div
            initial={false}
            animate={{ width: chatCollapsed ? 68 : 400 }}
            transition={{ type: 'spring', stiffness: 300, damping: 32 }}
            className="h-full overflow-hidden"
          >
            <TutorChat
              lesson={activeLesson}
              collapsed={chatCollapsed}
              onToggleCollapsed={() => setChatCollapsed(!chatCollapsed)}
            />
          </motion.div>
        </aside>

        {/* Mobile tutor drawer */}
        <AnimatePresence>
          {mobileChatOpen && (
            <>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setMobileChatOpen(false)}
                className="fixed inset-0 z-40 bg-black/50 backdrop-blur-sm xl:hidden"
              />
              <motion.aside
                initial={{ x: '100%' }}
                animate={{ x: 0 }}
                exit={{ x: '100%' }}
                transition={{ type: 'spring', stiffness: 300, damping: 32 }}
                className="fixed right-0 top-0 bottom-0 z-50 w-96 max-w-[100vw] xl:hidden"
              >
                <TutorChat
                  lesson={activeLesson}
                  variant="drawer"
                  onClose={() => setMobileChatOpen(false)}
                />
              </motion.aside>
            </>
          )}
        </AnimatePresence>
      </div>

      {/* Mobile bottom nav */}
      <MobileBottomNav
        onOpenSidebar={() => setMobileSidebarOpen(true)}
        onOpenChat={() => setMobileChatOpen(true)}
      />
    </div>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <AppShell />
    </ThemeProvider>
  );
}
