import { motion } from 'framer-motion';
import type { ReactNode } from 'react';
import { img, alt } from '../../data/images';
import type { Tone } from '../../data/content';

export const toneBg: Record<Tone, string> = {
  marigold: 'bg-marigold text-ink',
  pink: 'bg-pink text-ink',
  teal: 'bg-teal text-ink',
  lilac: 'bg-lilac text-white on-lilac',
  ink: 'bg-ink text-paper on-ink',
  paper: 'bg-paper text-ink',
};

const ease = [0.16, 1, 0.3, 1] as const;

/** Content stays visible by default. Reveal only translates, so no-JS and slow hydration never hide copy. */
export function Reveal({ children, delay = 0, className = '' }: { children: ReactNode; delay?: number; className?: string }) {
  return (
    <motion.div
      className={className}
      initial={{ y: 28 }}
      whileInView={{ y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.8, delay, ease }}
    >
      {children}
    </motion.div>
  );
}

type Shape = 'rect' | 'arch' | 'circle' | 'pill' | 'leaf';
const shapes: Record<Shape, string> = {
  rect: 'rounded-3xl',
  arch: 'rounded-t-[999px] rounded-b-3xl',
  circle: 'rounded-full aspect-square',
  pill: 'rounded-full',
  leaf: 'rounded-tl-[999px] rounded-br-[999px] rounded-tr-3xl rounded-bl-3xl',
};

/** Photo in a flat frame. `duo` turns the photo into a one-colour print (grayscale multiplied into a candy field). */
export function Photo({ name, shape = 'rect', duo, className = '', fit = 'object-cover', eager = false, pos }: { name: string; shape?: Shape; duo?: string; className?: string; fit?: string; eager?: boolean; pos?: string }) {
  return (
    <div className={`relative overflow-hidden ${shapes[shape]} ${className}`} style={duo ? { background: duo } : { background: '#14110f' }}>
      <img
        src={img(name)}
        alt={alt(name)}
        loading={eager ? 'eager' : 'lazy'}
        decoding="async"
        style={pos ? { objectPosition: pos } : undefined}
        className={`absolute inset-0 h-full w-full ${fit} ${duo ? 'mix-blend-multiply grayscale contrast-125' : ''}`}
      />
    </div>
  );
}

/** A section "poster": full-bleed flat colour field with a slab headline. */
export function Poster({ id, tone, title, lead, children, art, className = '' }: { id: string; tone: Tone; title: ReactNode; lead?: ReactNode; children: ReactNode; art?: ReactNode; className?: string }) {
  return (
    <section id={id} aria-labelledby={`${id}-h`} className={`relative overflow-hidden ${toneBg[tone]} ${className}`}>
      <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 md:py-28">
        <div className="relative mb-12 max-w-4xl md:mb-16">
          <h2 id={`${id}-h`} className="t-xl md:-rotate-1">{title}</h2>
          {lead && <p className="mt-5 max-w-xl text-lg font-medium opacity-90 md:text-xl">{lead}</p>}
        </div>
        {art && <div aria-hidden="true" className="pointer-events-none absolute right-[-3rem] top-6 hidden w-64 rotate-6 md:block lg:right-8 lg:w-72">{art}</div>}
        {children}
      </div>
    </section>
  );
}
