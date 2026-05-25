import React from 'react';
import { motion } from 'framer-motion';
import { Bath, Home, Sun, GraduationCap, ShoppingBag, Stethoscope } from 'lucide-react';

const services = [
  {
    title: "Grooming Premium",
    desc: "Bath & blow dry, full grooming, spa treatment (mud bath, aromatherapy).",
    price: "Mulai Rp 150k",
    icon: <Bath className="w-8 h-8 text-primary" />,
    emoji: "🛁",
    img: "https://images.unsplash.com/photo-1516734212186-a967f81ad0d7?q=80&w=800&auto=format&fit=crop"
  },
  {
    title: "Boarding & Hotel",
    desc: "Daycare (8 jam), overnight stay, premium suite with webcam.",
    price: "Mulai Rp 200k/malam",
    icon: <Home className="w-8 h-8 text-primary" />,
    emoji: "🏨",
    img: "https://plus.unsplash.com/premium_photo-1700403545715-858d198bd45b?w=800&q=80&auto=format&fit=crop"
  },
  {
    title: "Daycare",
    desc: "Half-day & full-day, socialization & play, photo update via WA.",
    price: "Rp 150k - 250k",
    icon: <Sun className="w-8 h-8 text-primary" />,
    emoji: "🎾",
    img: "https://plus.unsplash.com/premium_photo-1679519057192-a3867aa23c37?w=800&q=80&auto=format&fit=crop"
  },
  {
    title: "Training",
    desc: "Puppy training, obedience training, behavior modification.",
    price: "Mulai Rp 800k/paket",
    icon: <GraduationCap className="w-8 h-8 text-primary" />,
    emoji: "🎓",
    img: "https://images.unsplash.com/photo-1587300003388-59208cc962cb?q=80&w=800&auto=format&fit=crop"
  },
  {
    title: "Premium Pet Shop",
    desc: "Food, toys, accessories, supplements & treats (Royal Canin, Acana, etc).",
    price: "Variasi harga",
    icon: <ShoppingBag className="w-8 h-8 text-primary" />,
    emoji: "🛒",
    img: "https://plus.unsplash.com/premium_photo-1683134247309-7c1dae6ee150?w=800&q=80&auto=format&fit=crop"
  },
  {
    title: "Vet Consultation",
    desc: "In-house vet (Senin-Sabtu), vaccination, basic health check.",
    price: "Konsultasi Rp 250k",
    icon: <Stethoscope className="w-8 h-8 text-primary" />,
    emoji: "🩺",
    img: "https://plus.unsplash.com/premium_photo-1661916447474-235409b19e16?w=800&q=80&auto=format&fit=crop"
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};

export default function Services() {
  return (
    <section id="services" className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-display font-bold text-ink mb-4">Layanan Lengkap Untuk Anabul</h2>
        <p className="text-body text-xl">Karena pet butuh lebih dari sekadar makanan.</p>
      </div>

      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
      >
        {services.map((srv, idx) => (
          <motion.div 
            key={idx}
            variants={cardVariants}
            whileHover={{ y: -10 }}
            className="bg-canvas-soft rounded-xl border border-mute/10 hover:border-primary/30 transition-colors shadow-sm group overflow-hidden flex flex-col"
          >
            <div className="h-48 w-full overflow-hidden relative">
              <img src={srv.img} alt={srv.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
            </div>
            <div className="p-8 flex flex-col flex-grow">
              <div className="flex items-center justify-between mb-6">
                <div className="p-3 bg-canvas rounded-lg shadow-sm group-hover:scale-110 transition-transform">
                  {srv.icon}
                </div>
                <motion.span 
                  className="text-3xl"
                  whileHover={{ scale: 1.2, rotate: [0, 10, -10, 0] }}
                >
                  {srv.emoji}
                </motion.span>
              </div>
              <h3 className="text-2xl font-display font-bold text-ink mb-3">{srv.title}</h3>
              <p className="text-body mb-6 flex-grow">{srv.desc}</p>
              <div className="font-semibold text-primary">{srv.price}</div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
