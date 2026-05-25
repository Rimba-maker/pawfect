import React from 'react';
import { motion } from 'framer-motion';
import { PawPrint } from 'lucide-react';

const playfulReveal = {
  hidden: { opacity: 0, y: 30, scale: 0.95 },
  visible: { 
    opacity: 1, 
    y: 0, 
    scale: 1,
    transition: { type: "spring", stiffness: 150, damping: 18, staggerChildren: 0.1 }
  }
};

const itemReveal = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};

const floatingPaw = (delay: number) => ({
  y: [0, -20, 0],
  rotate: [0, 15, -15, 0],
  transition: { duration: 5 + Math.random(), repeat: Infinity, delay }
});

export default function Hero() {
  return (
    <section className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-24 md:py-24 text-center overflow-hidden">
      {/* Background Floating Paws */}
      <motion.div className="absolute top-10 left-4 md:left-10 text-mute/30" animate={floatingPaw(0)}>
        <PawPrint size={48} />
      </motion.div>
      <motion.div className="absolute top-40 right-4 md:right-20 text-mute/30 hidden sm:block" animate={floatingPaw(1.5)}>
        <PawPrint size={64} />
      </motion.div>
      <motion.div className="absolute bottom-10 left-1/4 text-mute/30" animate={floatingPaw(0.5)}>
        <PawPrint size={32} />
      </motion.div>

      <motion.div 
        variants={playfulReveal}
        initial="hidden"
        animate="visible"
        className="relative z-10"
      >
        <motion.h1 variants={itemReveal} className="text-4xl sm:text-5xl md:text-7xl font-display font-bold text-ink mb-6 leading-tight">
          Spa, Hotel, & Toko —<br/>
          <span className="text-primary">Semua Untuk Anabul.</span>
        </motion.h1>
        
        <motion.p variants={itemReveal} className="text-body text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed px-2">
          Pet studio one-stop: grooming premium, daycare & boarding nyaman, training profesional, dan produk premium pilihan. 5.000+ furry friends sudah jadi member.
        </motion.p>
        
        <motion.div variants={itemReveal} className="w-full max-w-4xl mx-auto mb-12 rounded-2xl md:rounded-3xl overflow-hidden shadow-2xl relative h-48 sm:h-64 md:h-96">
           <img 
              src="https://images.unsplash.com/photo-1583337130417-3346a1be7dee?q=80&w=1920&auto=format&fit=crop" 
              alt="Anjing happy after grooming" 
              className="absolute inset-0 w-full h-full object-cover object-center"
           />
           <div className="absolute inset-0 bg-gradient-to-t from-ink/60 to-transparent"></div>
        </motion.div>

        <motion.div variants={itemReveal} className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-4 mb-16 px-4 sm:px-0">
          <a href="#booking" className="bg-primary text-on-primary px-8 py-4 md:py-4 rounded-xl font-bold text-lg hover:bg-primary/90 transition-colors shadow-sm flex items-center justify-center gap-2 group w-full sm:w-auto">
            Book Grooming 
            <motion.span 
              animate={{ rotate: [0, 15, -15, 0] }} 
              transition={{ repeat: Infinity, duration: 2, repeatDelay: 1 }}
            >
              🐾
            </motion.span>
          </a>
          <a href="#shop" className="bg-canvas border-2 border-ink text-ink px-8 py-4 md:py-4 rounded-xl font-bold text-lg hover:bg-ink hover:text-canvas transition-colors shadow-sm text-center w-full sm:w-auto">
            Browse Shop
          </a>
        </motion.div>

        {/* Trust Badges */}
        <motion.div variants={itemReveal} className="flex flex-wrap justify-center gap-4 md:gap-10 text-xs sm:text-sm font-semibold text-ink/80 px-2">
          <div className="flex items-center gap-2 bg-canvas-soft px-4 py-2 rounded-full border border-mute/10">
            <span className="text-primary text-base">🏆</span> Sertifikasi Internasional
          </div>
          <div className="flex items-center gap-2 bg-canvas-soft px-4 py-2 rounded-full border border-mute/10">
            <span className="text-primary text-base">❤️</span> 5.000+ Happy Pets
          </div>
          <div className="flex items-center gap-2 bg-canvas-soft px-4 py-2 rounded-full border border-mute/10">
            <span className="text-primary text-base">⚕️</span> Vet-Approved
          </div>
          <div className="flex items-center gap-2 bg-canvas-soft px-4 py-2 rounded-full border border-mute/10 hidden sm:flex">
            <span className="text-primary text-base">⏰</span> 24/7 Care
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
