import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const testimonials = [
  {
    quote: "Buddy (Golden Retriever) di-grooming di Pawfect tiap bulan. Hasilnya selalu konsisten, dan dia happy banget tiap di-drop. Pasti datang lagi.",
    author: "Bu Sari & Buddy 🐕",
    img: "https://plus.unsplash.com/premium_photo-1705847870569-0115c42d0c39?w=200&q=80&auto=format&fit=crop"
  },
  {
    quote: "Travel 10 hari ke Bali, Mochi (Persian cat) di-boarding di Royal Suite. Webcam-nya bikin tenang, daily video bikin gak homesick. Saya yang homesick sama Mochi.",
    author: "Pak Andre & Mochi 🐈",
    img: "https://plus.unsplash.com/premium_photo-1682144187125-b55e638cf286?w=200&q=80&auto=format&fit=crop"
  },
  {
    quote: "Puppy Max kami susah toilet training sampai ikut kelas Pawfect. Trainer-nya patient banget, Max sekarang fully trained dalam 2 bulan.",
    author: "Keluarga Wijaya & Max 🐶",
    img: "https://plus.unsplash.com/premium_photo-1661679465291-9d9e127b6668?w=200&q=80&auto=format&fit=crop"
  },
  {
    quote: "One-stop shop banget. Beli food, grooming, occasional boarding. Staff udah hafal kebiasaan Luna. Personal touch nya juara.",
    author: "Bu Linda & Luna 🐩",
    img: "https://plus.unsplash.com/premium_photo-1664541336709-bc0d8cf35668?w=200&q=80&auto=format&fit=crop"
  }
];

export default function Testimonial() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 7000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-24 bg-ink text-canvas overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-primary font-bold tracking-wider uppercase text-sm mb-4">Cerita Para Pet Parents</h2>
        
        <div className="relative min-h-[300px] md:min-h-[250px] flex items-center justify-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className="absolute w-full"
            >
              <div className="text-5xl text-primary/30 mb-6 font-serif">"</div>
              <p className="text-2xl md:text-3xl font-display font-medium leading-relaxed mb-8">
                {testimonials[current].quote}
              </p>
              <div className="flex flex-col items-center justify-center gap-4">
                <img 
                  src={testimonials[current].img} 
                  alt={testimonials[current].author} 
                  className="w-16 h-16 rounded-full object-cover border-2 border-primary"
                />
                <div className="font-bold text-lg text-primary">
                  — {testimonials[current].author}
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="flex justify-center gap-2 mt-12">
          {testimonials.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrent(idx)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                current === idx ? 'bg-primary w-8' : 'bg-canvas-soft/30 hover:bg-canvas-soft/50'
              }`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
