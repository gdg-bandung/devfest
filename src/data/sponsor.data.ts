export type SponsorRelationship =
  | "sponsor"
  | "partner"
  | "media-partner"
  | "community-partner";

export interface SponsorRecord {
  name: string;
  logo: string;
  relationship: SponsorRelationship;
  year?: number;
  event?: string;
  description?: string;
  website?: string;
}

export interface CurrentSponsorGroup {
  label: string;
  records: SponsorRecord[];
}

// No organisation is confirmed as a 2026 sponsor in the supplied sources yet.
export const CURRENT_2026_SPONSORS: CurrentSponsorGroup[] = [
  { label: "Principal partner", records: [] },
  { label: "Diamond partners", records: [] },
  { label: "Platinum partners", records: [] },
  { label: "Gold & Silver partners", records: [] },
  { label: "Community & media partners", records: [] },
];

export const HISTORICAL_COLLABORATIONS: SponsorRecord[] = [
  { name: "Logitech", logo: "/images/sponsors/logitech.png", relationship: "sponsor", website: "https://www.logitech.com/id-id" },
  { name: "Qwords", logo: "/images/sponsors/qwords.png", relationship: "sponsor" },
  { name: "BenQ", logo: "/images/sponsors/benq.png", relationship: "sponsor" },
  { name: "TiDB", logo: "/images/sponsors/tidb.png", relationship: "sponsor" },
  { name: "PEXIO", logo: "/images/sponsors/pexio.png", relationship: "sponsor" },
  { name: "Midtrans", logo: "/images/sponsors/midtrans.png", relationship: "sponsor" },
  { name: "Google for Developers", logo: "/images/sponsor-&-partner/google-for-developers.webp", relationship: "sponsor", website: "https://developers.google.com/" },
  { name: "MSI", logo: "/images/sponsor-&-partner/msi.webp", relationship: "sponsor", website: "https://id.msi.com/" },
  { name: "WPU Course", logo: "/images/sponsor-&-partner/wpu-course.webp", relationship: "sponsor", website: "https://wpucourse.id/" },
  { name: "Kliktron", logo: "/images/sponsor-&-partner/kliktron.webp", relationship: "sponsor", website: "https://kliktron.id/" },
  { name: "Cuci Wangi", logo: "/images/sponsor-&-partner/cuci-wangi.webp", relationship: "sponsor", website: "https://www.cuciwangi.com/" },
  { name: "Sarae Bakery", logo: "/images/sponsor-&-partner/sarae-bakery.webp", relationship: "sponsor", website: "https://www.instagram.com/sarae_bakery/" },
  { name: "Lofi Coffee & Space", logo: "/images/sponsor-&-partner/lo-fi.webp", relationship: "sponsor", website: "https://www.instagram.com/lofi.jbr/" },
  { name: "heviitro", logo: "/images/sponsor-&-partner/heviitro.webp", relationship: "sponsor", website: "https://www.instagram.com/heviitro.official/" },
  { name: "Orely.co", logo: "/images/sponsor-&-partner/orely.webp", relationship: "sponsor", website: "https://orely.co/" },
  { name: "Universitas Kristen Maranatha", logo: "/images/sponsor-&-partner/universitas-kristen-maranatha.webp", relationship: "partner", website: "https://www.maranatha.edu/" },
  { name: "Goers", logo: "/images/sponsor-&-partner/goers.webp", relationship: "partner", website: "https://www.goersapp.com/" },
  { name: "Torch", logo: "/images/sponsor-&-partner/torch.webp", relationship: "partner", website: "https://torch.id/" },
  { name: "radar bandung", logo: "/images/sponsor-&-partner/radar-bandung.webp", relationship: "media-partner", website: "https://www.radarbandung.id/" },
  { name: "bradio", logo: "/images/sponsor-&-partner/bradio.webp", relationship: "media-partner", website: "https://bradio956.fm/" },
  { name: "naramakna.id", logo: "/images/sponsor-&-partner/naramakna.webp", relationship: "media-partner", website: "https://naramakna.id/" },
  { name: "antaranews.com", logo: "/images/sponsor-&-partner/antara-news.webp", relationship: "media-partner", website: "https://www.antaranews.com/" },
  { name: "ayobandung.com", logo: "/images/sponsor-&-partner/ayo-bandung.webp", relationship: "media-partner", website: "https://www.ayobandung.com/" },
  { name: "bandung 24 jam", logo: "/images/sponsor-&-partner/bandung-24-jam.webp", relationship: "media-partner", website: "https://www.instagram.com/bandung24jam/" },
  { name: "berita bandung id", logo: "/images/sponsor-&-partner/berita-bandung-id.webp", relationship: "media-partner", website: "https://beritabandung.id/" },
  { name: "dunia coding", logo: "/images/sponsor-&-partner/dunia-coding.webp", relationship: "media-partner", website: "https://duniacoding.id/" },
  { name: "folkjawabarat", logo: "/images/sponsor-&-partner/folkjawabarat.webp", relationship: "media-partner", website: "https://duniacoding.id/" },
  { name: "IBBC", logo: "/images/sponsor-&-partner/ibbc.webp", relationship: "media-partner", website: "https://www.instagram.com/infobdgbaratcimahi/" },
  { name: "infobdg.com", logo: "/images/sponsor-&-partner/infobdg.webp", relationship: "media-partner", website: "https://www.infobdg.com/v2/" },
  { name: "jabarekspres.com", logo: "/images/sponsor-&-partner/jabar-ekpress.webp", relationship: "media-partner", website: "https://jabarekspres.com/" },
  { name: "jabarnews.com", logo: "/images/sponsor-&-partner/jabarnews.webp", relationship: "media-partner", website: "https://www.jabarnews.com/" },
  { name: "kompasiana", logo: "/images/sponsor-&-partner/kompasiana.webp", relationship: "media-partner", website: "https://www.kompasiana.com/" },
  { name: "radio prfm", logo: "/images/sponsor-&-partner/pr-fm.webp", relationship: "media-partner", website: "https://prfmnews.pikiran-rakyat.com/" },
  { name: "rri pro 2 bandung", logo: "/images/sponsor-&-partner/rri-pro2-bandung.webp", relationship: "media-partner", website: "https://radioonline.co.id/pro-2-rri-96-0-fm-bandung/" },
  { name: "rumah komunitas", logo: "/images/sponsor-&-partner/rumah-komunitas.webp", relationship: "media-partner", website: "https://www.rumahkomunitas.com/" },
  { name: "maestro radio bandung", logo: "/images/sponsor-&-partner/maestro-radio-bandung.webp", relationship: "media-partner", website: "https://www.maestroradiobandung.com/" },
  { name: "promedia", logo: "/images/sponsor-&-partner/promedia.webp", relationship: "media-partner", website: "https://www.promediateknologi.id/" },
];

export const SPONSORSHIP_TIERS = [
  { name: "Diamond", price: "IDR 80,000,000", note: "Highest visibility, booth, and a 30-minute sponsorship talk slot." },
  { name: "Platinum", price: "IDR 50,000,000", note: "Large visibility, booth, and a 15-minute sponsorship talk slot." },
  { name: "Gold", price: "IDR 25,000,000", note: "Medium visibility, booth, and event engagement benefits." },
  { name: "Silver", price: "IDR 10,000,000", note: "Small visibility and complimentary event tickets." },
] as const;
