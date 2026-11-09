import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { Sparkles, ArrowLeft, Home } from 'lucide-react';

export default function NotFound() {
  return (
    <>
      <Helmet>
        <title>404 - This Page Chipped | Dazzle Nail Salon</title>
        <meta name="description" content="The page you are looking for does not exist." />
      </Helmet>

      <section className="min-h-[80vh] flex items-center justify-center pt-28 pb-16 px-4 bg-pink-50">
        <div className="max-w-md w-full text-center space-y-6 p-8 sm:p-10 rounded-5xl bg-white border border-pink-200 shadow-soft">
          <div className="w-16 h-16 mx-auto rounded-3xl bg-pink-100 flex items-center justify-center text-pink-500 shadow-xs">
            <Sparkles className="w-8 h-8" />
          </div>

          <span className="text-xs font-semibold uppercase tracking-[0.25em] text-pink-500 block">
            404 Error
          </span>

          <h1 className="text-3xl sm:text-4xl font-serif text-ink tracking-tight">
            Oops, this page <em className="italic text-pink-500">chipped</em>.
          </h1>

          <p className="text-sm text-ink-soft font-light leading-relaxed">
            The page you are looking for may have been moved, polished away, or never existed in the first place.
          </p>

          <div className="pt-2">
            <Link
              to="/"
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-pink-300 hover:bg-pink-400 text-ink font-semibold text-sm shadow-soft transition-all"
            >
              <Home className="w-4 h-4 text-ink" />
              <span>Return to Homepage</span>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

