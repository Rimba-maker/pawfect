import { useEffect, useState } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { Icon } from '../art/Art';
import { Photo, Poster } from '../ui/ui';
import { testimonials } from '../../data/content';

export default function Testimonials() {
  const [i, setI] = useState(0);
  const [paused, setPaused] = useState(false);
  const reduce = useReducedMotion();
  const n = testimonials.length;

  useEffect(() => {
    if (paused || reduce) return;
    const t = setInterval(() => setI((v) => (v + 1) % n), 7000);
    return () => clearInterval(t);
  }, [paused, reduce, n]);

  const t = testimonials[i];
  const go = (d: number) => setI((v) => (v + d + n) % n);

  return (
    <Poster id="cerita" tone="marigold" title="Cerita para pet parent." lead="Ulasan di bawah ini contoh untuk demo, bukan pelanggan sungguhan.">
      <div
        className="grid items-center gap-10 md:grid-cols-[1fr_20rem]"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
        onFocus={() => setPaused(true)}
        onBlur={() => setPaused(false)}
        role="group"
        aria-roledescription="carousel"
        aria-label="Ulasan pet parent"
      >
        <div className="min-h-[16rem]" aria-live={paused ? 'polite' : 'off'}>
          <AnimatePresence mode="wait">
            <motion.figure key={i} initial={{ y: 24, opacity: 0.2 }} animate={{ y: 0, opacity: 1 }} exit={{ y: -12, opacity: 0.2 }} transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}>
              <blockquote className="t-lg font-display !leading-[1.12] md:-rotate-1">“{t.quote}”</blockquote>
              <figcaption className="mt-6 flex items-center gap-3 text-lg font-extrabold">
                <span className="h-1.5 w-10 rounded-full bg-ink" aria-hidden="true" />
                {t.who}
              </figcaption>
            </motion.figure>
          </AnimatePresence>
        </div>
        <div className="relative mx-auto w-full max-w-xs">
          <AnimatePresence mode="wait">
            <motion.div key={t.photo} initial={{ rotate: -4, scale: 0.97 }} animate={{ rotate: 0, scale: 1 }} exit={{ rotate: 3 }} transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}>
              <Photo name={t.photo} shape="arch" className="aspect-[4/5] w-full border-[3px] border-ink" />
            </motion.div>
          </AnimatePresence>
          <p className="mt-3 text-sm font-semibold">Foto stok, bukan pelanggan Pawfect.</p>
        </div>
      </div>

      <div className="mt-10 flex items-center gap-4">
        <button onClick={() => go(-1)} className="grid h-12 w-12 place-items-center rounded-full border-[3px] border-ink transition-colors hover:bg-ink hover:text-marigold" aria-label="Ulasan sebelumnya"><Icon name="arrow" className="h-5 w-5 rotate-180" /></button>
        <button onClick={() => go(1)} className="grid h-12 w-12 place-items-center rounded-full border-[3px] border-ink transition-colors hover:bg-ink hover:text-marigold" aria-label="Ulasan berikutnya"><Icon name="arrow" className="h-5 w-5" /></button>
        <div className="flex gap-2" aria-hidden="true">
          {testimonials.map((_, k) => <span key={k} className={`h-3 rounded-full bg-ink transition-all duration-500 ${k === i ? 'w-8' : 'w-3 opacity-40'}`} />)}
        </div>
      </div>
    </Poster>
  );
}
