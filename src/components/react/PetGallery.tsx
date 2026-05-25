import React from 'react';
import { motion } from 'framer-motion';

const pets = [
  { name: "Milo", breed: "Corgi", age: "2 Tahun", img: "https://plus.unsplash.com/premium_photo-1710406095492-7e62eba19745?w=600&q=80&auto=format&fit=crop" },
  { name: "Luna", breed: "Persian", age: "1 Tahun", img: "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?q=80&w=600&auto=format&fit=crop" },
  { name: "Rocky", breed: "Husky", age: "3 Tahun", img: "https://images.unsplash.com/photo-1517849845537-4d257902454a?q=80&w=600&auto=format&fit=crop" },
  { name: "Bella", breed: "Poodle", age: "4 Bulan", img: "https://images.unsplash.com/photo-1583337130417-3346a1be7dee?q=80&w=600&auto=format&fit=crop" },
  { name: "Max", breed: "Beagle", age: "2.5 Tahun", img: "https://plus.unsplash.com/premium_photo-1723709014135-117b062f130c?w=600&q=80&auto=format&fit=crop" },
  { name: "Chloe", breed: "Ragdoll", age: "2 Tahun", img: "https://images.unsplash.com/photo-1495360010541-f48722b34f7d?q=80&w=600&auto=format&fit=crop" },
  { name: "Coco", breed: "Shih Tzu", age: "5 Tahun", img: "https://images.unsplash.com/photo-1535930891776-0c2dfb7fda1a?q=80&w=600&auto=format&fit=crop" },
  { name: "Leo", breed: "Golden", age: "1.5 Tahun", img: "https://images.unsplash.com/photo-1596733430284-f7437764b1a9?q=80&w=600&auto=format&fit=crop" },
  { name: "Simba", breed: "Maine Coon", age: "3 Tahun", img: "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?q=80&w=600&auto=format&fit=crop" },
  { name: "Daisy", breed: "Maltese", age: "1 Tahun", img: "https://images.unsplash.com/photo-1583337130417-3346a1be7dee?q=80&w=600&auto=format&fit=crop" },
];

export default function PetGallery() {
  return (
    <section id="gallery" className="py-24 bg-canvas-soft max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-display font-bold text-ink mb-4">Pawfect Pet of the Month</h2>
        <p className="text-body text-xl">Karena setiap anabul deserve to be celebrated.</p>
      </div>

      {/* Masonry-like grid using flex */}
      <div className="flex flex-wrap justify-center gap-4 md:gap-6">
        {pets.map((pet, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: (idx % 5) * 0.1 }}
            className={`group relative overflow-hidden rounded-2xl cursor-pointer shadow-sm w-32 h-32 md:w-48 md:h-48 flex items-center justify-center bg-ink/10`}
          >
            {idx === 0 && (
              <div className="absolute top-2 right-2 bg-primary text-on-primary text-[10px] md:text-xs font-bold px-2 py-1 rounded-full z-20 shadow-md flex items-center gap-1 animate-bounce">
                ⭐ Winner
              </div>
            )}
            
            <img src={pet.img} alt={pet.name} className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />

            <div className="absolute inset-0 bg-ink/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center text-canvas p-4 text-center z-10">
              <span className="font-display font-bold text-lg md:text-xl">{pet.name}</span>
              <span className="text-primary text-xs md:text-sm font-semibold">{pet.breed}</span>
              <span className="text-canvas-soft text-[10px] md:text-xs mt-1">{pet.age}</span>
            </div>
          </motion.div>
        ))}
      </div>
      
      <div className="text-center mt-12">
        <button className="text-primary font-bold hover:underline underline-offset-4 decoration-2">
          Lihat Semua Member 🐾
        </button>
      </div>
    </section>
  );
}
