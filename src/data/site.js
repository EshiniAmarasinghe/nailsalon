/**
 * Dazzle Nail Salon - Core Business Configuration
 * Edit this file to update salon details, opening hours, contact info, and metrics.
 */

export const siteConfig = {
  name: "Dazzle Nail Salon",
  tagline: "Nails That Dazzle",
  subTagline: "Delicate nail art, flawless gel and acrylic sets, and a calm space made just for you.",
  category: "Nail salon",
  
  // Contact & Location
  address: {
    street: "372/A Seeduwa Road",
    city: "Colombo, Seeduwa",
    postalCode: "11410",
    country: "Sri Lanka",
    full: "372/A Seeduwa Road, Colombo, Seeduwa 11410, Sri Lanka",
    plusCode: "4VHG+WM Seeduwa",
  },
  
  phone: {
    display: "071 054 0530",
    tel: "+94710540530",
  },
  
  whatsapp: {
    number: "+94710540530",
    url: "https://wa.me/94710540530",
    defaultMessage: "Hello Dazzle Nail Salon! I would like to inquire about booking a nail appointment.",
  },

  email: "hello@dazzlenailsalon.com", // REPLACE WITH REAL SALON EMAIL IF APPLICABLE

  // Hours of Operation
  hours: {
    days: "Open Daily (Monday – Sunday)",
    openTime: "9:00 AM", // Editable opening time constant
    closeTime: "7:00 PM", // Closes 7:00 PM
    display: "Open daily · 9:00 AM – 7:00 PM",
    closingNotice: "Opens daily, closes 7:00 PM",
  },

  // Social Channels
  social: {
    instagram: "https://instagram.com/#dazzlenailsalon", // REPLACE WITH REAL PROFILE
    facebook: "https://facebook.com/#dazzlenailsalon",   // REPLACE WITH REAL PROFILE
    tiktok: "https://tiktok.com/#dazzlenailsalon",       // REPLACE WITH REAL PROFILE
  },

  // Ratings & Social Proof
  ratings: {
    googleScore: "5.0",
    reviewCount: 207,
    googleReviewUrl: "https://maps.google.com/?cid=4VHG+WM+Seeduwa", // Directions/Google profile
    summary: "5.0 ★★★★★ · 207 Google reviews",
  },

  // Google Maps Embed & Navigation
  maps: {
    embedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3959.8322881146313!2d79.87321687593683!3d7.145452292858882!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae2ee8342468305%3A0xbcf2f682662c1619!2sDazzle%20Nail%20Salon!5e0!3m2!1sen!2slk!4v1715000000000!5m2!1sen!2slk",
    directionsUrl: "https://www.google.com/maps/search/?api=1&query=Dazzle+Nail+Salon+372%2FA+Seeduwa+Road+Seeduwa+Sri+Lanka",
  },

  // Customer praise chips from verified Google reviews
  reviewChips: [
    { label: "Nail art", count: 19 },
    { label: "Calm atmosphere", count: 10 },
    { label: "Welcoming staff", count: 8 },
    { label: "Workmanship", count: 4 },
    { label: "Gel extensions", count: null },
    { label: "Comfortable salon", count: null },
    { label: "Nail color", count: null },
    { label: "Broken nail repair", count: null },
    { label: "Color selection", count: null },
    { label: "Acrylic nails", count: null },
  ],

  // Key Statistics
  stats: [
    { value: 5.0, decimals: 1, suffix: "", label: "Google Rating", sub: "Based on 207 verified reviews" },
    { value: 207, decimals: 0, suffix: "+", label: "Happy Reviews", sub: "Flawless 5.0 client feedback" },
    { value: 4, decimals: 0, suffix: "", label: "Signature Services", sub: "Gel, Acrylic, Art & Repair" },
    { value: 100, decimals: 0, suffix: "%", label: "Hygiene-First", sub: "Medical-grade sanitization" },
  ],

  // Editorial Values
  values: [
    {
      title: "Hospital-Grade Hygiene",
      description: "Every tool is medical-grade sanitized, sealed, and prepared fresh for each guest.",
      icon: "ShieldCheck",
    },
    {
      title: "Artistic Precision",
      description: "From micro-French lines to 3D chrome gems, our technicians master delicate detail.",
      icon: "Sparkles",
    },
    {
      title: "Calm Sanctuary",
      description: "A tranquil pastel environment designed to let you unwind from busy Colombo life.",
      icon: "Heart",
    },
    {
      title: "Premium Formulations",
      description: "Long-lasting, non-damaging gel and acrylic systems that preserve natural nail health.",
      icon: "Flower2",
    },
  ],
};

