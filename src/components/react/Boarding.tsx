import React from 'react';
import { motion } from 'framer-motion';

const boardingOptions = [
  {
    title: "Standard Room",
    price: "Rp 200k",
    period: "/ malam",
    features: [
      "Single occupancy",
      "AC, 24/7 monitoring",
      "2x meal + walks 2x/hari",
      "Daily photo update"
    ],
    emoji: "🏠",
    img: "https://plus.unsplash.com/premium_photo-1707410049087-8a0a5ab77bce?w=800&q=80&auto=format&fit=crop"
  },
  {
    title: "Comfort Suite",
    price: "Rp 350k",
    period: "/ malam",
    popular: true,
    features: [
      "Spacious room with view",
      "Premium bedding",
      "3x meal + walks 3x/hari + playtime",
      "Daily video update"
    ],
    emoji: "🛏️",
    img: "https://plus.unsplash.com/premium_photo-1708724049042-b63eb35f16dd?w=800&q=80&auto=format&fit=crop"
  },
  {
    title: "Royal Suite",
    price: "Rp 650k",
    period: "/ malam",
    features: [
      "Large suite with webcam (live)",
      "Personalized meal & treats",
      "Private playtime + grooming",
      "Daily video call dengan owner"
    ],
    emoji: "👑",
    img: "https://plus.unsplash.com/premium_photo-1717857017795-cfc16194aaf7?w=800&q=80&auto=format&fit=crop"
  }
];

export default function Boarding() {
  return (
    <section id="boarding" className="py-24 bg-canvas max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-display font-bold text-ink mb-4">Hotel Anabul Premium</h2>
        <p className="text-body text-xl">Karena anabul kamu deserve lebih dari sekadar kennel.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {boardingOptions.map((opt, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1 }}
            whileHover={{ y: -10 }}
            className={`rounded-2xl overflow-hidden relative flex flex-col h-full shadow-md ${
              opt.popular 
                ? 'bg-ink text-canvas transform md:-translate-y-4' 
                : 'bg-canvas border border-mute/20 text-ink'
            }`}
          >
            {opt.popular && (
              <div className="absolute top-4 left-1/2 -translate-x-1/2 z-20 bg-primary text-on-primary px-4 py-1 rounded-full text-sm font-bold shadow-md">
                ⭐ Most Popular
              </div>
            )}
            
            <div className="h-48 w-full relative">
              <div className="absolute inset-0 bg-ink/30 z-10"></div>
              <img src={opt.img} alt={opt.title} className="w-full h-full object-cover" />
              <div className="absolute bottom-4 left-6 z-20 text-5xl">{opt.emoji}</div>
            </div>

            <div className="p-8 flex flex-col flex-grow">
              <h3 className="text-2xl font-display font-bold mb-2">{opt.title}</h3>
              <div className="flex items-baseline gap-1 mb-8">
                <span className={`text-4xl font-bold ${opt.popular ? 'text-primary' : 'text-ink'}`}>{opt.price}</span>
                <span className={opt.popular ? 'text-canvas/70' : 'text-body'}>{opt.period}</span>
              </div>

              <ul className="space-y-4 mb-8 flex-grow">
                {opt.features.map((feat, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="text-primary mt-1">✔</span>
                    <span className={opt.popular ? 'text-canvas/90' : 'text-body'}>{feat}</span>
                  </li>
                ))}
              </ul>

              <button className={`w-full py-3 rounded-xl font-bold transition-colors ${
                opt.popular
                  ? 'bg-primary text-on-primary hover:bg-primary/90'
                  : 'bg-canvas-soft text-ink hover:bg-mute/20'
              }`}>
                Pilih {opt.title}
              </button>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="mt-12 bg-canvas-soft rounded-2xl p-8 border border-mute/10 flex flex-col md:flex-row items-center justify-between gap-6 shadow-sm">
        <div>
          <h4 className="font-display font-bold text-xl text-ink mb-2">Butuh Daycare Harian?</h4>
          <p className="text-body">Untuk anabul yang gak bisa ditinggal saat kamu kerja.</p>
        </div>
        <div className="flex gap-4">
          <div className="bg-canvas px-6 py-3 rounded-lg border border-mute/20">
            <div className="text-sm text-body">Half-day (4 jam)</div>
            <div className="font-bold text-ink text-lg">Rp 150k</div>
          </div>
          <div className="bg-canvas px-6 py-3 rounded-lg border border-mute/20">
            <div className="text-sm text-body">Full-day (8 jam)</div>
            <div className="font-bold text-ink text-lg">Rp 250k</div>
          </div>
        </div>
      </div>
      <p className="text-center text-sm text-body mt-6">
        * Booking minimum 24 jam advance. Vaccination & deworming wajib up-to-date.
      </p>
    </section>
  );
}
