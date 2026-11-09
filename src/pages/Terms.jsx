import React from 'react';
import { Helmet } from 'react-helmet-async';
import SectionHeading from '../components/SectionHeading';
import { siteConfig } from '../data/site';

export default function Terms() {
  return (
    <>
      <Helmet>
        <title>Terms of Service | Dazzle Nail Salon</title>
        <meta name="description" content="Terms of Service for Dazzle Nail Salon appointments and treatments." />
      </Helmet>

      <section className="pt-32 pb-16 bg-pink-100/40">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <SectionHeading
            eyebrow="Salon Guidelines"
            titlePart1="Terms of"
            italicPart="Service"
            description="Clear expectations regarding bookings, cancellations, and treatment care."
          />
        </div>
      </section>

      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-sm text-ink-soft leading-relaxed space-y-8 font-light">
          <div>
            <h3 className="font-serif text-xl font-semibold text-ink mb-2">1. Booking & Confirmations</h3>
            <p>
              Submission of an appointment request via this website does not constitute an instant confirmed booking. All reservations are confirmed individually by our team via WhatsApp or phone call.
            </p>
          </div>

          <div>
            <h3 className="font-serif text-xl font-semibold text-ink mb-2">2. Punctuality & Late Arrivals</h3>
            <p>
              We strive to keep our appointments unhurried. If you anticipate arriving more than 15 minutes late, please notify us as early as possible. In cases of significant delay, we may need to adapt the service or reschedule to honor subsequent guests' slots.
            </p>
          </div>

          <div>
            <h3 className="font-serif text-xl font-semibold text-ink mb-2">3. Health & Contraindications</h3>
            <p>
              For your safety and salon hygiene, please inform our technicians if you have any open cuts, nail fungal infections, or specific allergies prior to treatment. We reserve the right to decline or postpone services if an active infection is present to safeguard salon hygiene.
            </p>
          </div>

          <div>
            <h3 className="font-serif text-xl font-semibold text-ink mb-2">4. Service Guarantee & Aftercare</h3>
            <p>
              We stand behind the workmanship of our gel and acrylic services. If you experience unexpected chipping within 3 days of your appointment, please contact us for a complimentary inspection and repair.
            </p>
          </div>

          <div>
            <h3 className="font-serif text-xl font-semibold text-ink mb-2">5. Pricing & Modifications</h3>
            <p>
              All prices shown on this website are baseline guidelines and may vary depending on natural nail condition, extension length, and custom nail art complexity. Final rates are confirmed with your artist before starting.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

