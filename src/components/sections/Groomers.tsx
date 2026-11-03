import { Avatar, C } from '../art/Art';
import { Poster, Reveal } from '../ui/ui';
import { groomers } from '../../data/content';

const bg: Record<string, string> = { marigold: C.marigold, teal: C.teal, lilac: C.lilac, paper: C.paper };

export default function Groomers() {
  return (
    <Poster id="groomers" tone="pink" title="Tangan-tangan yang menyayangi anabulmu." lead="Profil di bawah adalah ilustrasi contoh. Tim sungguhan akan ditampilkan lengkap dengan sertifikasinya.">
      <ul className="grid grid-cols-2 gap-x-4 gap-y-10 md:grid-cols-3 md:gap-x-8">
        {groomers.map((g, i) => (
          <li key={g.name} className={i % 2 ? 'md:translate-y-8' : ''}>
            <Reveal delay={(i % 3) * 0.08}>
              <figure>
                <div className={`aspect-[10/11] w-full overflow-hidden border-[3px] border-ink ${i % 3 === 0 ? 'rounded-t-[999px] rounded-b-3xl' : i % 3 === 1 ? 'rounded-3xl' : 'rounded-[999px]'}`}>
                  <Avatar tone={bg[g.tone]} hair={g.hair} skin={['#c98a5e', '#8d5a3b', '#e3b48c'][i % 3]} />
                </div>
                <figcaption className="mt-4">
                  <p className="t-md">{g.name}</p>
                  <p className="font-bold">{g.role}</p>
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
