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
} as const;

export const LINKS = {
  register: "https://gdgbandung.com/devfest2026",
  sponsorship: "https://gdgbandung.com/devfest-sponsorship",
  connect: "https://connect.gdgbandung.com",
  maps: "https://share.google/eLtj4R1naoi7zoFjO",
  mapsEmbed: "https://maps.google.com/maps?q=%C3%A9L%20Hotel%20Bandung%2C%20Jl.%20Merdeka%20No.%202%2C%20Bandung&z=16&output=embed",
  brandGuidelines: "https://gdgbandung.com/brand-guidelines",
  codeOfConduct: "https://gdgbandung.com/code-of-conduct",
  terms: "https://gdgbandung.com/terms-and-conditions",
} as const;

export const NAV_LINKS = [
  { name: "Home", href: "/" },
  { name: "Sponsor", href: "/sponsor" },
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

export const SPONSOR_LOGOS = {
  googleForDevelopers: photo("sponsor-google-for-developers", 547, 62),
  bhisa: photo("sponsor-bhisa", 1148, 417),
  mayar: photo("sponsor-mayar", 1188, 372),
  wpuCourse: photo("sponsor-wpu-course", 757, 258),
  brodo: photo("sponsor-brodo", 1038, 319),
  jetbrains: photo("sponsor-jetbrains", 1192, 256),
  sessionize: photo("sponsor-sessionize", 1179, 216),
} as const;

/** The three parallel Tech Dimensions rooms shown on the home page. */
export const ROOMS = [
  {
    key: "listen",
    name: "Tech You Listen",
    description:
      "This room is dedicated entirely to talks. Industry practitioners and tech experts take turns on stage to share real stories from the field: projects they shipped, problems they solved, and trends they think deserve your attention. You don’t need a laptop. Just come curious, take notes, and bring your questions for the speakers.",
    fields: [
      { label: "Format", value: "Talks, back to back" },
      { label: "Laptop", value: "Not needed" },
    ],
  },
  {
    key: "inspire",
    name: "Tech You Inspire",
    description:
      "Every session in this room is led by a woman in tech, and it mixes two formats. First, a hands-on workshop where you learn by doing. Then, lightning talks with short, focused stories and insights from women who build, lead, and shape the tech industry. Come to pick up new skills, discover different paths into tech, and connect with speakers who might inspire your own journey. This room is open to all attendees.",
    fields: [
      { label: "Format", value: "Hands-on workshop, then lightning talks" },
      { label: "Open to", value: "All attendees" },
    ],
  },
  {
    key: "build",
    name: "Tech You Build",
    description:
      "This room is 100% hands-on. Start with a guided workshop where you follow along step by step. Then move to the Developer Playground to experiment, try new tools, and build something of your own. Bring a fully charged laptop and be ready to write code, break things, fix them, then ship!",
    fields: [
      { label: "Format", value: "Guided workshop, then Developer Playground" },
      { label: "Laptop", value: "Bring it, fully charged" },
    ],
  },
] as const;

/** Each answer is a list of paragraphs; paragraphs may contain inline HTML links. */
export type Faq = { question: string; answer: string[] };

const link = (href: string, text: string) => `<a href="${href}">${text}</a>`;
const connectLink = link(LINKS.connect, "connect.gdgbandung.com");

export const FAQS = {
  what: {
    question: "What is DevFest?",
    answer: [
      "DevFest is a global, community-led tech conference series hosted by Google Developer Groups (GDGs). Each DevFest event is crafted by its local organizers to fit the needs and interests of the local developer community. Think of it as an annual celebration of technology and community, happening in cities all over the world.",
    ],
  },
  annual: {
    question: "Is DevFest held every year?",
    answer: ["Yes, DevFest is an annual tech event for developers which is held in the period October - December."],
  },
  when: {
    question: "When and where is DevFest Bandung 2026 happening?",
    answer: ["The DevFest Bandung 2026 will take place on December 19, 2026, at the éL Hotel, Bandung."],
  },
  cloud: {
    question: "Is there a difference between DevFest and DevFest Cloud?",
    answer: [
      "DevFest is organized by GDG and contains general topics related to Android, Web, UI/UX, Flutter, Firebase, Cloud, and AI/ML.",
      "Meanwhile, DevFest Cloud is organized by GDG Cloud, whose topics will focus on Cloud technology, AI, ML and Data.",
    ],
  },
  register: {
    question: "How do I register for DevFest Bandung 2026?",
    answer: [
      `For registration, you can go directly to the following link: ${link("https://devfest.gdgbandung.com", "devfest.gdgbandung.com")}`,
      "Important: Please save the registration email containing the barcode to show when registering.",
    ],
  },
  transfer: {
    question: "If I cannot attend, can I give my ticket to someone else?",
    answer: ["No, you cannot give your ticket to someone else unless you have a clear and original ticket purchasing proof."],
  },
  refund: {
    question: "Will the registration fee be refunded if I cannot attend?",
    answer: ["No, your registration fee will not be refunded."],
  },
  onTheSpot: {
    question: "Will there be on-the-spot tickets?",
    answer: ["There will be no on-the-spot tickets. Participants who have not registered and have tickets cannot enter the venue and take part in the event."],
  },
  wristband: {
    question: "Will the tickets be exchanged for entry wristbands later?",
    answer: ["No, there’s no ticket exchange, you just need to show the barcode in the email after purchasing the ticket."],
  },
  laptop: {
    question: "Do I need to bring a laptop during activities?",
    answer: ["Bringing a laptop is optional. But if you want to take part in our workshop session then you have to bring a laptop."],
  },
  tracks: {
    question: "Am I free to choose the track during the event and can change tracks at will?",
    answer: [
      "You are free to choose the track you want according to your preferences. You can move between stages during the event as long as you don’t disturb other participants and stage capacity is still available.",
    ],
  },
  late: {
    question: "May I come late?",
    answer: ["We recommend that you do not arrive late because you will miss many exclusive opportunities from our events."],
  },
  directions: {
    question: "Where is the event room located from the main gate and parking location?",
    answer: ["We will make a video guide regarding the venue location and room plan. Stay up-to-date for the information in our Instagram account!"],
  },
  facilities: {
    question: "What facilities can participants get?",
    answer: ["Participants will get the opportunity to get exclusive door prizes, lunch, and cool SWAG."],
  },
  swag: {
    question: "If I can’t attend, will I still get SWAG?",
    answer: ["No, only in-person attendees can get SWAG."],
  },
  slides: {
    question: "Can I get the speaker slide?",
    answer: ["The speaker’s material slides will not be shared with the public, so please bring your own media for note-taking."],
  },
  support: {
    question: "I would love to support the GDG Bandung community, who can I contact?",
    answer: [`Feel free to reach out to us at: ${connectLink}`],
  },
  contact: {
    question: "Who can I contact if I have further questions?",
    answer: [`Feel free to reach out to us at: ${connectLink}`],
  },
} satisfies Record<string, Faq>;

export const FAQ_GROUPS: { title: string; faqs: Faq[] }[] = [
  { title: "About DevFest", faqs: [FAQS.what, FAQS.annual, FAQS.when, FAQS.cloud] },
  { title: "Registration & tickets", faqs: [FAQS.register, FAQS.transfer, FAQS.refund, FAQS.onTheSpot, FAQS.wristband] },
  { title: "On the day", faqs: [FAQS.laptop, FAQS.tracks, FAQS.late, FAQS.directions, FAQS.facilities, FAQS.swag, FAQS.slides] },
  { title: "Contact", faqs: [FAQS.support, FAQS.contact] },
];

export const HOME_FAQS: Faq[] = [FAQS.when, FAQS.register, FAQS.laptop, FAQS.tracks, FAQS.facilities];
