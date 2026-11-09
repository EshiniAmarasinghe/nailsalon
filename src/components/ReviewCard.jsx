import React from 'react';
import { Star, CheckCircle } from 'lucide-react';

export default function ReviewCard({ review }) {
  return (
    <article className="min-w-[300px] sm:min-w-[360px] max-w-[380px] p-6 sm:p-7 rounded-3xl bg-white border border-pink-200/70 shadow-soft hover:shadow-soft-lg transition-all duration-300 flex flex-col justify-between shrink-0 select-none">
      <div>
        {/* Top bar: Stars & Sample flag */}
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-1 text-amber-400">
            {[...Array(review.rating || 5)].map((_, i) => (
              <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
            ))}
          </div>

          {/* Sample Review Badge as mandated by project requirements */}
          {review.isSample && (
            <span className="text-[10px] uppercase font-semibold tracking-wider px-2 py-0.5 rounded-full bg-pink-100 text-pink-500 border border-pink-200">
              Sample Review
            </span>
          )}
        </div>

        {/* Review Quote */}
        <p className="text-sm sm:text-base text-ink leading-relaxed font-light mb-4 italic">
          "{review.text}"
        </p>
      </div>

      {/* Author & Service Tag */}
      <div className="pt-4 border-t border-pink-100 flex items-center justify-between text-xs text-ink-soft">
        <div className="flex items-center gap-1.5">
          <CheckCircle className="w-3.5 h-3.5 text-emerald-500" />
          <span className="font-medium text-ink">{review.author}</span>
        </div>
        <span className="text-pink-400 font-medium">
          {review.serviceTag}
        </span>
      </div>
    </article>
  );
}

