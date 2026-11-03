import { useState, type FormEvent } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Burst, C, Icon, Paw } from '../art/Art';
import { Poster } from '../ui/ui';
import { WA, bookingServices, branches } from '../../data/content';

const steps = ['Pilih layanan', 'Tanggal & cabang', 'Data anabul'] as const;
const sizes = ['Small', 'Medium', 'Large', 'Giant'];
const field = 'w-full rounded-2xl border-[3px] border-ink bg-white px-4 py-3 text-lg font-medium placeholder:text-ink/50 focus:bg-marigold/20';

export default function Booking() {
  const [step, setStep] = useState(0);
  const [done, setDone] = useState(false);
  const [f, setF] = useState({ service: '', date: '', branch: branches[0], owner: '', wa: '', email: '', pet: '', breed: '', size: 'Medium' });
  const set = (k: keyof typeof f, v: string) => setF((s) => ({ ...s, [k]: v }));

  // Each step must be valid before the next one opens; nothing can be skipped.
  const valid = [!!f.service, !!f.date && !!f.branch, !!f.owner.trim() && /^[0-9+\s-]{8,}$/.test(f.wa) && !!f.pet.trim()][step];
  const today = new Date().toISOString().slice(0, 10);

  const submit = (e: FormEvent) => {
    e.preventDefault();
    if (step < 2) { if (valid) setStep(step + 1); return; }
    if (valid) setDone(true);
  };

  const msg = encodeURIComponent(`Halo Pawfect, saya ${f.owner} mau booking ${f.service} untuk ${f.pet} (${f.breed || 'ras belum diisi'}, ${f.size}) di ${f.branch} tanggal ${f.date}.`);

  return (
    <Poster id="booking" tone="pink" title="Book anabul kamu." lead="Pilih layanan, tanggal, dan cabang. Konfirmasi dalam 1 jam kerja. Formulir ini demo dan belum mengirim data.">
      <div className="grid gap-8 lg:grid-cols-[18rem_1fr]">
        <ol className="flex gap-3 lg:flex-col" aria-label="Langkah booking">
          {steps.map((s, i) => (
            <li key={s} aria-current={i === step ? 'step' : undefined} className={`flex flex-1 items-center gap-3 rounded-full border-[3px] border-ink px-4 py-3 font-bold transition-colors duration-500 lg:flex-none ${i === step && !done ? 'bg-ink text-pink' : i < step || done ? 'bg-paper' : 'opacity-70'}`}>
              <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full border-[3px] border-current font-display text-lg">
                {i < step || done ? <Icon name="check" className="h-4 w-4" /> : i + 1}
              </span>
              <span className="hidden sm:inline">{s}</span>
            </li>
          ))}
        </ol>

        <div className="relative rounded-[2rem] border-[3px] border-ink bg-paper p-6 md:p-10">
          {done ? (
            <div className="py-6 text-center" role="status">
              <Burst color={C.marigold} className="mx-auto h-32 w-32 text-xl">Terima kasih!</Burst>
              <h3 className="t-lg mt-6">Permintaan untuk {f.pet || 'anabulmu'} tercatat.</h3>
              <p className="mx-auto mt-3 max-w-md font-medium">Ini demo, jadi belum ada data yang terkirim. Untuk booking sungguhan, kirim ringkasan ini lewat WhatsApp.</p>
              <div className="mt-6 flex flex-col justify-center gap-3 sm:flex-row">
                <a className="pill pill-ink" href={`${WA.split('?')[0]}?text=${msg}`} target="_blank" rel="noopener noreferrer">Kirim lewat WhatsApp</a>
                <button className="pill pill-out" onClick={() => { setDone(false); setStep(0); }}>Booking lagi</button>
              </div>
            </div>
          ) : (
            <form onSubmit={submit} noValidate>
              <AnimatePresence mode="wait">
                <motion.div key={step} initial={{ x: 24, opacity: 0.2 }} animate={{ x: 0, opacity: 1 }} exit={{ x: -16, opacity: 0.2 }} transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }} className="min-h-[18rem]">
                  {step === 0 && (
                    <fieldset>
                      <legend className="t-md mb-5">Layanan apa yang kamu butuhkan?</legend>
                      <div className="grid gap-3 sm:grid-cols-2">
                        {bookingServices.map((s) => (
                          <label key={s.id} className={`flex cursor-pointer items-center justify-between gap-3 rounded-2xl border-[3px] border-ink p-4 transition-colors duration-300 has-[:focus-visible]:outline has-[:focus-visible]:outline-[3px] has-[:focus-visible]:outline-offset-2 ${f.service === s.label ? 'bg-ink text-marigold' : 'hover:bg-marigold/30'}`}>
                            <input className="sr-only" type="radio" name="service" value={s.label} checked={f.service === s.label} onChange={() => set('service', s.label)} />
                            <span><span className="block font-display text-2xl">{s.label}</span><span className="text-sm font-semibold opacity-80">{s.from}</span></span>
                            <Paw className="h-7 w-7" />
                          </label>
                        ))}
                      </div>
                    </fieldset>
                  )}
                  {step === 1 && (
                    <div className="grid gap-5 sm:grid-cols-2">
                      <p className="t-md sm:col-span-2">Kapan dan di mana?</p>
                      <div><label htmlFor="date" className="mb-1.5 block font-bold">Tanggal preferensi</label><input id="date" type="date" min={today} value={f.date} onChange={(e) => set('date', e.target.value)} className={field} required /></div>
                      <div><label htmlFor="branch" className="mb-1.5 block font-bold">Cabang</label><select id="branch" value={f.branch} onChange={(e) => set('branch', e.target.value)} className={field}>{branches.map((b) => <option key={b}>{b}</option>)}</select></div>
                      <p className="text-sm font-medium opacity-80 sm:col-span-2">Hotel butuh booking minimal 24 jam sebelumnya. Senin kami tutup untuk perawatan studio.</p>
                    </div>
                  )}
                  {step === 2 && (
                    <div className="grid gap-5 sm:grid-cols-2">
                      <p className="t-md sm:col-span-2">Kenalan dengan anabulmu.</p>
                      <div><label htmlFor="pet" className="mb-1.5 block font-bold">Nama anabul</label><input id="pet" value={f.pet} onChange={(e) => set('pet', e.target.value)} className={field} placeholder="Mis. Mochi" autoComplete="off" required /></div>
                      <div><label htmlFor="breed" className="mb-1.5 block font-bold">Ras</label><input id="breed" value={f.breed} onChange={(e) => set('breed', e.target.value)} className={field} placeholder="Mis. Poodle" /></div>
                      <div><label htmlFor="size" className="mb-1.5 block font-bold">Ukuran</label><select id="size" value={f.size} onChange={(e) => set('size', e.target.value)} className={field}>{sizes.map((s) => <option key={s}>{s}</option>)}</select></div>
                      <div><label htmlFor="owner" className="mb-1.5 block font-bold">Nama kamu</label><input id="owner" value={f.owner} onChange={(e) => set('owner', e.target.value)} className={field} autoComplete="name" required /></div>
                      <div><label htmlFor="wa" className="mb-1.5 block font-bold">WhatsApp</label><input id="wa" type="tel" inputMode="tel" value={f.wa} onChange={(e) => set('wa', e.target.value)} className={field} placeholder="08xx xxxx xxxx" autoComplete="tel" required /></div>
                      <div><label htmlFor="email" className="mb-1.5 block font-bold">Email (opsional)</label><input id="email" type="email" value={f.email} onChange={(e) => set('email', e.target.value)} className={field} autoComplete="email" /></div>
                    </div>
                  )}
                </motion.div>
              </AnimatePresence>

              <div className="mt-8 flex flex-wrap items-center justify-between gap-3">
                {step > 0 ? <button type="button" className="pill pill-out" onClick={() => setStep(step - 1)}>Kembali</button> : <a className="pill pill-out" href={WA} target="_blank" rel="noopener noreferrer">Langsung WhatsApp</a>}
                <button type="submit" className="pill pill-ink" disabled={!valid} aria-disabled={!valid}>{step < 2 ? 'Lanjut' : 'Book Sekarang'}<Icon name="arrow" className="h-5 w-5" /></button>
              </div>
            </form>
          )}
        </div>
      </div>
    </Poster>
  );
}
