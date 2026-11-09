import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { Sparkles, Calendar } from 'lucide-react';

import SectionHeading from '../components/SectionHeading';
import GalleryGrid from '../components/GalleryGrid';
import { galleryCategories, galleryItems } from '../data/gallery';

export default function Gallery() {
  return (
    <>
      <Helmet>
        <title>Nail Art Portfolio & Gallery | Dazzle Nail Salon · Seeduwa</title>
        <meta
          name="description"
          content="Browse our gallery of delicate French tips, soft gel extensions, sculpted acrylics, botanical nail art, and bridal sets at Dazzle Nail Salon in Seeduwa."
        />
      </Helmet>

      {/* Hero */}
      <section className="pt-32 pb-16 sm:pb-24 bg-pink-100/40 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <SectionHeading
            eyebrow="Our Visual Journal"
            titlePart1="Artistry in Every"
            italicPart="delicate stroke"
            description="Explore our curated portfolio of guest manicures. Filter by extension type, delicate French finishes, or hand-painted botanical art."
          />
        </div>
      </section>

      {/* Gallery Section with Animated Filtering & Lightbox */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <GalleryGrid
            items={galleryItems}
            categories={galleryCategories}
            initialCategory="all"
          />
        </div>
      </section>

      {/* Love a design? Book it CTA */}
      <section className="py-20 bg-pink-100/60 border-t border-pink-200/60 text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/90 border border-pink-200 text-xs font-semibold uppercase tracking-[0.2em] text-pink-500 shadow-xs">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Found Your Inspiration?</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-serif text-ink tracking-tight">
            Love a design? <em className="italic text-pink-500 font-normal">Book it.</em>
          </h2>

          <p className="text-base sm:text-lg text-ink-soft max-w-xl mx-auto font-light leading-relaxed">
            Take a screenshot or note the design number, then send it through our quick booking request form or chat with us on WhatsApp.
          </p>

          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/book"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-pink-300 hover:bg-pink-400 text-ink font-semibold text-base shadow-soft hover:shadow-soft-lg transition-all"
            >
              <Calendar className="w-5 h-5 text-ink" />
              <span>Request An Appointment</span>
            </Link>

            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-6 py-4 rounded-full bg-white hover:bg-pink-50 text-ink border border-pink-200 text-base font-medium shadow-xs transition-all"
            >
              <span>Ask a Question</span>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

