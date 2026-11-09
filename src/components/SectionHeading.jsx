import React from 'react';
import { motion } from 'framer-motion';

/**
 * SectionHeading - Reusable editorial heading component
 * Supports an eyebrow, heading with italicized emphasis, and subtext
 */
export default function SectionHeading({
  eyebrow,
  titlePart1,
  italicPart,
  titlePart2 = "",
  description,
  align = "center", // "center" | "left"
  className = "",
  dark = false,
}) {
  const isCenter = align === "center";

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      className={`max-w-3xl ${isCenter ? 'mx-auto text-center' : 'text-left'} ${className}`}
    >
      {eyebrow && (
        <div className={`inline-flex items-center gap-2 mb-3.5 text-xs font-semibold tracking-[0.22em] uppercase text-ink-soft ${isCenter ? 'justify-center' : ''}`}>
          <span className="w-1.5 h-1.5 rounded-full bg-pink-400"></span>
          <span>{eyebrow}</span>
          <span className="w-1.5 h-1.5 rounded-full bg-pink-400"></span>
        </div>
      )}

      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-ink tracking-tight leading-[1.18] mb-4">
        {titlePart1}{' '}
        {italicPart && (
          <em className="font-normal italic text-pink-500 font-serif">
            {italicPart}
          </em>
        )}
        {titlePart2 && ` ${titlePart2}`}
      </h2>

      {description && (
        <p className="text-base sm:text-lg text-ink-soft leading-relaxed max-w-2xl font-light mx-auto">
          {description}
        </p>
      )}
    </motion.div>
  );
}

