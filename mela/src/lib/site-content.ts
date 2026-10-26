// BismillahirRahmanirRahim
// El Hamdu Lillahi Rabbul Alemin

import prisma from "@/lib/prisma";
import { STATS, CASES, SERVICES, NEWS, CLIENTS } from "@/app/malper/ajans-veri";

// Veritabanında kayıt yoksa bu varsayılanlar (ajans-veri.ts) kullanılır.
export const DEFAULT_SITE_CONTENT: Record<string, unknown> = {
  stats: STATS,
  cases: CASES,
  services: SERVICES,
  news: NEWS,
  clients: CLIENTS,
};

// Aslan Dekorasyon içeriği statiktir: veritabanındaki eski kayıtlar kullanılmaz.
export async function getSiteContent(): Promise<Record<string, unknown>> {
  return DEFAULT_SITE_CONTENT;
}
