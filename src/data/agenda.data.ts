export interface Speaker {
  name: string;
  avatar?: string;
}

export interface Session {
  time: string;
  category: string;
  title?: string;
  subtitle?: string;
  speakers?: Speaker[];
  theme: "blue" | "yellow" | "green" | "red";
}

export const listStageAgenda: {
  title: string;
  location: string;
  description: string;
  agenda: Session[];
}[] = [
  {
    title: "BANDUNG LOGITECH VERSE",
    location: "Auditorium",
    description:
      "The Main Stage Bandung Logitech-verse comes alive with our deep dive series Tech Talks – the cornerstone of DevFest Bandung 2025. Where industry experts guide you through in-depth material, live demonstrations, and share battlefield stories from real-world challenges. Each session concludes with Q&A, ensuring you connect the dots between theory and application.",
    agenda: [
      {
        time: "06:30 - 07:25",
        category: "Opening Session",
        title: "Gate Opening & Registration",
        subtitle: "Registration , event opening by GDG Bandung",
        theme: "blue",
      },
      {
        time: "07:20 - 07:25",
        category: "Opening Ceremony",
        title: "Opening Ceremony Performance",
        subtitle: "Indonesia Raya, Traditional Dance",
        theme: "yellow",
      },
      {
        time: "07:35 - 07:40",
        category: "Doa Pembuka",
        title: "Opening Prayer",
        subtitle: "Pendeta Universitas",
        theme: "green",
      },
      {
        time: "07:40 - 08:25",
        category: "Opening Speech",
        subtitle:
          "Hadian Rahmat S.Kom \nDanang Juffry ST. M.B.A \nOscar Karnalim, S.T., M.T., Ph.D. \nProf. Ir. Frans Umbu Datta, M.App.Sc., Ph.D.\nMuhammad Farhan, S.T., M.Si.\nDr. lendra  Sofyan, ST., M.Si.\nMeutya Hafid, S.I.Kom., M.Si.",
        theme: "red",
        speakers: [
          { name: "Sundar Pichai" },
          {
            name: "Hadian Rahmat",
            avatar: "/images/speaker/photos/hadian-rahmat.webp",
          },
          {
            name: "Danang Juffry",
            avatar: "/images/speaker/photos/danang-juffry.webp",
          },
          {
            name: "Oscar Karnalim",
            avatar: "/images/speaker/photos/oscar-karnalim.webp",
          },
          { name: "Dr. Hanny Juliany Dani" },
          { name: "Muhammad Farhan" },
          { name: "Dr. Iendra Sofyan" },
        ],
      },
      {
        time: "08:25 - 08:35",
        category: "Opening Ceremony",
        title: "Ceremony Highlights",
        subtitle: "Gong Striking Ceremony, \nPlaque Presentation",
        theme: "yellow",
      },
      {
        time: "08:35 - 08:40",
        category: "Ice Breaking",
        title: "Ice Breaking Session I",
        subtitle: "Delivered by MC",
        theme: "blue",
      },
      {
        time: "08:40 - 09:10",
        category: "Tech Talk",
        title:
          "Gemini Enterprise: Your AI Collaborator for Code, Campus, and Career",
        subtitle: "Muhammad Fariz Sinaga",
        theme: "red",
        speakers: [
          {
            name: "Muhammad Fariz Sinaga",
            avatar: "/images/speaker/photos/m-fariz-sinaga.webp",
          },
        ],
      },
      {
        time: "09:10 - 09:25",
        category: "Lightning Talks",
        title: "Unleash Creativity & Productivity with MX",
        subtitle: "Samuel Ishak Putra",
        theme: "green",
        speakers: [
          {
            name: "Samuel Ishak Putra",
            avatar: "/images/speaker/photos/samuel-ishak-putra.webp",
          },
        ],
      },
      {
        time: "09:25 - 09:55",
        category: "Tech Talk",
        title: "The Magic of 1 Second: Why Every Millisecond Counts",
        subtitle: "Eko Kurniawan Khannedy",
        theme: "blue",
        speakers: [
          {
            name: "Eko Kurniawan Khannedy",
            avatar: "/images/speaker/photos/eko-kurniawan-k.webp",
          },
        ],
      },
      {
        time: "09:55 - 10:10",
        category: "Lightning Talks",
        title: "AI Inside: Redefining the Laptop Experience with MSI",
        subtitle: "Digga Febriawan Putra",
        theme: "red",
        speakers: [
          {
            name: "Digga Febriawan Putra",
            avatar: "/images/speaker/photos/digga-febriawan-p.webp",
          },
        ],
      },
      {
        time: "10:10 - 10:40",
        category: "Tech Talk",
        title: "CSS in Motion: Bringing Your UI to Life",
        subtitle: "Sandhika Galih",
        theme: "blue",
        speakers: [
          {
            name: "Sandhika Galih",
            avatar: "/images/speaker/photos/sandhika-galih.webp",
          },
        ],
      },
      {
        time: "10:40 - 11:35",
        category: "Panel Discussion",
        title:
          "Teaching Code When AI Can Write It: What Should Educators Focus On?",
        subtitle: "Oscar (Moderator), Erico, Setia Budi, Ester",
        theme: "green",
        speakers: [
          {
            name: "Oscar Karnalim",
            avatar: "/images/speaker/photos/oscar-karnalim.webp",
          },
          {
            name: "Erico Darmawan",
            avatar: "/images/speaker/photos/erico-darmawan-h.webp",
          },
          {
            name: "Setia Budi",
            avatar: "/images/speaker/photos/setia-budi.webp",
          },
          {
            name: "Esther Irawati",
            avatar: "/images/speaker/photos/esther-irawati.webp",
          },
        ],
      },
      {
        time: "11:35 - 11:45",
        category: "Break",
        title: "Info Break & Networking",
        subtitle:
          "Makan Siang, Sholat, Info Split Stage, Adlibs Sponsor, Dokumentasi",
        theme: "yellow",
      },
      {
        time: "11:45 - 13:25",
        category: "Break",
        title: "Networking & Break",
        theme: "blue",
      },
      {
        time: "13:25 - 14:20",
        category: "Woman Empowerment",
        title: "A Woman's Diary of Becoming WonderWoman In Tech Landscape",
        subtitle: "Maya (Moderator), Jessica, Fini, Qassie",
        theme: "yellow",
        speakers: [
          {
            name: "Maya Hansmar",
            avatar: "/images/speaker/photos/maya-hansmar.webp",
          },
          {
            name: "Jessica Cecilia",
            avatar: "/images/speaker/photos/jessica-cecilia-b.webp",
          },
          {
            name: "Fini Charisa",
            avatar: "/images/speaker/photos/fini-charisa.webp",
          },
          {
            name: "Qassandra Chaidir",
            avatar: "/images/speaker/photos/qassandra-chaidir.webp",
          },
        ],
      },
      {
        time: "14:20 - 15:00",
        category: "Tech Talk",
        title:
          'The Unwritten Realm: Building "Living" Games with Generative Gaming on Firebase & Genkit',
        subtitle: "Surahutomo A. Pradana",
        theme: "blue",
        speakers: [
          {
            name: "Surahutomo A. Pradana",
            avatar: "/images/speaker/photos/r-surahutomo-a-p.webp",
          },
        ],
      },
      {
        time: "15:00 - 15:35",
        category: "Tech Talk",
        title:
          "Unleash Kotlin Multiplatform App Development for OTT Platform from Mobile Apps, TVs to Web",
        subtitle: "Sidiq Permana",
        theme: "green",
        speakers: [
          {
            name: "Sidiq Permana",
            avatar: "/images/speaker/photos/sidiq-permana.webp",
          },
        ],
      },
      {
        time: "15:35 - 16:40",
        category: "Podcast",
        title: "The Major Trends Reshaping the Tech Industry",
        subtitle: "David, Ibnu, Sidiq, Iqbal",
        theme: "red",
        speakers: [
          {
            name: "David Alfa",
            avatar: "/images/speaker/photos/david-alfa-s.webp",
          },
          {
            name: "Ibnu Sina",
            avatar: "/images/speaker/photos/ibnu-sina-w.webp",
          },
          {
            name: "Sidiq Permana",
            avatar: "/images/speaker/photos/sidiq-permana.webp",
          },
          {
            name: "Iqbal Alaydrus",
            avatar: "/images/speaker/photos/iqbal-alaydrus.webp",
          },
        ],
      },
      {
        time: "16:40 - 16:50",
        category: "Opening",
        title: "Ice Breaking #2 Kahoot",
        subtitle: "Ice Breaking #2 Kahoot",
        theme: "blue",
      },
      {
        time: "16:50 - 17:05",
        category: "Dokumentation ",
        title: "Doorprize & Documentation",
        theme: "yellow",
      },
      {
        time: "17:05 - 17:10",
        category: "Doa Penutup",
        title: "Closing Prayer",
        subtitle: "Pendeta Universitas",
        theme: "green",
      },
      {
        time: "17:10 - 17:15",
        category: "Closing",
        title: "Closing Event",
        theme: "yellow",
      },
    ],
  },
  {
    title: "SPARK SESSIONS",
    location: "Exhibition Hall Lt. 1",
    description:
      'Join us for the "Spark Sessions" - an energetic Lightning Talk series at DevFest Bandung 2025. Hear industry experts share valuable insights, innovative projects, and real-world experiences in quick, dynamic presentations. This stage offers practical knowledge that packs a punch - perfect for developers seeking fresh perspectives and actionable tips to level up their skills. Don\'t miss these bite-sized talks packed with big ideas!',
    agenda: [
      {
        time: "13:35 - 13:40",
        category: "Opening",
        title: "Opening",
        theme: "yellow",
      },
      {
        time: "13:40 - 14:00",
        category: "Lightning Talks",
        title: "Goroutine and Channel - The Caveats",
        subtitle: "Iqbal",
        theme: "blue",
        speakers: [
          {
            name: "Iqbal Alaydrus",
            avatar: "/images/speaker/photos/iqbal-alaydrus.webp",
          },
        ],
      },
      {
        time: "14:00 - 14:10",
        category: "Lightning Talks",
        title: "Solve Real Problems, Not Just Ship Features",
        subtitle: "Bobby Robbson",
        theme: "red",
        speakers: [
          {
            name: "Bobby Robbson",
            avatar: "/images/speaker/photos/bobby-robbson.webp",
          },
        ],
      },
      {
        time: "14:10 - 14:30",
        category: "Lightning Talks",
        title:
          "Accelerating The Future of Economy and Gen AI in Indonesia & SEA",
        subtitle: "Risa",
        theme: "green",
        speakers: [
          {
            name: "Risa Kusumaningrum",
            avatar: "/images/speaker/photos/risa-kusumaningrum.webp",
          },
        ],
      },
      {
        time: "14:30 - 14:50",
        category: "Lightning Talks",
        title:
          "Developer Mindsets from a Forbes Asia 100 to Watch Startup: Inside Torch's Experimentation Culture",
        subtitle: "Hadi Sadikin Rachmat",
        theme: "blue",
        speakers: [
          {
            name: "Hadi Sadikin Rachmat",
            avatar: "/images/speaker/photos/hadi-sadikin-rachmat .webp",
          },
        ],
      },
      {
        time: "14:50 - 15:10",
        category: "Lightning Talks",
        title: "From Insight to Impact: The Designer's Role in Problem-Solving",
        subtitle: "Fini",
        theme: "red",
        speakers: [
          {
            name: "Fini Charisa",
            avatar: "/images/speaker/photos/fini-charisa.webp",
          },
        ],
      },
      {
        time: "15:10 - 15:15",
        category: "Closing",
        title: "Closing, Photo Session, Back to Main Stage",
        theme: "yellow",
      },
    ],
  },
  {
    title: "AI ALCHEMY LAB",
    location: "H02 B02 GWM Lt. 2",
    description:
      "Transform code into intelligent creations! Join to build your own AI Agent with Google ADK, then be focused to see and understand images through Gemini. Explore how simple prompts can spark powerful autonomous behaviors and visual intelligence. Turn ordinary code into magic as you unlock the power to experiment, build, and evolve your own intelligent workflows inside the AI Alchemy Lab.",
    agenda: [
      {
        time: "13:35 - 13:55",
        category: "Opening",
        title: "Opening, Redeem Cloud Credits",
        theme: "yellow",
      },
      {
        time: "13:55 - 14:25",
        category: "Tech Talk",
        title: "Let Gemini See with Image Understanding",
        subtitle: "Avip",
        theme: "blue",
        speakers: [
          {
            name: "Avip Syaifullah",
            avatar: "/images/speaker/photos/avip-syaifullah.webp",
          },
        ],
      },
      {
        time: "14:25 - 15:25",
        category: "Workshop",
        title: "Wanna be AI Engineer? Start learning ADK",
        subtitle: "Ibnu",
        theme: "red",
        speakers: [
          {
            name: "Ibnu Sina",
            avatar: "/images/speaker/photos/ibnu-sina-w.webp",
          },
        ],
      },
      {
        time: "15:25 - 15:30",
        category: "Closing",
        title: "Closing, Photo Session, Back to Main Stage",
        theme: "yellow",
      },
    ],
  },
  {
    title: "CLOUD ARCHITECT HUB",
    location: "H03 B02 GWM Lt. 3",
    description:
      "Design the future of scalable applications! Explore modular design principles for cloud and AI-ready apps using Compose Multiplatform, then dive into Google Cloud's powerful ecosystem with expert guidance. Build smarter, faster, and more resilient architectures inside the Cloud Architect Hub -unlock the skills that will set you apart in tomorrow’s tech landscape.",
    agenda: [
      {
        time: "13:35 - 14:05",
        category: "Opening",
        title: "Opening, Redeem Cloud Credits",
        theme: "yellow",
      },
      {
        time: "14:05 - 14:35",
        category: "Tech Talk",
        title:
          "Compose Multiplatform at Scale: Modular Design for Cloud & AI-Ready Apps",
        subtitle: "Joseph Sanjaya",
        theme: "blue",
        speakers: [
          {
            name: "Joseph Sanjaya",
            avatar: "/images/speaker/photos/joseph-sanjaya.webp",
          },
        ],
      },
      {
        time: "14:35 - 15:35",
        category: "Workshop",
        title:
          "From Query to Cloud: Your First Vertex AI Search Chatbot on Cloud Run",
        subtitle: "Qassie",
        theme: "green",
        speakers: [
          {
            name: "Qassandra Chaidir",
            avatar: "/images/speaker/photos/qassandra-chaidir.webp",
          },
        ],
      },
      {
        time: "15:35 - 15:40",
        category: "Closing",
        title: "Closing, Photo Session, Back to Main Stage",
        theme: "yellow",
      },
    ],
  },
  {
    title: "BEYOND INNOVATION",
    location: "H04 A12 GWM Lt. 4",
    description:
      "Push past conventional boundaries! Explore the emerging multi-agent universe in the Fantastic Agents workshop and discover how intelligent agents are reshaping the way we build solutions. Then dive into product-first development approaches where AI becomes your creative partner in turning concepts into real impact. Step into Beyond Innovation and unlock the mindset to design what the future should look like.",
    agenda: [
      {
        time: "13:35 - 14:05",
        category: "Opening",
        title: "Opening, Redeem Cloud Credits",
        theme: "yellow",
      },
      {
        time: "14:05 - 14:55",
        category: "Workshop",
        title:
          "Fantastic Agents and Where to Find Them: A Guide to the Emerging Multi-Agentverse",
        subtitle: "Esther",
        theme: "blue",
        speakers: [
          {
            name: "Esther Irawati",
            avatar: "/images/speaker/photos/esther-irawati.webp",
          },
        ],
      },
      {
        time: "14:55 - 15:45",
        category: "Workshop",
        title: "Product-First Approach Development with AI",
        subtitle: "Jessica",
        theme: "red",
        speakers: [
          {
            name: "Jessica Cecilia",
            avatar: "/images/speaker/photos/jessica-cecilia-b.webp",
          },
        ],
      },
      {
        time: "15:45 - 15:50",
        category: "Closing",
        title: "Closing, Photo Session, Back to Main Stage",
        theme: "yellow",
      },
    ],
  },
  {
    title: "AI BUILDERS ZONE",
    location: "H05 B02 GWM Lt. 5",
    description:
      "Where AI systems come to life! Learn practical production lessons from real-world AI application experiences, then dive into crafting “living” games powered by generative techniques with Firebase and Genkit. See how dynamic behaviors, adaptive content, and intelligent logic evolve right in front of you. This is the zone where bold ideas transform into working AI solutions.",
    agenda: [
      {
        time: "13:35 - 13:55",
        category: "Opening",
        title: "Opening, Redeem Cloud Credits",
        theme: "yellow",
      },
      {
        time: "13:55 - 14:45",
        category: "Workshop",
        title:
          "Production Lesson Learned: Running AI Application with Nano Banana",
        subtitle: "Imre",
        theme: "blue",
        speakers: [
          {
            name: "Imre Nagi",
            avatar: "/images/speaker/photos/imre-nagi.webp",
          },
        ],
      },
      {
        time: "14:45 - 15:25",
        category: "Tech Talk",
        title:
          "Engineering at Scale: The Art of Building 99.9% Crash-Free Mobile Apps",
        subtitle: "Deni Rohimat",
        theme: "red",
        speakers: [{ name: "Deni Rohimat", avatar: "/images/speaker/photos/deni-rohimat.webp" }, ],
      },
      {
        time: "15:25 - 15:30",
        category: "Closing",
        title: "Closing, Photo Session, Back to Main Stage",
        theme: "yellow",
      },
    ],
  },
];

export const mainStageAgenda: Session[] = listStageAgenda[0].agenda;
