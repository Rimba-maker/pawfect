import React from 'react';
import { motion } from 'framer-motion';

const categories = [
  { name: "Food", desc: "Premium dry & wet food", emoji: "🍖", img: "https://images.unsplash.com/photo-1589924691995-400dc9ecc119?q=80&w=600&auto=format&fit=crop" },
  { name: "Treats", desc: "Healthy snacks", emoji: "🦴", img: "https://images.unsplash.com/photo-1576201836106-db1758fd1c97?q=80&w=600&auto=format&fit=crop" },
  { name: "Toys", desc: "Interactive toys", emoji: "🎾", img: "https://images.unsplash.com/photo-1576201836106-db1758fd1c97?q=80&w=600&auto=format&fit=crop" },
  { name: "Comfort", desc: "Beds & carriers", emoji: "🛏️", img: "https://plus.unsplash.com/premium_photo-1708724049042-b63eb35f16dd?w=600&q=80&auto=format&fit=crop" },
  { name: "Grooming", desc: "Shampoo & tools", emoji: "🛁", img: "https://plus.unsplash.com/premium_photo-1664303025616-a8f3b7114e10?w=600&q=80&auto=format&fit=crop" },
];

export default function Shop() {
  return (
    <section id="shop" className="py-24 bg-canvas-soft max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-display font-bold text-ink mb-4">Premium Pet Shop</h2>
        <p className="text-body text-xl">Cuma brand yang kami trust untuk anabul sendiri.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 mb-16">
        {categories.map((cat, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1 }}
            whileHover={{ y: -5 }}
            className="group relative h-48 rounded-xl overflow-hidden cursor-pointer shadow-sm"
          >
            <div className="absolute inset-0 bg-ink/40 group-hover:bg-ink/50 transition-colors z-10"></div>
            <img src={cat.img} alt={cat.name} className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
            <div className="absolute inset-0 z-20 flex flex-col items-center justify-center p-4 text-center text-canvas">
              <div className="text-4xl mb-2">{cat.emoji}</div>
              <h3 className="font-display font-bold mb-1">{cat.name}</h3>
              <p className="text-canvas/80 text-sm">{cat.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="bg-canvas p-8 md:p-12 rounded-2xl border border-primary/20 flex flex-col md:flex-row items-center justify-between gap-8 shadow-sm relative overflow-hidden">
        <div className="relative z-10">
          <h3 className="text-3xl font-display font-bold text-ink mb-4">Belanja dari Rumah?</h3>
          <p className="text-body text-lg mb-6 max-w-md">
            Semua produk premium kami bisa dikirim via GoSend atau GrabExpress di hari yang sama. Free ongkir untuk Pawfect Club members.
          </p>
          <a href="https://wa.me/6281234567890" target="_blank" rel="noreferrer" className="inline-block bg-primary text-on-primary px-8 py-3 rounded-xl font-bold hover:bg-primary/90 transition-colors shadow-sm">
            Chat Admin Toko 🐾
          </a>
        </div>
        <div className="text-9xl opacity-20 transform rotate-12 relative z-0 md:mr-10">
          🛍️
        </div>
      </div>
    </section>
  );
}
