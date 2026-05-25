import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function BookingForm() {
  const [step, setStep] = useState(1);
  const [submitted, setSubmitted] = useState(false);

  const handleNext = (e: React.FormEvent) => {
    e.preventDefault();
    if (step < 3) setStep(step + 1);
    else setSubmitted(true);
  };

  return (
    <section id="booking" className="py-24 bg-canvas max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="bg-canvas-soft border border-mute/20 rounded-3xl p-8 md:p-12 shadow-sm relative overflow-hidden">
        {/* Playful background element */}
        <div className="absolute -top-10 -right-10 text-9xl opacity-5 pointer-events-none rotate-12">
          🐾
        </div>

        <AnimatePresence mode="wait">
          {!submitted ? (
            <motion.div
              key="form"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
            >
              <div className="text-center mb-10">
                <h2 className="text-3xl md:text-4xl font-display font-bold text-ink mb-3">Book Anabul Kamu</h2>
                <p className="text-body">Pilih service & tanggal. Kami akan konfirmasi via WA dalam 1 jam.</p>
              </div>

              {/* Progress Bar */}
              <div className="flex items-center justify-between mb-8 relative">
                <div className="absolute top-1/2 left-0 w-full h-1 bg-mute/20 -z-10 -translate-y-1/2 rounded-full"></div>
                <div 
                  className="absolute top-1/2 left-0 h-1 bg-primary -z-10 -translate-y-1/2 rounded-full transition-all duration-300"
                  style={{ width: `${((step - 1) / 2) * 100}%` }}
                ></div>
                {[1, 2, 3].map((s) => (
                  <div 
                    key={s} 
                    className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm transition-colors ${
                      step >= s ? 'bg-primary text-on-primary' : 'bg-canvas border border-mute/20 text-body'
                    }`}
                  >
                    {s}
                  </div>
                ))}
              </div>

              <form onSubmit={handleNext} className="space-y-6">
                <AnimatePresence mode="wait">
                  {step === 1 && (
                    <motion.div key="step1" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="space-y-4">
                      <div>
                        <label className="block text-sm font-bold text-ink mb-2">Service yang dibutuhkan</label>
                        <select className="w-full bg-canvas border border-mute/30 rounded-xl px-4 py-3 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary text-ink" required>
                          <option value="">Pilih Service...</option>
                          <option>Grooming Premium</option>
                          <option>Boarding / Hotel</option>
                          <option>Daycare</option>
                          <option>Training</option>
                        </select>
                      </div>
                      <div>
                        <label className="block text-sm font-bold text-ink mb-2">Cabang</label>
                        <select className="w-full bg-canvas border border-mute/30 rounded-xl px-4 py-3 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary text-ink" required>
                          <option value="">Pilih Cabang...</option>
                          <option>Kelapa Gading</option>
                          <option>Kemang</option>
                          <option>BSD</option>
                          <option>Bintaro</option>
                          <option>Bandung Dago</option>
                        </select>
                      </div>
                    </motion.div>
                  )}

                  {step === 2 && (
                    <motion.div key="step2" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="space-y-4">
                      <div>
                        <label className="block text-sm font-bold text-ink mb-2">Nama Anabul</label>
                        <input type="text" placeholder="Misal: Buddy" className="w-full bg-canvas border border-mute/30 rounded-xl px-4 py-3 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary text-ink" required />
                      </div>
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-bold text-ink mb-2">Jenis/Breed</label>
                          <input type="text" placeholder="Misal: Poodle" className="w-full bg-canvas border border-mute/30 rounded-xl px-4 py-3 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary text-ink" required />
                        </div>
                        <div>
                          <label className="block text-sm font-bold text-ink mb-2">Size</label>
                          <select className="w-full bg-canvas border border-mute/30 rounded-xl px-4 py-3 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary text-ink" required>
                            <option value="">Pilih...</option>
                            <option>Small</option>
                            <option>Medium</option>
                            <option>Large</option>
                            <option>Giant</option>
                          </select>
                        </div>
                      </div>
                    </motion.div>
                  )}

                  {step === 3 && (
                    <motion.div key="step3" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="space-y-4">
                      <div>
                        <label className="block text-sm font-bold text-ink mb-2">Nama Pet Parent</label>
                        <input type="text" placeholder="Nama Anda" className="w-full bg-canvas border border-mute/30 rounded-xl px-4 py-3 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary text-ink" required />
                      </div>
                      <div>
                        <label className="block text-sm font-bold text-ink mb-2">Nomor WhatsApp</label>
                        <input type="tel" placeholder="0812..." className="w-full bg-canvas border border-mute/30 rounded-xl px-4 py-3 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary text-ink" required />
                      </div>
                      <div>
                        <label className="block text-sm font-bold text-ink mb-2">Tanggal Preferensi</label>
                        <input type="date" className="w-full bg-canvas border border-mute/30 rounded-xl px-4 py-3 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary text-ink" required />
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

                <div className="flex justify-between pt-4 mt-8 border-t border-mute/10">
                  {step > 1 && (
                    <button type="button" onClick={() => setStep(step - 1)} className="text-body font-bold hover:text-ink transition-colors px-4 py-3">
                      Kembali
                    </button>
                  )}
                  <button type="submit" className="ml-auto bg-primary text-on-primary px-8 py-3 rounded-xl font-bold hover:bg-primary/90 transition-colors flex items-center gap-2">
                    {step === 3 ? "Book Sekarang 🐾" : "Lanjut"}
                  </button>
                </div>
              </form>
            </motion.div>
          ) : (
            <motion.div
              key="success"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center py-12"
            >
              <motion.div 
                animate={{ rotate: [0, 10, -10, 0] }}
                transition={{ duration: 1, repeat: 1 }}
                className="text-7xl mb-6 inline-block"
              >
                🎉
              </motion.div>
              <h3 className="text-3xl font-display font-bold text-ink mb-4">Yay! Request Diterima.</h3>
              <p className="text-body text-lg mb-8 max-w-md mx-auto">
                Tim admin Pawfect akan segera menghubungi via WhatsApp untuk konfirmasi jam dan detail lainnya.
              </p>
              <button onClick={() => {setStep(1); setSubmitted(false);}} className="text-primary font-bold hover:underline underline-offset-4">
                Book jadwal lain
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
