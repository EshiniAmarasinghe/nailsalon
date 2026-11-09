import React, { useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight, Calendar, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Lightbox({ items, currentIndex, onClose, onNavigate }) {
  const item = items[currentIndex];

  const handleKeyDown = useCallback(
    (e) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') onNavigate((currentIndex - 1 + items.length) % items.length);
      if (e.key === 'ArrowRight') onNavigate((currentIndex + 1) % items.length);
    },
    [currentIndex, items.length, onClose, onNavigate]
  );

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [handleKeyDown]);

  if (!item) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.25 }}
        className="fixed inset-0 z-50 bg-ink/80 backdrop-blur-md flex items-center justify-center p-4 sm:p-6"
        onClick={onClose}
        role="dialog"
        aria-modal="true"
        aria-label={`Lightbox preview: ${item.title}`}
      >
        {/* Modal Window Container */}
        <motion.div
          initial={{ scale: 0.95, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.95, opacity: 0 }}
          transition={{ duration: 0.25 }}
          className="relative max-w-4xl w-full max-h-[90vh] bg-white rounded-3xl overflow-hidden shadow-2xl flex flex-col md:flex-row border border-pink-200"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-white/90 backdrop-blur-md text-ink hover:text-pink-500 hover:bg-white flex items-center justify-center shadow-md transition-all"
            aria-label="Close lightbox preview"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Image Canvas with Nav Arrows */}
          <div className="relative md:w-3/5 bg-pink-100 flex items-center justify-center min-h-[320px] md:min-h-[480px]">
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-full object-cover max-h-[60vh] md:max-h-[80vh]"
            />

            {/* Prev Arrow */}
            <button
              onClick={() => onNavigate((currentIndex - 1 + items.length) % items.length)}
              className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/80 hover:bg-white text-ink flex items-center justify-center shadow-md transition-all"
              aria-label="Previous photo"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            {/* Next Arrow */}
            <button
              onClick={() => onNavigate((currentIndex + 1) % items.length)}
              className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/80 hover:bg-white text-ink flex items-center justify-center shadow-md transition-all"
              aria-label="Next photo"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>

          {/* Details Sidebar */}
          <div className="p-6 md:p-8 md:w-2/5 flex flex-col justify-between bg-pink-50/50">
            <div>
              <div className="flex items-center justify-between text-xs font-semibold text-ink-soft mb-3">
                <span className="uppercase tracking-[0.2em] text-pink-500">
                  {item.category} Set
                </span>
                <span className="font-mono text-ink-soft">
                  {String(currentIndex + 1).padStart(2, '0')} / {String(items.length).padStart(2, '0')}
                </span>
              </div>

              <h3 className="text-2xl font-serif text-ink font-semibold mb-3">
                {item.title}
              </h3>

              <p className="text-sm text-ink-soft font-light leading-relaxed mb-6">
                {item.description}
              </p>

              {item.tags && (
                <div className="flex flex-wrap gap-1.5 mb-6">
                  {item.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-1 rounded-full bg-white border border-pink-200 text-xs text-ink-soft"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              )}
            </div>

            <div className="pt-6 border-t border-pink-200/60">
              <Link
                to={`/book?service=${encodeURIComponent(item.category)}&style=${encodeURIComponent(item.title)}`}
                onClick={onClose}
                className="w-full inline-flex items-center justify-center gap-2 py-3 px-5 rounded-full bg-pink-300 hover:bg-pink-400 text-ink font-semibold text-sm shadow-soft transition-all"
              >
                <Calendar className="w-4 h-4 text-ink" />
                <span>Love this design? Book it</span>
              </Link>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}

