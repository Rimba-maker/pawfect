import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const menuData = {
  Dog: [
    { title: "Basic Bath", price: "Rp 150k - 350k", desc: "Shampoo & conditioner, Blow dry, Nail trim, Ear cleaning.", emoji: "🛁", img: "https://plus.unsplash.com/premium_photo-1664303025616-a8f3b7114e10?w=200&q=80&auto=format&fit=crop" },
    { title: "Full Grooming", price: "Rp 250k - 600k", desc: "Semua Basic + Cutting & styling sesuai breed, Sanitary trim, Paw pad trim.", emoji: "✂️", popular: true, img: "https://plus.unsplash.com/premium_photo-1663012822996-ba7e04f3627a?w=200&q=80&auto=format&fit=crop" },
    { title: "Spa Premium", price: "Rp 400k - 950k", desc: "Semua Full + Mud bath / facial mask, Aromatherapy, De-shedding treatment.", emoji: "💎", img: "https://images.unsplash.com/photo-1535930891776-0c2dfb7fda1a?q=80&w=200&auto=format&fit=crop" },
    { title: "Breed-Specific Cut", price: "Konsultasi", desc: "Poodle (teddy bear), Golden Retriever, Shih Tzu, Maltese, Pomeranian.", emoji: "🐩", img: "https://plus.unsplash.com/premium_photo-1663036512129-8e236721f90d?w=200&q=80&auto=format&fit=crop" }
  ],
  Cat: [
    { title: "Basic Bath", price: "Rp 200k - 350k", desc: "Shampoo, Blow dry, Nail trim, Ear cleaning khusus kucing.", emoji: "🛁", img: "https://plus.unsplash.com/premium_photo-1664303025616-a8f3b7114e10?w=200&q=80&auto=format&fit=crop" },
    { title: "Full Grooming", price: "Rp 300k - 550k", desc: "Semua Basic + Sanitary trim, perapihan bulu.", emoji: "✂️", popular: true, img: "https://plus.unsplash.com/premium_photo-1664302568940-d7898b77b982?w=200&q=80&auto=format&fit=crop" },
    { title: "Lion Cut", price: "Rp 450k - 800k", desc: "Cukur model singa, sangat cocok untuk bulu kusut parah.", emoji: "🦁", img: "https://plus.unsplash.com/premium_photo-1694453109877-27e740a6e91b?w=200&q=80&auto=format&fit=crop" }
  ]
};

export default function GroomingMenu() {
  const [activeTab, setActiveTab] = useState<'Dog' | 'Cat'>('Dog');

  return (
    <section id="grooming" className="py-24 bg-canvas max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-display font-bold text-ink mb-4">Grooming Menu</h2>
        <p className="text-body text-xl max-w-2xl mx-auto">
          Disesuaikan dengan size & breed. Konsultasi dengan groomer kami untuk mendapatkan paket yang paling tepat.
        </p>
      </div>

      <div className="flex justify-center mb-12">
        <div className="bg-canvas-soft p-2 rounded-xl inline-flex gap-2">
          {['Dog', 'Cat'].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab as 'Dog' | 'Cat')}
              className={`relative px-8 py-3 rounded-lg font-semibold text-lg transition-colors ${
                activeTab === tab ? 'text-on-primary' : 'text-body hover:text-ink'
              }`}
            >
              {activeTab === tab && (
                <motion.div
                  layoutId="activeTab"
                  className="absolute inset-0 bg-primary rounded-lg"
                  initial={false}
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                />
              )}
              <span className="relative z-10">{tab === 'Dog' ? '🐶 Anjing' : '🐱 Kucing'}</span>
            </button>
          ))}
        </div>
      </div>

      <div className="min-h-[400px]">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            {menuData[activeTab].map((item, idx) => (
              <div key={idx} className="bg-canvas border border-mute/20 p-6 rounded-xl relative overflow-hidden group hover:border-primary/50 transition-colors shadow-sm flex flex-col sm:flex-row items-center sm:items-start gap-6">
                {item.popular && (
                  <div className="absolute top-4 right-4 bg-primary/10 text-primary text-xs font-bold px-3 py-1 rounded-full animate-pulse z-10">
                    ⭐ Most Popular
                  </div>
                )}
                <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-xl overflow-hidden shrink-0 relative">
                   <img src={item.img} alt={item.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300" />
                   <div className="absolute top-1 left-1 bg-canvas rounded-full p-1 text-sm shadow-sm">{item.emoji}</div>
                </div>
                <div className="flex-1 text-center sm:text-left">
                  <h3 className="text-2xl font-display font-bold text-ink mb-1">{item.title}</h3>
                  <div className="text-primary font-bold mb-3">{item.price}</div>
                  <p className="text-body text-sm leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
