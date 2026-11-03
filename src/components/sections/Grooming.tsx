import { useState } from 'react';
import { Burst, C, Icon } from '../art/Art';
import { Photo, Poster } from '../ui/ui';
import { breedCuts, groomingMenu, groomingTabs, type GroomTab } from '../../data/content';

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
        </div>

        <div id="groom-panel" role="tabpanel" aria-labelledby={`tab-${tab}`}>
          <div className="grid gap-5 md:grid-cols-[1fr_16rem]">
            <ul className="divide-y-[3px] divide-dotted divide-ink border-y-[3px] border-ink">
              {menu.map((m) => (
                <li key={m.name} className="relative grid gap-3 py-6 sm:grid-cols-[1fr_auto] sm:gap-6">
                  <div>
                    <h3 className="t-lg flex items-center gap-3 whitespace-nowrap">
                      {m.name}
                      {m.popular && <Burst color={C.marigold} className="-my-4 h-[5rem] w-[5rem] shrink-0 rotate-6 text-xs">Paling laris</Burst>}
                    </h3>
                    <ul className="mt-2 flex flex-wrap gap-x-5 gap-y-1 font-medium">
                      {m.items.map((it) => (
                        <li key={it} className="flex items-center gap-1.5"><Icon name="check" className="h-4 w-4" />{it}</li>
                      ))}
                    </ul>
                  </div>
                  <p className="font-display text-3xl sm:text-right">{m.price}</p>
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
