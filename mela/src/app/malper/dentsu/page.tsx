// BismillahirRahmanirRahim
// El Hamdu Lillahi Rabbul Alemin
// Esselatu vesselamu ala rasulina Muhammedin .
// La ilahe ill Allah Muhammeden Rasulullah

// El Hamdu Lillahi Rabbul Alemin
// Klasik edebiyat dergisi tarzı tanıtım sayfası

import Link from "next/link";

const services = [
  {
    no: "01",
    title: "Alçı Sıva",
    desc: "İç ve dış cephede pürüzsüz yüzey; alçı sıva, korniş ve tavan göbeği uygulamaları.",
  },
  {
    no: "02",
    title: "Boya & Badana",
    desc: "İç ve dış cephe boyama, silinebilir boya ve dekoratif duvar uygulamaları.",
  },
  {
    no: "03",
    title: "Alçıpan Tavan",
    desc: "Asma tavan, gizli ışık kanalları ve alçıpan bölme sistemleri.",
  },
  {
    no: "04",
    title: "Anahtar Teslim Tadilat",
    desc: "Ev ve işyeri tadilatında yıkımdan ince işlere kadar tek elden çözüm.",
  },
  {
    no: "05",
    title: "İnşaat İşleri",
    desc: "Duvar örme, şap, beton ve ince inşaat işlerinde planlı uygulama.",
  },
  {
    no: "06",
    title: "Dekoratif Sıva",
    desc: "Mikro beton, beton görünüm ve özel efektli duvar uygulamaları.",
  },
  {
    no: "07",
    title: "Dış Cephe",
    desc: "Dış cephe boya, mantolama sonrası yüzey ve cephe onarım işleri.",
  },
  {
    no: "08",
    title: "Onarım & Bakım",
    desc: "Çatlak onarımı, rutubet problemi, sökme-takma ve tamirat işleri.",
  },
];
const marqueeWord = "ALÇI — BOYA — İNŞAAT — ";

export default function DentsuPage() {
  return (
    <main className="min-h-screen bg-[#0a0a0a] text-white overflow-x-hidden">
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .marquee-track {
          display: inline-flex;
          white-space: nowrap;
          animation: marquee 30s linear infinite;
        }
        .marquee-track:hover { animation-play-state: paused; }
        .service-row {
          transition: background .3s, padding-left .3s;
          cursor: pointer;
        }
        .service-row:hover {
          background: #ffffff;
          color: #0a0a0a;
          padding-left: 1.5rem;
        }
        .service-row:hover .service-desc { color: #0a0a0a; }
        .hover-line { position: relative; }
        .hover-line::after {
          content: "";
          position: absolute; left: 0; bottom: -4px;
          width: 0; height: 2px; background: currentColor;
          transition: width .3s;
        }
        .hover-line:hover::after { width: 100%; }
      `}</style>

      {/* NAVBAR */}
      <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-10 py-5 bg-[#0a0a0a]/80 backdrop-blur">
        <div className="flex gap-6 md:gap-10 text-xs md:text-sm tracking-widest uppercase">
          <a href="#isler" className="hover-line">Projeler</a>
          <a href="#hizmetler" className="hover-line">Hizmetler</a>
          <a href="#hakkinda" className="hover-line">Hakkımızda</a>
          <a href="#iletisim" className="hover-line">İletişim</a>
        </div>
        <div className="text-sm font-bold tracking-[0.3em] uppercase">Aslan Dekorasyon</div>
      </nav>

      {/* HERO */}
      <section className="relative min-h-screen flex flex-col justify-center px-6 md:px-10 pt-24">
        <div className="text-xs tracking-[0.4em] uppercase text-white/60 mb-6">
          Alçı, boya ve inşaat işlerinde uçtan uca çözüm
        </div>
        <h1 className="font-bold leading-[0.95] tracking-tight">
          <span className="block text-5xl md:text-8xl lg:text-9xl">Evinizi ve</span>
          <span className="block text-5xl md:text-8xl lg:text-9xl text-white/40">
            iş yerinizi
          </span>
          <span className="block text-5xl md:text-8xl lg:text-9xl">
            yenileyen
          </span>
          <span className="block text-5xl md:text-8xl lg:text-9xl italic">
            ustalar<span className="text-red-600">.</span>
          </span>
        </h1>
        <div className="mt-12 flex gap-4">
          <a
            href="#isler"
            className="px-8 py-4 border border-white/30 rounded-full text-sm tracking-widest uppercase hover:bg-white hover:text-black transition-colors"
          >
Projeleri gör
          </a>
          <a
            href="#iletisim"
            className="px-8 py-4 bg-red-600 rounded-full text-sm tracking-widest uppercase hover:bg-red-500 transition-colors"
          >
Teklif al
          </a>
        </div>
      </section>

      {/* MARQUEE */}
      <section className="py-16 border-y border-white/10">
        <div className="marquee-track text-6xl md:text-8xl font-bold tracking-tight">
          {[0, 1].map((i) => (
            <span key={i} className="pr-8">
              {marqueeWord.repeat(4)}
            </span>
          ))}
        </div>
      </section>

      {/* LATEST BOOKS */}
      <section id="isler" className="px-6 md:px-10 py-24">
        <h2 className="text-4xl md:text-6xl font-bold mb-16">Son Projeler</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {["Alçı Sıva & Korniş", "İç Cephe Boya", "Anahtar Teslim Tadilat", "Alçıpan Asma Tavan"].map(
            (name, i) => (
              <div
                key={name}
                className="group relative aspect-[4/3] overflow-hidden bg-white/5 border border-white/10"
              >
                <div className="absolute inset-0 flex items-center justify-center text-6xl font-bold text-white/10 group-hover:text-white/20 transition-colors">
                  {String(i + 1).padStart(2, "0")}
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-6 flex items-end justify-between">
                  <h3 className="text-2xl font-semibold">{name}</h3>
                  <span className="text-sm text-white/50">Proje</span>
                </div>
              </div>
            )
          )}
        </div>
      </section>

      {/* SERVICES */}
      <section id="hizmetler" className="px-6 md:px-10 py-24 border-t border-white/10">
        <h2 className="text-4xl md:text-6xl font-bold mb-16">Hizmetler</h2>
        <div>
          {services.map((s) => (
            <div
              key={s.no}
              className="service-row border-t border-white/15 py-8 flex flex-col md:flex-row md:items-start gap-4 md:gap-12 last:border-b"
            >
              <span className="text-sm text-white/40 font-mono">{s.no}</span>
              <h3 className="text-2xl md:text-4xl font-bold md:w-1/3">{s.title}</h3>
              <p className="service-desc md:w-1/2 text-white/60 leading-relaxed">
                {s.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section id="iletisim" className="px-6 md:px-10 py-32 text-center">
        <h2 className="text-5xl md:text-8xl font-bold leading-tight">
Mekânınızı
          <br />
          <span className="text-red-600">birlikte yenileyelim</span>
        </h2>
        <Link
          href="/"
          className="inline-block mt-12 px-10 py-5 bg-white text-black rounded-full text-sm tracking-widest uppercase hover:bg-red-600 hover:text-white transition-colors"
        >
          İletişime geç
        </Link>
      </section>

      {/* FOOTER */}
      <footer
        id="hakkinda"
        className="px-6 md:px-10 py-12 border-t border-white/10 flex flex-col md:flex-row justify-between gap-6 text-sm text-white/50"
      >
        <div>© {new Date().getFullYear()} — Aslan Dekorasyon. Tüm hakları saklıdır.</div>
        <div className="flex gap-8">
          <a href="#" className="hover:text-white">Instagram</a>
          <a href="#" className="hover:text-white">Facebook</a>
          <a href="#" className="hover:text-white">WhatsApp</a>
        </div>
      </footer>
    </main>
  );
}
