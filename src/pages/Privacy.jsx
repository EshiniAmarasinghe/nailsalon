import React from 'react';
import { Helmet } from 'react-helmet-async';
import SectionHeading from '../components/SectionHeading';
import { siteConfig } from '../data/site';

export default function Privacy() {
  return (
    <>
      <Helmet>
        <title>Privacy Policy | Dazzle Nail Salon</title>
        <meta name="description" content="Privacy Policy for Dazzle Nail Salon." />
      </Helmet>

      <section className="pt-32 pb-16 bg-pink-100/40">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <SectionHeading
            eyebrow="Legal & Transparency"
            titlePart1="Privacy"
            italicPart="Policy"
            description="How we collect, handle, and protect your information when booking appointments."
          />
        </div>
      </section>

      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-sm text-ink-soft leading-relaxed space-y-8 font-light">
          <div>
            <h3 className="font-serif text-xl font-semibold text-ink mb-2">1. Overview</h3>
            <p>
              Dazzle Nail Salon ("we", "our", or "us") operates a static informational website for our nail salon located at {siteConfig.address.full}. We respect your personal privacy and only collect details you voluntarily provide when requesting an appointment or contacting us.
            </p>
          </div>

          <div>
            <h3 className="font-serif text-xl font-semibold text-ink mb-2">2. Information You Provide</h3>
            <p>
              When you submit a booking request or message via our forms, we receive your name, phone number, preferred appointment dates, and optional service or style preferences. Because this website is static, these details are transferred via client-side channels (such as WhatsApp or standard email) directly to our staff.
            </p>
          </div>

          <div>
            <h3 className="font-serif text-xl font-semibold text-ink mb-2">3. How We Use Your Information</h3>
            <p>
              We only use your contact details to schedule, confirm, modify, or remind you about your appointments at Dazzle Nail Salon. We never sell, rent, or share your contact numbers or personal information with third-party advertisers.
            </p>
          </div>

          <div>
            <h3 className="font-serif text-xl font-semibold text-ink mb-2">4. Third-Party Links</h3>
            <p>
              Our website links to third-party services such as Google Maps, Instagram, and WhatsApp. We do not control their privacy practices, and we encourage you to review their respective policies.
            </p>
          </div>

          <div>
            <h3 className="font-serif text-xl font-semibold text-ink mb-2">5. Contact Us</h3>
            <p>
              If you have any questions about this Privacy Policy, please reach us by telephone at {siteConfig.phone.display} or by visiting our salon in Seeduwa.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

