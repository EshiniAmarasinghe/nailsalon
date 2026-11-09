import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { Clock, Check, Sparkles, Calendar, ChevronDown, ChevronUp, ArrowRight } from 'lucide-react';

import SectionHeading from '../components/SectionHeading';
import CTA from '../components/CTA';
import { services, serviceFaqs } from '../data/services';

function FaqItem({ item, isOpen, onToggle }) {
  return (
    <div className="border-b border-pink-200/80 last:border-none">
      <button
        onClick={onToggle}
        className="w-full py-5 flex items-center justify-between text-left text-base sm:text-lg font-serif font-semibold text-ink hover:text-pink-500 transition-colors focus:outline-none"
        aria-expanded={isOpen}
      >
        <span>{item.q}</span>
        <span className="w-8 h-8 rounded-full bg-pink-100 text-pink-500 flex items-center justify-center shrink-0 ml-4 transition-transform">
          {isOpen ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
        </span>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <p className="pb-5 text-sm text-ink-soft leading-relaxed font-light">
              {item.a}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function Services() {
  const [openFaq, setOpenFaq] = useState(0);

  return (
    <>
      <Helmet>
        <title>Services & Pricing Menu | Dazzle Nail Salon · Seeduwa</title>
        <meta
          name="description"
          content="Explore gel extensions, sculpted acrylic nails, hand-painted nail art, broken nail repair, and deluxe spa manicures in Seeduwa, Colombo."
        />
      </Helmet>

      {/* Hero */}
      <section className="pt-32 pb-16 sm:pb-24 bg-pink-100/40 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <SectionHeading
            eyebrow="Curated Salon Menu"
            titlePart1="Thoughtful Services,"
            italicPart="impeccable finish"
            description="Every treatment is performed using hypoallergenic, medical-grade hygiene protocols and long-wearing formulations that treat your natural nails with gentle care."
          />
        </div>
      </section>

      {/* Main Services Container with Desktop Sticky Side Nav */}
      <section className="py-20 sm:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
            
            {/* Sticky Sidebar on Desktop */}
            <aside className="lg:col-span-4 hidden lg:block">
              <div className="sticky top-28 p-6 rounded-4xl bg-pink-50/70 border border-pink-200/70 shadow-xs space-y-6">
                <div>
                  <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-pink-500 mb-1">
                    Quick Navigation
                  </h3>
                  <p className="text-xl font-serif text-ink font-semibold">
                    Service Categories
                  </p>
                </div>

                <nav className="space-y-1.5">
                  {services.map((s) => (
                    <a
                      key={s.id}
                      href={`#${s.slug}`}
                      className="flex items-center justify-between p-3 rounded-2xl text-sm font-medium text-ink-soft hover:text-ink hover:bg-pink-100 transition-colors"
                    >
                      <span>{s.title}</span>
                      <span className="text-xs font-mono text-pink-400">{s.startingPrice}</span>
                    </a>
                  ))}
                </nav>

                <div className="p-4 rounded-2xl bg-white border border-pink-200 text-xs text-ink-soft space-y-2">
                  <p className="font-semibold text-ink">Have a custom design?</p>
                  <p className="font-light">Send us your inspiration pictures on WhatsApp or through our booking form.</p>
                  <Link
                    to="/book"
                    className="inline-flex items-center gap-1 text-pink-500 font-semibold hover:underline pt-1"
                  >
                    <span>Start Booking Request</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            </aside>

            {/* Services Detailed List with Anchor IDs */}
            <main className="lg:col-span-8 space-y-16 sm:space-y-24">
              {services.map((service, index) => (
                <section
                  key={service.id}
                  id={service.slug}
                  className="scroll-mt-28 p-6 sm:p-10 rounded-5xl bg-pink-50/40 border border-pink-200/70 shadow-soft hover:shadow-soft-lg transition-all"
                >
                  <div className="flex flex-col md:flex-row gap-8 items-start">
                    
                    {/* Image */}
                    <div className="w-full md:w-2/5 aspect-[4/3] rounded-3xl overflow-hidden shadow-soft bg-pink-100 shrink-0 relative group">
                      <img
                        src={service.image}
                        alt={service.alt}
                        loading="lazy"
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                      />
                      {service.popular && (
                        <div className="absolute top-3 left-3 bg-pink-400 text-white text-[11px] font-semibold px-2.5 py-1 rounded-full uppercase tracking-wider shadow-xs flex items-center gap-1">
                          <Sparkles className="w-3 h-3" />
                          <span>Popular</span>
                        </div>
                      )}
                    </div>

                    {/* Content */}
                    <div className="w-full md:w-3/5 space-y-4">
                      <div className="flex flex-wrap items-center justify-between gap-2">
                        <span className="text-xs font-semibold uppercase tracking-[0.2em] text-beige-400">
                          {service.duration}
                        </span>
                        <span className="px-3.5 py-1 rounded-full bg-white border border-pink-200 font-serif font-bold text-ink text-sm shadow-xs">
                          From {service.startingPrice}
                        </span>
                      </div>

                      <h3 className="text-2xl sm:text-3xl font-serif text-ink font-semibold">
                        {service.title}
                      </h3>

                      <p className="text-xs sm:text-sm font-medium text-pink-500 italic">
                        "{service.tagline}"
                      </p>

                      <p className="text-sm text-ink-soft leading-relaxed font-light">
                        {service.description}
                      </p>

                      {/* Inclusions */}
                      <div className="pt-3 border-t border-pink-200/60">
                        <p className="text-xs font-semibold uppercase tracking-wider text-ink mb-2">
                          Treatment Steps & Inclusions:
                        </p>
                        <ul className="space-y-1.5 text-xs text-ink-soft">
                          {service.included.map((inc, i) => (
                            <li key={i} className="flex items-start gap-2">
                              <span className="w-3.5 h-3.5 rounded-full bg-pink-100 text-pink-500 flex items-center justify-center shrink-0 mt-0.5">
                                <Check className="w-2.5 h-2.5" />
                              </span>
                              <span>{inc}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* CTA button with ?service= prefill */}
                      <div className="pt-4">
                        <Link
                          to={`/book?service=${service.slug}`}
                          className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-pink-300 hover:bg-pink-400 text-ink font-semibold text-sm shadow-soft transition-all"
                        >
                          <Calendar className="w-4 h-4 text-ink" />
                          <span>Book this service</span>
                        </Link>
                      </div>

                    </div>

                  </div>
                </section>
              ))}
            </main>

          </div>

        </div>
      </section>

      {/* FAQ Accordion Section */}
      <section className="py-20 sm:py-24 bg-beige-50 border-t border-beige-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <SectionHeading
            eyebrow="Care & Policies"
            titlePart1="Frequently asked"
            italicPart="nail questions"
            description="Helpful guidance regarding set longevity, salon hygiene, aftercare tips, and bookings."
            className="mb-12"
          />

          <div className="bg-white p-6 sm:p-10 rounded-4xl border border-beige-200 shadow-soft">
            {serviceFaqs.map((faq, idx) => (
              <FaqItem
                key={idx}
                item={faq}
                isOpen={openFaq === idx}
                onToggle={() => setOpenFaq(openFaq === idx ? null : idx)}
              />
            ))}
          </div>

        </div>
      </section>

      {/* CTA */}
      <CTA
        titlePart1="Ready to schedule your"
        italicPart="nail appointment?"
        description="Choose your service and date, and we'll confirm your reservation promptly."
      />
    </>
  );
}

