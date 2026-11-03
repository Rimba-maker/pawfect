import { Burst, C } from '../art/Art';
import { Photo, Poster } from '../ui/ui';
import { pets } from '../../data/content';

const spans = [
  'col-span-2 row-span-2', '', '', 'row-span-2', '', 'col-span-2',
  'col-span-2', '', 'row-span-2', '', '', 'row-span-2',
];
const duo = [undefined, undefined, undefined, undefined, C.pink, undefined, C.marigold, undefined, undefined, C.lilac, undefined, undefined];

export default function PetGallery() {
  return (
    <Poster id="pets" tone="teal" title="Pawfect Pet of the Month." lead="Karena setiap anabul layak dirayakan. Nama dan cerita di bawah adalah contoh.">
      <ul className="grid auto-rows-[11rem] grid-flow-dense grid-cols-2 gap-3 sm:auto-rows-[13rem] md:grid-cols-4 md:gap-4">
        {pets.map((p, i) => (
          <li key={p.name} className={`group relative ${spans[i]}`}>
            <figure tabIndex={0} className="relative h-full w-full overflow-hidden rounded-[1.75rem] border-[3px] border-ink focus-visible:outline-offset-4">
              <Photo name={p.photo} duo={duo[i]} shape="rect" className="h-full w-full rounded-none transition-transform duration-700 [transition-timing-function:cubic-bezier(.16,1,.3,1)] group-hover:scale-105 group-focus-within:scale-105" />
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
      </ul>
    </Poster>
  );
}
