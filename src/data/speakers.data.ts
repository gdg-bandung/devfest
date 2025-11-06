import { PropertyType, ThemeColor } from "../consts";

export const SPEAKERS: {
  name: string;
  role: string;
  themeColor: (typeof ThemeColor)[keyof typeof ThemeColor];
  propertyType: (typeof PropertyType)[keyof typeof PropertyType];
  photoUrl?: string;
}[] = [
  {
    name: "Eko Kurniawan K",
    role: "Technical Architect of Blibli.com",
    themeColor: ThemeColor.BLUE,
    propertyType: PropertyType.CLOUD,
    photoUrl: "/images/speaker/photos/eko-kurniawan-k.webp",
  },
  {
    name: "Imre Nagi",
    role: "Google Developer Expert Cloud",
    themeColor: ThemeColor.BLUE,
    propertyType: PropertyType.CLOUD,
    photoUrl: "/images/speaker/photos/imre-nagi.webp",
  },
  {
    name: "Qassandra Chaidir",
    role: "Google Developer Expert Cloud",
    themeColor: ThemeColor.BLUE,
    propertyType: PropertyType.CLOUD,
    photoUrl: "/images/speaker/photos/qassandra-chaidir.webp",
  },
  {
    name: "Iqbal Alaydrus",
    role: "CTO of Bangunindo",
    themeColor: ThemeColor.BLUE,
    propertyType: PropertyType.CLOUD,
    photoUrl: "/images/speaker/photos/iqbal-alaydrus.webp",
  },
  {
    name: "Erico Darmawan H",
    role: "Lecturer, Maranatha Christian University",
    themeColor: ThemeColor.GREEN,
    propertyType: PropertyType.MOBILE,
    photoUrl: "/images/speaker/photos/erico-darmawan-h.webp",
  },
  {
    name: "Sidiq Permana",
    role: "Chief Innovation Officer of NBS.DEV & Google Developer Expert Android",
    themeColor: ThemeColor.GREEN,
    propertyType: PropertyType.MOBILE,
    photoUrl: "/images/speaker/photos/sidiq-permana.webp",
  },
  {
    name: "Ibnu Sina W",
    role: "Founder GITS.ID & Google Developer Expert Cloud & AI",
    themeColor: ThemeColor.RAINBOW,
    propertyType: PropertyType.AI,
    photoUrl: "/images/speaker/photos/ibnu-sina-w.webp",
  },
  {
    name: "Setia Budi",
    role: "Machine Learning Engineer of tiket.com",
    themeColor: ThemeColor.RAINBOW,
    propertyType: PropertyType.AI,
    photoUrl: "/images/speaker/photos/setia-budi.webp",
  },
  {
    name: "Esther Irawati",
    role: "Google Developer Expert AI & Cloud & Professor Institut STTS",
    themeColor: ThemeColor.RAINBOW,
    propertyType: PropertyType.AI,
    photoUrl: "/images/speaker/photos/esther-irawati.webp",
  },
  {
    name: "Sandhika Galih",
    role: "Founder of WPUCourse.id & Google Developer Expert Web",
    themeColor: ThemeColor.YELLOW,
    propertyType: PropertyType.WEB,
    photoUrl: "/images/speaker/photos/sandhika-galih.webp",
  },
  {
    name: "Avip Syaifullah",
    role: "Chief Executive Officerof WPU Course",
    themeColor: ThemeColor.YELLOW,
    propertyType: PropertyType.WEB,
    photoUrl: "/images/speaker/photos/avip-syaifullah.webp",
  },
  {
    name: "Jessica Cecilia B",
    role: "Software Engineer of OmniHR",
    themeColor: ThemeColor.YELLOW,
    propertyType: PropertyType.WEB,
    photoUrl: "/images/speaker/photos/jessica-cecilia-b.webp",
  },
  {
    name: "R Surahutomo A. P",
    role: "Google Developer Expert Firebase",
    themeColor: ThemeColor.RED,
    propertyType: PropertyType.FIREBASE,
    photoUrl: "/images/speaker/photos/r-surahutomo-a-p.webp",
  },
  {
    name: "Fini Charisa",
    role: "Web3 Design Lead of Bittime",
    themeColor: ThemeColor.BLUE,
    propertyType: PropertyType.DESIGN,
    photoUrl: "/images/speaker/photos/fini-charisa.webp",
  },
  {
    name: "David Alfa S",
    role: "Director of Webekspor.com",
    themeColor: ThemeColor.BLUE,
    propertyType: PropertyType.GENERAL,
    photoUrl: "/images/speaker/photos/david-alfa-s.webp",
  },
  {
    name: "Maya Hansmar",
    role: "Chief Happiness Officer (Rikas) & Finance & Ops (SLYYK Australia)",
    themeColor: ThemeColor.BLUE,
    propertyType: PropertyType.GENERAL,
    photoUrl: "/images/speaker/photos/maya-hansmar.webp",
  },
  {
    name: "Risa Kusumaningrum",
    role: "Chief Representative Officer of Scalemind Media",
    themeColor: ThemeColor.BLUE,
    propertyType: PropertyType.GENERAL,
    photoUrl: "/images/speaker/photos/risa-kusumaningrum.webp",
  },
  {
    name: "Oscar Karnalim, S.T., M.T., Ph.D., SMIEEE, CSCU",
    role: "Dekan Fakultas Teknologi dan Rekayasa Cerdas",
    themeColor: ThemeColor.BLUE,
    propertyType: PropertyType.GENERAL,
    photoUrl: "/images/speaker/photos/oscar-karnalim.webp",
  },
  {
    name: "Hadian Rahmat",
    role: "Organizer GDG Bandung",
    themeColor: ThemeColor.BLUE,
    propertyType: PropertyType.GENERAL,
    photoUrl: "/images/speaker/photos/hadian-rahmat.webp",
  },
  {
    name: "Danang Juffry",
    role: "Community Manager Indonesia& Brunei",
    themeColor: ThemeColor.BLUE,
    propertyType: PropertyType.GENERAL,
    photoUrl: "/images/speaker/photos/danang-juffry.webp",
  },
  {
    name: "Torch",
    role: "Sponsor",
    themeColor: ThemeColor.BLUE,
    propertyType: PropertyType.GENERAL,
    photoUrl: "",
  },
  {
    name: "MSI",
    role: "Sponsor",
    themeColor: ThemeColor.BLUE,
    propertyType: PropertyType.GENERAL,
    photoUrl: "",
  },
];
