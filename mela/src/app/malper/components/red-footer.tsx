// BismillahirRahmanirRahim
// El Hamdu Lillahi Rabbul Alemin
// Esselatu vesselamu ala rasulina Muhammedin .
// La ilahe ill Allah Muhammeden Rasulullah
import React from "react";
import Link from "next/link";
import { NAV_LINKS, AGENCY, WHATSAPP_URL, TEL_URL } from "../ajans-veri";
import { IletisimIkonlari } from "./iletisim-butonlari";

export default function RedFooter() {
  return (
    <footer className="relative overflow-hidden bg-zinc-950 text-white">
      {/* DEVASA LOGO */}
      <div className="pointer-events-none select-none px-4 pt-20">
        <div className="mx-auto max-w-[1600px] text-center">
          <span className="block bg-gradient-to-b from-white/10 to-transparent bg-clip-text text-[18vw] font-black uppercase leading-none tracking-tighter text-transparent">
ASLAN DEKORASYON
          </span>
        </div>
      </div>

      <div className="mx-auto max-w-[1600px] px-4 pb-10 pt-16 sm:px-6 lg:px-10">
        <div className="grid grid-cols-1 gap-12 border-t border-white/10 pt-12 md:grid-cols-4">
          <div className="md:col-span-2">
            <div className="flex items-center gap-2">
              <span className="grid h-9 w-9 place-items-center rounded-lg bg-[#ff4d00] text-sm font-black text-white">AD</span>
              <span className="text-xl font-black uppercase">Aslan<span className="text-[#ff4d00]">Dekorasyon</span></span>
            </div>
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-white/50">
              Alçı, boya ve inşaat işlerinde anahtar teslim çözümler. Ev, ofis ve işyerleri için tadilat, dekoratif sıva ve boya uygulamaları.
            </p>
          </div>
          <div>
            <h4 className="mb-5 text-xs font-black uppercase tracking-[0.2em] text-white/40">Menü</h4>
            <ul className="space-y-3">
              {NAV_LINKS.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="text-sm text-white/70 no-underline transition-colors hover:text-[#ff4d00]">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="mb-5 text-xs font-black uppercase tracking-[0.2em] text-white/40">İletişim</h4>
            <ul className="space-y-3 text-sm text-white/70">
              <li><a href={`mailto:${AGENCY.email}`} className="no-underline transition-colors hover:text-[#ff4d00]">{AGENCY.email}</a></li>
              <li>
                <a href={TEL_URL} className="no-underline transition-colors hover:text-[#ff4d00]">{AGENCY.phone}</a>
              </li>
              <li>{AGENCY.address}</li>
            </ul>
            <IletisimIkonlari className="mt-6" />
            <div className="mt-4 flex gap-3">
              {["IG", "FB", "YT"].map((s) => (
                <a
                  key={s}
                  href="#"
                  className="grid h-10 w-10 place-items-center rounded-full border border-white/20 text-[10px] font-black text-white/60 no-underline transition-all hover:border-[#ff4d00] hover:bg-[#ff4d00] hover:text-white"
                >
                  {s}
                </a>
              ))}
            </div>
          </div>
        </div>
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 text-xs text-white/40 sm:flex-row">
          <span>© {new Date().getFullYear()} Aslan Dekorasyon — Tüm hakları saklıdır.</span>
          <span className="font-mono">Alçı · Boya · İnşaat · İstanbul</span>
        </div>
      </div>
    </footer>
  );
}
