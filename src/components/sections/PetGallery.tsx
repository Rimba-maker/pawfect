import type { CSSProperties } from 'react';
import { Burst, C, Paw } from '../art/Art';
import { Photo, Poster } from '../ui/ui';
import { pets, WA } from '../../data/content';

/** Desktop grid areas (row-start / col-start / row-end / col-end) so the 4x6 board has no gaps. */
const area = [
  '1 / 1 / 3 / 3', '1 / 3 / 2 / 4', '1 / 4 / 2 / 5', '2 / 3 / 4 / 4', '2 / 4 / 3 / 5', '3 / 1 / 4 / 3',
  '6 / 1 / 7 / 3', '3 / 4 / 4 / 5', '4 / 2 / 6 / 4', '4 / 4 / 5 / 5', '5 / 4 / 6 / 5', '4 / 1 / 6 / 2',
];
/** Focal points so wide and tall crops keep each animal's face. */
const pos: (string | undefined)[] = [undefined, undefined, undefined, undefined, undefined, '50% 80%', '50% 64%', undefined, undefined, undefined, undefined, '40% 55%'];
const mobileSpan = ['col-span-2 row-span-2', '', '', '', '', '', 'col-span-2', '', '', '', '', ''];

export default function PetGallery() {
  return (
    <Poster id="pets" tone="teal" title="Pawfect Pet of the Month." lead="Karena setiap anabul layak dirayakan. Nama dan cerita di bawah adalah contoh.">
      <ul className="grid auto-rows-[10.5rem] grid-flow-dense grid-cols-2 gap-3 sm:auto-rows-[12rem] md:grid-cols-4 md:gap-4">
        {pets.map((p, i) => (
          <li key={p.name} className={`group relative md:[grid-area:var(--ga)] ${mobileSpan[i]}`} style={{ '--ga': area[i] } as CSSProperties}>
            <figure tabIndex={0} className="relative h-full w-full overflow-hidden rounded-[1.75rem] border-[3px] border-ink focus-visible:outline-offset-4">
              <Photo name={p.photo} pos={pos[i]} shape="rect" className="h-full w-full rounded-none transition-transform duration-700 [transition-timing-function:cubic-bezier(.16,1,.3,1)] group-hover:scale-105 group-focus-within:scale-105" />
              <figcaption className="absolute inset-x-0 bottom-0 translate-y-[calc(100%-2.6rem)] bg-ink px-3 py-2 text-paper transition-transform duration-500 [transition-timing-function:cubic-bezier(.16,1,.3,1)] group-hover:translate-y-0 group-focus-within:translate-y-0">
                <p className="truncate font-display text-lg leading-tight">{p.name}</p>
                <p className="mt-2 text-sm font-semibold text-marigold">{p.breed}, {p.age}</p>
                <p className="mt-1 pb-1 text-sm">{p.fun}</p>
              </figcaption>
            </figure>
            {'featured' in p && p.featured && (
              <Burst color={C.pink} className="absolute -left-3 -top-4 z-10 h-24 w-24 -rotate-12 text-sm">Bulan ini</Burst>
            )}
          </li>
        ))}
        <li className="col-span-2 md:[grid-area:6_/_3_/_7_/_5]">
          <a href={WA} target="_blank" rel="noopener noreferrer" className="flex h-full min-h-[10.5rem] flex-col items-start justify-between gap-4 rounded-[1.75rem] border-[3px] border-ink bg-ink p-6 text-paper no-underline transition-transform duration-500 [transition-timing-function:cubic-bezier(.16,1,.3,1)] hover:-translate-y-1 hover:rotate-[-.8deg]">
            <Paw className="h-9 w-9 text-pink" />
            <span className="t-md font-display !leading-[1.05]">Anabulmu bisa jadi Pet of the Month berikutnya.</span>
            <span className="font-extrabold text-marigold">Kirim fotonya lewat WhatsApp</span>
          </a>
        </li>
      </ul>
    </Poster>
  );
}
