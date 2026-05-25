import React from 'react';
import { motion } from 'framer-motion';

const programs = [
  {
    title: "Puppy Class",
    age: "2-6 bulan",
    price: "Rp 2.5 jt",
    desc: "8 sesi (1x/minggu). Socialization, basic command (sit, stay, come), toilet training, bite inhibition.",
    emoji: "🐾",
    img: "https://images.unsplash.com/photo-1587300003388-59208cc962cb?q=80&w=800&auto=format&fit=crop"
  },
  {
    title: "Obedience",
    age: "6 bulan+",
    price: "Rp 3.5 jt",
    desc: "10 sesi (1x/minggu). Advanced command, loose-leash walking, off-leash training prep.",
    emoji: "🦮",
    img: "https://plus.unsplash.com/premium_photo-1667673941713-ad4d4751c93b?w=800&q=80&auto=format&fit=crop"
  },
  {
    title: "Behavior Modification",
    age: "Semua Umur",
    price: "Mulai Rp 1.5 jt",
    desc: "Untuk aggression, anxiety, fear, reactive behavior. Custom 1-on-1 program.",
    emoji: "🧠",
    img: "https://plus.unsplash.com/premium_photo-1666777247416-ee7a95235559?w=800&q=80&auto=format&fit=crop"
  }
];

export default function Training() {
  return (
    <section id="training" className="py-24 bg-canvas max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-display font-bold text-ink mb-4">Training Program</h2>
        <p className="text-body text-xl max-w-2xl mx-auto">
          Trainer bersertifikat dengan metode <span className="font-bold text-primary">force-free & positive reinforcement</span>.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {programs.map((prog, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1 }}
            whileHover={{ y: -10 }}
            className="bg-canvas-soft border border-mute/10 rounded-2xl hover:border-primary/30 transition-colors shadow-sm relative group overflow-hidden flex flex-col"
          >
            <div className="h-48 w-full relative overflow-hidden">
               <img src={prog.img} alt={prog.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
               <div className="absolute inset-0 bg-gradient-to-t from-ink/80 to-transparent"></div>
               <div className="absolute bottom-4 left-6 text-4xl">{prog.emoji}</div>
            </div>
            <div className="p-8 flex flex-col flex-grow">
              <div className="inline-block bg-mute/20 text-ink text-xs font-bold px-3 py-1 rounded-full mb-4 self-start">
                {prog.age}
              </div>
              <h3 className="text-2xl font-display font-bold text-ink mb-2">{prog.title}</h3>
              <div className="text-primary font-bold text-xl mb-4">{prog.price}</div>
              <p className="text-body flex-grow">{prog.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
