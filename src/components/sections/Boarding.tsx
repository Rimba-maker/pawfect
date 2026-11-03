import { Burst, C, Icon } from '../art/Art';
import { Photo, Poster, Reveal } from '../ui/ui';
import { boarding, daycare } from '../../data/content';

const lift = ['md:mt-14', 'md:mt-0', 'md:mt-24'];
const duo = [C.teal, undefined, C.pink];

export default function Boarding() {
  return (
    <Poster id="boarding" tone="lilac" title="Hotel anabul, bukan kandang." lead="Anabulmu layak mendapat lebih dari sekadar kennel. Booking minimal 24 jam sebelumnya; vaksin dan obat cacing harus terbaru.">
      <div className="grid gap-10 md:grid-cols-3 md:gap-6">
        {boarding.map((b, i) => (
          <Reveal key={b.name} delay={i * 0.1} className={lift[i]}>
            <article className="relative">
              <Photo name={b.photo} shape="arch" duo={duo[i]} className="aspect-[4/5] w-full border-[3px] border-white" />
              {'popular' in b && b.popular && (
                <Burst color={C.marigold} className="absolute -right-3 -top-5 h-24 w-24 rotate-12 text-base">Paling laris</Burst>
              )}
              <div className="mt-6">
                <h3 className="t-lg">{b.name}</h3>
                <p className="mt-1 font-display text-4xl text-marigold">{b.price}<span className="font-sans text-base font-semibold text-white"> /malam</span></p>
                <ul className="mt-4 space-y-2 font-medium">
                  {b.list.map((l) => (
                    <li key={l} className="flex gap-2"><Icon name="check" className="mt-1 h-4 w-4 shrink-0" />{l}</li>
                  ))}
                </ul>
              </div>
            </article>
          </Reveal>
        ))}
      </div>

      <div className="mt-20 rounded-[2rem] border-[3px] border-white p-6 md:flex md:items-center md:justify-between md:gap-10 md:p-8">
        <div>
          <h3 className="t-lg">Daycare</h3>
          <p className="mt-1 max-w-sm font-medium">Untuk hari-hari anabul tidak bisa ditinggal sendirian. Update foto dikirim lewat WhatsApp.</p>
        </div>
        <dl className="mt-6 grid gap-4 sm:grid-cols-3 md:mt-0 md:min-w-[32rem]">
          {daycare.map((d) => (
            <div key={d.label}>
              <dt className="text-sm font-semibold opacity-90">{d.label}</dt>
              <dd className="font-display text-3xl text-marigold">{d.price}{'note' in d && <span className="ml-2 font-sans text-sm font-semibold text-white">{d.note}</span>}</dd>
            </div>
          ))}
        </dl>
      </div>
    </Poster>
  );
}
