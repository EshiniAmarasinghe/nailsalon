import React, { Suspense, lazy } from 'react';
import { HashRouter, Routes, Route, useLocation } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { AnimatePresence, motion } from 'framer-motion';

import Navbar from './components/Navbar';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';
import useScrollTop from './hooks/useScrollTop';

// Code-split routes with React.lazy
const Home = lazy(() => import('./pages/Home'));
const About = lazy(() => import('./pages/About'));
const Services = lazy(() => import('./pages/Services'));
const Gallery = lazy(() => import('./pages/Gallery'));
const Book = lazy(() => import('./pages/Book'));
const Contact = lazy(() => import('./pages/Contact'));
const Privacy = lazy(() => import('./pages/Privacy'));
const Terms = lazy(() => import('./pages/Terms'));
const NotFound = lazy(() => import('./pages/NotFound'));

// Soft loading skeleton fallback
function PageLoader() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-pink-50">
      <div className="flex flex-col items-center gap-3">
        <div className="w-10 h-10 rounded-2xl bg-gradient-to-br from-pink-200 to-pink-300 animate-pulse flex items-center justify-center">
          <svg className="w-6 h-6 text-pink-500 fill-current" viewBox="0 0 24 24">
            <path d="M12 2C9.5 7 7 10 7 14.5C7 17.5 9.2 20 12 20C14.8 20 17 17.5 17 14.5C17 10 14.5 7 12 2Z" />
          </svg>
        </div>
        <span className="text-xs uppercase tracking-widest text-ink-soft font-semibold">
          Dazzle
        </span>
      </div>
    </div>
  );
}

function AnimatedRoutes() {
  const location = useLocation();
  useScrollTop();

  return (
    <main id="main-content" className="flex-1 flex flex-col focus:outline-none" tabIndex="-1">
      <AnimatePresence mode="wait">
        <motion.div
          key={location.pathname}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.28, ease: 'easeInOut' }}
          className="flex-1 flex flex-col"
        >
          <Suspense fallback={<PageLoader />}>
            <Routes location={location}>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/services" element={<Services />} />
              <Route path="/gallery" element={<Gallery />} />
              <Route path="/book" element={<Book />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/privacy" element={<Privacy />} />
              <Route path="/terms" element={<Terms />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Suspense>
        </motion.div>
      </AnimatePresence>
    </main>
  );
}

export default function App() {
  return (
    <HelmetProvider>
      <HashRouter>
        <div className="min-h-screen flex flex-col bg-pink-50 text-ink antialiased">
          {/* Accessible Skip Link */}
          <a
            href="#main-content"
            className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-pink-300 focus:text-ink focus:rounded-full focus:shadow-md focus:font-medium text-xs"
          >
            Skip to main content
          </a>
          <Navbar />
          <AnimatedRoutes />
          <Footer />
          <WhatsAppButton />
        </div>
      </HashRouter>
    </HelmetProvider>
  );
}

