import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Calendar, MessageSquare, Sparkles, Clock, Check } from 'lucide-react';
import { siteConfig } from '../data/site';

export default function CTA({
  titlePart1 = "Ready for your",
  italicPart = "fresh set?",
  description = "Join our community of happy clients in Seeduwa. Book your customized appointment in seconds, or reach out to us directly on WhatsApp.",
  showFloatingChips = true,
}) {
  return (
    <section className="py-20 sm:py-24 bg-pink-100/70 relative overflow-hidden">
      {/* Decorative background aura circles */}
      <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-pink-200/50 blur-3xl pointer-events-none" />
      <div className="absolute -bottom-24 -left-24 w-96 h-96 rounded-full bg-beige-200/50 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Headline and Call-to-actions */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-7 space-y-6 text-center lg:text-left"
          >
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/90 border border-pink-200 text-xs font-semibold uppercase tracking-[0.2em] text-pink-500 shadow-xs">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Easy Instant Reservation</span>
            </div>

            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-serif text-ink tracking-tight leading-[1.12]">
              {titlePart1}{' '}
              <em className="font-normal italic text-pink-500">{italicPart}</em>
            </h2>

            <p className="text-base sm:text-lg text-ink-soft max-w-xl font-light leading-relaxed mx-auto lg:mx-0">
              {description}
            </p>

            {/* Quick checkmarks */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 sm:gap-6 text-xs sm:text-sm text-ink-soft pt-2">
              <div className="flex items-center gap-1.5">
                <Check className="w-4 h-4 text-emerald-500" />
                <span>Zero hassle confirmation</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Check className="w-4 h-4 text-emerald-500" />
                <span>Sanitized fresh implements</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Check className="w-4 h-4 text-emerald-500" />
                <span>Open daily until 7:00 PM</span>
              </div>
            </div>

            {/* Buttons */}
            <div className="pt-4 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <Link
                to="/book"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-full bg-pink-300 hover:bg-pink-400 text-ink font-semibold text-base shadow-soft hover:shadow-soft-lg transition-all transform hover:-translate-y-0.5"
              >
                <Calendar className="w-5 h-5 text-ink" />
                <span>Start your booking request</span>
              </Link>

              <a
                href={siteConfig.whatsapp.url}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-4 rounded-full bg-white hover:bg-beige-50 text-ink border border-pink-200 font-medium text-base shadow-xs hover:border-pink-300 transition-all transform hover:-translate-y-0.5"
              >
                <MessageSquare className="w-5 h-5 text-[#25D366]" />
                <span>Chat on WhatsApp</span>
              </a>
            </div>
          </motion.div>

          {/* Right Column: Rounded image with floating editorial chips */}
          <motion.div
            initial={{ opacity: 0, scale: 0.94 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-5 relative"
          >
            <div className="relative mx-auto max-w-md aspect-[4/5] rounded-5xl overflow-hidden shadow-soft-lg border-4 border-white">
              <img
                src="https://images.unsplash.com/photo-1632345031435-8727f6897d53?q=80&w=1000&auto=format&fit=crop"
                alt="Client relaxing while receiving delicate gel nail extensions"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/30 via-transparent to-transparent" />
            </div>

            {/* Three floating editorial chips: Your style · Your colour · Your time */}
            {showFloatingChips && (
              <>
                <motion.div
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3, duration: 0.5 }}
                  className="absolute -top-4 -left-4 sm:top-6 sm:-left-8 bg-white/95 backdrop-blur-md px-4 py-2 rounded-2xl shadow-hover border border-pink-200 text-xs font-serif italic text-pink-500 font-medium"
                >
                  ✦ Your style
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.45, duration: 0.5 }}
                  className="absolute top-1/2 -right-4 sm:-right-8 bg-white/95 backdrop-blur-md px-4 py-2 rounded-2xl shadow-hover border border-pink-200 text-xs font-serif italic text-ink font-medium"
                >
                  ✦ Your colour
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.6, duration: 0.5 }}
                  className="absolute -bottom-4 left-6 sm:bottom-6 sm:-left-6 bg-white/95 backdrop-blur-md px-4 py-2 rounded-2xl shadow-hover border border-beige-300 text-xs font-serif italic text-beige-400 font-medium"
                >
                  ✦ Your time
                </motion.div>
              </>
            )}
          </motion.div>

        </div>
      </div>
    </section>
  );
}

