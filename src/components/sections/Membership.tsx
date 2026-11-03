import { Burst, C, Icon } from '../art/Art';
import { Poster, Reveal, toneBg } from '../ui/ui';
import { tiers } from '../../data/content';

export default function Membership() {
  return (
    <Poster id="membership" tone="ink" title="Pawfect Club." lead="Member dapat benefit eksklusif dan hemat sampai 25%. Harga per tahun.">
      <div className="grid items-end gap-6 md:grid-cols-3">
        {tiers.map((t, i) => {
          const hero = 'popular' in t && t.popular;
          return (
            <Reveal key={t.name} delay={i * 0.1}>
              <article className={`relative rounded-[2rem] p-7 md:p-8 ${toneBg[t.tone]} ${hero ? 'md:-mt-10 md:pb-12' : ''}`}>
                {hero && <Burst color={C.marigold} className="absolute -right-4 -top-8 h-24 w-24 rotate-12 text-base">Paling laris</Burst>}
                <h3 className="t-lg">{t.name}</h3>
                <p className="mt-2 font-display text-5xl">{t.price}<span className="font-sans text-base font-semibold"> /tahun</span></p>
                <ul className="mt-6 space-y-3 font-semibold">
                  {t.list.map((l) => (
                    <li key={l} className="flex gap-2.5"><Icon name="check" className="mt-1 h-4 w-4 shrink-0" />{l}</li>
                  ))}
                </ul>
                <a href="#booking" className="pill pill-ink mt-8 w-full">Gabung {t.name}</a>
              </article>
            </Reveal>
          );
        })}
      </div>
    </Poster>
  );
}
