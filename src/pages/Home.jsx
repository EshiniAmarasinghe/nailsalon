import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import {
  Sparkles,
  Calendar,
  ArrowRight,
  ShieldCheck,
  Heart,
  Flower2,
  Clock,
  Phone,
  MapPin,
  Star,
  ExternalLink,
  CheckCircle,
} from 'lucide-react';

import Hero from '../components/Hero';
import SectionHeading from '../components/SectionHeading';
import ServiceCard from '../components/ServiceCard';
import StatCounter from '../components/StatCounter';
import GalleryGrid from '../components/GalleryGrid';
import ReviewCard from '../components/ReviewCard';
import CTA from '../components/CTA';

import { siteConfig } from '../data/site';
import { services, menuHighlights } from '../data/services';
import { galleryItems } from '../data/gallery';
import { reviewsData } from '../data/reviews';

export default function Home() {
  // 6 featured works for home
  const featuredWorks = galleryItems.filter((i) => i.featured).slice(0, 6);
  // 4 teaser services
  const teaserServices = services.slice(0, 4);

  return (
    <>
      <Helmet>
        <title>Dazzle Nail Salon | Nails That Dazzle in Seeduwa, Colombo</title>
        <meta
          name="description"
          content="Delicate nail art, flawless gel and acrylic sets, broken nail repair, and a calm space made just for you in Seeduwa, Colombo. Rated 5.0 on Google."
        />
        <meta property="og:title" content="Dazzle Nail Salon | Nails That Dazzle" />
        <meta
          property="og:description"
          content="Delicate nail art, flawless gel and acrylic sets, and a calm, hygienic space made just for you in Seeduwa, Colombo."
        />
        <meta property="og:type" content="website" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "NailSalon",
            "name": siteConfig.name,
            "description": siteConfig.subTagline,
            "telephone": siteConfig.phone.tel,
            "address": {
              "@type": "PostalAddress",
              "streetAddress": siteConfig.address.street,
              "addressLocality": "Seeduwa",
              "addressRegion": "Western Province",
              "postalCode": siteConfig.address.postalCode,
              "addressCountry": "LK"
            },
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": "5.0",
              "reviewCount": "207",
              "bestRating": "5"
            },
            "openingHours": "Mo-Su 09:00-19:00"
          })}
        </script>
      </Helmet>

      {/* 1. HERO (Full Viewport with Slideshow) */}
      <Hero />

      {/* 2. ABOUT TEASER ("More than a manicure, a little moment for you") */}
      <section className="py-20 sm:py-28 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center mb-16 sm:mb-20">
            {/* Left: Two overlapping rounded images */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="lg:col-span-6 relative flex items-center justify-center"
            >
              <div className="relative w-4/5 sm:w-3/4 aspect-[4/5] rounded-5xl overflow-hidden shadow-soft-lg border-4 border-pink-50">
                <img
                  src="https://images.unsplash.com/photo-1519014816548-bf5fe059798b?q=80&w=1000&auto=format&fit=crop"
                  alt="Delicate manicure artistry at Dazzle Nail Salon"
                  loading="lazy"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Overlapping smaller card */}
              <div className="absolute -bottom-6 -right-2 sm:right-4 w-3/5 aspect-square rounded-4xl overflow-hidden shadow-2xl border-4 border-white bg-pink-100">
                <img
                  src="https://images.unsplash.com/photo-1632345031435-8727f6897d53?q=80&w=800&auto=format&fit=crop"
                  alt="Detail of fresh gel overlay and natural shine"
                  loading="lazy"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-pink-400/10 pointer-events-none" />
              </div>

              {/* Badge */}
              <div className="absolute top-4 -left-2 bg-white/95 backdrop-blur-md px-4 py-2 rounded-2xl shadow-hover border border-pink-200 text-xs font-semibold text-ink">
                ✦ Seeduwa Sanctuary
              </div>
            </motion.div>

            {/* Right: Editorial Narrative */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="lg:col-span-6 space-y-6"
            >
              <SectionHeading
                align="left"
                eyebrow="Our Story & Philosophy"
                titlePart1="More than a manicure,"
                italicPart="a little moment for you"
                description="We believe your nails are your daily canvas. In a world that moves fast, stepping into Dazzle means breathing in calmness, enjoying gentle conversations, and leaving with nails so pristine they make you pause and admire them all day."
              />

              <p className="text-base text-ink-soft font-light leading-relaxed">
                Whether you need everyday strength through soft gel extensions, glamorous acrylic architecture, or delicate hand-painted botanicals, our team blends hygiene discipline with fine artistic patience.
              </p>

              <div className="pt-2">
                <Link
                  to="/about"
                  className="inline-flex items-center gap-2 text-ink font-semibold border-b-2 border-pink-400 pb-1 hover:text-pink-500 hover:border-pink-500 transition-colors"
                >
                  <span>Learn more about our story</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </motion.div>
          </div>

          {/* 4-Card Row Linking to Services */}
          <div className="mt-8">
            <div className="flex items-center justify-between mb-8">
              <div>
                <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-pink-500 mb-1">
                  Signature Offerings
                </h3>
                <p className="text-2xl font-serif text-ink">
                  Crafted for every aesthetic
                </p>
              </div>

              <Link
                to="/services"
                className="hidden sm:inline-flex items-center gap-1.5 text-sm font-semibold text-pink-500 hover:text-pink-600 transition-colors"
              >
                <span>Full services menu</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {teaserServices.map((service, idx) => (
                <ServiceCard key={service.id} service={service} index={idx} />
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* 3. OUR APPROACH ("Clean. Delicate. Dazzling.") */}
      <section className="py-20 sm:py-24 bg-pink-50/70 border-y border-pink-200/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <SectionHeading
            eyebrow="The Dazzle Standard"
            titlePart1="Clean. Delicate."
            italicPart="Dazzling."
            description="We obsess over the details that others overlook—from medically sterilized implements to balanced structural apexes that safeguard your natural nail health."
            className="mb-14"
          />

          {/* Animated 4-Stat Counters */}
          <StatCounter />

          {/* 3 Core pillars below stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 mt-14">
            <div className="p-7 rounded-3xl bg-white/80 border border-pink-200/60 shadow-xs flex items-start gap-4">
              <div className="w-12 h-12 rounded-2xl bg-pink-100 flex items-center justify-center shrink-0 text-pink-500">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-serif text-lg font-semibold text-ink mb-1">100% Medical Sanitation</h4>
                <p className="text-xs sm:text-sm text-ink-soft leading-relaxed font-light">
                  Instruments autoclaved, sanitized, and sealed. Disposable files and buffers for every client.
                </p>
              </div>
            </div>

            <div className="p-7 rounded-3xl bg-white/80 border border-pink-200/60 shadow-xs flex items-start gap-4">
              <div className="w-12 h-12 rounded-2xl bg-pink-100 flex items-center justify-center shrink-0 text-pink-500">
                <Sparkles className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-serif text-lg font-semibold text-ink mb-1">Master Workmanship</h4>
                <p className="text-xs sm:text-sm text-ink-soft leading-relaxed font-light">
                  Smooth cuticles, seamless transitions, and featherlight extension feel praised by 200+ clients.
                </p>
              </div>
            </div>

            <div className="p-7 rounded-3xl bg-white/80 border border-pink-200/60 shadow-xs flex items-start gap-4">
              <div className="w-12 h-12 rounded-2xl bg-pink-100 flex items-center justify-center shrink-0 text-pink-500">
                <Heart className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-serif text-lg font-semibold text-ink mb-1">Calm Atmosphere</h4>
                <p className="text-xs sm:text-sm text-ink-soft leading-relaxed font-light">
                  A tranquil pastel sanctuary with welcoming, patient technicians who listen to your vision.
                </p>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* 4. FEATURED WORK ("Nail art in bloom") */}
      <section className="py-20 sm:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 gap-6">
            <SectionHeading
              align="left"
              eyebrow="Recent Salon Work"
              titlePart1="Nail art"
              italicPart="in bloom"
              description="An editorial showcase of our recent guest manicures, soft gel extensions, sculpted acrylics, and handcrafted motifs."
            />

            <Link
              to="/gallery"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-pink-100 hover:bg-pink-200 text-ink font-semibold text-sm transition-all duration-200 self-start md:self-auto shrink-0 shadow-xs"
            >
              <span>View full gallery</span>
              <ArrowRight className="w-4 h-4 text-pink-500" />
            </Link>
          </div>

          {/* Masonry / Asymmetric Grid of 6 Featured Items */}
          <GalleryGrid items={featuredWorks} limit={6} />

        </div>
      </section>

      {/* 5. START YOUR BOOKING (pink-100 section with floating chips) */}
      <CTA
        titlePart1="Ready for your"
        italicPart="fresh set?"
        description="Pick your desired date, choose your aesthetic, and let our technicians pamper your hands in our Seeduwa studio."
        showFloatingChips={true}
      />

      {/* 6. MENU HIGHLIGHTS / PRICE LIST PREVIEW */}
      <section className="py-20 sm:py-28 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <SectionHeading
            eyebrow="Transparent Menu"
            titlePart1="Menu Highlights &"
            italicPart="Price Guide"
            description="Clear, honest pricing with premium products. Consult with your artist for custom 3D art additions."
            className="mb-14 sm:mb-16"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-14">
            {menuHighlights.map((cat, catIdx) => (
              <motion.div
                key={cat.category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: catIdx * 0.15 }}
                className="bg-pink-50/50 p-6 sm:p-8 rounded-4xl border border-pink-200/60 shadow-xs"
              >
                <h3 className="font-serif text-xl sm:text-2xl font-semibold text-ink mb-6 pb-3 border-b border-pink-200">
                  {cat.category}
                </h3>

                <ul className="space-y-5">
                  {cat.items.map((item, idx) => (
                    <li key={idx} className="group">
                      <div className="flex items-baseline justify-between gap-2">
                        <span className="text-base font-medium text-ink group-hover:text-pink-500 transition-colors">
                          {item.name}
                        </span>
                        {/* Dotted leader */}
                        <div className="flex-1 dotted-leader h-3 mx-2 opacity-50" />
                        <span className="font-serif font-bold text-ink whitespace-nowrap text-base">
                          {item.price}
                        </span>
                      </div>
                      <p className="text-xs text-ink-soft mt-0.5 font-light">
                        {item.note}
                      </p>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-xs text-ink-soft mb-4">
              // Prices are subject to consultation based on nail length & custom hand-drawn art complexity.
            </p>
            <Link
              to="/services"
              className="inline-flex items-center gap-2 text-sm font-semibold text-pink-500 hover:text-pink-600 underline underline-offset-4"
            >
              <span>Explore complete service descriptions & inclusions</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

        </div>
      </section>

      {/* 7. OUR PROMISE (Beige section, editorial layout) */}
      <section className="py-20 sm:py-28 bg-beige-50 border-t border-beige-200/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
            
            {/* Left Narrative & Testimonial */}
            <div className="lg:col-span-7 space-y-7">
              <SectionHeading
                align="left"
                eyebrow="Our Guest Promise"
                titlePart1="When you look down at your hands,"
                italicPart="we want you to smile."
                description="We created Dazzle Nail Salon to be a true breath of fresh air in Seeduwa. From the gentle soothing music to our warm, welcoming technicians, your comfort and joy are at the center of everything we do."
              />

              {/* Three tiny words side-by-side */}
              <div className="flex items-center gap-6 sm:gap-10 py-3 border-y border-beige-200">
                <span className="font-serif italic text-xl sm:text-2xl text-ink font-normal">Care</span>
                <span className="text-beige-300">✦</span>
                <span className="font-serif italic text-xl sm:text-2xl text-pink-500 font-normal">Detail</span>
                <span className="text-beige-300">✦</span>
                <span className="font-serif italic text-xl sm:text-2xl text-beige-400 font-normal">Confidence</span>
              </div>

              {/* Featured Testimonial Quote */}
              <div className="p-6 sm:p-7 rounded-3xl bg-white border border-beige-200 shadow-soft">
                <div className="flex items-center gap-1 text-amber-400 mb-3">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400" />
                  ))}
                  <span className="text-xs font-semibold text-ink ml-2">5.0 Star Guest Voice</span>
                </div>
                <blockquote className="text-base text-ink italic font-light leading-relaxed mb-4">
                  "{reviewsData.featuredTestimonial.quote}"
                </blockquote>
                <div className="flex items-center justify-between text-xs text-ink-soft">
                  <span className="font-semibold text-ink">
                    {reviewsData.featuredTestimonial.authorTag}
                  </span>
                  <span>{reviewsData.featuredTestimonial.location}</span>
                </div>
              </div>
            </div>

            {/* Right Collage of 3 Images */}
            <div className="lg:col-span-5 grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="aspect-[3/4] rounded-4xl overflow-hidden shadow-soft border-2 border-white">
                  <img
                    src="https://images.unsplash.com/photo-1604654894610-df63bc536371?q=80&w=600&auto=format&fit=crop"
                    alt="Pristine nail shaping detail"
                    loading="lazy"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="aspect-square rounded-4xl overflow-hidden shadow-soft border-2 border-white">
                  <img
                    src="https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?q=80&w=600&auto=format&fit=crop"
                    alt="Natural gel polish coat"
                    loading="lazy"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              <div className="pt-8">
                <div className="aspect-[3/5] rounded-4xl overflow-hidden shadow-soft-lg border-2 border-white">
                  <img
                    src="https://images.unsplash.com/photo-1599940824399-b87987ceb72a?q=80&w=600&auto=format&fit=crop"
                    alt="Comfortable salon chair relaxation"
                    loading="lazy"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* 8. REVIEWS & CUSTOMER PRAISE */}
      <section className="py-20 sm:py-28 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-10">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-pink-100 text-pink-500 text-xs font-semibold uppercase tracking-[0.2em] mb-4">
              <span>Verified Client Sentiment</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-ink tracking-tight mb-4">
              5.0 ★★★★★ · <em className="font-normal italic text-pink-500">207 Google reviews</em>
            </h2>

            <p className="text-base text-ink-soft font-light">
              Here is what guests cherish most about visiting Dazzle Nail Salon in Seeduwa.
            </p>
          </div>

          {/* Chips from Review Themes */}
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-2.5 max-w-4xl mx-auto mb-14">
            {siteConfig.reviewChips.map((chip, idx) => (
              <span
                key={idx}
                className="px-4 py-2 rounded-full bg-pink-50 border border-pink-200/70 text-xs sm:text-sm font-medium text-ink shadow-2xs hover:bg-pink-100 transition-colors"
              >
                {chip.label} {chip.count && <strong className="text-pink-500">({chip.count})</strong>}
              </span>
            ))}
          </div>

          {/* Horizontal Scrolling Carousel of Reviews */}
          <div className="relative">
            <div className="flex items-stretch gap-6 overflow-x-auto pb-6 pt-2 no-scrollbar scroll-smooth">
              {reviewsData.items.map((rev) => (
                <ReviewCard key={rev.id} review={rev} />
              ))}
            </div>

            {/* Gradient edge fades for horizontal scroll */}
            <div className="hidden md:block pointer-events-none absolute inset-y-0 left-0 w-12 bg-gradient-to-r from-white to-transparent" />
            <div className="hidden md:block pointer-events-none absolute inset-y-0 right-0 w-12 bg-gradient-to-l from-white to-transparent" />
          </div>

          <div className="text-center mt-10">
            <a
              href={siteConfig.ratings.googleReviewUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white hover:bg-pink-50 text-ink border border-pink-200 text-sm font-semibold shadow-xs transition-all duration-200"
            >
              <span>Read all reviews on Google</span>
              <ExternalLink className="w-4 h-4 text-pink-400" />
            </a>
          </div>

        </div>
      </section>

      {/* 9. VISIT US (Map + Info Card) */}
      <section className="py-20 sm:py-28 bg-beige-50/70 border-t border-beige-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <SectionHeading
            eyebrow="Location & Visiting"
            titlePart1="Find us in"
            italicPart="Seeduwa, Colombo"
            description="Easily accessible along Seeduwa Road with comfortable on-site salon facilities."
            className="mb-14"
          />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            
            {/* Left Card: Info & Quick Action Buttons */}
            <div className="lg:col-span-5 p-8 sm:p-10 rounded-4xl bg-white border border-beige-200 shadow-soft flex flex-col justify-between">
              <div className="space-y-6">
                <div>
                  <span className="text-xs font-semibold uppercase tracking-[0.2em] text-pink-500 block mb-1">
                    Studio Details
                  </span>
                  <h3 className="font-serif text-3xl font-semibold text-ink">
                    Dazzle Nail Salon
                  </h3>
                </div>

                <div className="space-y-4 text-sm text-ink-soft">
                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-pink-500 shrink-0 mt-0.5" />
                    <div>
                      <p className="font-medium text-ink">Address</p>
                      <p>{siteConfig.address.full}</p>
                      <p className="text-xs text-ink-soft font-mono mt-1">
                        Plus Code: {siteConfig.address.plusCode}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Clock className="w-5 h-5 text-pink-500 shrink-0 mt-0.5" />
                    <div>
                      <p className="font-medium text-ink">Operating Hours</p>
                      <p className="text-emerald-700 font-medium">Open Daily</p>
                      <p>{siteConfig.hours.openTime} – {siteConfig.hours.closeTime}</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Phone className="w-5 h-5 text-pink-500 shrink-0 mt-0.5" />
                    <div>
                      <p className="font-medium text-ink">Direct Telephone</p>
                      <a href={`tel:${siteConfig.phone.tel}`} className="text-base text-pink-500 font-semibold hover:underline">
                        {siteConfig.phone.display}
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Action buttons */}
              <div className="pt-8 border-t border-beige-200 flex flex-col sm:flex-row gap-3">
                <a
                  href={siteConfig.maps.directionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 inline-flex items-center justify-center gap-2 py-3 px-5 rounded-full bg-pink-300 hover:bg-pink-400 text-ink font-semibold text-sm shadow-soft transition-all"
                >
                  <MapPin className="w-4 h-4" />
                  <span>Get Directions</span>
                </a>

                <a
                  href={`tel:${siteConfig.phone.tel}`}
                  className="inline-flex items-center justify-center gap-2 py-3 px-5 rounded-full bg-white hover:bg-pink-50 text-ink border border-beige-300 font-semibold text-sm transition-all"
                >
                  <Phone className="w-4 h-4 text-pink-500" />
                  <span>Call Now</span>
                </a>
              </div>
            </div>

            {/* Right: Embedded Google Maps */}
            <div className="lg:col-span-7 rounded-4xl overflow-hidden shadow-soft border border-beige-200 min-h-[380px] lg:min-h-full bg-beige-100 relative">
              <iframe
                title="Dazzle Nail Salon Location Map"
                src={siteConfig.maps.embedUrl}
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: '380px' }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full"
              />
            </div>

          </div>

        </div>
      </section>

      {/* 10. FINAL CTA BANNER */}
      <section className="py-16 sm:py-20 bg-pink-50 text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-serif text-ink mb-4">
            Experience delicate nails in <em className="italic text-pink-500">Seeduwa</em>
          </h2>
          <p className="text-ink-soft text-sm sm:text-base mb-8 max-w-xl mx-auto font-light">
            Walk away with beautiful, resilient nails that bring a little burst of joy each time you look at your hands.
          </p>
          <Link
            to="/book"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-pink-300 hover:bg-pink-400 text-ink font-semibold text-sm shadow-soft hover:shadow-soft-lg transition-all"
          >
            <Calendar className="w-4 h-4" />
            <span>Book Your Appointment Today</span>
          </Link>
        </div>
      </section>
    </>
  );
}

