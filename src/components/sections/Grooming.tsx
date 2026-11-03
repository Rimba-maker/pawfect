import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Burst, CatHead, C, DogHead, Icon, RabbitHead } from '../art/Art';
import { Photo, Poster } from '../ui/ui';
import { breedCuts, groomingMenu, groomingTabs, type GroomTab } from '../../data/content';

const heads: Record<GroomTab, JSX.Element> = {
  Anjing: <svg viewBox="0 0 300 330"><DogHead /></svg>,
  Kucing: <svg viewBox="0 0 300 300"><CatHead /></svg>,
  Kelinci: <svg viewBox="0 0 300 360"><RabbitHead /></svg>,
  'Pet Lain': <svg viewBox="0 0 300 330"><DogHead /></svg>,
};
const photos: Record<GroomTab, string> = { Anjing: 'golden-bath', Kucing: 'cat-white-groom', Kelinci: 'cat-comb', 'Pet Lain': 'chihuahua-bath' };

export default function Grooming() {
  const [tab, setTab] = useState<GroomTab>('Anjing');
  const menu = groomingMenu[tab];

  return (
    <Poster id="grooming" tone="teal" title="Grooming Menu" lead="Disesuaikan dengan ukuran dan ras. Konsultasi dulu dengan groomer untuk paket yang tepat.">
      <div className="grid gap-10 lg:grid-cols-[18rem_1fr]">
        <div>
          <div role="tablist" aria-label="Jenis hewan" className="flex flex-wrap gap-3 lg:flex-col">
            {groomingTabs.map((t) => (
              <button
                key={t}
                role="tab"
                id={`tab-${t}`}
                aria-selected={tab === t}
                aria-controls="groom-panel"
                onClick={() => setTab(t)}
                className={`rounded-full border-[3px] border-ink px-6 py-3 text-left font-display text-2xl transition-colors duration-300 ${tab === t ? 'bg-ink text-teal' : 'bg-transparent hover:bg-paper'}`}
              >
                {t}
              </button>
            ))}
          </div>
          <div className="mt-8 hidden w-44 lg:block" aria-hidden="true">
            <AnimatePresence mode="wait">
              <motion.div key={tab} initial={{ y: 16, rotate: -4 }} animate={{ y: 0, rotate: 0 }} exit={{ y: -8 }} transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}>
                {heads[tab]}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        <div id="groom-panel" role="tabpanel" aria-labelledby={`tab-${tab}`}>
          <div className="grid gap-5 md:grid-cols-[1fr_16rem]">
            <ul className="divide-y-[3px] divide-dotted divide-ink border-y-[3px] border-ink">
              {menu.map((m) => (
                <li key={m.name} className="relative grid gap-3 py-6 sm:grid-cols-[1fr_auto] sm:gap-6">
                  <div>
                    <h3 className="t-lg">{m.name}</h3>
                    <ul className="mt-2 flex flex-wrap gap-x-5 gap-y-1 font-medium">
                      {m.items.map((it) => (
                        <li key={it} className="flex items-center gap-1.5"><Icon name="check" className="h-4 w-4" />{it}</li>
                      ))}
                    </ul>
                  </div>
                  <p className="font-display text-3xl sm:text-right">{m.price}</p>
                  {m.popular && (
                    <Burst color={C.marigold} className="absolute -top-3 right-24 hidden h-20 w-20 rotate-12 text-sm sm:grid">Paling laris</Burst>
                  )}
                </li>
              ))}
            </ul>
            <Photo name={photos[tab]} shape="arch" className="hidden min-h-72 md:block" />
          </div>

          {tab === 'Anjing' && (
            <div className="mt-10">
              <h3 className="t-md">Potongan sesuai ras</h3>
              <ul className="mt-4 flex flex-wrap gap-3">
                {breedCuts.map((b) => (
                  <li key={b} className="rounded-full border-[3px] border-ink bg-paper px-4 py-2 font-semibold">{b}</li>
                ))}
              </ul>
              <p className="mt-3 text-sm font-medium opacity-80">Harga ras menyesuaikan, konsultasikan dengan groomer.</p>
            </div>
          )}
        </div>
      </div>
    </Poster>
  );
}
