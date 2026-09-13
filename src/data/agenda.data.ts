export type TrackAccent = "blue" | "green" | "yellow" | "red";

export interface AgendaSpeaker {
  name: string;
  avatar?: string;
}

export interface Session {
  time?: string;
  category: "Talk" | "Hands-on" | "Codelab" | "Activity";
  title: string;
  subtitle?: string;
  description?: string;
  speakers?: AgendaSpeaker[];
  tags?: string[];
  theme: TrackAccent;
  confirmed: boolean;
}

export interface Track {
  title: string;
  shortTitle: string;
  location?: string;
  description: string;
  audience: string;
  accent: TrackAccent;
  sessions: Session[];
}

const direction = (
  title: string,
  category: Session["category"],
  theme: TrackAccent,
  description: string,
  tags: string[],
): Session => ({
  title,
  category,
  theme,
  description,
  tags,
  confirmed: false,
});

export const listStageAgenda: Track[] = [
  {
    title: "Builder track",
    shortTitle: "Build",
    description:
      "Start with a problem, then turn it into a useful app, workflow, or prototype with AI assistance. This track is designed for developers and builders across product, design, marketing, and beyond.",
    audience: "For anyone who wants to build",
    accent: "blue",
    sessions: [
      direction("Launch your portfolio website with AI", "Codelab", "blue", "A guided build direction for creating and publishing a portfolio with AI assistance.", ["AI-assisted building", "Web"]),
      direction("Launch your to-do web app with AI", "Codelab", "green", "A practical app-building direction for moving from a simple idea to a working web experience.", ["App building", "Web"]),
      direction("Create a video game with AI", "Hands-on", "red", "An approachable build direction for experimenting with game ideas and AI-assisted creation.", ["Creative building", "AI"]),
      direction("Build with Google Maps Platform and AI", "Hands-on", "yellow", "Explore location-based ideas by combining a platform API with AI-assisted prototyping.", ["Maps", "AI"]),
      direction("Building AI apps with the Google ecosystem", "Talk", "blue", "A content direction for understanding the tools and choices behind useful AI-powered applications.", ["AI apps", "Google ecosystem"]),
      direction("Build and publish your first Android app with AI Studio", "Hands-on", "green", "A first-app direction for builders who want to take an idea to an Android release with AI assistance.", ["Android", "AI Studio"]),
    ],
  },
  {
    title: "Developer track",
    shortTitle: "Secure & scale",
    description:
      "Go deeper into the agent ecosystem: develop, deploy, govern, secure, and scale autonomous systems for production environments.",
    audience: "For professional developers and engineering teams",
    accent: "red",
    sessions: [
      direction("Introduction to agents and Google's agent ecosystem", "Talk", "blue", "Build a shared foundation for understanding agents, their capabilities, and the ecosystem around them.", ["Agents", "Foundations"]),
      direction("Develop agents with Agent Development Kit (ADK)", "Codelab", "green", "A hands-on direction for developing agents with Google's Agent Development Kit.", ["ADK", "Hands-on"]),
      direction("Deploy production-ready agents", "Codelab", "yellow", "Explore the engineering considerations that take an agent from a prototype to a dependable production system.", ["Production", "Deployment"]),
      direction("Scale agents across the enterprise", "Talk", "red", "A scale-focused direction for thinking about agents across teams, products, and organizational boundaries.", ["Enterprise", "Scale"]),
      direction("Build high-performance multi-agent systems", "Talk", "blue", "Examine the architecture and trade-offs involved in coordinating multiple agents.", ["Multi-agent", "Architecture"]),
      direction("Govern and secure enterprise agents", "Talk", "red", "A secure-by-default direction for governance, safety, and responsible use of enterprise agents.", ["Security", "Governance"]),
    ],
  },
  {
    title: "Builder Space",
    shortTitle: "Vibe Lounge",
    description:
      "A casual space where anyone can build with Gemini through a short, scheduled challenge. Bring curiosity, a laptop or smartphone, and a willingness to share what you make.",
    audience: "For curious builders at every starting point",
    accent: "yellow",
    sessions: [
      direction("Vibe Lounge challenge: launch your portfolio website with AI", "Activity", "yellow", "A challenge designed to be completed in up to 40 minutes with mentors nearby.", ["Vibe Lounge", "Portfolio"]),
      direction("Vibe Lounge challenge: launch your to-do web app with AI", "Activity", "green", "A short, guided challenge for building and iterating on a useful web app.", ["Vibe Lounge", "Web"]),
      direction("Vibe Lounge challenge: launch a multiplayer game with AI", "Activity", "red", "A playful challenge for exploring multiplayer ideas with AI assistance.", ["Vibe Lounge", "Game"]),
      direction("Vibe Lounge challenge: build with Google Maps Platform and AI", "Activity", "blue", "A time-boxed challenge for making a location-aware prototype.", ["Vibe Lounge", "Maps"]),
    ],
  },
];

export const mainStageAgenda = listStageAgenda[0].sessions;
