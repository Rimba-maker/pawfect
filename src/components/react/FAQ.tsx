import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, PawPrint } from 'lucide-react';

const faqs = [
  {
    q: "Apakah harus appointment grooming?",
    a: "Sangat disarankan, terutama weekend. Walk-in tersedia tapi tergantung availability hari tersebut."
  },
  {
    q: "Berapa lama proses full grooming?",
    a: "Sekitar 2-4 jam tergantung breed, size, dan kondisi bulu. Kami menggunakan model drop-off & pickup, dan akan mengabari via WA saat anabul siap dijemput."
  },
  {
    q: "Apakah vaksin wajib untuk boarding?",
    a: "Wajib. DHPP (untuk anjing), F3/F4 (untuk kucing), dan rabies. Bukti buku vaksin/sertifikat yang up-to-date diperlukan saat check-in."
  },
  {
    q: "Bisa kirim food/produk via delivery?",
    a: "Tentu bisa! Kami mendukung pengiriman same-day via GoSend/GrabExpress untuk area Jadetabek, dan Tiki/JNE untuk nasional."
  },
  {
    q: "Bagaimana jika anabul saya stress saat di-grooming?",
    a: "Tim kami sangat terlatih handle anxious pets. Kami selalu take breaks, menggunakan gentle approach, dan low-stress handling techniques agar anabul merasa aman."
  },
  {
    q: "Apakah ada emergency vet 24/7?",
    a: "In-house vet kami praktik Senin-Sabtu (daytime). Untuk kasus emergency 24/7 di luar jam kerja, kami akan mereferensikan ke partner emergency clinic terdekat."
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-24 bg-canvas max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-display font-bold text-ink mb-4">FAQ Pet Parents</h2>
        <p className="text-body text-xl">Pertanyaan yang sering ditanyakan sebelum berkunjung.</p>
      </div>

      <div className="space-y-4">
        {faqs.map((faq, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1 }}
            className={`border rounded-xl overflow-hidden transition-colors ${
              openIndex === idx ? 'border-primary/50 bg-canvas-soft' : 'border-mute/20 bg-canvas hover:border-mute/50'
            }`}
          >
            <button
              onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
              className="w-full text-left px-6 py-5 flex items-center justify-between focus:outline-none"
            >
              <span className="font-display font-bold text-lg text-ink">{faq.q}</span>
              <motion.div
                animate={{ rotate: openIndex === idx ? 180 : 0 }}
                transition={{ duration: 0.3 }}
                className={openIndex === idx ? 'text-primary' : 'text-body'}
              >
                <ChevronDown size={24} />
              </motion.div>
            </button>
            <AnimatePresence>
              {openIndex === idx && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="px-6 pb-6 pt-0 text-body flex items-start gap-3">
                    <PawPrint size={18} className="text-primary mt-1 shrink-0" />
                    <p>{faq.a}</p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
