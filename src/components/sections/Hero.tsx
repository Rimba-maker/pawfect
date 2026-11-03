import { HeroArt, Burst, C, Squiggle } from '../art/Art';
import { Photo } from '../ui/ui';
import { WA } from '../../data/content';

const words = ['Mandi', 'Nginap', 'Sekolah', 'Belanja', 'Periksa', 'Main'];

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden bg-marigold text-ink" aria-labelledby="hero-h">
      <div className="mx-auto grid max-w-7xl items-center gap-6 px-5 pb-14 pt-10 sm:px-8 md:pt-16 lg:grid-cols-[1.05fr_.95fr] lg:gap-0 lg:pb-24">
        <div className="relative z-10">
          <h1 id="hero-h" className="t-mega md:-rotate-2">
            Anabul, kamu <span className="text-paper">pantas</span> dirayakan.
          </h1>
          <Squiggle className="mt-5 h-5 w-40" />
          <p className="mt-6 max-w-lg text-lg font-medium md:text-xl">
            Spa, hotel, sekolah, dan toko dalam satu studio. Tim yang sama yang memandikan dia hari ini, yang menjaganya saat kamu bepergian.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a href="#booking" className="pill pill-ink">Book Grooming</a>
            <a href={WA} target="_blank" rel="noopener noreferrer" className="pill pill-out">Chat WhatsApp</a>
          </div>
        </div>

        <div className="relative mx-auto mt-6 w-full max-w-[34rem] lg:mt-0 lg:max-w-none">
          <HeroArt className="relative z-0 w-full" />
          <div className="absolute -bottom-2 left-0 z-10 w-[38%] max-w-[13rem] md:left-4">
            <Photo name="collie-beach" shape="circle" className="w-full border-[6px] border-ink" eager />
          </div>
          <Burst color={C.pink} className="absolute right-1 top-[58%] z-10 h-32 w-32 rotate-12 text-lg sm:h-36 sm:w-36 sm:text-xl">
            Grooming mulai Rp 150k
          </Burst>
        </div>
      </div>

      <div className="overflow-hidden border-y-[3px] border-ink bg-ink py-3 text-marigold" aria-hidden="true">
        <div className="flex w-max animate-[marquee_28s_linear_infinite] gap-10 font-display text-3xl">
          {[...words, ...words, ...words, ...words].map((w, i) => (
            <span key={i} className="flex items-center gap-10">
              {w}
              <span className="inline-block h-3 w-3 rounded-full bg-pink" />
            </span>
          ))}
        </div>
      </div>
      <style>{`@keyframes marquee{to{transform:translateX(-50%)}}`}</style>
    </section>
  );
}
