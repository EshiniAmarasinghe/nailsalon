import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageSquare, Phone, X } from 'lucide-react';
import { siteConfig } from '../data/site';

export default function WhatsAppButton() {
  const [showTooltip, setShowTooltip] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-2">
      {/* Tooltip speech bubble */}
      <AnimatePresence>
        {showTooltip && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 10 }}
            className="bg-white px-4 py-2.5 rounded-2xl shadow-hover border border-pink-200 text-xs text-ink max-w-[210px] text-right pointer-events-none"
          >
            <p className="font-semibold text-pink-500">Need a quick slot?</p>
            <p className="text-ink-soft">Chat with us directly on WhatsApp</p>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="flex items-center gap-2">
        {/* Floating WhatsApp Action Button */}
        <motion.a
          href={siteConfig.whatsapp.url}
          target="_blank"
          rel="noopener noreferrer"
          onMouseEnter={() => setShowTooltip(true)}
          onMouseLeave={() => setShowTooltip(false)}
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.95 }}
          className="relative w-14 h-14 rounded-full bg-[#25D366] text-white flex items-center justify-center shadow-lg hover:shadow-xl transition-shadow focus:outline-none focus:ring-4 focus:ring-[#25D366]/30"
          aria-label="Direct chat with Dazzle Nail Salon on WhatsApp"
        >
          {/* Subtle pulse ring */}
          <span className="absolute -inset-1 rounded-full bg-[#25D366] opacity-30 animate-ping pointer-events-none"></span>
          
          <MessageSquare className="w-6 h-6 fill-white" />
        </motion.a>
      </div>
    </div>
  );
}

