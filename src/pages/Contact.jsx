import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import {
  Phone,
  MessageSquare,
  MapPin,
  Clock,
  Mail,
  Send,
  ArrowUpRight,
  Sparkles,
} from 'lucide-react';

import SectionHeading from '../components/SectionHeading';
import { siteConfig } from '../data/site';

export default function Contact() {
  const [msgData, setMsgData] = useState({
    name: '',
    phone: '',
    message: '',
  });

  const handleSendMessage = (method) => {
    if (!msgData.name.trim() || !msgData.message.trim()) {
      alert('Please enter your name and a brief message.');
      return;
    }

    const text = `Hello Dazzle Nail Salon!

My name is ${msgData.name.trim()} (${msgData.phone.trim() || 'No phone provided'}).

Message:
${msgData.message.trim()}`;

    if (method === 'whatsapp') {
      window.open(`https://wa.me/94710540530?text=${encodeURIComponent(text)}`, '_blank', 'noopener,noreferrer');
    } else {
      window.location.href = `mailto:${siteConfig.email}?subject=${encodeURIComponent(`Inquiry from ${msgData.name}`)}&body=${encodeURIComponent(text)}`;
    }
  };

  return (
    <>
      <Helmet>
        <title>Contact & Location | Dazzle Nail Salon · Seeduwa, Colombo</title>
        <meta
          name="description"
          content="Get in touch with Dazzle Nail Salon in Seeduwa. Call 071 054 0530, message on WhatsApp, or get directions to 372/A Seeduwa Road."
        />
      </Helmet>

      {/* Hero */}
      <section className="pt-32 pb-16 sm:pb-20 bg-pink-100/40 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <SectionHeading
            eyebrow="Connect With Us"
            titlePart1="We'd love to hear"
            italicPart="from you"
            description="Whether you have questions about specific nail art techniques, want to check today's availability, or need directions, we are here to help."
          />
        </div>
      </section>

      {/* 4 Contact Channels Cards */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            
            {/* Phone */}
            <div className="p-7 rounded-3xl bg-pink-50/60 border border-pink-200/70 shadow-xs flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-white text-pink-500 flex items-center justify-center shadow-xs mb-4">
                  <Phone className="w-5 h-5" />
                </div>
                <h3 className="font-serif text-xl font-semibold text-ink mb-1">Direct Call</h3>
                <p className="text-xs text-ink-soft mb-4 font-light">Call our studio during open hours.</p>
              </div>
              <a
                href={`tel:${siteConfig.phone.tel}`}
                className="text-base font-bold text-pink-500 hover:underline"
              >
                {siteConfig.phone.display}
              </a>
            </div>

            {/* WhatsApp */}
            <div className="p-7 rounded-3xl bg-pink-50/60 border border-pink-200/70 shadow-xs flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-white text-[#25D366] flex items-center justify-center shadow-xs mb-4">
                  <MessageSquare className="w-5 h-5" />
                </div>
                <h3 className="font-serif text-xl font-semibold text-ink mb-1">WhatsApp Chat</h3>
                <p className="text-xs text-ink-soft mb-4 font-light">Instant messaging & photo sharing.</p>
              </div>
              <a
                href={siteConfig.whatsapp.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-base font-bold text-[#25D366] hover:underline inline-flex items-center gap-1"
              >
                <span>Chat on WhatsApp</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>

            {/* Visit */}
            <div className="p-7 rounded-3xl bg-pink-50/60 border border-pink-200/70 shadow-xs flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-white text-pink-500 flex items-center justify-center shadow-xs mb-4">
                  <MapPin className="w-5 h-5" />
                </div>
                <h3 className="font-serif text-xl font-semibold text-ink mb-1">Studio Address</h3>
                <p className="text-xs text-ink-soft mb-4 font-light">{siteConfig.address.full}</p>
              </div>
              <a
                href={siteConfig.maps.directionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-semibold text-ink hover:text-pink-500 underline inline-flex items-center gap-1"
              >
                <span>Get Directions (Google Maps)</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>

            {/* Hours */}
            <div className="p-7 rounded-3xl bg-pink-50/60 border border-pink-200/70 shadow-xs flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-white text-pink-500 flex items-center justify-center shadow-xs mb-4">
                  <Clock className="w-5 h-5" />
                </div>
                <h3 className="font-serif text-xl font-semibold text-ink mb-1">Working Hours</h3>
                <p className="text-xs text-ink-soft mb-2 font-light">{siteConfig.hours.days}</p>
              </div>
              <p className="text-sm font-semibold text-emerald-700">
                9:00 AM – 7:00 PM Daily
              </p>
            </div>

          </div>

          {/* Map & Quick Message Row */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
            
            {/* Quick Message Form */}
            <div className="lg:col-span-5 p-8 rounded-5xl bg-beige-50/80 border border-beige-200 shadow-soft">
              <h3 className="font-serif text-2xl font-semibold text-ink mb-2">
                Send a Quick Message
              </h3>
              <p className="text-xs text-ink-soft font-light mb-6">
                Have a question? We will receive your note directly on WhatsApp or email.
              </p>

              <div className="space-y-4">
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-ink mb-1.5">
                    Your Name
                  </label>
                  <input
                    type="text"
                    value={msgData.name}
                    onChange={(e) => setMsgData({ ...msgData, name: e.target.value })}
                    placeholder="Enter your name"
                    className="w-full px-4 py-3 rounded-2xl bg-white border border-beige-300 text-sm text-ink focus:border-pink-400"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-ink mb-1.5">
                    Phone or Email
                  </label>
                  <input
                    type="text"
                    value={msgData.phone}
                    onChange={(e) => setMsgData({ ...msgData, phone: e.target.value })}
                    placeholder="Contact number or email"
                    className="w-full px-4 py-3 rounded-2xl bg-white border border-beige-300 text-sm text-ink focus:border-pink-400"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-ink mb-1.5">
                    How can we help?
                  </label>
                  <textarea
                    rows={4}
                    value={msgData.message}
                    onChange={(e) => setMsgData({ ...msgData, message: e.target.value })}
                    placeholder="Ask about nail extensions, prices, bridal packages..."
                    className="w-full px-4 py-3 rounded-2xl bg-white border border-beige-300 text-sm text-ink focus:border-pink-400"
                  />
                </div>

                <div className="pt-2 flex flex-col sm:flex-row gap-3">
                  <button
                    type="button"
                    onClick={() => handleSendMessage('whatsapp')}
                    className="flex-1 inline-flex items-center justify-center gap-2 py-3 px-5 rounded-full bg-[#25D366] hover:bg-[#20ba59] text-white font-semibold text-sm shadow-soft transition-all"
                  >
                    <MessageSquare className="w-4 h-4 fill-white" />
                    <span>Send via WhatsApp</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => handleSendMessage('email')}
                    className="inline-flex items-center justify-center gap-2 py-3 px-5 rounded-full bg-white hover:bg-beige-100 text-ink border border-beige-300 font-medium text-sm transition-all"
                  >
                    <Mail className="w-4 h-4 text-pink-500" />
                    <span>Email Us</span>
                  </button>
                </div>
              </div>
            </div>

            {/* Embedded Google Map */}
            <div className="lg:col-span-7 rounded-5xl overflow-hidden shadow-soft border border-beige-200 min-h-[380px] bg-beige-100">
              <iframe
                title="Dazzle Nail Salon Location"
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
    </>
  );
}

