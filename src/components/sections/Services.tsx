import { Emblem, Icon, Squiggle } from '../art/Art';
import { Photo, Poster, Reveal, toneBg } from '../ui/ui';
import { services } from '../../data/content';

const span = ['md:col-span-4', 'md:col-span-2', 'md:col-span-2', 'md:col-span-2', 'md:col-span-2', 'md:col-span-6'];
const href = ['#grooming', '#boarding', '#boarding', '#training', '#shop', '#booking'];
const wide = (i: number) => i === 0 || i === 5;

export default function Services() {
  return (
    <Poster id="services" tone="pink" title={<>Satu studio, enam urusan anabul.</>} lead="Karena anabul butuh lebih dari sekadar makanan.">
      <div className="grid gap-4 md:grid-cols-6 md:gap-5">
        {services.map((s, i) => (
          <Reveal key={s.id} delay={(i % 3) * 0.08} className={span[i]}>
            <a
              href={href[i]}
              className={`group relative flex h-full min-h-[15rem] flex-col justify-between gap-6 overflow-hidden rounded-[2rem] border-[3px] border-ink p-6 no-underline transition-transform duration-500 [transition-timing-function:cubic-bezier(.16,1,.3,1)] hover:-translate-y-1 hover:rotate-[-.6deg] md:p-8 ${toneBg[s.tone]} ${s.photo && wide(i) ? 'md:flex-row md:items-stretch' : ''}`}
            >
              <div className="flex flex-1 flex-col justify-between gap-6">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="t-lg">{s.title}</h3>
                    <ul className="mt-3 space-y-1 font-medium">
                      {s.list.map((l) => (
                        <li key={l} className="flex gap-2"><span aria-hidden="true">•</span>{l}</li>
                      ))}
                    </ul>
                  </div>
                  <Emblem name={s.id} className={`-mr-2 -mt-2 shrink-0 transition-transform duration-500 [transition-timing-function:cubic-bezier(.16,1,.3,1)] group-hover:-rotate-6 ${wide(i) ? 'h-32 w-32 md:h-52 md:w-52' : 'h-28 w-28 md:h-32 md:w-32'}`} />
                </div>
                <div className="flex items-center justify-between gap-3">
                  <span className="rounded-full border-[3px] border-current px-4 py-1.5 text-sm font-extrabold">{s.price}</span>
                  <Icon name="arrow" className="h-8 w-8 transition-transform duration-500 group-hover:translate-x-1" />
                </div>
              </div>
              {s.photo && (
                <Photo name={s.photo} shape="arch" className={`min-h-48 w-full ${wide(i) ? 'md:min-h-0 md:w-[46%]' : ''}`} />
              )}
            </a>
          </Reveal>
        ))}
      </div>
      <Squiggle className="mx-auto mt-14 h-5 w-48" />
    </Poster>
  );
}
