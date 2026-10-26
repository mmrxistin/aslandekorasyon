// BismillahirRahmanirRahim
// El Hamdu Lillahi Rabbul Alemin
// Esselatu vesselamu ala rasulina Muhammedin .
// La ilahe ill Allah Muhammeden Rasulullah
import React from "react";
import { AGENCY, WHATSAPP_URL, TEL_URL } from "../ajans-veri";

function WhatsAppIcon({ className = "h-5 w-5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden>
      <path d="M17.47 14.38c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.95 1.17-.17.2-.35.22-.65.07-.3-.15-1.13-.42-2.15-1.33-.8-.71-1.33-1.6-1.48-1.9-.15-.3-.02-.46.13-.61.14-.14.3-.35.45-.52.15-.18.2-.3.3-.5.1-.2.05-.38-.02-.53-.08-.15-.68-1.63-.93-2.23-.24-.6-.49-.51-.67-.52h-.57c-.2 0-.52.07-.79.37-.27.3-1.03 1.01-1.03 2.46 0 1.45 1.06 2.85 1.2 3.05.15.2 2.06 3.29 5.1 4.48 2.55 1 3.06.8 3.62.75.55-.05 1.77-.72 2.02-1.42.25-.7.25-1.3.17-1.43-.07-.12-.27-.2-.57-.35z" />
      <path d="M12.04 2.5c-5.24 0-9.5 4.26-9.5 9.5 0 1.68.44 3.32 1.28 4.76L2.5 21.5l4.86-1.27a9.47 9.47 0 0 0 4.68 1.2h.01c5.24 0 9.5-4.26 9.5-9.5s-4.27-9.43-9.51-9.43zm0 17.31h-.01a7.86 7.86 0 0 1-4-1.1l-.29-.17-2.88.75.77-2.81-.18-.29a7.85 7.85 0 0 1-1.2-4.19 7.9 7.9 0 0 1 7.9-7.89c2.11 0 4.09.82 5.58 2.31a7.85 7.85 0 0 1 2.31 5.59 7.9 7.9 0 0 1-8 7.8z" />
    </svg>
  );
}

function PhoneIcon({ className = "h-5 w-5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden>
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.79 19.79 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.9.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  );
}

/** Sabit (sağ alt) WhatsApp + Telefon butonları — tüm malper sayfalarında görünür */
export function YukzenIletisimButonlari() {
  return (
    <div className="fixed bottom-5 right-4 z-50 flex flex-col gap-3 sm:bottom-6 sm:right-6">
      <a
        href={TEL_URL}
        aria-label={`Telefon: ${AGENCY.phone}`}
        title={`Telefon: ${AGENCY.phone}`}
        className="group grid h-12 w-12 place-items-center rounded-full bg-[#ff4d00] text-white shadow-lg shadow-black/40 no-underline transition-transform hover:scale-110 sm:h-14 sm:w-14"
      >
        <PhoneIcon className="h-5 w-5 sm:h-6 sm:w-6" />
      </a>
      <a
        href={WHATSAPP_URL}
        target="_blank"
        rel="noreferrer"
        aria-label={`WhatsApp: ${AGENCY.phone}`}
        title={`WhatsApp: ${AGENCY.phone}`}
        className="group grid h-12 w-12 place-items-center rounded-full bg-[#25D366] text-white shadow-lg shadow-black/40 no-underline transition-transform hover:scale-110 sm:h-14 sm:w-14"
      >
        <WhatsAppIcon className="h-6 w-6 sm:h-7 sm:w-7" />
      </a>
    </div>
  );
}

/** Satır içi (ikon + numara) iletişim butonları — footer, iletişim sayfası vb. */
export function IletisimIkonlari({ className = "" }: { className?: string }) {
  return (
    <div className={`flex gap-3 ${className}`}>
      <a
        href={WHATSAPP_URL}
        target="_blank"
        rel="noreferrer"
        aria-label="WhatsApp ile iletişime geç"
        className="grid h-10 w-10 place-items-center rounded-full border border-white/20 text-white/60 no-underline transition-all hover:border-[#25D366] hover:bg-[#25D366] hover:text-white"
      >
        <WhatsAppIcon className="h-4 w-4" />
      </a>
      <a
        href={TEL_URL}
        aria-label="Telefon ile ara"
        className="grid h-10 w-10 place-items-center rounded-full border border-white/20 text-white/60 no-underline transition-all hover:border-[#ff4d00] hover:bg-[#ff4d00] hover:text-white"
      >
        <PhoneIcon className="h-4 w-4" />
      </a>
    </div>
  );
}

export { WhatsAppIcon, PhoneIcon };
