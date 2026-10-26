// BismillahirRahmanirRahim
// El Hamdu Lillahi Rabbul Alemin
// Esselatu vesselamu ala rasulina Muhammedin .
// La ilahe ill Allah Muhammeden Rasulullah
import React from "react";
import { AGENCY, STATS, CASES, SERVICES, CLIENTS } from "./ajans-veri";
import { getSiteContent } from "@/lib/site-content";
import MalperClient from "./malper-client";

export const dynamic = "force-dynamic";

export default async function AgencyPage() {
  // Firma statik: veritabanındaki eski kayıtlar varsayılan içeriği ezmesin.
  return (
    <MalperClient
      stats={STATS as { n: string; l: string }[]}
      cases={CASES as { brand: string; title: string; tag: string; img: string }[]}
      services={SERVICES as { n: string; t: string; d: string }[]}
      clients={CLIENTS as string[]}
    />
  );
}

// Elhamdulillah Elhamdulillah Elhamdulillah
// El Hamdu Lillahi Rabbil Alemin
