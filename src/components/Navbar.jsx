import React, { useState, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, Menu, X, Phone, Calendar, Clock, MapPin } from 'lucide-react';
import { siteConfig } from '../data/site';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  // Scroll detection to adjust height and shadow
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile drawer on route change
  useEffect(() => {
    setMobileOpen(false);
  }, [location]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileOpen]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ease-in-out ${
          scrolled
            ? 'bg-white/90 backdrop-blur-md shadow-soft py-3 border-b border-pink-200/50'
            : 'bg-white/60 backdrop-blur-sm py-5 border-b border-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          
          {/* Logo */}
          <Link
            to="/"
            className="group flex items-center gap-2.5 focus:outline-none"
            aria-label="Dazzle Nail Salon - Return to home"
          >
            <div className="w-10 h-10 rounded-2xl bg-gradient-to-br from-pink-200 to-pink-300 flex items-center justify-center shadow-sm group-hover:scale-105 transition-transform duration-300">
              <svg className="w-6 h-6 text-pink-500 fill-current" viewBox="0 0 24 24">
                <path d="M12 2C9.5 7 7 10 7 14.5C7 17.5 9.2 20 12 20C14.8 20 17 17.5 17 14.5C17 10 14.5 7 12 2Z" opacity="0.9" />
                <circle cx="15.5" cy="5.5" r="1.5" fill="#C9AE8E" />
              </svg>
            </div>
            <div className="flex flex-col">
              <span className="font-serif text-2xl font-semibold tracking-tight text-ink leading-none group-hover:text-pink-500 transition-colors">
                Dazzle
              </span>
              <span className="text-[10px] uppercase font-semibold tracking-[0.25em] text-ink-soft">
                Nail Salon
              </span>
            </div>
          </Link>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex items-center gap-1 lg:gap-2 bg-white/70 px-4 py-1.5 rounded-full border border-pink-200/60 shadow-xs">
            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                className={({ isActive }) =>
                  `px-4 py-1.5 rounded-full text-sm font-medium transition-all duration-200 ${
                    isActive
                      ? 'bg-pink-100 text-pink-500 font-semibold shadow-xs'
                      : 'text-ink-soft hover:text-ink hover:bg-pink-50'
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}
          </nav>

          {/* Action Button & Mobile Toggle */}
          <div className="flex items-center gap-3">
            <Link
              to="/book"
              className="hidden sm:inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-pink-300 hover:bg-pink-400 text-ink font-semibold text-sm shadow-soft hover:shadow-soft-lg transition-all duration-300 transform hover:-translate-y-0.5 active:translate-y-0"
            >
              <Calendar className="w-4 h-4 text-ink" />
              <span>Book Your Visit</span>
            </Link>

            {/* Mobile Hamburger Button */}
            <button
              type="button"
              onClick={() => setMobileOpen(!mobileOpen)}
              className="md:hidden w-10 h-10 rounded-full bg-pink-100 border border-pink-200 flex items-center justify-center text-ink hover:bg-pink-200 transition-colors"
              aria-label={mobileOpen ? 'Close navigation menu' : 'Open navigation menu'}
              aria-expanded={mobileOpen}
            >
              {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.28, ease: 'easeInOut' }}
            className="fixed inset-0 z-30 bg-pink-50/98 backdrop-blur-xl md:hidden pt-24 pb-8 px-6 flex flex-col justify-between overflow-y-auto"
          >
            <div className="space-y-4">
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-ink-soft block">
                Menu Navigation
              </span>
              <nav className="flex flex-col space-y-2">
                {navLinks.map((link, idx) => (
                  <motion.div
                    key={link.name}
                    initial={{ opacity: 0, x: -16 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.05 * idx, duration: 0.3 }}
                  >
                    <NavLink
                      to={link.path}
                      onClick={() => setMobileOpen(false)}
                      className={({ isActive }) =>
                        `flex items-center justify-between text-2xl font-serif py-3 border-b border-pink-200/50 ${
                          isActive
                            ? 'text-pink-500 font-semibold italic'
                            : 'text-ink hover:text-pink-400'
                        }`
                      }
                    >
                      <span>{link.name}</span>
                      <span className="text-xs font-sans tracking-widest text-ink-soft">0{idx + 1}</span>
                    </NavLink>
                  </motion.div>
                ))}
              </nav>

              <div className="pt-4">
                <Link
                  to="/book"
                  onClick={() => setMobileOpen(false)}
                  className="w-full flex items-center justify-center gap-2 py-3.5 rounded-full bg-pink-300 hover:bg-pink-400 text-ink font-semibold text-base shadow-soft transition-all"
                >
                  <Calendar className="w-5 h-5 text-ink" />
                  <span>Book Your Visit Now</span>
                </Link>
              </div>
            </div>

            {/* Quick Contact snippet in Mobile Drawer */}
            <div className="mt-8 pt-6 border-t border-pink-200/70 text-sm text-ink-soft space-y-2.5">
              <div className="flex items-center gap-2.5">
                <Clock className="w-4 h-4 text-pink-400" />
                <span>{siteConfig.hours.display}</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-pink-400" />
                <a href={`tel:${siteConfig.phone.tel}`} className="hover:text-pink-500 font-medium">
                  {siteConfig.phone.display}
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <MapPin className="w-4 h-4 text-pink-400 shrink-0" />
                <span className="truncate">{siteConfig.address.full}</span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

