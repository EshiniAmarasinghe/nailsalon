import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { useCountUp } from '../hooks/useCountUp';
import { siteConfig } from '../data/site';

function SingleStat({ stat, index }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });
  const displayVal = useCountUp(stat.value, 1800, isInView, stat.decimals);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.12 }}
      className="flex flex-col items-center text-center p-6 sm:p-8 rounded-3xl bg-white/70 border border-pink-200/60 shadow-xs hover:shadow-soft transition-all duration-300 group"
    >
      <div className="font-serif text-4xl sm:text-5xl lg:text-6xl text-ink font-semibold tracking-tight mb-2 flex items-baseline">
        <span className="text-pink-500">{displayVal}</span>
        {stat.suffix && <span className="text-beige-400 font-sans ml-1 text-3xl sm:text-4xl">{stat.suffix}</span>}
      </div>

      <div className="text-base sm:text-lg font-medium text-ink mb-1 group-hover:text-pink-500 transition-colors">
        {stat.label}
      </div>

      <div className="text-xs sm:text-sm text-ink-soft font-light">
        {stat.sub}
      </div>
    </motion.div>
  );
}

export default function StatCounter() {
  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
      {siteConfig.stats.map((stat, idx) => (
        <SingleStat key={stat.label} stat={stat} index={idx} />
      ))}
    </div>
  );
}

