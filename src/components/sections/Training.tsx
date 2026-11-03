import { Icon, Paw } from '../art/Art';
import { Photo, Poster, Reveal } from '../ui/ui';
import { training } from '../../data/content';

/** Three programs set as ascending steps: the offset itself says "level up". */
const rise = ['md:mt-24', 'md:mt-12', 'md:mt-0'];

export default function Training() {
  return (
    <Poster id="training" tone="marigold" title="Sekolah anabul, tanpa hukuman." lead="Pelatih bersertifikat dengan metode force-free dan positive reinforcement. Tersedia juga paket stay & train 1–4 minggu.">
      <div className="grid items-end gap-8 md:grid-cols-3 md:gap-6">
        {training.map((t, i) => (
          <Reveal key={t.name} delay={i * 0.1} className={rise[i]}>
            <article className="relative overflow-hidden rounded-[2rem] border-[3px] border-ink bg-paper">
              <Photo name={t.photo} shape="rect" className="aspect-[4/3] w-full rounded-none border-b-[3px] border-ink" />
              <div className="p-6 md:p-7">
                <h3 className="t-lg">{t.name}</h3>
                <p className="mt-2 font-semibold">{t.age} · {t.sessions}</p>
                <ul className="mt-4 space-y-1.5 font-medium">
                  {t.list.map((l) => (
                    <li key={l} className="flex items-center gap-2"><Paw className="h-4 w-4 shrink-0" />{l}</li>
                  ))}
                </ul>
                <p className="mt-5 font-display text-3xl">{t.price}</p>
              </div>
              <span className="absolute right-4 top-4 grid h-12 w-12 place-items-center rounded-full bg-ink text-marigold" aria-hidden="true"><Paw className="h-6 w-6" /></span>
            </article>
          </Reveal>
        ))}
      </div>
      <p className="mt-10 flex items-center gap-2 font-bold"><Icon name="star" className="h-5 w-5" /> Metode: force-free, positive reinforcement.</p>
    </Poster>
  );
}
