/** Demo copy for Pawfect Pet Studio. Every number, name and review here is sample content. */

export const WA = 'https://wa.me/6281234567890?text=Halo%20Pawfect%2C%20saya%20mau%20booking';
export const IG = '@pawfectpetstudio';

export type Tone = 'marigold' | 'pink' | 'teal' | 'lilac' | 'ink' | 'paper';

export const services = [
  { id: 'grooming', icon: 'bath', title: 'Grooming', tone: 'teal', price: 'Rp 150k', list: ['Bath & blow dry', 'Full grooming & styling', 'Spa: mud bath, aromaterapi'], photo: 'chihuahua-bath' },
  { id: 'boarding', icon: 'bed', title: 'Hotel', tone: 'lilac', price: 'Rp 200k /malam', list: ['Standard, Comfort, Royal', 'Foto & video harian', 'Webcam di Royal Suite'], photo: null },
  { id: 'daycare', icon: 'sun', title: 'Daycare', tone: 'paper', price: 'Rp 150–250k', list: ['Half-day & full-day', 'Main bareng & sosialisasi', 'Update foto via WhatsApp'], photo: null },
  { id: 'training', icon: 'grad', title: 'Sekolah', tone: 'marigold', price: 'Rp 800k /paket', list: ['Puppy class', 'Obedience', 'Perilaku & kecemasan'], photo: 'sit-train' },
  { id: 'shop', icon: 'bag', title: 'Toko', tone: 'paper', price: 'Variasi harga', list: ['Makanan & camilan', 'Mainan & tempat tidur', 'Suplemen & perawatan'], photo: null },
  { id: 'vet', icon: 'heart', title: 'Konsultasi Dokter', tone: 'teal', price: 'Rp 250k', list: ['Dokter hewan Senin–Sabtu', 'Vaksinasi', 'Cek kesehatan dasar'], photo: 'vet-team' },
] as const;

export const groomingTabs = ['Anjing', 'Kucing', 'Kelinci', 'Pet Lain'] as const;
export type GroomTab = (typeof groomingTabs)[number];

export const groomingMenu: Record<GroomTab, { name: string; price: string; popular?: boolean; items: string[] }[]> = {
  Anjing: [
    { name: 'Basic Bath', price: 'Rp 150–350k', items: ['Sampo & kondisioner', 'Blow dry', 'Potong kuku', 'Bersih telinga'] },
    { name: 'Full Grooming', price: 'Rp 250–600k', popular: true, items: ['Semua Basic', 'Cutting & styling sesuai ras', 'Sanitary trim', 'Paw pad trim'] },
    { name: 'Spa Premium', price: 'Rp 400–950k', items: ['Semua Full', 'Mud bath / masker wajah', 'Aromaterapi', 'De-shedding & cologne'] },
  ],
  Kucing: [
    { name: 'Basic Bath', price: 'Rp 200–350k', items: ['Sampo lembut', 'Blow dry rendah suara', 'Potong kuku'] },
    { name: 'Full + Sanitary', price: 'Rp 300–550k', popular: true, items: ['Semua Basic', 'Sisir anti-kusut', 'Sanitary trim'] },
    { name: 'Lion Cut', price: 'Rp 450–800k', items: ['Semua Full', 'Lion cut atau teddy cut', 'Dengan jeda istirahat'] },
  ],
  Kelinci: [
    { name: 'Nail & Fur Care', price: 'Konsultasi', items: ['Potong kuku', 'Sisir bulu rontok', 'Cek gigi & telinga'] },
  ],
  'Pet Lain': [
    { name: 'Konsultasi Dulu', price: 'Konsultasi', items: ['Hamster, kura-kura, burung', 'Kami cek kebutuhan perawatannya', 'Jadwal disesuaikan'] },
  ],
};

export const breedCuts = ['Poodle: puppy cut, teddy bear, lion', 'Golden Retriever: sanitary, full', 'Shih Tzu', 'Maltese', 'Pomeranian'];

export const boarding = [
  { name: 'Standard Room', price: 'Rp 200k', photo: 'sleeping-small', list: ['Single occupancy', 'AC & pemantauan 24/7', '2x makan, jalan 2x/hari', 'Update foto harian'] },
  { name: 'Comfort Suite', price: 'Rp 350k', photo: 'flatlay-bed', popular: true, list: ['Ruang luas dengan jendela', 'Kasur premium', '3x makan, jalan 3x + main', 'Update video harian'] },
  { name: 'Royal Suite', price: 'Rp 650k', photo: 'sleeping-couch', list: ['Suite besar dengan webcam live', 'Menu & camilan personal', 'Main privat + touch-up grooming', 'Video call harian dengan pemilik'] },
] as const;

export const daycare = [
  { label: 'Half-day (4 jam)', price: 'Rp 150k' },
  { label: 'Full-day (8 jam)', price: 'Rp 250k' },
  { label: 'Paket 10x', price: 'Rp 2,1 jt', note: 'hemat 15%' },
];

export const shopCats = ['Semua', 'Makanan', 'Camilan', 'Mainan', 'Nyaman', 'Perawatan'] as const;
export type ShopCat = (typeof shopCats)[number];

export const products: { id: string; name: string; cat: Exclude<ShopCat, 'Semua'>; price: string; photo: string; tone: Tone }[] = [
  { id: 'p1', name: 'Kibble grain-free, 2 kg', cat: 'Makanan', price: 'Rp 285k', photo: 'kibble-bowl', tone: 'marigold' },
  { id: 'p2', name: 'Makanan kering all-breed, 1,5 kg', cat: 'Makanan', price: 'Rp 190k', photo: 'food-bowl', tone: 'teal' },
  { id: 'p3', name: 'Biskuit tulang warna-warni', cat: 'Camilan', price: 'Rp 65k', photo: 'treats-bones', tone: 'pink' },
  { id: 'p4', name: 'Dental chew mini', cat: 'Camilan', price: 'Rp 78k', photo: 'treats-bowl', tone: 'lilac' },
  { id: 'p5', name: 'Treat jar single-ingredient', cat: 'Camilan', price: 'Rp 92k', photo: 'treats-jar', tone: 'teal' },
  { id: 'p6', name: 'Paket mainan puzzle', cat: 'Mainan', price: 'Rp 140k', photo: 'flatlay-bed', tone: 'pink' },
  { id: 'p7', name: 'Kasur bundar premium', cat: 'Nyaman', price: 'Rp 420k', photo: 'sleeping-couch', tone: 'marigold' },
  { id: 'p8', name: 'Sikat de-shedding', cat: 'Perawatan', price: 'Rp 110k', photo: 'cat-comb', tone: 'lilac' },
];

export const training = [
  { name: 'Puppy Class', age: '2–6 bulan', price: 'Rp 2,5 jt', sessions: '8 sesi, 1x/minggu', list: ['Sosialisasi', 'Sit, stay, come', 'Toilet training', 'Bite inhibition'], photo: 'puppy-run' },
  { name: 'Obedience', age: '6 bulan+', price: 'Rp 3,5 jt', sessions: '10 sesi, 1x/minggu', list: ['Perintah lanjutan', 'Jalan tanpa tarik tali', 'Off-leash'], photo: 'trainer-hand' },
  { name: 'Behavior', age: 'Semua usia', price: 'Rp 1,5 jt + paket', sessions: '1-on-1, custom', list: ['Agresi, cemas, takut', 'Perilaku reaktif', 'Program personal'], photo: 'trainer-bw' },
];

export const groomers = [
  { name: 'Ms. Linda', role: 'Senior Groomer', note: 'Bersertifikat IGA, 10+ tahun', tone: 'marigold', hair: 'bun' },
  { name: 'Pak Reza', role: 'Asian Style', note: 'Spesialis Korean Cut', tone: 'teal', hair: 'short' },
  { name: 'Ms. Maya', role: 'Kucing', note: 'Spesialis grooming kucing', tone: 'lilac', hair: 'long' },
  { name: 'Pak Andre', role: 'Show Grooming', note: 'Golden, Husky', tone: 'paper', hair: 'cap' },
  { name: 'Ms. Sari', role: 'Pet Spa', note: 'Spesialis spa', tone: 'marigold', hair: 'wave' },
  { name: 'Pak Bayu', role: 'Breed Cut', note: 'Poodle & Shih Tzu', tone: 'teal', hair: 'short' },
] as const;

export const sizes = ['Small', 'Medium', 'Large', 'Giant'] as const;
export const pricing = [
  { svc: 'Basic Bath', v: ['150k', '200k', '275k', '350k'] },
  { svc: 'Full Grooming', v: ['250k', '350k', '475k', '600k'] },
  { svc: 'Spa Premium', v: ['400k', '550k', '750k', '950k'] },
];
export const pricingOther = [
  { svc: 'Hotel Standard / malam', v: 'Rp 200k' },
  { svc: 'Hotel Comfort / malam', v: 'Rp 350k' },
  { svc: 'Hotel Royal / malam', v: 'Rp 650k' },
  { svc: 'Daycare full-day', v: 'Rp 250k' },
  { svc: 'Puppy Class (8 sesi)', v: 'Rp 2,5 jt' },
  { svc: 'Konsultasi dokter', v: 'Rp 250k' },
];

export const tiers = [
  { name: 'Basic', price: 'Rp 500k', tone: 'paper', list: ['10% off semua grooming', '5% off produk', 'Camilan ulang tahun anabul', 'Newsletter & undangan event'] },
  { name: 'Plus', price: 'Rp 1,5 jt', tone: 'pink', popular: true, list: ['15% off grooming & hotel', '10% off produk', 'Gratis 1x grooming per tahun', 'Booking prioritas', 'Konsultasi dokter gratis 2x'] },
  { name: 'VIP', price: 'Rp 3,5 jt', tone: 'marigold', list: ['25% off semuanya', 'Gratis grooming tiap bulan', 'Gratis 5 malam hotel', 'Gratis 1 program sekolah', 'Concierge pribadi'] },
] as const;

export const pets = [
  { name: 'Ollie', breed: 'Pug', age: '4 tahun', fun: 'Punya jaket rajut untuk tiap hari.', photo: 'pug-yellow', featured: true },
  { name: 'Miso', breed: 'Kucing domestik', age: '2 tahun', fun: 'Hanya mau tidur di dekat jendela.', photo: 'cat-green' },
  { name: 'Bao', breed: 'French Bulldog', age: '3 tahun', fun: 'Takut pada vacuum, cinta kamera.', photo: 'frenchie-blue' },
  { name: 'Coco', breed: 'Border Collie', age: '5 tahun', fun: 'Hafal 40 kata.', photo: 'collie-beach' },
  { name: 'Prof. Fig', breed: 'Retriever mix', age: '6 tahun', fun: 'Rutin membaca majalah (menggigitnya).', photo: 'dog-glasses' },
  { name: 'Sunny', breed: 'Golden pup', age: '5 bulan', fun: 'Berlari lebih cepat dari kakinya.', photo: 'puppy-run' },
  { name: 'Duke', breed: 'Golden Retriever', age: '7 tahun', fun: 'Pose potret favoritnya: serius.', photo: 'golden-dark' },
  { name: 'Honey', breed: 'Golden Retriever', age: '3 tahun', fun: 'Suka disisir sambil dengar hujan.', photo: 'golden-soft' },
  { name: 'Mochi', breed: 'Poodle', age: '2 tahun', fun: 'Pelukan lebih lama dari jadwal.', photo: 'hug-poodle' },
  { name: 'Wrinkle & Pleat', breed: 'Shar Pei', age: '3 tahun', fun: 'Kembar? Bukan, tetangga.', photo: 'shar-pei-play' },
  { name: 'Dot', breed: 'Dalmatian', age: '4 tahun', fun: 'Bintik bertambah tiap musim.', photo: 'dalmatian-border' },
  { name: 'Tabby', breed: 'Kucing tabby', age: '1 tahun', fun: 'Duduk di tangga seperti raja.', photo: 'cat-stairs' },
] as const;

export const testimonials = [
  { quote: 'Buddy digroom tiap bulan di Pawfect. Hasilnya selalu konsisten, dan dia senang banget tiap diantar.', who: 'Bu Sari & Buddy', photo: 'hug-woman' },
  { quote: 'Travel 10 hari ke Bali, Mochi dititipkan di Royal Suite. Webcam bikin tenang. Saya yang kangen Mochi.', who: 'Pak Andre & Mochi', photo: 'hug-poodle' },
  { quote: 'Max susah toilet training sampai ikut kelas Pawfect. Trainernya sabar, dua bulan Max sudah lancar.', who: 'Keluarga Wijaya & Max', photo: 'hug-carry' },
  { quote: 'Beli makanan, grooming, kadang nitip. Staf sudah hafal kebiasaan Luna. Sentuhan personalnya juara.', who: 'Bu Linda & Luna', photo: 'hug-shihtzu' },
];

export const faq = [
  { q: 'Apakah harus appointment untuk grooming?', a: 'Sangat disarankan, terutama akhir pekan. Walk-in tersedia tapi tergantung slot.' },
  { q: 'Berapa lama full grooming?', a: '2–4 jam tergantung ras dan ukuran. Sistemnya antar dan jemput.' },
  { q: 'Apakah vaksin wajib untuk hotel?', a: 'Wajib. DHPP (anjing), F3/F4 (kucing), dan rabies. Bukti vaksin harus dibawa.' },
  { q: 'Bisa kirim makanan lewat delivery?', a: 'Bisa. GoSend dan GrabExpress same-day, Tiki untuk nasional.' },
  { q: 'Bagaimana kalau anabul stres saat grooming?', a: 'Tim kami terlatih menangani anabul cemas: istirahat sering, pendekatan lembut, teknik low-stress.' },
  { q: 'Ada dokter darurat 24 jam?', a: 'Dokter di tempat hanya Senin–Sabtu siang. Untuk darurat 24 jam kami rujuk ke klinik mitra.' },
  { q: 'Bagaimana hotel saat Lebaran atau Natal?', a: 'Slot sangat terbatas. Booking minimal 2 bulan sebelumnya.' },
];

export const branches = ['Kelapa Gading', 'Kemang', 'BSD', 'Bintaro', 'Bandung Dago'];

export const bookingServices = [
  { id: 'grooming', label: 'Grooming', from: 'mulai Rp 150k' },
  { id: 'boarding', label: 'Hotel', from: 'mulai Rp 200k/malam' },
  { id: 'daycare', label: 'Daycare', from: 'Rp 150–250k' },
  { id: 'training', label: 'Sekolah', from: 'mulai Rp 800k' },
] as const;
