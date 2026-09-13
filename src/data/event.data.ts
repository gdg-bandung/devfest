export const EVENT = {
  year: 2026,
  name: "DevFest Bandung 2026",
  theme: "Build, Secure, Scale: Developers and Builders in the Agentic Era",
  date: "12 December 2026",
  dateISO: "2026-12-12",
  time: "08:00–16:00 WIB",
  venue: null,
  city: "Bandung, Indonesia",
  registrationUrl: null,
  socialUrls: {
    instagram: "https://www.instagram.com/gdg_bandung/",
    community: "https://gdg.community.dev/gdg-bandung/",
  },
  contactEmail: "hi@gdgbandung.com",
  seoTitle: "DevFest Bandung 2026 — Build, Secure, Scale",
  seoDescription:
    "DevFest Bandung 2026 brings developers and builders together to build, secure, and scale in the agentic era.",
} as const;

export const EVENT_DATE_LABEL = `${EVENT.date} · ${EVENT.time}`;

export const PREVIOUS_EDITION_PROOF = [
  { value: "2,000+", label: "participants" },
  { value: "64.94%", label: "professionals" },
  { value: "2,100+", label: "YouTube live viewers" },
  { value: "71", label: "media placements" },
] as const;
