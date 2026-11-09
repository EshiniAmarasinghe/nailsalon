import React, { useState, useEffect } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import {
  Calendar,
  Clock,
  Phone,
  User,
  Sparkles,
  MessageSquare,
  Mail,
  CheckCircle2,
  AlertCircle,
  MapPin,
  HelpCircle,
  ArrowRight,
} from 'lucide-react';

import SectionHeading from '../components/SectionHeading';
import { siteConfig } from '../data/site';
import { services } from '../data/services';

export default function Book() {
  const [searchParams] = useSearchParams();
  const prefillService = searchParams.get('service') || '';
  const prefillStyle = searchParams.get('style') || '';

  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    date: '',
    time: '11:00 AM',
    service: prefillService || 'gel-extensions',
    styleNotes: prefillStyle ? `Inspired by design: ${prefillStyle}` : '',
    inspirationNote: '',
  });

  const [errors, setErrors] = useState({});
  const [submittedMethod, setSubmittedMethod] = useState(null); // 'whatsapp' | 'email' | null

  // If query params change, update state
  useEffect(() => {
    if (prefillService) {
      setFormData((prev) => ({ ...prev, service: prefillService }));
    }
    if (prefillStyle) {
      setFormData((prev) => ({
        ...prev,
        styleNotes: `Inspired by: ${prefillStyle}`,
      }));
    }
  }, [prefillService, prefillStyle]);

  const validate = () => {
    const errs = {};
    if (!formData.name.trim()) {
      errs.name = 'Please enter your name.';
    }
    if (!formData.phone.trim()) {
      errs.phone = 'Please provide a valid contact phone or WhatsApp number.';
    } else if (formData.phone.trim().length < 8) {
      errs.phone = 'Phone number looks too short.';
    }
    if (!formData.date) {
      errs.date = 'Please choose your preferred appointment date.';
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const getServiceLabel = (val) => {
    const found = services.find((s) => s.slug === val || s.id === val);
    return found ? found.title : val;
  };

  // Build formatted text message
  const generateMessageText = () => {
    const serviceName = getServiceLabel(formData.service);
    return `Hello Dazzle Nail Salon! I would like to request an appointment:

• Name: ${formData.name.trim()}
• Phone: ${formData.phone.trim()}
• Preferred Date: ${formData.date}
• Preferred Time: ${formData.time}
• Service: ${serviceName}
${formData.styleNotes ? `• Style / Design Notes: ${formData.styleNotes.trim()}` : ''}
${formData.inspirationNote ? `• Inspiration Details: ${formData.inspirationNote.trim()}` : ''}

Looking forward to your confirmation. Thank you!`;
  };

  // Submit via WhatsApp deep link
  const handleSubmitWhatsApp = (e) => {
    e.preventDefault();
    if (!validate()) return;

    const message = generateMessageText();
    const encoded = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/94710540530?text=${encoded}`;

    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
    setSubmittedMethod('WhatsApp');
  };

  // Submit via Email mailto link
  const handleSubmitEmail = (e) => {
    e.preventDefault();
    if (!validate()) return;

    const serviceName = getServiceLabel(formData.service);
    const subject = encodeURIComponent(`Booking Request: ${formData.name} - ${serviceName}`);
    const body = encodeURIComponent(generateMessageText());
    const mailtoUrl = `mailto:${siteConfig.email}?subject=${subject}&body=${body}`;

    window.location.href = mailtoUrl;
    setSubmittedMethod('Email');
  };

  return (
    <>
      <Helmet>
        <title>Book an Appointment | Dazzle Nail Salon · Seeduwa</title>
        <meta
          name="description"
          content="Request your nail salon visit at Dazzle Nail Salon in Seeduwa. Instant WhatsApp booking, custom nail art notes, and flexible daily slots."
        />
      </Helmet>

      {/* Hero */}
      <section className="pt-32 pb-16 sm:pb-20 bg-pink-100/40 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <SectionHeading
            eyebrow="Online Request"
            titlePart1="Reserve your"
            italicPart="nail appointment"
            description="Fill out the details below to request your slot. We confirm each booking directly via WhatsApp or phone to ensure personalized attention."
          />
        </div>
      </section>

      {/* Main Form Section */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14">
            
            {/* Form Column */}
            <div className="lg:col-span-7">
              <div className="p-8 sm:p-10 rounded-5xl bg-pink-50/50 border border-pink-200/80 shadow-soft">
                
                {/* Success Notification Alert */}
                <AnimatePresence>
                  {submittedMethod && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0 }}
                      className="mb-8 p-6 rounded-3xl bg-emerald-50 border border-emerald-200 text-emerald-900 flex items-start gap-3.5"
                    >
                      <CheckCircle2 className="w-6 h-6 text-emerald-600 shrink-0 mt-0.5" />
                      <div>
                        <h4 className="font-semibold text-sm">Request Prepared via {submittedMethod}!</h4>
                        <p className="text-xs text-emerald-800/80 mt-1 leading-relaxed">
                          Your appointment details were formatted and opened in your {submittedMethod} application. Once sent, our team will review and confirm your slot promptly.
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

                <form className="space-y-6" noValidate>
                  
                  {/* Name */}
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-ink mb-2">
                      Full Name <span className="text-pink-500">*</span>
                    </label>
                    <div className="relative">
                      <input
                        type="text"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Nimasha Fernando"
                        className={`w-full px-4 py-3.5 pl-11 rounded-2xl bg-white border text-sm text-ink transition-colors focus:bg-white ${
                          errors.name ? 'border-red-400 bg-red-50/30' : 'border-pink-200 focus:border-pink-400'
                        }`}
                      />
                      <User className="w-4 h-4 text-ink-soft absolute left-4 top-1/2 -translate-y-1/2" />
                    </div>
                    {errors.name && (
                      <p className="text-xs text-red-500 mt-1 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" /> {errors.name}
                      </p>
                    )}
                  </div>

                  {/* Phone */}
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-ink mb-2">
                      Phone / WhatsApp Number <span className="text-pink-500">*</span>
                    </label>
                    <div className="relative">
                      <input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="e.g. 071 054 0530"
                        className={`w-full px-4 py-3.5 pl-11 rounded-2xl bg-white border text-sm text-ink transition-colors focus:bg-white ${
                          errors.phone ? 'border-red-400 bg-red-50/30' : 'border-pink-200 focus:border-pink-400'
                        }`}
                      />
                      <Phone className="w-4 h-4 text-ink-soft absolute left-4 top-1/2 -translate-y-1/2" />
                    </div>
                    {errors.phone && (
                      <p className="text-xs text-red-500 mt-1 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" /> {errors.phone}
                      </p>
                    )}
                  </div>

                  {/* Date and Time Row */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-ink mb-2">
                        Preferred Date <span className="text-pink-500">*</span>
                      </label>
                      <div className="relative">
                        <input
                          type="date"
                          value={formData.date}
                          min={new Date().toISOString().split('T')[0]}
                          onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                          className={`w-full px-4 py-3.5 pl-11 rounded-2xl bg-white border text-sm text-ink transition-colors focus:bg-white ${
                            errors.date ? 'border-red-400 bg-red-50/30' : 'border-pink-200 focus:border-pink-400'
                          }`}
                        />
                        <Calendar className="w-4 h-4 text-ink-soft absolute left-4 top-1/2 -translate-y-1/2 pointer-events-none" />
                      </div>
                      {errors.date && (
                        <p className="text-xs text-red-500 mt-1 flex items-center gap-1">
                          <AlertCircle className="w-3 h-3" /> {errors.date}
                        </p>
                      )}
                    </div>

                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-ink mb-2">
                        Preferred Time
                      </label>
                      <div className="relative">
                        <select
                          value={formData.time}
                          onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                          className="w-full px-4 py-3.5 pl-11 rounded-2xl bg-white border border-pink-200 text-sm text-ink transition-colors focus:border-pink-400 appearance-none"
                        >
                          <option value="9:30 AM">9:30 AM (Morning)</option>
                          <option value="11:00 AM">11:00 AM</option>
                          <option value="1:00 PM">1:00 PM (Afternoon)</option>
                          <option value="2:30 PM">2:30 PM</option>
                          <option value="4:00 PM">4:00 PM (Late Afternoon)</option>
                          <option value="5:30 PM">5:30 PM (Evening)</option>
                        </select>
                        <Clock className="w-4 h-4 text-ink-soft absolute left-4 top-1/2 -translate-y-1/2 pointer-events-none" />
                      </div>
                    </div>
                  </div>

                  {/* Service Selection */}
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-ink mb-2">
                      Selected Service
                    </label>
                    <div className="relative">
                      <select
                        value={formData.service}
                        onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                        className="w-full px-4 py-3.5 pl-11 rounded-2xl bg-white border border-pink-200 text-sm text-ink transition-colors focus:border-pink-400 appearance-none"
                      >
                        {services.map((s) => (
                          <option key={s.id} value={s.slug}>
                            {s.title} ({s.startingPrice})
                          </option>
                        ))}
                        <option value="other">Other / Multiple Services Consultation</option>
                      </select>
                      <Sparkles className="w-4 h-4 text-ink-soft absolute left-4 top-1/2 -translate-y-1/2 pointer-events-none" />
                    </div>
                  </div>

                  {/* Style Notes */}
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-ink mb-2">
                      Nail Shape, Length & Style Notes (Optional)
                    </label>
                    <textarea
                      rows={2}
                      value={formData.styleNotes}
                      onChange={(e) => setFormData({ ...formData, styleNotes: e.target.value })}
                      placeholder="e.g. Medium almond shape, sheer glazed pink with micro-French tips"
                      className="w-full px-4 py-3 rounded-2xl bg-white border border-pink-200 text-sm text-ink transition-colors focus:border-pink-400"
                    />
                  </div>

                  {/* Optional Inspiration Note */}
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-ink mb-2">
                      Inspiration Image Note (Optional)
                    </label>
                    <input
                      type="text"
                      value={formData.inspirationNote}
                      onChange={(e) => setFormData({ ...formData, inspirationNote: e.target.value })}
                      placeholder="e.g. Have a Pinterest screenshot ready to share in chat"
                      className="w-full px-4 py-3 rounded-2xl bg-white border border-pink-200 text-sm text-ink transition-colors focus:border-pink-400"
                    />
                  </div>

                  {/* Submit Actions */}
                  <div className="pt-4 space-y-3">
                    <button
                      type="button"
                      onClick={handleSubmitWhatsApp}
                      className="w-full flex items-center justify-center gap-2.5 py-4 px-6 rounded-full bg-[#25D366] hover:bg-[#20ba59] text-white font-semibold text-base shadow-soft hover:shadow-soft-lg transition-all transform hover:-translate-y-0.5"
                    >
                      <MessageSquare className="w-5 h-5 fill-white" />
                      <span>Send via WhatsApp (Instant)</span>
                    </button>

                    <div className="flex items-center gap-3">
                      <button
                        type="button"
                        onClick={handleSubmitEmail}
                        className="flex-1 flex items-center justify-center gap-2 py-3 px-4 rounded-full bg-white hover:bg-pink-50 text-ink border border-pink-200 font-medium text-sm transition-all"
                      >
                        <Mail className="w-4 h-4 text-pink-500" />
                        <span>Send via Email</span>
                      </button>

                      <a
                        href={`tel:${siteConfig.phone.tel}`}
                        className="flex items-center justify-center gap-2 py-3 px-5 rounded-full bg-pink-100 hover:bg-pink-200 text-ink font-semibold text-sm transition-all"
                      >
                        <Phone className="w-4 h-4 text-pink-500" />
                        <span>Call Us</span>
                      </a>
                    </div>
                  </div>

                </form>

              </div>
            </div>

            {/* Sidebar Information Card */}
            <div className="lg:col-span-5 space-y-6">
              <div className="p-8 rounded-5xl bg-beige-100 border border-beige-200 text-ink space-y-6 shadow-xs">
                <div>
                  <span className="text-xs font-semibold uppercase tracking-[0.2em] text-pink-500 block mb-1">
                    Booking Policy
                  </span>
                  <h3 className="font-serif text-2xl font-semibold">
                    Personalized Confirmation
                  </h3>
                </div>

                <div className="p-4 rounded-3xl bg-white/80 border border-beige-200 text-xs sm:text-sm text-ink-soft leading-relaxed space-y-2">
                  <p className="font-medium text-ink">✦ How our static booking works:</p>
                  <p>
                    Once you submit your details, your request is sent directly to our staff via WhatsApp or email. We review our live appointment book and reply within 15–30 minutes to confirm your time.
                  </p>
                </div>

                <div className="space-y-4 text-sm text-ink-soft">
                  <div className="flex items-start gap-3">
                    <Clock className="w-4 h-4 text-pink-500 shrink-0 mt-0.5" />
                    <div>
                      <p className="font-semibold text-ink">Operating Hours</p>
                      <p>{siteConfig.hours.display}</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <MapPin className="w-4 h-4 text-pink-500 shrink-0 mt-0.5" />
                    <div>
                      <p className="font-semibold text-ink">Salon Address</p>
                      <p>{siteConfig.address.full}</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Phone className="w-4 h-4 text-pink-500 shrink-0 mt-0.5" />
                    <div>
                      <p className="font-semibold text-ink">Direct Telephone</p>
                      <a href={`tel:${siteConfig.phone.tel}`} className="text-pink-500 font-semibold hover:underline">
                        {siteConfig.phone.display}
                      </a>
                    </div>
                  </div>
                </div>

                <div className="pt-4 border-t border-beige-200 text-xs text-ink-soft font-light">
                  <p>
                    Need to reschedule or cancel? Simply drop us a WhatsApp message at least 4 hours ahead so we can reassign the slot.
                  </p>
                </div>
              </div>

              {/* Quick Inspiration Card */}
              <div className="p-6 rounded-4xl bg-pink-50 border border-pink-200 text-center space-y-2">
                <p className="text-xs font-semibold uppercase tracking-wider text-pink-500">
                  Not Sure Which Set to Pick?
                </p>
                <p className="text-xs text-ink-soft font-light">
                  Browse our portfolio first to discover current popular nail designs.
                </p>
                <Link
                  to="/gallery"
                  className="inline-flex items-center gap-1 text-xs font-semibold text-pink-500 hover:underline pt-1"
                >
                  <span>Explore Nail Art Gallery</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>

            </div>

          </div>

        </div>
      </section>
    </>
  );
}

