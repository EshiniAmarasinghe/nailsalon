import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { ShieldCheck, Sparkles, Heart, Flower2, Clock, MapPin, ArrowRight, Check } from 'lucide-react';

import SectionHeading from '../components/SectionHeading';
import CTA from '../components/CTA';
import { siteConfig } from '../data/site';

// Meet the Team placeholders (clearly marked as placeholders to be confirmed by owner)
// REPLACE WITH REAL TEAM MEMBERS
const TEAM_PLACEHOLDERS = [
  {
    name: "Lead Nail Stylist",
    role: "Senior Gel & Acrylic Specialist",
    bio: "Passionate about seamless structural balance and healthy natural nail care.",
    image: "https://images.unsplash.com/photo-1594744803329-e58b31de8bf5?q=80&w=600&auto=format&fit=crop",
    note: "// REPLACE WITH REAL STAFF NAME & PHOTO",
  },
  {
    name: "Nail Art Technician",
    role: "Hand-Painted Art & Chromes",
    bio: "Specializes in micro-French lines, delicate florals, and bridal crystal placements.",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=600&auto=format&fit=crop",
    note: "// REPLACE WITH REAL STAFF NAME & PHOTO",
  },
  {
    name: "Spa Therapist",
    role: "Cuticle Restoration & Wellness",
    bio: "Dedicated to gentle exfoliation, deep moisturizing massage, and soothing hand rituals.",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=600&auto=format&fit=crop",
    note: "// REPLACE WITH REAL STAFF NAME & PHOTO",
  },
];

export default function About() {
  return (
    <>
      <Helmet>
        <title>About Us | Dazzle Nail Salon · Seeduwa, Colombo</title>
        <meta
          name="description"
          content="Learn about Dazzle Nail Salon's hygiene standards, gentle artistry, welcoming staff, and serene atmosphere in Seeduwa, Colombo."
        />
      </Helmet>

      {/* Page Hero */}
      <section className="pt-32 pb-16 sm:pb-24 bg-pink-100/40 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <SectionHeading
            eyebrow="Our Story & Heart"
            titlePart1="A quiet sanctuary for"
            italicPart="beautiful, healthy hands"
            description="Founded with a passion for meticulous nail craftsmanship and a belief that salon appointments should be soothing, unhurried, and genuinely restorative."
          />
        </div>
      </section>

      {/* Story Narrative Section */}
      <section className="py-20 sm:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="lg:col-span-6"
            >
              <div className="relative mx-auto max-w-lg aspect-[4/5] rounded-5xl overflow-hidden shadow-soft-lg border-4 border-white">
                <img
                  src="https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?q=80&w=1200&auto=format&fit=crop"
                  alt="Dazzle Nail Salon tranquil setting"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/30 via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 p-4 rounded-2xl bg-white/90 backdrop-blur-md text-xs text-ink">
                  <p className="font-semibold text-pink-500">372/A Seeduwa Road, Colombo</p>
                  <p className="text-ink-soft">A calm space made just for you</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="lg:col-span-6 space-y-6"
            >
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-pink-500">
                Crafted with Intention
              </span>
              <h2 className="text-3xl sm:text-4xl font-serif text-ink tracking-tight">
                Where technical precision meets <em className="italic text-pink-500">delicate grace</em>
              </h2>
              <p className="text-base text-ink-soft font-light leading-relaxed">
                Located conveniently in Seeduwa, Dazzle was created to offer an elevated standard of nail care that protects the integrity of your natural nail bed while delivering high-fashion durability.
              </p>
              <p className="text-base text-ink-soft font-light leading-relaxed">
                Too often, clients endure harsh filing, hurried application, or overwhelming chemical smells. At Dazzle, we replaced rush with patience, harsh odors with gentle ventilation, and mechanical routines with tailored artistry.
              </p>
              <div className="p-6 rounded-3xl bg-pink-50 border border-pink-200/80 space-y-3">
                <p className="text-sm font-medium text-ink">What our guests feel every time:</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-ink-soft">
                  <div className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-emerald-500" />
                    <span>Calm, welcoming reception</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-emerald-500" />
                    <span>Autoclaved instruments</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-emerald-500" />
                    <span>Customized color consultation</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-emerald-500" />
                    <span>Up to 4 weeks long wear</span>
                  </div>
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* Our Values (4 Icon Cards) */}
      <section className="py-20 sm:py-24 bg-pink-50/60 border-y border-pink-200/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Our Guiding Values"
            titlePart1="The four pillars of"
            italicPart="the Dazzle experience"
            description="Every manicure, repair, and sculpted extension is guided by our commitment to these tenets."
            className="mb-14"
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-7 rounded-3xl bg-white border border-pink-200/70 shadow-xs flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-pink-100 flex items-center justify-center text-pink-500 mb-5">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <h3 className="font-serif text-xl font-semibold text-ink mb-2">Hospital Hygiene</h3>
                <p className="text-xs sm:text-sm text-ink-soft leading-relaxed font-light">
                  Fresh sterilization pouches opened in front of you. Disposable files, sanitizing wipes, and zero cross-contamination.
                </p>
              </div>
              <span className="text-[11px] font-semibold text-pink-400 mt-6 uppercase tracking-wider">Pillar 01</span>
            </div>

            <div className="p-7 rounded-3xl bg-white border border-pink-200/70 shadow-xs flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-pink-100 flex items-center justify-center text-pink-500 mb-5">
                  <Sparkles className="w-6 h-6" />
                </div>
                <h3 className="font-serif text-xl font-semibold text-ink mb-2">Bespoke Creativity</h3>
                <p className="text-xs sm:text-sm text-ink-soft leading-relaxed font-light">
                  From French minimalism to hand-painted botanical watercolors, we treat every finger as a fine work of art.
                </p>
              </div>
              <span className="text-[11px] font-semibold text-pink-400 mt-6 uppercase tracking-wider">Pillar 02</span>
            </div>

            <div className="p-7 rounded-3xl bg-white border border-pink-200/70 shadow-xs flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-pink-100 flex items-center justify-center text-pink-500 mb-5">
                  <Heart className="w-6 h-6" />
                </div>
                <h3 className="font-serif text-xl font-semibold text-ink mb-2">Genuine Comfort</h3>
                <p className="text-xs sm:text-sm text-ink-soft leading-relaxed font-light">
                  A tranquil pastel atmosphere, welcoming staff, relaxing ambient music, and total attentiveness to your comfort.
                </p>
              </div>
              <span className="text-[11px] font-semibold text-pink-400 mt-6 uppercase tracking-wider">Pillar 03</span>
            </div>

            <div className="p-7 rounded-3xl bg-white border border-pink-200/70 shadow-xs flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-pink-100 flex items-center justify-center text-pink-500 mb-5">
                  <Flower2 className="w-6 h-6" />
                </div>
                <h3 className="font-serif text-xl font-semibold text-ink mb-2">Gentle Care</h3>
                <p className="text-xs sm:text-sm text-ink-soft leading-relaxed font-light">
                  We preserve and nurture your natural nails with gentle soak-offs, conditioning cuticles, and balanced structure.
                </p>
              </div>
              <span className="text-[11px] font-semibold text-pink-400 mt-6 uppercase tracking-wider">Pillar 04</span>
            </div>
          </div>
        </div>
      </section>

      {/* Meet the Team (Placeholder cards clearly commented) */}
      <section className="py-20 sm:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Our Artists"
            titlePart1="Meet our dedicated"
            italicPart="nail technicians"
            description="Friendly, skilled, and passionate about making you feel confident and pampered."
            className="mb-14"
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {TEAM_PLACEHOLDERS.map((member, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.15 }}
                className="p-8 rounded-4xl bg-pink-50/60 border border-pink-200/70 text-center flex flex-col items-center shadow-xs hover:shadow-soft transition-all"
              >
                <div className="w-28 h-28 rounded-full overflow-hidden mb-5 border-4 border-white shadow-soft bg-pink-100">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="font-serif text-xl font-semibold text-ink mb-1">
                  {member.name}
                </h3>
                <p className="text-xs font-semibold uppercase tracking-wider text-pink-500 mb-3">
                  {member.role}
                </p>
                <p className="text-xs text-ink-soft font-light leading-relaxed">
                  {member.bio}
                </p>
                <span className="text-[10px] text-ink-soft/60 mt-4 font-mono">
                  {member.note}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Calm-Atmosphere Gallery Strip */}
      <section className="py-12 bg-beige-50 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-6">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-center text-beige-400">
            A Glimpse into Our Tranquil Studio
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 px-4 max-w-7xl mx-auto">
          <div className="aspect-[4/3] rounded-3xl overflow-hidden shadow-xs">
            <img
              src="https://images.unsplash.com/photo-1632345031435-8727f6897d53?q=80&w=600&auto=format&fit=crop"
              alt="Salon detail"
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
            />
          </div>
          <div className="aspect-[4/3] rounded-3xl overflow-hidden shadow-xs">
            <img
              src="https://images.unsplash.com/photo-1519014816548-bf5fe059798b?q=80&w=600&auto=format&fit=crop"
              alt="Soft pastel hues"
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
            />
          </div>
          <div className="aspect-[4/3] rounded-3xl overflow-hidden shadow-xs">
            <img
              src="https://images.unsplash.com/photo-1604654894610-df63bc536371?q=80&w=600&auto=format&fit=crop"
              alt="Precision shaping tools"
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
            />
          </div>
          <div className="aspect-[4/3] rounded-3xl overflow-hidden shadow-xs">
            <img
              src="https://images.unsplash.com/photo-1599940824399-b87987ceb72a?q=80&w=600&auto=format&fit=crop"
              alt="Serene guest comfort"
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
            />
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTA
        titlePart1="Experience the difference at"
        italicPart="Dazzle Nail Salon"
        description="Book your visit today and let us take care of your hands with warmth, patience, and impeccable craft."
      />
    </>
  );
}

