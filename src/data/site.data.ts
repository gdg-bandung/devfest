export const SITE = {
  name: "DevFest Bandung 2026",
  seoTitle: "DevFest Bandung 2026 — Build, Secure, Scale",
  seoDescription:
    "DevFest Bandung 2026 brings developers and builders together to build, secure, and scale in the agentic era.",
  dateLong: "Saturday, 19 December 2026",
  dateMedium: "Sat, 19 December 2026",
  dateShort: "Sat, 19 Dec 2026",
  time: "08.00–16.00 WIB",
  venue: "El Hotel Bandung",
  contactEmail: "hi@gdgbandung.com",
} as const;

export const LINKS = {
  register: "https://gdgbandung.com/devfest2026",
  cfs: "https://gdgbandung.com/devfest-cfs",
  sponsorship: "https://gdgbandung.com/devfest-sponsorship",
  maps: "https://share.google/eLtj4R1naoi7zoFjO",
  mapsEmbed: "https://maps.google.com/maps?q=%C3%A9L%20Hotel%20Bandung%2C%20Jl.%20Merdeka%20No.%202%2C%20Bandung&z=16&output=embed",
  community: "https://gdg.community.dev/gdg-bandung/",
  instagram: "https://www.instagram.com/gdg_bandung/",
  brandGuidelines: "https://gdgbandung.com/brand-guidelines",
  terms: "https://gdgbandung.com/terms-and-conditions",
} as const;

export const NAV_LINKS = [
  { name: "Home", href: "/" },
  { name: "Sponsor", href: "/sponsor" },
  { name: "Call for Speakers", href: "/cfs" },
  { name: "Venue", href: "/venue" },
  { name: "FAQ", href: "/faq" },
] as const;

export const IMAGES = {
  logoDevfest: "/images/2026/logo-devfest.png",
  logoGdgFooter: "/images/2026/logo-gdg-bandung-footer.png",
  organisersMascot: "/images/2026/organisers-mascot.webp",
  keynoteStage: "/images/2026/keynote-stage.webp",
  dancePerformance: "/images/2026/dance-performance.webp",
  audienceQuestion: "/images/2026/audience-question.webp",
  ogImage: "/images/2026/og-image.jpg",
  heroGroup: "/images/2026/hero-group-2025.webp",
  industryTalk: "/images/2026/industry-talk.webp",
  handsOnCodelab: "/images/2026/hands-on-codelab.webp",
  networking: "/images/2026/networking.webp",
  cfsSpeaker: "/images/2026/cfs-speaker.webp",
} as const;

export type Faq = { question: string; answer: string };

const link = (href: string, text: string) => `<a href="${href}">${text}</a>`;

export const FAQS = {
  what: {
    question: "What is DevFest Bandung?",
    answer:
      "A community-led technology conference by GDG Bandung. It brings developers, builders, students, product people, designers and technology enthusiasts together to learn, build and connect.",
  },
  when: {
    question: "When and where is DevFest Bandung 2026?",
    answer: "Saturday, 19 December 2026, from 08.00 to 16.00 WIB at El Hotel Bandung.",
  },
  register: {
    question: "How do I register?",
    answer: `Register at ${link(LINKS.register, "gdgbandung.com/devfest2026")}.`,
  },
  audience: {
    question: "Who is the event for?",
    answer:
      "Professional developers, AI builders, students, product and design practitioners, founders, and anyone curious about building useful technology.",
  },
  content: {
    question: "What content will be covered?",
    answer:
      "Two tracks: a Builder track for turning ideas into apps and workflows with AI, and a Developer track on agents and production systems. Around them: hands-on codelabs, industry talks and expert panels, and a networking area.",
  },
  laptop: {
    question: "Do I need a laptop?",
    answer: "Bring one if you plan to join the hands-on codelabs. For talks and networking you don’t need anything.",
  },
  speak: {
    question: "How can I speak at DevFest Bandung?",
    answer: `Submit your proposal at ${link(LINKS.cfs, "gdgbandung.com/devfest-cfs")}. First-time speakers are welcome.`,
  },
  partner: {
    question: "Can my company partner with DevFest Bandung?",
    answer: `Yes. Options include sponsorship, in-kind support, community collaboration, media, university and attendee-experience partnerships. Start at ${link(LINKS.sponsorship, "gdgbandung.com/devfest-sponsorship")}.`,
  },
  contact: {
    question: "Where can I ask another question?",
    answer: `Email the organising team at ${link(`mailto:${SITE.contactEmail}`, SITE.contactEmail)}.`,
  },
} satisfies Record<string, Faq>;

export const FAQ_LIST: Faq[] = [
  FAQS.what,
  FAQS.when,
  FAQS.register,
  FAQS.audience,
  FAQS.content,
  FAQS.laptop,
  FAQS.speak,
  FAQS.partner,
  FAQS.contact,
];

// The home page teaser uses shorter wording for two answers.
export const HOME_FAQS: Faq[] = [
  { ...FAQS.when, answer: "Saturday, 19 December 2026, 08.00–16.00 WIB at El Hotel Bandung." },
  FAQS.register,
  FAQS.audience,
  { ...FAQS.laptop, answer: "Bring one if you plan to join the hands-on codelabs. Talks and networking need nothing but you." },
];
