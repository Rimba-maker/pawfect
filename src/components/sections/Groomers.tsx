import { C, GroomerEmblem, Icon } from '../art/Art';
import { Poster, Reveal } from '../ui/ui';
import { groomers } from '../../data/content';

const bg: Record<string, string> = { marigold: C.marigold, teal: C.teal, lilac: C.lilac, paper: C.paper };
const frame = ['rounded-t-[999px] rounded-b-3xl', 'rounded-3xl', 'rounded-[999px]'];

export default function Groomers() {
  return (
    <Poster id="groomers" tone="pink" title="Tangan-tangan yang menyayangi anabulmu." lead="Emblem di bawah adalah ilustrasi contoh, bukan foto. Tim sungguhan akan tampil lengkap dengan sertifikasinya.">
      <ul className="grid grid-cols-2 gap-x-4 gap-y-10 md:grid-cols-3 md:gap-x-8">
        {groomers.map((g, i) => (
          <li key={g.name} className={i % 2 ? 'md:translate-y-8' : ''}>
            <Reveal delay={(i % 3) * 0.08}>
              <figure>
                <div className={`aspect-[10/11] w-full overflow-hidden border-[3px] border-ink ${frame[i % 3]}`} style={{ background: bg[g.tone] }}>
                  <GroomerEmblem kind={g.emblem} tone={bg[g.tone]} />
                </div>
                <figcaption className="mt-4">
                  <p className="t-md">{g.name}</p>
                  <p className="flex items-center gap-1.5 font-bold"><Icon name="star" className="h-4 w-4" />{g.role}</p>
                  <p className="font-medium opacity-80">{g.note}</p>
                </figcaption>
              </figure>
            </Reveal>
          </li>
        ))}
      </ul>
    </Poster>
  );
}
