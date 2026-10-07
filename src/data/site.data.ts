export const SITE = {
  name: "DevFest Bandung 2026",
  seoTitle: "DevFest Bandung 2026 — Tech Meets Human",
  seoDescription:
    "One day to build, learn, breathe, and connect. DevFest Bandung 2026 brings 600 developers, students, founders, and tech enthusiasts together on 19 December 2026 at El Hotel Bandung.",
  dateLong: "Saturday, 19 December 2026",
  dateMedium: "Saturday, December 19, 2026",
  dateShort: "Sat, 19 Dec 2026",
  time: "08:00–16:00 WIB",
  venue: "El Hotel Bandung",
  capacity: "600",
  contactEmail: "hi@gdgbandung.com",
} as const;

export const LINKS = {
  register: "https://gdgbandung.com/devfest2026",
  cfs: "https://gdgbandung.com/devfest-cfs",
  sponsorship: "https://gdgbandung.com/devfest-sponsorship",
  maps: "https://share.google/eLtj4R1naoi7zoFjO",
  mapsEmbed: "https://maps.google.com/maps?q=%C3%A9L%20Hotel%20Bandung%2C%20Jl.%20Merdeka%20No.%202%2C%20Bandung&z=16&output=embed",
  community: "https://gdg.community.dev/gdg-bandung/",
  brandGuidelines: "https://gdgbandung.com/brand-guidelines",
  codeOfConduct: "https://gdgbandung.com/code-of-conduct",
  terms: "https://gdgbandung.com/terms-and-conditions",
} as const;

export const NAV_LINKS = [
  { name: "Home", href: "/" },
  { name: "Sponsor", href: "/sponsor" },
  { name: "Call for Speakers", href: "/cfs" },
  { name: "Venue", href: "/venue" },
  { name: "FAQ", href: "/faq" },
] as const;

export const SOCIAL_LINKS = {
  facebook: "https://www.facebook.com/gdgbdg",
  instagram: "https://www.instagram.com/gdg_bandung/",
  linkedin: "https://www.linkedin.com/company/gdg-bandung",
  telegram: "https://t.me/gdgbandung",
  x: "https://x.com/gdgbandung",
  youtube: "https://www.youtube.com/@gdgbandung",
} as const;

export const IMAGES = {
  logoDevfest: "/images/2026/logo-devfest.webp",
  logoGdgFooter: "/images/2026/logo-gdg-bandung-footer.webp",
  ogImage: "/images/2026/og-image.jpg",
} as const;

export type Photo = { src: string; width: number; height: number };

const photo = (name: string, width: number, height: number): Photo => ({ src: `/images/2026/${name}.webp`, width, height });

// Every photo ships 480w, 800w and 1200w variants next to the full-size (1600w) file.
export const srcset = ({ src, width }: Photo) =>
  [480, 800, 1200].map((w) => `${src.replace(/\.webp$/, `-${w}.webp`)} ${w}w`).concat(`${src} ${width}w`).join(", ");

export const PHOTOS = {
  heroGroup: photo("hero-group-2025", 1600, 900),
  gdgSignGroup: photo("gdg-sign-group", 1600, 983),
  handsRaised: photo("hands-raised", 1600, 1067),
  hackathonLaptopTeam: photo("hackathon-laptop-team", 1600, 1067),
  tableWave: photo("table-wave", 1600, 1067),
  hackathonTables: photo("hackathon-tables", 1600, 900),
  boothPhones: photo("booth-phones", 1600, 1067),
  audienceQuestion: photo("audience-question", 1600, 900),
  mainStageSpeaker: photo("main-stage-speaker", 1600, 900),
} as const;

/** The three parallel Builders Rooms, shared by the home and CFS pages. */
export const ROOMS = [
  {
    key: "app",
    label: "ROOM A",
    name: "App Builders",
    audience: "For attendees looking to build client-side experiences and hands-on products.",
    summary: "Client-side experiences and hands-on products. Primary format: concise codelab.",
    format: "Concise codelab",
    topics: ["Anti Gravity"],
  },
  {
    key: "platform",
    label: "ROOM B",
    name: "Platform Builders",
    audience: "For engineers looking to delve into backend, cloud, architecture, and infrastructure.",
    summary: "Backend, cloud, architecture, and infrastructure. Primary format: intermediate sessions and case studies.",
    format: "Intermediate sessions & case studies",
    topics: ["GKE", "Distributed data processing", "Microservices", "Node.js", "Docker", "Security & scale"],
  },
  {
    key: "business",
    label: "ROOM C",
    name: "Business Builders",
    audience: "For attendees building from the product, strategy, analytics, or operations side.",
    summary: "Product, strategy, analytics, or operations. Primary format: practical workshop.",
    format: "Practical workshop",
    topics: ["Product thinking", "Intelligent analytics", "Vibe coding for business workflows", "Experimentation"],
  },
] as const;

export type Faq = { question: string; answer: string };

const link = (href: string, text: string) => `<a href="${href}">${text}</a>`;

export const FAQS = {
  what: {
    question: "What is DevFest Bandung?",
    answer:
      "DevFest Bandung is a community-led technology conference by GDG Bandung. In 2026 the theme is Tech Meets Human: a sharp technical day that still leaves room for connection, career reflection, and collaboration.",
  },
  audience: {
    question: "Who is DevFest Bandung 2026 for?",
    answer:
      "For developers, students, founders, and tech enthusiasts who want to learn, meet new people, and build momentum together with the community.",
  },
  when: {
    question: "When and where is it?",
    answer: `Saturday, 19 December 2026, 08:00–16:00 WIB at El Hotel Bandung, Jl. Merdeka No. 2. See the ${link("/venue", "venue page")} for directions.`,
  },
  rooms: {
    question: "How do the Builders Rooms work?",
    answer:
      "During registration, select your interest: App Builders, Platform Builders, or Business Builders. This selection helps us manage capacity. Detailed room access will be shared before the event.",
  },
  optional: {
    question: "Do I need to join the Human Activity or Hackathon?",
    answer: "No. Both are optional. You can choose the activities that best match your energy and interest on the day of the event.",
  },
  alone: {
    question: "Can I join the hackathon alone?",
    answer: "Yes. That’s the whole point — we will help form small teams so you can meet and collaborate with new participants.",
  },
  laptop: {
    question: "Do I need a laptop?",
    answer:
      "Yes, we strongly recommend bringing a laptop for codelabs, workshops, and the Vibe Hackathon. Tooling guidelines will be sent to registered attendees 3 days before the event.",
  },
  register: {
    question: "How do I register?",
    answer: `Register at ${link(LINKS.register, "gdgbandung.com/devfest2026")}. There are 600 seats for the 2026 edition.`,
  },
  partner: {
    question: "Can my company partner with DevFest Bandung?",
    answer: `Yes. Bring a product challenge for the Vibe Hackathon, support codelabs and charging lounges, activate a booth, or partner for The Human Activity. See the ${link("/sponsor", "sponsor page")} or email ${link(`mailto:${SITE.contactEmail}`, SITE.contactEmail)}.`,
  },
  speak: {
    question: "Can I speak at DevFest Bandung?",
    answer: `Yes. We accept Builders Room sessions, Main Stage talks and panels, and Human Activity facilitators. See the ${link("/cfs", "Call for Speakers")}.`,
  },
} satisfies Record<string, Faq>;

export const FAQ_GROUPS: { title: string; faqs: Faq[] }[] = [
  { title: "About the event", faqs: [FAQS.what, FAQS.audience, FAQS.when] },
  { title: "The program", faqs: [FAQS.rooms, FAQS.optional, FAQS.alone, FAQS.laptop] },
  { title: "Registration & partners", faqs: [FAQS.register, FAQS.partner, FAQS.speak] },
];

export const HOME_FAQS: Faq[] = [FAQS.audience, FAQS.rooms, FAQS.optional, FAQS.laptop, FAQS.alone];
