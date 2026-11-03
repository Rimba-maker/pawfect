/** Photo registry. Every file lives in /public/images and is credited in `credits`. */
export const img = (name: string) => `/images/${name}.jpg`;

type Credit = { file: string; source: 'Pexels' | 'Unsplash'; id: string; author?: string; alt: string };

export const credits: Credit[] = [
  { file: 'collie-beach', source: 'Unsplash', id: '1587300003388-59208cc962cb', alt: 'Anjing border collie ceria di pantai' },
  { file: 'pug-yellow', source: 'Unsplash', id: '1517849845537-4d257902454a', alt: 'Pug hitam berjaket rajut di latar kuning' },
  { file: 'frenchie-blue', source: 'Unsplash', id: '1583337130417-3346a1be7dee', alt: 'Bulldog Prancis berhoodie kuning di latar biru' },
  { file: 'cat-green', source: 'Unsplash', id: '1514888286974-6c03e2ca1dba', alt: 'Kucing hitam putih di depan dinding hijau' },
  { file: 'cat-stairs', source: 'Unsplash', id: '1495360010541-f48722b34f7d', alt: 'Kucing tabby duduk di tangga putih' },
  { file: 'golden-bath', source: 'Unsplash', id: '1516734212186-a967f81ad0d7', alt: 'Golden retriever dimandikan di bak' },
  { file: 'dog-glasses', source: 'Unsplash', id: '1535930891776-0c2dfb7fda1a', alt: 'Anjing berkacamata membaca majalah' },
  { file: 'puppy-run', source: 'Unsplash', id: '1576201836106-db1758fd1c97', alt: 'Anak anjing golden berlari di rumput saat senja' },
  { file: 'food-bowl', source: 'Unsplash', id: '1589924691995-400dc9ecc119', alt: 'Mangkuk makanan anjing di lantai kayu' },
  { file: 'cat-brush-fire', source: 'Pexels', id: '32094616', author: 'Ivanna Lebediuk', alt: 'Kucing disisir dengan sikat merah' },
  { file: 'cat-white-groom', source: 'Pexels', id: '6816855', alt: 'Kucing putih berbulu panjang sedang dirawat' },
  { file: 'cat-comb', source: 'Pexels', id: '7516109', alt: 'Kucing tabby disisir di atas karpet' },
  { file: 'cat-ginger-brush', source: 'Pexels', id: '6865167', alt: 'Kucing jingga disikat di kursi' },
  { file: 'shar-pei-play', source: 'Pexels', id: '16024344', author: 'Thierry Rossier', alt: 'Dua anjing shar pei bermain bersama' },
  { file: 'dalmatian-border', source: 'Pexels', id: '20748243', alt: 'Dua anjing bermain di pasir pantai' },
  { file: 'treats-jar', source: 'Pexels', id: '10880504', alt: 'Toples camilan anjing berlabel' },
  { file: 'treats-bowl', source: 'Pexels', id: '13419673', alt: 'Mangkuk putih berisi camilan anjing' },
  { file: 'treats-bones', source: 'Pexels', id: '8121154', alt: 'Camilan anjing bentuk tulang warna-warni' },
  { file: 'treats-bones-2', source: 'Pexels', id: '8121146', alt: 'Tulang camilan anjing di kertas cokelat' },
  { file: 'treat-jar-note', source: 'Pexels', id: '27969790', alt: 'Toples camilan dengan tulisan treat your furry baby' },
  { file: 'kibble-bowl', source: 'Pexels', id: '8434641', alt: 'Mangkuk logam berisi makanan kering anjing' },
  { file: 'vet-clinic', source: 'Pexels', id: '6234618', author: 'Tima Miroshnichenko', alt: 'Dokter hewan duduk di samping anjing di klinik' },
  { file: 'vet-exam', source: 'Pexels', id: '7470634', author: 'Mikhail Nilov', alt: 'Dokter hewan memeriksa anjing' },
  { file: 'vet-team', source: 'Pexels', id: '7470754', author: 'Mikhail Nilov', alt: 'Dua tenaga klinik memeriksa anjing' },
  { file: 'vet-bw', source: 'Pexels', id: '6235230', author: 'Tima Miroshnichenko', alt: 'Dokter hewan memeriksa mata anjing' },
  { file: 'chihuahua-bath', source: 'Pexels', id: '485294', alt: 'Chihuahua dengan busa sampo di kepala di bak oranye' },
  { file: 'trainer-bw', source: 'Pexels', id: '37194677', alt: 'Pelatih memberi aba-aba pada anjing dalmatian' },
  { file: 'trainer-hand', source: 'Pexels', id: '16622671', alt: 'Anjing mengikuti gerakan tangan pelatih' },
  { file: 'sit-train', source: 'Pexels', id: '5863557', alt: 'Anjing duduk patuh di depan pelatihnya' },
  { file: 'flatlay-bed', source: 'Pexels', id: '4445456', author: 'Mathew Coulton', alt: 'Anjing di kasur hijau dikelilingi mainan dan perlengkapan' },
  { file: 'sleeping-small', source: 'Pexels', id: '5993385', alt: 'Anjing kecil tidur di bantal putih' },
  { file: 'sleeping-couch', source: 'Pexels', id: '6345446', alt: 'Anjing kecil tidur di sofa' },
  { file: 'hug-poodle', source: 'Pexels', id: '17328958', alt: 'Perempuan memeluk poodle' },
  { file: 'hug-woman', source: 'Pexels', id: '27176310', author: 'Helena Lopes', alt: 'Perempuan tersenyum memeluk anjingnya' },
  { file: 'hug-shihtzu', source: 'Pexels', id: '20295155', author: 'iddea photo', alt: 'Perempuan tersenyum memeluk shih tzu' },
  { file: 'hug-carry', source: 'Pexels', id: '1975989', alt: 'Perempuan menggendong anjing di taman' },
  { file: 'golden-dark', source: 'Pexels', id: '16876005', alt: 'Potret golden retriever di latar gelap' },
  { file: 'golden-soft', source: 'Pexels', id: '35439916', author: 'Garuda', alt: 'Potret golden retriever dalam cahaya lembut' },
];

export const alt = (file: string) => credits.find((c) => c.file === file)?.alt ?? '';
