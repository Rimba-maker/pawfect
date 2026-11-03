import { motion, useReducedMotion } from 'framer-motion';
import type { ReactNode } from 'react';

/** Hand-authored flat SVG illustrations. One ink silhouette, candy ribbons, no shadows. */

export const C = { marigold: '#ffb400', pink: '#ff5fa2', teal: '#12b5b0', lilac: '#7b5cff', ink: '#14110f', paper: '#fffdf6' };

const ease = [0.16, 1, 0.3, 1] as const;

function Ribbon({ d, color, delay, w = 30 }: { d: string; color: string; delay: number; w?: number }) {
  const reduce = useReducedMotion();
  return (
    <motion.path
      d={d}
      stroke={color}
      strokeWidth={w}
      strokeLinecap="round"
      fill="none"
      initial={reduce ? false : { pathLength: 0 }}
      animate={{ pathLength: 1 }}
      transition={{ duration: 1.4, delay, ease }}
    />
  );
}

/** Dog head silhouette, centred on (0,0)-(300,330). */
export function DogHead({ eye = C.marigold, nose = C.pink }: { eye?: string; nose?: string }) {
  return (
    <g>
      <path d="M150 20C70 20 36 88 44 168c8 78 52 142 106 142s98-64 106-142c8-80-26-148-106-148z" fill={C.ink} />
      <path d="M62 52C20 44-6 110 4 196c5 40 40 50 58 14 14-30 22-96 26-142z" fill={C.ink} />
      <path d="M238 52c42-8 68 58 58 144-5 40-40 50-58 14-14-30-22-96-26-142z" fill={C.ink} />
      <circle cx="104" cy="150" r="13" fill={eye} />
      <circle cx="196" cy="150" r="13" fill={eye} />
      <ellipse cx="150" cy="232" rx="36" ry="26" fill={nose} />
      <path d="M150 258v16c0 22-30 22-30 2" stroke={nose} strokeWidth="9" strokeLinecap="round" fill="none" />
      <path d="M150 258v16c0 22 30 22 30 2" stroke={nose} strokeWidth="9" strokeLinecap="round" fill="none" />
    </g>
  );
}

/** Cat head silhouette, 300x300. */
export function CatHead({ eye = C.marigold, nose = C.pink }: { eye?: string; nose?: string }) {
  return (
    <g>
      <path d="M40 30l64 56c30-10 62-10 92 0l64-56c14 50 12 96-4 140-14 70-56 110-106 110S58 240 44 170C28 126 26 80 40 30z" fill={C.ink} />
      <ellipse cx="108" cy="160" rx="16" ry="22" fill={eye} />
      <ellipse cx="192" cy="160" rx="16" ry="22" fill={eye} />
      <path d="M150 204l-14-12h28z" fill={nose} />
      <path d="M150 206c0 14-16 16-22 8M150 206c0 14 16 16 22 8" stroke={nose} strokeWidth="6" fill="none" strokeLinecap="round" />
    </g>
  );
}

/** Rabbit head silhouette, 300x360. */
export function RabbitHead({ eye = C.marigold, nose = C.pink }: { eye?: string; nose?: string }) {
  return (
    <g>
      <path d="M96 150C70 90 66 30 96 8c32-14 40 70 44 130zM204 150c26-60 30-120 0-142-32-14-40 70-44 130z" fill={C.ink} />
      <path d="M150 110C84 110 52 170 60 240c8 62 46 100 90 100s82-38 90-100c8-70-24-130-90-130z" fill={C.ink} />
      <circle cx="108" cy="230" r="12" fill={eye} />
      <circle cx="192" cy="230" r="12" fill={eye} />
      <path d="M150 262l-12-10h24z" fill={nose} />
    </g>
  );
}

/** Hero emblem: dog silhouette with six unfurling ribbons. 720x720 viewBox. */
export function HeroArt({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 720 720" className={className} role="img" aria-label="Ilustrasi anjing hitam dengan pita warna-warni">
      <Ribbon color={C.pink} delay={0.15} w={38} d="M360 300C300 170 190 110 70 60" />
      <Ribbon color={C.teal} delay={0.3} w={38} d="M390 300C440 150 560 90 680 70" />
      <Ribbon color={C.lilac} delay={0.45} w={34} d="M335 320C240 240 120 280 30 210" />
      <Ribbon color={C.paper} delay={0.6} w={34} d="M400 320C490 250 610 290 700 220" />
      <Ribbon color={C.pink} delay={0.75} w={30} d="M370 290C380 190 350 100 380 20" />
      <Ribbon color={C.teal} delay={0.9} w={30} d="M330 340C230 350 110 410 40 500" />
      <Ribbon color={C.lilac} delay={1.05} w={30} d="M410 340C510 350 620 410 690 500" />
      <g transform="translate(212 290)"><DogHead /></g>
    </svg>
  );
}

export function Paw({ className = '', color = 'currentColor' }: { className?: string; color?: string }) {
  return (
    <svg viewBox="0 0 64 64" className={className} aria-hidden="true" fill={color}>
      <ellipse cx="32" cy="42" rx="15" ry="12" />
      <ellipse cx="13" cy="28" rx="6" ry="8" />
      <ellipse cx="25" cy="16" rx="6" ry="8.5" />
      <ellipse cx="39" cy="16" rx="6" ry="8.5" />
      <ellipse cx="51" cy="28" rx="6" ry="8" />
    </svg>
  );
}

/** Round sticker with scalloped edge and centred text. */
export function Burst({ children, color = C.pink, text = C.ink, className = '' }: { children: ReactNode; color?: string; text?: string; className?: string }) {
  const pts = Array.from({ length: 24 }, (_, i) => {
    const a = (i / 24) * Math.PI * 2;
    const r = i % 2 ? 44 : 50;
    return `${(50 + r * Math.cos(a)).toFixed(1)},${(50 + r * Math.sin(a)).toFixed(1)}`;
  }).join(' ');
  return (
    <div className={className} style={{ color: text }}>
      <div className="relative grid h-full w-full place-items-center">
        <svg viewBox="0 0 100 100" className="absolute inset-0 h-full w-full" aria-hidden="true">
          <polygon points={pts} fill={color} />
        </svg>
        <span className="relative z-10 px-2 text-center font-display leading-[0.95]">{children}</span>
      </div>
    </div>
  );
}

export function Squiggle({ color = C.ink, className = '' }: { color?: string; className?: string }) {
  return (
    <svg viewBox="0 0 200 20" className={className} aria-hidden="true" fill="none" stroke={color} strokeWidth="5" strokeLinecap="round">
      <path d="M4 10c12-14 24-14 36 0s24 14 36 0 24-14 36 0 24 14 36 0 24-14 36 0" />
    </svg>
  );
}

export function Bubbles({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 120 120" className={className} aria-hidden="true">
      <circle cx="40" cy="78" r="30" fill={C.paper} />
      <circle cx="86" cy="40" r="20" fill={C.paper} />
      <circle cx="82" cy="94" r="12" fill={C.paper} />
      <circle cx="28" cy="30" r="10" fill={C.paper} />
    </svg>
  );
}

type Hair = 'bun' | 'short' | 'long' | 'cap' | 'wave';
/** Flat avatar for staff placeholders. Illustrated, never a photo of a real person. */
export function Avatar({ tone = C.pink, hair = 'short' as Hair, skin = '#c98a5e' }: { tone?: string; hair?: Hair; skin?: string }) {
  return (
    <svg viewBox="0 0 200 220" className="h-full w-full" role="img" aria-label="Ilustrasi groomer">
      <rect width="200" height="220" fill={tone} />
      <path d="M20 220c0-52 36-76 80-76s80 24 80 76z" fill={C.ink} />
      <path d="M100 150l-18 24h36z" fill={C.paper} />
      {hair === 'long' && <path d="M52 100c-4-58 20-76 48-76s52 18 48 76c0 34 6 52 14 68H38c8-16 14-34 14-68z" fill={C.ink} />}
      <rect x="86" y="118" width="28" height="32" fill={skin} />
      <ellipse cx="100" cy="92" rx="38" ry="44" fill={skin} />
      {hair === 'bun' && <><circle cx="100" cy="38" r="20" fill={C.ink} /><path d="M60 92c0-40 20-56 40-56s40 16 40 56c-10-24-26-30-40-30s-30 6-40 30z" fill={C.ink} /></>}
      {hair === 'short' && <path d="M60 90c-4-44 20-58 40-58s44 14 40 58c-8-22-24-28-40-28S68 68 60 90z" fill={C.ink} />}
      {hair === 'long' && <path d="M60 92c-2-34 16-50 40-50s42 16 40 50c-10-18-24-26-40-26S70 74 60 92z" fill={C.ink} />}
      {hair === 'cap' && <><path d="M58 88c0-40 18-56 42-56s42 16 42 56z" fill={C.teal} /><path d="M52 90h104" stroke={C.teal} strokeWidth="10" strokeLinecap="round" /></>}
      {hair === 'wave' && <path d="M58 100c-8-50 14-70 42-70s50 20 42 70c-6-30-16-40-42-40s-36 10-42 40z" fill={C.ink} />}
      <circle cx="86" cy="96" r="4.5" fill={C.ink} />
      <circle cx="114" cy="96" r="4.5" fill={C.ink} />
      <path d="M88 112q12 10 24 0" stroke={C.ink} strokeWidth="4.5" strokeLinecap="round" fill="none" />
    </svg>
  );
}

/** Small logo mark: dog head with two ribbons. */
export function LogoMark({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 120 110" className={className} aria-hidden="true">
      <path d="M60 36C40 20 20 14 6 18" stroke={C.pink} strokeWidth="12" strokeLinecap="round" fill="none" />
      <path d="M64 36C84 20 104 14 116 18" stroke={C.teal} strokeWidth="12" strokeLinecap="round" fill="none" />
      <g transform="translate(24 28) scale(.24)"><DogHead /></g>
    </svg>
  );
}

/** Icons drawn in one stroke weight (3) to share a vocabulary. */
export function Icon({ name, className = 'h-9 w-9' }: { name: string; className?: string }) {
  const p = { fill: 'none', stroke: 'currentColor', strokeWidth: 3, strokeLinecap: 'round' as const, strokeLinejoin: 'round' as const };
  const paths: Record<string, ReactNode> = {
    bath: <><path d="M6 28h36v4a10 10 0 0 1-10 10H16A10 10 0 0 1 6 32z" {...p} /><path d="M12 28V14a6 6 0 0 1 12 0" {...p} /><circle cx="34" cy="14" r="3" {...p} /></>,
    bed: <><path d="M4 38V12M4 30h40v8M44 30v-6a6 6 0 0 0-6-6H20v12" {...p} /><circle cx="12" cy="24" r="4" {...p} /></>,
    sun: <><circle cx="24" cy="24" r="8" {...p} /><path d="M24 6v6M24 36v6M6 24h6M36 24h6M11 11l4 4M33 33l4 4M37 11l-4 4M15 33l-4 4" {...p} /></>,
    grad: <><path d="M4 18l20-10 20 10-20 10z" {...p} /><path d="M12 24v10c0 4 24 4 24 0V24M44 18v12" {...p} /></>,
    bag: <><path d="M10 16h28l3 26H7z" {...p} /><path d="M17 20v-6a7 7 0 0 1 14 0v6" {...p} /></>,
    heart: <path d="M24 42S6 30 6 17a9 9 0 0 1 18-2 9 9 0 0 1 18 2c0 13-18 25-18 25z" {...p} />,
    check: <path d="M8 26l10 10 22-24" {...p} />,
    arrow: <path d="M8 24h32M28 10l14 14-14 14" {...p} />,
    plus: <path d="M24 8v32M8 24h32" {...p} />,
    minus: <path d="M8 24h32" {...p} />,
    star: <path d="M24 4l6 14 15 1-11 10 4 15-14-8-14 8 4-15L3 19l15-1z" {...p} />,
    ig: <><rect x="6" y="6" width="36" height="36" rx="10" {...p} /><circle cx="24" cy="24" r="8" {...p} /><circle cx="35" cy="13" r="1.5" {...p} /></>,
    cart: <><path d="M4 8h6l5 24h22l5-18H12" {...p} /><circle cx="19" cy="40" r="3" {...p} /><circle cx="34" cy="40" r="3" {...p} /></>,
    chat: <path d="M6 10h36v24H20l-10 8v-8H6z" {...p} />,
  };
  return (
    <svg viewBox="0 0 48 48" className={className} aria-hidden="true">
      {paths[name]}
    </svg>
  );
}
