import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Check, Clock, Sparkles, ArrowRight } from 'lucide-react';

export default function ServiceCard({ service, index = 0, detailed = false }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className={`group rounded-3xl bg-white border border-pink-200/70 overflow-hidden shadow-soft hover:shadow-soft-lg transition-all duration-300 flex flex-col ${
        detailed ? 'h-full' : ''
      }`}
    >
      {/* Image Container with hover zoom */}
      <div className="relative aspect-[4/3] overflow-hidden bg-pink-100">
        <img
          src={service.image}
          alt={service.alt || service.title}
          loading="lazy"
          className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink/30 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />

        {/* Starting Price Pill */}
        <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-md px-3.5 py-1.5 rounded-full text-xs font-semibold text-ink shadow-xs border border-pink-200">
          From {service.startingPrice}
        </div>

        {service.popular && (
          <div className="absolute top-4 left-4 bg-pink-400 text-white px-3 py-1 rounded-full text-[11px] font-semibold tracking-wider uppercase shadow-xs flex items-center gap-1">
            <Sparkles className="w-3 h-3" />
            <span>Popular</span>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between">
        <div>
          <div className="flex items-center justify-between gap-2 text-xs text-ink-soft mb-2">
            <span className="font-semibold uppercase tracking-wider text-beige-400">
              Signature Service
            </span>
            {service.duration && (
              <span className="flex items-center gap-1 text-ink-soft">
                <Clock className="w-3 h-3 text-pink-400" />
                {service.duration}
              </span>
            )}
          </div>

          <h3 className="text-xl sm:text-2xl font-serif text-ink font-semibold mb-2 group-hover:text-pink-500 transition-colors">
            {service.title}
          </h3>

          <p className="text-sm text-ink-soft leading-relaxed font-light mb-4">
            {detailed ? service.description : service.tagline}
          </p>

          {/* Inclusions if detailed mode */}
          {detailed && service.included && (
            <div className="mt-4 pt-4 border-t border-pink-100 mb-6">
              <p className="text-xs font-semibold uppercase tracking-wider text-ink mb-2.5">
                What's Included:
              </p>
              <ul className="space-y-2 text-xs text-ink-soft">
                {service.included.slice(0, 4).map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="w-4 h-4 rounded-full bg-pink-100 text-pink-500 flex items-center justify-center shrink-0 mt-0.5">
                      <Check className="w-2.5 h-2.5" />
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>

        {/* Actions */}
        <div className="pt-4 flex items-center justify-between border-t border-pink-100/70 mt-auto">
          <Link
            to={`/book?service=${service.slug}`}
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-pink-500 hover:text-pink-600 transition-colors"
          >
            <span>Book this service</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>

          {!detailed && (
            <Link
              to={`/services#${service.slug}`}
              className="text-xs text-ink-soft hover:text-ink underline underline-offset-4"
            >
              Details
            </Link>
          )}
        </div>
      </div>
    </motion.article>
  );
}

