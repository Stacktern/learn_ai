import { CheckCircle2, Trophy, ChevronLeft, ChevronRight, Bookmark, BookmarkCheck, PartyPopper } from 'lucide-react';
import { clsx } from 'clsx';
import { useLocalStorage } from '../../hooks/useLocalStorage';

interface LessonFooterProps {
  lessonId: string;
  isCompleted: boolean;
  onMarkComplete: () => void;
  onPrev?: () => void;
  onNext?: () => void;
  hasPrev: boolean;
  hasNext: boolean;
}

export default function LessonFooter({
  lessonId,
  isCompleted,
  onMarkComplete,
  onPrev,
  onNext,
  hasPrev,
  hasNext,
}: LessonFooterProps) {
  const [bookmarks, setBookmarks] = useLocalStorage<string[]>('learnai_bookmarks', []);
  const isBookmarked = bookmarks.includes(lessonId);

  const toggleBookmark = () => {
    if (isBookmarked) setBookmarks(bookmarks.filter((id) => id !== lessonId));
    else setBookmarks([...bookmarks, lessonId]);
  };

  return (
    <div className="border-t border-border-app pt-8 flex items-center justify-between flex-wrap gap-3">
      <div className="flex items-center gap-2 flex-wrap">
        <button
          onClick={onMarkComplete}
          className={clsx(
            'px-5 py-3 rounded-xl text-sm font-bold flex items-center gap-2 transition-all min-h-[44px]',
            isCompleted
              ? 'bg-success-soft text-success border border-success/40'
              : 'bg-gradient-to-br from-chart-1 to-chart-2 hover:from-chart-1 hover:to-chart-1 text-white shadow-[var(--shadow-sm)] hover:shadow-[var(--shadow-md)]',
          )}
        >
          {isCompleted ? <PartyPopper size={15} /> : <Trophy size={15} />}
          {isCompleted ? 'Lesson completed' : 'Mark as complete'}
        </button>
        <button
          onClick={toggleBookmark}
          className={clsx(
            'p-3 rounded-xl border transition-all min-h-[44px] min-w-[44px] flex items-center justify-center',
            isBookmarked
              ? 'border-warning/40 bg-warning-soft text-warning'
              : 'border-border-app text-text-secondary hover:bg-surface-2 hover:text-warning',
          )}
          aria-label={isBookmarked ? 'Remove bookmark' : 'Bookmark this lesson'}
          title={isBookmarked ? 'Remove bookmark' : 'Bookmark this lesson'}
        >
          {isBookmarked ? <BookmarkCheck size={16} /> : <Bookmark size={16} />}
        </button>
      </div>

      <div className="flex items-center gap-2">
        {hasPrev && (
          <button
            onClick={onPrev}
            className="px-4 py-3 border border-border-app rounded-xl text-sm font-semibold text-text-primary hover:bg-surface-2 transition-all flex items-center gap-1.5 min-h-[44px]"
          >
            <ChevronLeft size={15} /> Previous
          </button>
        )}
        {hasNext && (
          <button
            onClick={onNext}
            className="px-4 py-3 bg-gradient-to-br from-chart-1 to-chart-2 hover:from-chart-1 hover:to-chart-1 text-white rounded-xl text-sm font-bold transition-all flex items-center gap-1.5 min-h-[44px] shadow-[var(--shadow-sm)] hover:shadow-[var(--shadow-md)]"
          >
            Next <ChevronRight size={15} />
          </button>
        )}
      </div>
    </div>
  );
}
