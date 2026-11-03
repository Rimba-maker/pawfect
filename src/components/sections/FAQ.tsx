import { useId, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { CatHead, Icon } from '../art/Art';
import { Poster } from '../ui/ui';
import { faq } from '../../data/content';

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);
  const uid = useId();

  return (
    <Poster id="faq" tone="paper" title="Pertanyaan pet parent." art={<svg viewBox="0 0 300 300"><CatHead /></svg>}>
      <ul className="max-w-3xl divide-y-[3px] divide-ink border-y-[3px] border-ink">
        {faq.map((f, i) => {
          const isOpen = open === i;
          return (
            <li key={f.q}>
              <h3 className="!font-sans text-xl !leading-snug">
                <button
                  className="flex w-full items-center justify-between gap-6 py-5 text-left font-extrabold"
                  aria-expanded={isOpen}
                  aria-controls={`${uid}-${i}`}
                  onClick={() => setOpen(isOpen ? null : i)}
                >
                  {f.q}
                  <span className={`grid h-9 w-9 shrink-0 place-items-center rounded-full bg-ink text-marigold transition-transform duration-500 ${isOpen ? 'rotate-45' : ''}`}>
                    <Icon name="plus" className="h-4 w-4" />
                  </span>
                </button>
              </h3>
              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div id={`${uid}-${i}`} role="region" initial={{ height: 0 }} animate={{ height: 'auto' }} exit={{ height: 0 }} transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }} className="overflow-hidden">
                    <p className="max-w-2xl pb-6 text-lg font-medium">{f.a}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </li>
          );
        })}
      </ul>
    </Poster>
  );
}
