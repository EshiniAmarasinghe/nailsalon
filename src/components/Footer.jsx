import React from 'react';
import { Link } from 'react-router-dom';
import { Sparkles, Phone, MapPin, Clock, MessageSquare, Instagram, Facebook, ArrowUpRight } from 'lucide-react';
import { siteConfig } from '../data/site';

export default function Footer() {
  return (
    <footer className="bg-beige-100 border-t border-beige-200 text-ink pt-16 pb-12 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-12 border-b border-beige-200">
          
          {/* Brand Col */}
          <div className="lg:col-span-4 space-y-5">
            <Link to="/" className="inline-flex items-center gap-2.5">
              <div className="w-10 h-10 rounded-2xl bg-gradient-to-br from-pink-200 to-pink-300 flex items-center justify-center shadow-xs">
                <svg className="w-6 h-6 text-pink-500 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2C9.5 7 7 10 7 14.5C7 17.5 9.2 20 12 20C14.8 20 17 17.5 17 14.5C17 10 14.5 7 12 2Z" opacity="0.9" />
                  <circle cx="15.5" cy="5.5" r="1.5" fill="#C9AE8E" />
                </svg>
              </div>
              <div className="flex flex-col">
                <span className="font-serif text-2xl font-bold tracking-tight text-ink">
                  Dazzle
                </span>
                <span className="text-[10px] uppercase font-semibold tracking-[0.25em] text-ink-soft">
                  Nail Salon
                </span>
              </div>
            </Link>

            <p className="text-sm text-ink-soft leading-relaxed max-w-sm font-light">
              Delicate nail art, flawless gel and acrylic sets, and a calm, hygienic space made just for you in Seeduwa, Colombo.
            </p>

            {/* Google Rating Snippet */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/80 border border-beige-200 shadow-xs text-xs font-medium text-ink">
              <span className="text-amber-500 text-sm">★★★★★</span>
              <span><strong>5.0</strong> / 5 ({siteConfig.ratings.reviewCount} Google reviews)</span>
            </div>

            {/* Social Icons */}
            <div className="flex items-center gap-3 pt-1">
              <a
                href={siteConfig.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white/90 border border-beige-200 flex items-center justify-center text-ink-soft hover:text-pink-500 hover:border-pink-300 transition-colors"
                aria-label="Follow Dazzle Nail Salon on Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href={siteConfig.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white/90 border border-beige-200 flex items-center justify-center text-ink-soft hover:text-pink-500 hover:border-pink-300 transition-colors"
                aria-label="Follow Dazzle Nail Salon on Facebook"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href={siteConfig.whatsapp.url}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white/90 border border-beige-200 flex items-center justify-center text-ink-soft hover:text-pink-500 hover:border-pink-300 transition-colors"
                aria-label="Chat with Dazzle Nail Salon on WhatsApp"
              >
                <MessageSquare className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Explore Links */}
          <div className="lg:col-span-2 space-y-4">
            <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-ink">
              Explore
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link to="/" className="text-ink-soft hover:text-pink-500 transition-colors">Home</Link>
              </li>
              <li>
                <Link to="/about" className="text-ink-soft hover:text-pink-500 transition-colors">Our Story</Link>
              </li>
              <li>
                <Link to="/services" className="text-ink-soft hover:text-pink-500 transition-colors">Services & Pricing</Link>
              </li>
              <li>
                <Link to="/gallery" className="text-ink-soft hover:text-pink-500 transition-colors">Nail Art Gallery</Link>
              </li>
              <li>
                <Link to="/contact" className="text-ink-soft hover:text-pink-500 transition-colors">Visit & Contact</Link>
              </li>
              <li>
                <Link to="/book" className="text-pink-500 font-medium hover:underline inline-flex items-center gap-1">
                  Book Appointment <ArrowUpRight className="w-3.5 h-3.5" />
                </Link>
              </li>
            </ul>
          </div>

          {/* Signature Services */}
          <div className="lg:col-span-3 space-y-4">
            <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-ink">
              Signature Sets
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link to="/services#gel-extensions" className="text-ink-soft hover:text-pink-500 transition-colors">
                  Gel Extensions
                </Link>
              </li>
              <li>
                <Link to="/services#acrylic" className="text-ink-soft hover:text-pink-500 transition-colors">
                  Sculpted Acrylics
                </Link>
              </li>
              <li>
                <Link to="/services#nail-art" className="text-ink-soft hover:text-pink-500 transition-colors">
                  Custom Nail Art & Chrome
                </Link>
              </li>
              <li>
                <Link to="/services#repair" className="text-ink-soft hover:text-pink-500 transition-colors">
                  Broken Nail Emergency Repair
                </Link>
              </li>
              <li>
                <Link to="/services#manicure-pedicure" className="text-ink-soft hover:text-pink-500 transition-colors">
                  Deluxe Spa Manicure
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact & Hours */}
          <div className="lg:col-span-3 space-y-4">
            <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-ink">
              Visit Us
            </h3>
            <div className="space-y-3 text-sm text-ink-soft">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-pink-400 shrink-0 mt-0.5" />
                <div>
                  <p>{siteConfig.address.full}</p>
                  <a
                    href={siteConfig.maps.directionsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs text-pink-500 hover:underline font-medium inline-flex items-center gap-1 mt-1"
                  >
                    Get Directions (Google Maps) <ArrowUpRight className="w-3 h-3" />
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-2.5">
                <Clock className="w-4 h-4 text-pink-400 shrink-0" />
                <div>
                  <p className="font-medium text-ink">Open Daily</p>
                  <p className="text-xs text-ink-soft">Closes 7:00 PM (9:00 AM – 7:00 PM)</p>
                </div>
              </div>

              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-pink-400 shrink-0" />
                <a
                  href={`tel:${siteConfig.phone.tel}`}
                  className="font-medium text-ink hover:text-pink-500 transition-colors"
                >
                  {siteConfig.phone.display}
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-ink-soft gap-4">
          <p>© 2026 Dazzle Nail Salon. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <Link to="/privacy" className="hover:text-ink transition-colors">Privacy Policy</Link>
            <span className="text-beige-300">·</span>
            <Link to="/terms" className="hover:text-ink transition-colors">Terms of Service</Link>
            <span className="text-beige-300">·</span>
            <span className="text-ink-soft font-mono text-[11px]">{siteConfig.address.plusCode}</span>
          </div>
        </div>

      </div>
    </footer>
  );
}

