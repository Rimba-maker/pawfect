import React from 'react';
import { motion } from 'framer-motion';

const memberships = [
  {
    tier: "Basic",
    price: "Rp 500k",
    period: "/ tahun",
    emoji: "🥉",
    benefits: [
      "10% off semua grooming",
      "5% off products",
      "Birthday treat untuk anabul",
      "Newsletter & event invite"
    ]
  },
  {
    tier: "Plus",
    price: "Rp 1.5 jt",
    period: "/ tahun",
    popular: true,
    emoji: "🥈",
    benefits: [
      "15% off grooming & boarding",
      "10% off products",
      "Free 1x grooming per tahun",
      "Priority booking",
      "Free vet consultation 2x/tahun"
    ]
  },
  {
    tier: "VIP",
    price: "Rp 3.5 jt",
    period: "/ tahun",
    emoji: "🥇",
    benefits: [
      "25% off everything",
      "Free monthly grooming",
      "Free 5 nights boarding",
      "Free training class (1 program)",
      "Personal concierge 24/7"
    ]
  }
];

export default function Membership() {
  return (
    <section id="membership" className="py-24 bg-canvas max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-display font-bold text-ink mb-4">Pawfect Club</h2>
        <p className="text-body text-xl max-w-2xl mx-auto">
          Jadilah member untuk mendapatkan benefit eksklusif & save up to 25% setiap kunjungan.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {memberships.map((mem, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1 }}
            whileHover={{ y: -10 }}
            className={`rounded-2xl p-8 relative flex flex-col h-full shadow-sm ${
              mem.popular 
                ? 'bg-ink text-canvas border-2 border-primary transform md:-translate-y-4' 
                : 'bg-canvas-soft border border-mute/10 text-ink hover:border-primary/30'
            }`}
          >
            {mem.popular && (
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-on-primary px-4 py-1 rounded-full text-sm font-bold shadow-md flex items-center gap-1">
                ⭐ Most Popular
              </div>
            )}
            
            <div className="flex items-center gap-3 mb-6">
              <span className="text-4xl">{mem.emoji}</span>
              <h3 className="text-2xl font-display font-bold">{mem.tier} Member</h3>
            </div>
            
            <div className="flex items-baseline gap-1 mb-8 pb-8 border-b border-mute/20">
              <span className={`text-4xl font-bold ${mem.popular ? 'text-canvas' : 'text-ink'}`}>{mem.price}</span>
              <span className={mem.popular ? 'text-canvas/70' : 'text-body'}>{mem.period}</span>
            </div>

            <ul className="space-y-4 mb-8 flex-grow">
              {mem.benefits.map((feat, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="text-primary mt-1">🐾</span>
                  <span className={mem.popular ? 'text-canvas/90' : 'text-body'}>{feat}</span>
                </li>
              ))}
            </ul>

            <button className={`w-full py-3 rounded-xl font-bold transition-colors ${
              mem.popular
                ? 'bg-primary text-on-primary hover:bg-primary/90'
                : 'bg-canvas text-ink border border-mute/20 hover:border-primary'
            }`}>
              Join {mem.tier}
            </button>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
