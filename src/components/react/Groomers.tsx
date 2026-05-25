import React from 'react';
import { motion } from 'framer-motion';

const groomers = [
  { name: "Ms. Linda", specialty: "Senior Groomer", cert: "IGA certified (10+ yrs)", img: "https://plus.unsplash.com/premium_photo-1663039950073-187c977da2e9?w=800&q=80&auto=format&fit=crop" },
  { name: "Pak Reza", specialty: "Asian Style", cert: "Korean Cut Specialist", img: "https://plus.unsplash.com/premium_photo-1661688797823-36e97735223e?w=800&q=80&auto=format&fit=crop" },
  { name: "Ms. Maya", specialty: "Cat Specialist", cert: "CFA certified", img: "https://plus.unsplash.com/premium_photo-1661438091134-0c9bbebfe136?w=800&q=80&auto=format&fit=crop" },
  { name: "Pak Andre", specialty: "Show Grooming", cert: "Golden, Husky", img: "https://plus.unsplash.com/premium_photo-1664540415069-bc45ce3e711e?w=800&q=80&auto=format&fit=crop" },
  { name: "Ms. Sari", specialty: "Pet Spa", cert: "Skin & Coat Therapy", img: "https://plus.unsplash.com/premium_photo-1705847870569-0115c42d0c39?w=800&q=80&auto=format&fit=crop" },
  { name: "Pak Bayu", specialty: "Breed-Specific", cert: "Poodle, Shih Tzu", img: "https://plus.unsplash.com/premium_photo-1661774991416-ee14a1bc0d30?w=800&q=80&auto=format&fit=crop" }
];

export default function Groomers() {
  return (
    <section id="groomers" className="py-24 bg-canvas max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-display font-bold text-ink mb-4">Groomer Profesional</h2>
        <p className="text-body text-xl">Bersertifikat, berpengalaman, & love pets seperti family.</p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-6">
        {groomers.map((groomer, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1 }}
            whileHover={{ y: -5 }}
            className="group relative overflow-hidden rounded-2xl cursor-pointer shadow-sm bg-ink/10"
          >
            <div className="aspect-[3/4] w-full relative">
              <img src={groomer.img} alt={groomer.name} className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
            </div>
            
            <div className="absolute inset-0 bg-gradient-to-t from-ink/90 via-ink/30 to-transparent opacity-80" />
            
            <div className="absolute bottom-0 left-0 w-full p-4 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
              <h3 className="font-display font-bold text-canvas text-lg">{groomer.name}</h3>
              <p className="text-primary font-semibold text-sm">{groomer.specialty}</p>
              <p className="text-canvas-soft text-xs mt-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
                {groomer.cert}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
