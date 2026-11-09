import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, Eye } from 'lucide-react';
import Lightbox from './Lightbox';

export default function GalleryGrid({ items, categories, initialCategory = "all", limit = null }) {
  const [activeCategory, setActiveCategory] = useState(initialCategory);
  const [lightboxIndex, setLightboxIndex] = useState(null);

  // Filter items based on active category
  const filtered = activeCategory === 'all'
    ? items
    : items.filter((item) => item.category === activeCategory);

  const displayItems = limit ? filtered.slice(0, limit) : filtered;

  return (
    <div>
      {/* Category Filter Pills (if categories provided) */}
      {categories && categories.length > 0 && (
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10 sm:mb-14">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-5 py-2 rounded-full text-xs sm:text-sm font-medium transition-all duration-300 ${
                activeCategory === cat.id
                  ? 'bg-pink-300 text-ink shadow-soft font-semibold scale-105'
                  : 'bg-white/80 text-ink-soft hover:text-ink hover:bg-pink-100/60 border border-pink-200/50'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>
      )}

      {/* Masonry / Editorial Asymmetrical Grid */}
      <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
        <AnimatePresence>
          {displayItems.map((item, idx) => (
            <motion.div
              layout
              key={item.id}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.4 }}
              onClick={() => setLightboxIndex(idx)}
              className="group cursor-pointer rounded-3xl overflow-hidden bg-white border border-pink-200/70 shadow-soft hover:shadow-soft-lg transition-all duration-300 flex flex-col"
            >
              <div className="relative aspect-[4/3] overflow-hidden bg-pink-100">
                <img
                  src={item.image}
                  alt={item.title}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-108"
                />

                {/* Subtle gradient hover reveal */}
                <div className="absolute inset-0 bg-ink/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <span className="w-12 h-12 rounded-full bg-white/90 text-ink flex items-center justify-center shadow-lg transform scale-75 group-hover:scale-100 transition-transform">
                    <Eye className="w-5 h-5 text-pink-500" />
                  </span>
                </div>

                {/* Number Badge (e.g. 01, 02) */}
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md px-3 py-1 rounded-full text-xs font-mono font-semibold text-ink shadow-xs">
                  {item.number}
                </div>
              </div>

              {/* Caption */}
              <div className="p-5 flex items-center justify-between bg-white">
                <div>
                  <h4 className="font-serif text-lg text-ink font-semibold group-hover:text-pink-500 transition-colors">
                    {item.title}
                  </h4>
                  <p className="text-xs text-ink-soft capitalize mt-0.5">
                    {item.tags ? item.tags.join(' · ') : item.category}
                  </p>
                </div>
                <span className="text-xs text-pink-400 font-semibold group-hover:translate-x-1 transition-transform">
                  View →
                </span>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      {/* Lightbox Modal */}
      {lightboxIndex !== null && (
        <Lightbox
          items={displayItems}
          currentIndex={lightboxIndex}
          onClose={() => setLightboxIndex(null)}
          onNavigate={(newIdx) => setLightboxIndex(newIdx)}
        />
      )}
    </div>
  );
}

