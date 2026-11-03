import { useState } from 'react';
import { Burst, C, Icon } from '../art/Art';
import { Photo, Poster, toneBg } from '../ui/ui';
import { products, shopCats, type ShopCat } from '../../data/content';

const duoOf: Record<string, string> = { marigold: C.marigold, pink: C.pink, teal: C.teal, lilac: C.lilac };

export default function Shop() {
  const [cat, setCat] = useState<ShopCat>('Semua');
  const [cart, setCart] = useState<Record<string, number>>({});
  const total = Object.values(cart).reduce((a, b) => a + b, 0);
  const list = products.filter((p) => cat === 'Semua' || p.cat === cat);
  const add = (id: string) => setCart((c) => ({ ...c, [id]: (c[id] ?? 0) + 1 }));
  const sub = (id: string) => setCart((c) => { const n = { ...c, [id]: Math.max(0, (c[id] ?? 0) - 1) }; return n; });

  return (
    <Poster id="shop" tone="paper" title="Toko yang kami percaya untuk anabul sendiri." lead="Hanya merek yang kami beri makan ke anabul kami sendiri. Harga di bawah adalah contoh.">
      <div className="mb-10 flex flex-wrap items-center justify-between gap-4">
        <div role="group" aria-label="Kategori produk" className="flex flex-wrap gap-2">
          {shopCats.map((c) => (
            <button key={c} aria-pressed={cat === c} onClick={() => setCat(c)} className={`rounded-full border-[3px] border-ink px-5 py-2 font-bold transition-colors duration-300 ${cat === c ? 'bg-ink text-paper' : 'hover:bg-marigold'}`}>
              {c}
            </button>
          ))}
        </div>
        <div className="flex items-center gap-3 rounded-full bg-ink px-5 py-2.5 text-paper" role="status" aria-live="polite">
          <Icon name="cart" className="h-6 w-6" />
          <span className="font-bold">{total} item di keranjang contoh</span>
        </div>
      </div>

      <ul className="grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-6">
        {list.map((p, i) => {
          const n = cart[p.id] ?? 0;
          return (
            <li key={p.id} className={i % 5 === 0 ? 'md:col-span-2' : ''}>
              <article className={`flex h-full flex-col overflow-hidden rounded-[1.75rem] border-[3px] border-ink ${toneBg[p.tone]}`}>
                <Photo name={p.photo} duo={p.tone === 'paper' ? undefined : duoOf[p.tone]} shape="rect" className={`w-full rounded-none ${i % 5 === 0 ? 'aspect-[16/9]' : 'aspect-square'}`} />
                <div className="flex flex-1 flex-col justify-between gap-4 p-4 md:p-5">
                  <div>
                    <h3 className="text-xl leading-tight">{p.name}</h3>
                    <p className="mt-1 text-sm font-semibold opacity-80">{p.cat}</p>
                  </div>
                  <div className="flex items-center justify-between gap-2">
                    <span className="font-display text-2xl">{p.price}</span>
                    {n === 0 ? (
                      <button onClick={() => add(p.id)} className="grid h-11 w-11 place-items-center rounded-full bg-ink text-paper transition-transform duration-300 hover:rotate-90" aria-label={`Tambah ${p.name}`}>
                        <Icon name="plus" className="h-5 w-5" />
                      </button>
                    ) : (
                      <div className="flex items-center gap-1 rounded-full bg-ink px-1 text-paper">
                        <button onClick={() => sub(p.id)} className="grid h-10 w-10 place-items-center" aria-label={`Kurangi ${p.name}`}><Icon name="minus" className="h-4 w-4" /></button>
                        <span className="min-w-5 text-center font-bold" aria-live="polite">{n}</span>
                        <button onClick={() => add(p.id)} className="grid h-10 w-10 place-items-center" aria-label={`Tambah ${p.name}`}><Icon name="plus" className="h-4 w-4" /></button>
                      </div>
                    )}
                  </div>
                </div>
              </article>
            </li>
          );
        })}
      </ul>
      <p className="mt-8 text-sm font-medium opacity-80">Keranjang ini hanya demo dan belum terhubung ke checkout. Pengiriman via GoSend dan GrabExpress same-day, Tiki untuk nasional.</p>
    </Poster>
  );
}
