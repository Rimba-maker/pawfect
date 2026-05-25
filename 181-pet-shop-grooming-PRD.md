# PRD: Pawfect Pet Studio — Pet Shop & Grooming

## 1. Brand Identity

**Nama Brand:** Pawfect Pet Studio
**Alasan Naming:** "Pawfect" = wordplay dari "perfect" + "paw" (kaki binatang) — playful, memorable, internationally friendly. "Pet Studio" memberi positioning premium dibanding "pet shop" generic. Cocok untuk yang positioning bukan sekadar toko, tapi tempat full-service experience untuk hewan.

**Tagline:** *"Pawfect Care, For Your Furry Family."*

**Target Audience:**
- Pemilik anjing & kucing kelas menengah-atas
- "Pet parents" yang treat pet as family
- Pet enthusiast aktif di komunitas (IG, TikTok pet)
- Pemilik breed sensitif yang butuh grooming specialist
- Yang butuh boarding service saat travel
- Yang cari premium pet food brand

**Brand Voice:**
- Tone: Playful, warm, caring, pet-loving, slightly cheeky
- Style copywriting: Treat pets like family, banyak storytelling pet, fun & friendly
- Avoid: Bahasa overly clinical/veterinary, generic "toko hewan" feel

---

## 2. Design System (Zapier Inspired)

Untuk mempertahankan kesan premium yang ramah dan hangat, kita menggunakan adaptasi **Zapier Design System**:

- **Primary CTA / Aksen:** Saturated Orange (`#ff4f00`) — Playful & clicky.
- **Canvas / Background:** Warm off-white / Cream (`#fffefb`) — Hangat, bukan putih medis.
- **Card Surface:** Cream-tinted surface (`#f8f4f0`).
- **Ink (Text):** Deep Coffee (`#201515`) — Hangat, elegan, menghindari pure black.
- **Typography:** 
  - **Heading:** `Degular Display` (Fallback: `Quicksand` / `Nunito` untuk kesan membulat).
  - **Body:** `Inter` (Sangat terbaca).
- **Shapes/Radii:** Canonical `12px` (rounded) untuk semua card & button.

---

## 3. Tech Stack

- **Framework:** Astro 5 (SSG)
- **Styling:** Tailwind CSS v4
- **Language:** TypeScript (strict)
- **Animation:** Framer Motion via React islands (playful, fun)
- **Deploy:** Netlify (static)
- **Images:** Unsplash + Pexels (cute pets, grooming, products)

---

## 3. Section Breakdown

| # | Section | Type | Tujuan |
|---|---------|------|--------|
| 1 | Navbar | `.astro` static | Logo cute, nav, CTA "Book Grooming" |
| 2 | Hero | React island `client:load` | Adorable pet shot + service highlights |
| 3 | Services | React island `client:visible` | Grooming, boarding, daycare, training |
| 4 | Grooming Menu | React island `client:visible` | Bath, full grooming, premium spa |
| 5 | Pet Boarding | React island `client:visible` | Daycare & overnight stay |
| 6 | Products Shop | React island `client:visible` | Food, toys, accessories, premium brands |
| 7 | Pet Training | React island `client:visible` | Obedience, behavior, puppy class |
| 8 | Our Groomers | React island `client:visible` | Tim groomer bersertifikat |
| 9 | Pricing | `.astro` static | Pricing per service |
| 10 | Membership | React island `client:visible` | Pawfect Club benefits |
| 11 | Pet of the Month | React island `client:visible` | Gallery pet customer (instagram-style) |
| 12 | Testimonial | React island `client:visible` | Review pet parents |
| 13 | FAQ | React island `client:visible` | FAQ pet care |
| 14 | Booking CTA | React island `client:idle` | Form janji grooming/boarding |
| 15 | Footer | `.astro` static | Cabang, kontak, sosmed |

---

## 4. Copywriting (Bahasa Indonesia)

### Navbar
- Menu: Services • Grooming • Boarding • Shop • Training
- CTA: **Book Grooming 🐾**

### Hero
- **Headline:** Spa, Hotel, & Toko — Semua Untuk Anabul Tersayang.
- **Subheadline:** Pet studio one-stop: grooming premium, daycare & boarding nyaman, training profesional, dan produk premium pilihan. 5.000+ furry friends sudah jadi member.
- **CTA Primary:** Book Grooming
- **CTA Secondary:** Browse Shop

Trust badges: "Sertifikasi Groomer Internasional" • "5.000+ Happy Pets" • "Vet-Approved Products" • "24/7 Care Standards"

### Services
- **Heading:** Layanan Lengkap Untuk Anabul
- **Subheading:** Karena pet butuh lebih dari sekadar makanan.

Grid 6 service cards:

**🛁 Grooming Premium**
- Bath & blow dry
- Full grooming (cutting, styling)
- Spa treatment (mud bath, aromatherapy)
- *Mulai Rp 150k*

**🏨 Boarding & Hotel**
- Daycare (8 jam)
- Overnight stay
- Premium suite (with webcam)
- *Mulai Rp 200k/malam*

**🎾 Daycare**
- Half-day & full-day
- Socialization & play
- Photo update via WA
- *Rp 150k - 250k*

**🎓 Training**
- Puppy training
- Obedience training
- Behavior modification
- *Mulai Rp 800k/paket*

**🛒 Premium Pet Shop**
- Food (Royal Canin, Hill's, Acana, Orijen)
- Toys, accessories, beds
- Supplements & treats
- *Variasi harga*

**🩺 Vet Consultation**
- In-house veterinarian (Senin-Sabtu)
- Vaccination
- Basic health check
- *Konsultasi Rp 250k*

### Grooming Menu
- **Heading:** Grooming Menu
- **Subheading:** Disesuaikan dengan size & breed. Konsultasi groomer untuk paket yang tepat.

Tab: Anjing • Kucing • Kelinci • Pet Lain

**For Dogs:**

**🛁 Basic Bath — Rp 150k - 350k** (tergantung size)
- Shampoo & conditioner
- Blow dry
- Nail trim
- Ear cleaning

**✂️ Full Grooming — Rp 250k - 600k** ⭐ Most Popular
- Semua Basic +
- Cutting & styling sesuai breed
- Sanitary trim
- Paw pad trim

**💎 Spa Premium — Rp 400k - 950k**
- Semua Full +
- Mud bath / facial mask
- Aromatherapy
- De-shedding treatment
- Cologne finish

**🐩 Breed-Specific Cut**
- Poodle (puppy cut, teddy bear, lion)
- Golden Retriever (sanitary, full)
- Shih Tzu, Maltese, Pomeranian
- *Konsultasi tergantung breed*

**For Cats:**
- Basic bath: Rp 200k - 350k
- Full grooming + sanitary: Rp 300k - 550k
- Lion cut: Rp 450k - 800k

### Pet Boarding
- **Heading:** Hotel Anabul Premium
- **Subheading:** Karena anabul kamu deserve lebih dari sekadar kennel.

3 boarding options:

**🏠 Standard Room — Rp 200k/malam**
- Single occupancy
- AC, 24/7 monitoring
- 2x meal + walks 2x/hari
- Daily photo update

**🛏️ Comfort Suite — Rp 350k/malam** ⭐ Most Popular
- Spacious room with view
- Premium bedding
- 3x meal + walks 3x/hari + playtime
- Daily video update

**👑 Royal Suite — Rp 650k/malam**
- Large suite with webcam (live access)
- Personalized meal & treats
- Private playtime + grooming touch-up
- Daily video call dengan owner

**Daycare (untuk yang gak bisa ditinggal):**
- Half-day (4 jam): Rp 150k
- Full-day (8 jam): Rp 250k
- Package 10x: Rp 2.1jt (hemat 15%)

**Booking minimum 24 jam advance. Vaccination & deworming wajib up-to-date.**

### Products Shop
- **Heading:** Premium Pet Shop
- **Subheading:** Cuma brand yang kami trust untuk anabul sendiri.

Categories:

**🍖 Food**
- Royal Canin, Hill's Science Diet
- Acana, Orijen (grain-free premium)
- Wellness, Natural Balance
- Raw diet options

**🦴 Treats & Supplements**
- Single-ingredient treats
- Dental chews
- Joint support (glucosamine)
- Probiotics & omega-3

**🎾 Toys & Enrichment**
- Kong, West Paw, Outward Hound
- Puzzle toys
- Plush & rope toys
- Cat trees & scratchers

**🛏️ Comfort & Accessories**
- Premium beds (Tuft & Needle pet, K&H)
- Harnesses, leashes (Ruffwear, Hurtta)
- Travel carriers
- Bowls & feeders

**🛁 Grooming Products**
- Earthbath, TropiClean (vet-formulated)
- De-shedding tools
- Toothbrush & paste

Grid product showcase dengan filter & quick-add to cart.

### Pet Training
- **Heading:** Training Program
- **Subheading:** Trainer bersertifikat dengan force-free, positive reinforcement method.

3 program cards:

**🐾 Puppy Class (2-6 bulan)**
- 8 sesi (1x/minggu)
- Socialization, basic command (sit, stay, come)
- Toilet training
- Bite inhibition
- *Rp 2.5 jt*

**🦮 Obedience (6 bulan+)**
- 10 sesi (1x/minggu)
- Advanced command, loose-leash walking
- Off-leash training
- *Rp 3.5 jt*

**🧠 Behavior Modification**
- Aggression, anxiety, fear
- Reactive behavior
- Custom 1-on-1 program
- *Konsultasi Rp 1.5 jt + paket*

**Drop-off training also available** (Pet stay & train 1-4 minggu).

### Our Groomers
- **Heading:** Groomer Profesional
- **Subheading:** Bersertifikat, pengalaman, & love pets seperti family.

Grid 6 groomer cards:
- **Ms. Linda** — Senior Groomer, IGA certified (10+ yrs)
- **Pak Reza** — Asian Style Specialist (Korean Cut)
- **Ms. Maya** — Cat Grooming Specialist (CFA certified)
- **Pak Andre** — Show Grooming (Golden, Husky)
- **Ms. Sari** — Pet Spa Specialist
- **Pak Bayu** — Breed-Specific Cutting (Poodle, Shih Tzu)

Per card: foto dengan pet, nama, specialty, sertifikasi.

### Pricing
- **Heading:** Pricing Reference
- Tabel lengkap pricing per service per size (Small/Medium/Large/Giant)
- Note: *Pricing varies untuk long-haired breed dengan matting severe (+20-30%).*

### Membership
- **Heading:** Pawfect Club
- **Subheading:** Member dapat benefit eksklusif & save up to 25%.

3 cards:

**🥉 Basic Member — Rp 500k/tahun**
- 10% off semua grooming
- 5% off products
- Birthday treat untuk anabul
- Newsletter & event invite

**🥈 Plus Member — Rp 1.5 jt/tahun** ⭐ Most Popular
- 15% off grooming & boarding
- 10% off products
- Free 1x grooming per tahun
- Priority booking
- Free vet consultation 2x/tahun

**🥇 VIP Member — Rp 3.5 jt/tahun**
- 25% off everything
- Free monthly grooming
- Free 5 nights boarding
- Free training class (1 program)
- Personal concierge

### Pet of the Month
- **Heading:** Pawfect Pet of the Month
- **Subheading:** Karena setiap anabul deserve to be celebrated.
- Instagram-style grid 12 foto pet customer (with permission)
- Highlight: featured pet of the month + story

Caption hover: Nama pet, breed, age, fun fact

### Testimonial
- **Heading:** Cerita Para Pet Parents
- 4 testimonial dengan foto pet & pet parent:

> "Buddy (Golden Retriever) di-grooming di Pawfect tiap bulan. Hasilnya selalu konsisten, dan dia happy banget tiap di-drop. Pasti datang lagi."
> — **Bu Sari & Buddy 🐕**

> "Travel 10 hari ke Bali, Mochi (Persian cat) di-boarding di Royal Suite. Webcam-nya bikin tenang, daily video bikin gak homesick. Saya yang homesick sama Mochi."
> — **Pak Andre & Mochi 🐈**

> "Puppy Max kami susah toilet training sampai ikut kelas Pawfect. Trainer-nya patient banget, Max sekarang fully trained dalam 2 bulan."
> — **Keluarga Wijaya & Max 🐶**

> "One-stop shop banget. Beli food, grooming, occasional boarding. Staff udah hafal kebiasaan Luna. Personal touch nya juara."
> — **Bu Linda & Luna 🐩**

### FAQ
- **Heading:** FAQ Pet Parents
Accordion:
1. Apakah harus appointment grooming? → Sangat disarankan, terutama weekend. Walk-in tersedia tapi tergantung availability.
2. Berapa lama proses full grooming? → 2-4 jam tergantung breed & size. Drop-off & pickup model.
3. Apakah vaksin wajib untuk boarding? → Wajib. DHPP (anjing), F3/F4 (kucing), rabies. Bukti vaksin diperlukan.
4. Bisa kirim food via delivery? → Bisa! GoSend, GrabExpress same-day, Tiki nasional.
5. Bagaimana jika anabul stress saat grooming? → Tim kami terlatih handle anxious pets. Take breaks, gentle approach, low-stress techniques.
6. Apakah ada emergency vet 24/7? → In-house vet hanya Senin-Sabtu daytime. Untuk emergency 24/7, kami refer ke partner emergency clinic.
7. Boarding selama Lebaran/Natal? → Slot sangat terbatas, book minimal 2 bulan sebelumnya.

### Booking CTA
- **Heading:** Book Anabul Kamu
- **Body:** Pilih service, tanggal, dan staff preferensi. Konfirmasi dalam 1 jam kerja.
- Form: Nama pet parent, WhatsApp, Email, Nama Pet, Breed & Size, Service (dropdown: Grooming/Boarding/Daycare/Training), Cabang, Tanggal preferensi
- **CTA:** Book Sekarang 🐾

Alternative: **WhatsApp Direct**

### Footer
- Tagline: *"Furry, fluffy, family — we care."*
- Cabang: Kelapa Gading, Kemang, BSD, Bintaro, Bandung Dago
- Jam: Selasa-Minggu 09:00-20:00 (Senin tutup untuk maintenance)
- Sosmed: IG (@pawfectpetstudio), TikTok (cute pets), YouTube (pet care tips)
- Newsletter: "Pet care tips & promo eksklusif"

---

## 5. Image References

| Section | Source | URL / Search Term | Alt Text | Dimensi |
|---------|--------|-------------------|----------|---------|
| Hero | Unsplash | https://unsplash.com/s/photos/cute-dog-groomed-happy | "Anjing happy after grooming" | 1920x1080 |
| Hero alt | Pexels | https://www.pexels.com/search/pet%20grooming%20cute/ | "Cute pet grooming" | 1920x1080 |
| Service - Grooming | Pexels | https://www.pexels.com/search/dog%20grooming%20bath/ | "Dog grooming bath" | 800x600 |
| Service - Boarding | Unsplash | https://unsplash.com/s/photos/pet-hotel-boarding | "Pet hotel" | 800x600 |
| Service - Daycare | Pexels | https://www.pexels.com/search/dog%20daycare%20playing/ | "Daycare dogs" | 800x600 |
| Service - Training | Unsplash | https://unsplash.com/s/photos/dog-training-positive | "Dog training" | 800x600 |
| Service - Shop | Pexels | https://www.pexels.com/search/pet%20shop%20premium/ | "Pet shop products" | 800x600 |
| Service - Vet | Unsplash | https://unsplash.com/s/photos/veterinarian-dog-checkup | "Vet consultation" | 800x600 |
| Grooming - Basic Bath | Pexels | https://www.pexels.com/search/dog%20bath%20shampoo/ | "Basic bath" | 800x600 |
| Grooming - Full | Unsplash | https://unsplash.com/s/photos/dog-haircut-groomer | "Full grooming" | 800x600 |
| Grooming - Spa | Pexels | https://www.pexels.com/search/dog%20spa%20treatment/ | "Spa premium" | 800x600 |
| Grooming - Cat | Unsplash | https://unsplash.com/s/photos/cat-grooming | "Cat grooming" | 800x600 |
| Boarding - Standard | Pexels | https://www.pexels.com/search/dog%20kennel%20clean/ | "Standard room" | 800x600 |
| Boarding - Comfort | Unsplash | https://unsplash.com/s/photos/luxury-pet-room | "Comfort suite" | 800x600 |
| Boarding - Royal | Pexels | https://www.pexels.com/search/luxury%20pet%20hotel/ | "Royal suite" | 800x600 |
| Shop - Food | Unsplash | https://unsplash.com/s/photos/premium-pet-food | "Premium pet food" | 600x600 |
| Shop - Treats | Pexels | https://www.pexels.com/search/dog%20treats%20healthy/ | "Treats" | 600x600 |
| Shop - Toys | Unsplash | https://unsplash.com/s/photos/dog-toys-puzzle | "Pet toys" | 600x600 |
| Shop - Beds | Pexels | https://www.pexels.com/search/luxury%20pet%20bed/ | "Premium bed" | 600x600 |
| Training - Puppy | Unsplash | https://unsplash.com/s/photos/puppy-training-class | "Puppy training" | 800x600 |
| Training - Obedience | Pexels | https://www.pexels.com/search/dog%20obedience%20training/ | "Obedience training" | 800x600 |
| Groomer portraits | Pexels | https://www.pexels.com/search/groomer%20with%20dog/ | "Groomer portrait" | 600x800 |
| Pet of Month gallery (12) | Unsplash + Pexels | https://unsplash.com/s/photos/cute-dog-cat-portrait | Cute pets | 600x600 |
| Testimonial - Pet parents | Pexels | https://www.pexels.com/search/owner%20with%20happy%20dog/ | "Pet parent with pet" | 800x800 |

---

## 6. Animation Spec (Framer Motion)

**Note:** Playful brand — animasi bisa fun & cute. Tail-wag-vibe!

### Hero (React island, `client:load`)
```tsx
// Bouncy reveal for playful feel
const playfulReveal = {
  hidden: { opacity: 0, y: 30, scale: 0.95 },
  visible: { 
    opacity: 1, 
    y: 0, 
    scale: 1,
    transition: { type: "spring", stiffness: 150, damping: 18, staggerChildren: 0.1 }
  }
}

// Floating paw prints di background
const floatingPaw = (delay: number) => ({
  y: [0, -20, 0],
  rotate: [0, 15, -15, 0],
  transition: { duration: 5 + Math.random(), repeat: Infinity, delay }
})
```

### Services Grid (React island, `client:visible`)
- 6 cards reveal stagger
- Hover: card lift `y: -10`, emoji bounce
- Tail-wag animation pada paw icon: subtle wiggle on hover

### Grooming Menu (React island, `client:visible`)
- Tab switch animal type: smooth `layoutId` indicator
- Service cards stagger reveal
- "Most Popular" badge: pulse glow
- Price tag: subtle bounce on hover

### Pet Boarding (React island, `client:visible`)
- 3 cards reveal stagger
- "Most Popular" emphasized
- Hover: card lift + room image scale
- Webcam icon (Royal Suite): subtle pulse

### Products Shop (React island, `client:visible`)
- Category grid stagger reveal
- Product cards: hover lift + image swap
- Quick-add cart: button slide-in
- "Add to cart" animation with paw print confetti micro

### Pet Training (React island, `client:visible`)
- 3 program cards reveal stagger
- Hover: card lift + paw print decoration
- Method badge ("force-free"): emphasis

### Our Groomers Grid (React island, `client:visible`)
- 6 groomer cards stagger reveal
- Hover: image color + specialty slide-up
- Pet in photo: subtle bounce on hover

### Membership Cards (React island, `client:visible`)
- 3 cards reveal stagger
- "Most Popular" with crown emoji bounce
- Hover: card lift + benefit checkmark pulse
- Tier badge: subtle rotate on hover

### Pet of the Month Gallery (React island, `client:visible`)
- Instagram-style masonry grid
- Image hover: scale + name tag slide-up
- Featured pet: star badge with bounce
- Click → lightbox with story

### Testimonial (React island, `client:visible`)
- Carousel auto-rotate 7s
- Slide with pet photo emphasis
- Pet emoji: subtle wiggle
- Pause on hover

### FAQ Accordion (React island, `client:visible`)
- Height animation via `layout`
- Chevron rotate
- Paw print accent on hover

### Booking Form
- Multi-step playful transitions
- Pet emoji decoration
- Submit: button with paw print success animation

### Scroll Reveal Pattern (reusable)
```tsx
const playfulFade = {
  hidden: { opacity: 0, y: 25, scale: 0.97 },
  visible: { 
    opacity: 1, 
    y: 0, 
    scale: 1,
    transition: { type: "spring", stiffness: 130, damping: 18 } 
  }
}
```

### Cursor Effect (optional, desktop)
- Paw print trail on cursor di hero & gallery section

### Hydration Strategy
- `client:load` → Hero
- `client:visible` → Services, Grooming, Boarding, Shop, Training, Groomers, Membership, Pet of Month, Testimonial, FAQ
- `client:idle` → Booking form
- Sisanya: static

---

## 8. SEO Meta

- **Title:** Pawfect Pet Studio — Premium Pet Grooming, Boarding & Shop Jakarta
- **Description:** Pet studio one-stop: grooming premium, boarding & hotel, daycare, training, dan shop premium brand. 5 cabang Jakarta, BSD, Bandung. 5.000+ happy pets.
- **Keywords:** pet grooming jakarta, pet hotel, dog grooming, pet shop jakarta, daycare anjing, training anjing, cat grooming jakarta, premium pet food
- **OG Image:** Cute pet grooming shot dengan logo (1200x630)
- **Schema:** `LocalBusiness` + `PetStore` + `Service` schema
