// BismillahirRahmanirRahim
// El Hamdu Lillahi Rabbul Alemin
// Esselatu vesselamu ala rasulina Muhammedin .
// La ilahe ill Allah Muhammeden Rasulullah

// Bismillahirahmanirrahim
// Modern manşet slider'ı — otomatik dönen, ok/dot kontrollü, tam responsive
"use client";

import React, { useEffect, useRef, useState } from "react";

const mansetler = [
  {
    title: "Alçı Sıva & Korniş: Pürüzsüz duvarlar",
    desc: "İç ve dış cephede alçı sıva, korniş ve tavan göbeği uygulamaları; astar ve zımpara sonrası boyaya hazır yüzey.",
    img: "/images/alci-siva.svg",
    href: "/malper/hizmetler",
    cat: "ALÇI",
  },
  {
    title: "İç Cephe Boya: Mekânın havasını değiştirin",
    desc: "Dekoratif duvar boyama, silinebilir boya ve badana; mobilya korumalı, temiz çalışan boya ekibi.",
    img: "/images/ic-cephe-boya.svg",
    href: "/malper/hizmetler",
    cat: "BOYA",
  },
  {
    title: "Anahtar Teslim Tadilat: Baştan sona yenileme",
    desc: "Ev, ofis ve işyeri tadilatında yıkım, alçı, boya, zemin ve ince işler dahil tek elden anahtar teslim çözüm.",
    img: "/images/tadilat.svg",
    href: "/malper/hizmetler",
    cat: "TADİLAT",
  },
  {
    title: "Alçıpan Asma Tavan: Modern tavan detayları",
    desc: "Alçıpan asma tavan, gizli ışık kanalları ve bölme duvarlarla mekânlara yeni bir derinlik.",
    img: "/images/alcipan-tavan.svg",
    href: "/malper/hizmetler",
    cat: "ALÇIPAN",
  },
];

function MansetSlider() {
  const [index, setIndex] = useState(0);
  const timer = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    timer.current = setInterval(() => setIndex((i) => (i + 1) % mansetler.length), 6000);
    return () => { if (timer.current) clearInterval(timer.current); };
  }, []);

  const goto = (i: number) => {
    setIndex(i);
    if (timer.current) clearInterval(timer.current);
    timer.current = setInterval(() => setIndex((v) => (v + 1) % mansetler.length), 6000);
  };

  const onceki = () => goto((index - 1 + mansetler.length) % mansetler.length);
  const sonraki = () => goto((index + 1) % mansetler.length);

  const item = mansetler[index];

  return (
    <div className="mm-ms-slider">
      <a href={item.href} className="mm-ms-slide mm-ms-active" aria-label={item.title}>
        <img src={item.img} alt={item.title} className="mm-ms-img" draggable={false} />
        <div className="mm-ms-grad" />

        <div className="mm-ms-tag">
          <span className="size-2 rounded-full bg-white animate-pulse" />
  ÖNE ÇIKAN • {item.cat}
        </div>

        <div className="mm-ms-text">
          <h2 className="mm-ms-title">{item.title}</h2>
          <p className="mm-ms-desc">{item.desc}</p>
        </div>
      </a>

      {/* Oklar */}
      <button aria-label="Önceki metin" className="mm-ms-arrow mm-ms-prev" onClick={(e) => { e.preventDefault(); onceki(); }}>
        ‹
      </button>
      <button aria-label="Sonraki metin" className="mm-ms-arrow mm-ms-next" onClick={(e) => { e.preventDefault(); sonraki(); }}>
        ›
      </button>

      {/* Noktalar */}
      <div className="mm-ms-dots">
        {mansetler.map((_, i) => (
          <button
            key={i}
            aria-label={`Metin ${i + 1}`}
            onClick={(e) => { e.preventDefault(); goto(i); }}
            className={`mm-ms-dot ${i === index ? "active" : ""}`}
          />
        ))}
      </div>
    </div>
  );
}

export default MansetSlider;
