import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Calendar, Sparkles, ArrowRight, Star, ChevronDown } from 'lucide-react';
import { siteConfig } from '../data/site';

// Slideshow images showcasing French tips, pastel gel, and delicate nail art
// REPLACE WITH REAL SALON PHOTOS
const HERO_SLIDES = [
  {
    url: "https://images.unsplash.com/photo-1632345031435-8727f6897d53?q=80&w=1920&auto=format&fit=crop",
    alt: "Close-up of hands with flawless French-tip and pastel nails",
    caption: "Micro-French & Milky Blush",
  },
  {
    url: "https://images.unsplash.com/photo-1604654894610-df63bc536371?q=80&w=1920&auto=format&fit=crop",
    alt: "Sculpted acrylic nails with smooth almond shaping and glossy shine",
    caption: "Sculpted Almond Acrylics",
  },
  {
    url: "https://images.unsplash.com/photo-1519014816548-bf5fe059798b?q=80&w=1920&auto=format&fit=crop",
    alt: "Delicate hand-painted botanical nail art on pastel pink nails",
    caption: "Botanical Nail Artistry",
  },
  {
    url: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?q=80&w=1920&auto=format&fit=crop",
    alt: "Soft gel extensions in natural nude tone",
    caption: "Featherlight Gel Extensions",
  },
];

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Auto-advance slideshow every 5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative min-h-[92vh] sm:min-h-screen flex items-center justify-center overflow-hidden pt-20">
      
      {/* Background Slideshow with Ken Burns Zoom & Crossfade */}
      <div className="absolute inset-0 z-0">
        <AnimatePresence mode="sync">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0, scale: 1.08 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{
              opacity: { duration: 1.4, ease: 'easeInOut' },
              scale: { duration: 7, ease: 'linear' },
            }}
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url(${HERO_SLIDES[currentSlide].url})` }}
            role="img"
            aria-label={HERO_SLIDES[currentSlide].alt}
          />
        </AnimatePresence>

        {/* Soft White-Pink Radial & Linear Gradient Overlay for Readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-white/90 via-pink-50/80 to-pink-50/95" />
        <div className="absolute inset-0 bg-radial-gradient from-transparent via-pink-100/40 to-white/70 backdrop-blur-[1.5px]" />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-8 pb-16">
        
        {/* Eyebrow */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white/80 border border-pink-200/80 shadow-xs mb-6"
        >
          <Sparkles className="w-3.5 h-3.5 text-pink-500" />
          <span className="text-xs font-semibold uppercase tracking-[0.22em] text-ink">
            Nail Studio · Seeduwa, Colombo
          </span>
          <span className="w-1.5 h-1.5 rounded-full bg-pink-400"></span>
        </motion.div>

        {/* Headline with editorial italic */}
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="text-4xl sm:text-6xl md:text-7xl lg:text-[5.5rem] font-serif text-ink tracking-tight leading-[1.08] mb-6"
        >
          Nails That <em className="font-normal italic text-pink-500">Dazzle</em>
        </motion.h1>

        {/* Sub-text */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.35 }}
          className="text-lg sm:text-xl md:text-2xl text-ink-soft font-light max-w-2xl mx-auto leading-relaxed mb-10"
        >
          {siteConfig.subTagline}
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-5"
        >
          <Link
            to="/book"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-full bg-pink-300 hover:bg-pink-400 text-ink font-semibold text-base shadow-soft hover:shadow-soft-lg transition-all duration-300 transform hover:-translate-y-0.5"
          >
            <Calendar className="w-4 h-4 text-ink" />
            <span>Book your visit</span>
          </Link>

          <Link
            to="/gallery"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-full bg-white/80 hover:bg-white text-ink border border-beige-400/80 font-medium text-base shadow-xs hover:border-beige-400 transition-all duration-300 transform hover:-translate-y-0.5"
          >
            <span>View our work</span>
            <ArrowRight className="w-4 h-4 text-ink-soft" />
          </Link>
        </motion.div>

        {/* Slide Indicator Dots */}
        <div className="flex items-center justify-center gap-2 mt-12">
          {HERO_SLIDES.map((slide, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentSlide(idx)}
              className={`h-1.5 transition-all duration-300 rounded-full ${
                currentSlide === idx ? 'w-8 bg-pink-400' : 'w-2 bg-pink-200 hover:bg-pink-300'
              }`}
              aria-label={`Jump to slide ${idx + 1}: ${slide.caption}`}
            />
          ))}
        </div>
      </div>

      {/* Floating Google Rating Badge (Bottom-Left) */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.7 }}
        className="absolute bottom-6 left-6 hidden md:flex items-center gap-3 px-4 py-2.5 rounded-2xl bg-white/90 backdrop-blur-md border border-pink-200/70 shadow-soft"
      >
        <div className="flex items-center gap-1 text-amber-500">
          <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
          <span className="font-semibold text-ink text-sm">5.0</span>
        </div>
        <div className="h-4 w-px bg-pink-200" />
        <span className="text-xs text-ink-soft">
          207 Google reviews
        </span>
      </motion.div>

      {/* Floating Opening Badge (Bottom-Right) */}
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.7 }}
        className="absolute bottom-6 right-6 hidden md:flex items-center gap-2 px-4 py-2.5 rounded-2xl bg-white/90 backdrop-blur-md border border-pink-200/70 shadow-soft text-xs text-ink-soft"
      >
        <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
        <span>Open today until <strong>7:00 PM</strong></span>
      </motion.div>

    </section>
  );
}

