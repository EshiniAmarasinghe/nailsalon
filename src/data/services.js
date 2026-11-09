/**
 * Dazzle Nail Salon - Services Catalog & Pricing Menu
 * NOTE: Prices below are representative placeholders.
 * // UPDATE PRICES with real salon rate sheet when ready.
 */

export const services = [
  {
    id: "gel-extensions",
    title: "Gel Extensions",
    slug: "gel-extensions",
    tagline: "Natural flexibility, lightweight strength & glass-like gloss",
    description: "Our signature soft-gel and hard-gel extensions provide sculpted length without heaviness. Formulated to flex with your natural nail, resisting chips and peeling for up to 4 weeks.",
    // UPDATE PRICES with salon's actual rates
    startingPrice: "LKR 6,500",
    duration: "90 – 120 mins",
    image: "https://images.unsplash.com/photo-1632345031435-8727f6897d53?q=80&w=1200&auto=format&fit=crop",
    alt: "Flawless soft gel extensions with glossy nude finish",
    popular: true,
    included: [
      "Full dry Russian-style cuticle grooming",
      "Precision nail dehydrating & bonding prep",
      "Custom-tailored gel tips or sculpted forms",
      "Even structural apex reinforcement",
      "High-shine diamond top coat seal",
      "Moisturizing cuticle oil infusion",
    ],
    idealFor: "Those wanting durable length with a soft, natural, featherlight feel.",
  },
  {
    id: "acrylic",
    title: "Acrylic Full Sets",
    slug: "acrylic",
    tagline: "Maximum durability, sculpted apex & statement silhouettes",
    description: "Engineered for clients who love long, strong, perfectly structured nails. Sculpted using ultra-pure monomer and fine polymer powders for a seamless, bubble-free finish.",
    // UPDATE PRICES with salon's actual rates
    startingPrice: "LKR 7,500",
    duration: "100 – 130 mins",
    image: "https://images.unsplash.com/photo-1604654894610-df63bc536371?q=80&w=1200&auto=format&fit=crop",
    alt: "Sculpted acrylic nails with smooth almond shaping",
    popular: false,
    included: [
      "Sanitizing soak and complete cuticle care",
      "Natural nail plate sizing and gentle etching",
      "Seamless acrylic application with stress-point apex",
      "Precision hand filing and shaping (Coffin, Almond, Stiletto or Square)",
      "Long-wear gel color application",
      "Nourishing hand cream massage",
    ],
    idealFor: "Clients desiring extended length, intricate 3D shaping, and maximum impact.",
  },
  {
    id: "nail-art",
    title: "Nail Art & Bespoke Colour",
    slug: "nail-art",
    tagline: "From delicate micro-French lines to handcrafted chromes",
    description: "Where artistry meets manicures. Our nail artists handcraft custom designs, ombré gradients, floral motifs, glazed-donut chromes, foil accents, and delicate bridal looks.",
    // UPDATE PRICES with salon's actual rates
    startingPrice: "LKR 2,000",
    duration: "30 – 60 mins add-on",
    image: "https://images.unsplash.com/photo-1519014816548-bf5fe059798b?q=80&w=1200&auto=format&fit=crop",
    alt: "Intricate floral nail art and micro-pearl details on pastel pink nails",
    popular: true,
    included: [
      "In-depth design consultation & color matching",
      "Choice from 200+ curated gel polish tones",
      "Hand-painted linework, chrome pigments, or foil embeds",
      "Double protective UV-gel shield coat",
      "Matte or super-glossy final polish cure",
    ],
    idealFor: "Bridal celebrations, festive events, or subtle everyday aesthetic joy.",
  },
  {
    id: "repair",
    title: "Broken Nail Repair",
    slug: "repair",
    tagline: "Invisible mending & emergency reinforcement",
    description: "Don't trim a broken or split nail down to the quick. Our silk wrap, builder resin, or mini-extension repair rebuilds the nail seamlessly so your full set remains harmonious.",
    // UPDATE PRICES with salon's actual rates
    startingPrice: "LKR 800",
    duration: "15 – 25 mins",
    image: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?q=80&w=1200&auto=format&fit=crop",
    alt: "Clean nail restoration and repair treatment",
    popular: false,
    included: [
      "Gentle crack assessment & sanitation",
      "Micro-fiberglass or builder gel bridge bond",
      "Smooth flush buffing with natural contour",
      "Matching colour repolish and UV cure",
      "Structural stress-relief check",
    ],
    idealFor: "Single nail breaks, hairline stress cracks, or uneven growth edges.",
  },
  {
    id: "manicure-pedicure",
    title: "Deluxe Manicure & Pedicure",
    slug: "manicure-pedicure",
    tagline: "Complete hand & foot wellness ritual",
    description: "A deeply restorative spa treatment focusing on skin softness, gentle cuticle restoration, invigorating exfoliation, and pristine polish finish.",
    // UPDATE PRICES with salon's actual rates
    startingPrice: "LKR 4,500",
    duration: "60 – 75 mins",
    image: "https://images.unsplash.com/photo-1599940824399-b87987ceb72a?q=80&w=1200&auto=format&fit=crop",
    alt: "Relaxing manicure and hand massage treatment",
    popular: false,
    included: [
      "Aromatherapy warm soak & herbal bath",
      "Dead sea salt or apricot kernel scrub",
      "Precision nail shaping and cuticle therapy",
      "Relaxing warm lotion massage (arms / calves)",
      "Choice of breathable nail strengthener or regular/gel lacquer",
    ],
    idealFor: "Routine hand self-care, tired feet renewal, and total relaxation.",
  },
];

// Highlight menu price list for Home page preview
// UPDATE PRICES with accurate rates when provided by owner
export const menuHighlights = [
  {
    category: "Extensions & Full Sets",
    items: [
      { name: "Full Set Soft Gel Extensions", price: "LKR 6,500", note: "Includes plain gel polish" },
      { name: "Full Set Sculpted Acrylics", price: "LKR 7,500", note: "Choice of classic shapes" },
      { name: "Gel Extension Refill / Infill", price: "LKR 4,500", note: "2 to 3 weeks regrowth" },
      { name: "Acrylic Refill / Rebalance", price: "LKR 5,000", note: "Includes shape reshape" },
      { name: "Gel Overlay on Natural Nails", price: "LKR 4,000", note: "Strengthens without extension" },
    ]
  },
  {
    category: "Art, Care & Treatments",
    items: [
      { name: "Micro-French / Glazed Chrome", price: "LKR 1,500", note: "Per full set" },
      { name: "Hand-Painted Nail Art (Per Nail)", price: "LKR 300", note: "Custom intricate motifs" },
      { name: "Broken Nail Emergency Repair", price: "LKR 800", note: "Fiberglass or builder gel" },
      { name: "Deluxe Spa Manicure", price: "LKR 4,500", note: "Exfoliation + massage" },
      { name: "Safe Gel / Acrylic Removal", price: "LKR 1,500", note: "No damage natural buff" },
    ]
  }
];

// FAQs for Services page
export const serviceFaqs = [
  {
    q: "How long do gel extensions and acrylic sets typically last?",
    a: "With proper home care, our gel extensions and acrylics last between 3 to 4 weeks. We recommend coming in for an infill around the 3-week mark to protect your natural nail balance as it grows out."
  },
  {
    q: "Do I need to book an appointment before visiting?",
    a: "While we do welcome walk-ins whenever slots are free, we strongly recommend booking in advance—especially for weekends and afternoon slots—to guarantee zero waiting time with your preferred artist."
  },
  {
    q: "Will extensions damage my natural nails?",
    a: "Not at all when applied and removed professionally! We never over-file your natural nail plate and prioritize gentle soak-offs and nourishing cuticle prep to maintain strong, healthy natural nails."
  },
  {
    q: "Can I bring my own nail art inspiration photos?",
    a: "Yes, we love that! Feel free to bring Pinterest boards or Instagram screenshots. You can also mention your idea in our booking form or WhatsApp chat so we can allocate the right amount of time."
  },
  {
    q: "What aftercare should I follow after getting fresh sets?",
    a: "Apply cuticle oil daily, wear gloves during harsh household cleaning, avoid using your nails as tools to open cans or boxes, and never peel or bite off your extensions."
  }
];

