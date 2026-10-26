// BismillahirRahmanirRahim
// El Hamdu Lillahi Rabbul Alemin
// Esselatu vesselamu ala rasulina Muhammedin .
// La ilahe ill Allah Muhammeden Rasulullah
import React from "react";
import Link from "next/link";
import { SERVICES, AGENCY } from "../ajans-veri";
import ParvekirinaYek from "../components/parvekirin";

export const metadata = { title: "Hizmetler" };
const CAPABILITIES = [
  "Alçı Sıva", "Korniş", "Tavan Göbeği",
  "İç Cephe Boya", "Dış Cephe Boya", "Badana",
  "Dekoratif Sıva", "Mikro Beton", "Alçıpan Bölme",
  "Asma Tavan", "Gizli Işık", "Anahtar Teslim Tadilat",
];

export default function HizmetlerPage() {
  return (
    <main className="min-h-screen bg-zinc-950 text-zinc-100">
      {/* HERO */}
      <section className="border-b border-white/10 px-4 pb-20 pt-16 sm:px-6 lg:px-10">
        <div className="mx-auto max-w-[1600px]">
          <p className="mb-3 text-xs font-black uppercase tracking-[0.3em] text-[#ff4d00]">Ne yapıyoruz</p>
          <h1 className="text-6xl font-black uppercase tracking-tighter sm:text-8xl">Hizmetler</h1>
          <p className="mt-6 max-w-xl text-lg text-zinc-400">
            Alçıdan boyaya, inşaat işlerinden dekoratif uygulamalara — planlı, temiz ve garantili işçilik.
          </p>
        </div>
      </section>

      {/* HİZMETLER — numaralı dev satırlar */}
      <section className="px-4 py-20 sm:px-6 lg:px-10">
        <div className="mx-auto max-w-[1600px]">
          {SERVICES.map((s) => (
            <div
              key={s.n}
              className="group grid grid-cols-1 gap-6 border-t border-white/10 py-12 transition-colors last:border-b hover:bg-white/[.03] md:grid-cols-12 md:items-start"
            >
              <span className="font-mono text-sm text-[#ff4d00] md:col-span-1">{s.n}</span>
              <h2 className="text-3xl font-black tracking-tight md:col-span-4 sm:text-4xl">{s.t}</h2>
              <p className="max-w-xl leading-relaxed text-zinc-400 md:col-span-6">{s.d}</p>
              <span className="hidden text-2xl text-zinc-700 transition-all group-hover:translate-x-1 group-hover:text-[#ff4d00] md:col-span-1 md:block">
                ↗
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* CAPABILITIES */}
      <section className="border-y border-white/10 px-4 py-20 sm:px-6 lg:px-10">
        <div className="mx-auto max-w-[1600px]">
          <p className="mb-8 text-xs font-black uppercase tracking-[0.3em] text-zinc-500">Uygulama & Detaylar</p>
          <div className="flex flex-wrap gap-3">
            {CAPABILITIES.map((c) => (
              <span
                key={c}
                className="rounded-full border border-white/15 px-5 py-2.5 text-xs font-bold uppercase tracking-[0.14em] text-zinc-300 transition-colors hover:border-[#ff4d00] hover:text-[#ff4d00]"
              >
                {c}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-4 py-24 text-center sm:px-6 lg:px-10">
        <h2 className="text-4xl font-black uppercase tracking-tight sm:text-6xl">
          Tadilat veya <span className="text-[#ff4d00]">boya işiniz</span> için teklif alın
        </h2>
        <Link
          href="/malper/iletisim"
          className="mt-10 inline-block rounded-full bg-[#ff4d00] px-10 py-4 text-xs font-black uppercase tracking-[0.16em] text-white no-underline transition-all hover:bg-white hover:text-zinc-950"
        >
          {AGENCY.email}
        </Link>
      </section>

      {/* ADMIN YEK FEED */}
      <section className="border-t border-white/10 px-4 py-20 sm:px-6 lg:px-10">
        <div className="mx-auto max-w-[1600px]">
          <p className="mb-3 text-xs font-black uppercase tracking-[0.3em] text-[#ff4d00]">
            Paylaşım
          </p>
          <h2 className="mb-8 text-4xl font-black uppercase tracking-tight sm:text-6xl">
            Son İşler
          </h2>
          <ParvekirinaYek />
        </div>
      </section>
    </main>
  );
}
