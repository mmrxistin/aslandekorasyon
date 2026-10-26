// BismillahirRahmanirRahim
// El Hamdu Lillahi Rabbul Alemin
// Esselatu vesselamu ala rasulina Muhammedin .
// La ilahe ill Allah Muhammeden Rasulullah

// Bismillahirrahmanirrahim
// Hizmet Alanları Grid Bileşeni
"use client";

import React from "react";

const allAuthors = [
  { name: "Alçı Sıva", initial: "A", color: "bg-red-600" },
  { name: "Korniş", initial: "K", color: "bg-zinc-800" },
  { name: "Boya", initial: "B", color: "bg-red-700" },
  { name: "Badana", initial: "B", color: "bg-zinc-900" },
  { name: "Alçıpan", initial: "A", color: "bg-red-800" },
  { name: "Asma Tavan", initial: "T", color: "bg-zinc-700" },
  { name: "Tadilat", initial: "T", color: "bg-red-900" },
  { name: "İnşaat", initial: "İ", color: "bg-zinc-800" },
];

//Subhan Allah î Azîm ve BîHamdihî, Subhan Allah î Azîm ve BîHamdihî, Subhan Allah î Azîm ve BîHamdihî
export default function MmAuthorGrid() {
  return (
    <section className="py-8 bg-zinc-50 border-t border-zinc-200 px-4 sm:px-6">
      <div className="mx-auto max-w-[1280px]">
        <h2 className="text-sm font-black uppercase tracking-[0.14em] border-b-[3px] border-zinc-900 pb-2 mb-6">
          HİZMET ALANLARI
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-4">
          {allAuthors.map((author, idx) => (
            <a key={idx} href="/malper/hizmetler" className="flex flex-col items-center group">
              <div className={`w-16 h-16 ${author.color} rounded-full flex items-center justify-center text-white text-xl font-black mb-2 shadow-sm group-hover:scale-110 transition-transform`}>
                {author.initial}
              </div>
              <span className="text-[11px] font-bold text-center uppercase tracking-tighter text-zinc-700 group-hover:text-[#d90000] transition-colors">
                {author.name}
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
