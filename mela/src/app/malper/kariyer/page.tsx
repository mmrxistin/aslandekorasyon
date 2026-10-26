// BismillahirRahmanirRahim
// El Hamdu Lillahi Rabbul Alemin
// Esselatu vesselamu ala rasulina Muhammedin .
// La ilahe ill Allah Muhammeden Rasulullah
import React from "react";
import Link from "next/link";
import { AGENCY } from "../ajans-veri";

export const metadata = { title: "Referanslar" };
const OPENINGS = [
  { title: "Alçı Sıva & Korniş", type: "Daire · 140 m²", loc: "Kadıköy" },
  { title: "Anahtar Teslim Tadilat", type: "Ofis · 320 m²", loc: "Ataşehir" },
  { title: "Dekoratif Duvar Boyama", type: "Villa · 4 oda", loc: "Beykoz" },
  { title: "Alçıpan Asma Tavan", type: "Mağaza · 200 m²", loc: "Şişli" },
  { title: "Dış Cephe Boya & Mantolama", type: "Apartman · 6 kat", loc: "Ümraniye" },
];

export default function KariyerPage() {
  return (
    <main className="min-h-screen bg-zinc-950 text-zinc-100">
      {/* HERO */}
      <section className="border-b border-white/10 px-4 pb-20 pt-16 sm:px-6 lg:px-10">
        <div className="mx-auto max-w-[1600px]">
          <p className="mb-3 text-xs font-black uppercase tracking-[0.3em] text-[#ff4d00]">Tamamlanan işlerimiz</p>
          <h1 className="text-6xl font-black uppercase tracking-tighter sm:text-8xl">Referanslar</h1>
          <p className="mt-6 max-w-xl text-lg text-zinc-400">
            Teslim ettiğimiz projelerden bazıları; her biri zamanında ve söz verdiğimiz standartta tamamlandı.
          </p>
        </div>
      </section>

      {/* OPENINGS */}
      <section className="px-4 py-20 sm:px-6 lg:px-10">
        <div className="mx-auto max-w-[1600px]">
          {OPENINGS.map((o, i) => (
            <Link
              key={o.title}
              href="/malper/iletisim"
              className="group grid grid-cols-1 items-center gap-4 border-t border-white/10 py-8 transition-colors last:border-b hover:bg-white/[.03] md:grid-cols-12"
            >
              <span className="font-mono text-sm text-[#ff4d00] md:col-span-1">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h2 className="text-2xl font-black tracking-tight transition-colors group-hover:text-[#ff4d00] md:col-span-6 sm:text-3xl">
                {o.title}
              </h2>
              <span className="text-sm text-zinc-400 md:col-span-2">{o.type}</span>
              <span className="text-sm text-zinc-400 md:col-span-2">{o.loc}</span>
              <span className="hidden text-2xl text-zinc-700 transition-all group-hover:translate-x-1 group-hover:text-[#ff4d00] md:col-span-1 md:block">
                ↗
              </span>
            </Link>
          ))}
        </div>
      </section>

      {/* CULTURE BAND */}
      <section className="bg-[#ff4d00] px-4 py-24 text-white sm:px-6 lg:px-10">
        <div className="mx-auto flex max-w-[1600px] flex-col items-start justify-between gap-10 lg:flex-row lg:items-center">
          <h2 className="text-4xl font-black uppercase tracking-tight sm:text-6xl">
            Sağlam işçilik,<br />zamanında teslim
          </h2>
          <Link
            href="/malper/iletisim"
            className="shrink-0 rounded-full bg-zinc-950 px-10 py-5 text-xs font-black uppercase tracking-[0.16em] text-white no-underline transition-transform hover:scale-105"
          >
Teklif alın →
          </Link>
        </div>
      </section>

      {/* CONTACT */}
      <section className="px-4 py-24 text-center sm:px-6 lg:px-10">
        <p className="text-xs font-black uppercase tracking-[0.3em] text-zinc-500">Projeniz için bize ulaşın</p>
        <a
          href={`mailto:${AGENCY.email}`}
          className="mt-6 inline-block text-3xl font-black text-white no-underline transition-colors hover:text-[#ff4d00] sm:text-5xl"
        >
          {AGENCY.email}
        </a>
      </section>
    </main>
  );
}
