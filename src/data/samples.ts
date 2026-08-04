export type SampleCategory =
  | "academic"
  | "business"
  | "volunteer"
  | "formal";

export type Sample = {
  id: string;
  title: string;
  category: SampleCategory;
  summary: string;
  year: string;
  tags: string[];
  url?: string;
  repoUrl?: string;
  /** Path to a PDF in /public, opened in the browser's viewer */
  docUrl?: string;
};

export const sampleCategories: { id: SampleCategory; label: string }[] = [
  { id: "academic", label: "Academic" },
  { id: "business", label: "Business" },
  { id: "volunteer", label: "Volunteer" },
  { id: "formal", label: "Formal" },
];

export const samples: Sample[] = [
  {
    id: "acad-decimal32",
    title: "IEEE 754 Decimal32 Simulator",
    category: "academic",
    summary:
      "An interactive simulator for IEEE 754 decimal32 using DPD encoding, converting to binary and hex, comparing four rounding methods, and walking through arithmetic step by step. I set up the Astro foundation, shared UI, and deployment pipeline for our five-person team.",
    year: "2026",
    tags: ["Astro", "TypeScript", "IEEE 754", "DPD"],
    url: "https://rovmont.github.io/CSARCH2-MACHINE-PROJECT-GROUP4/",
    repoUrl: "https://github.com/rovmont/CSARCH2-MACHINE-PROJECT-GROUP4",
  },
  {
    id: "acad-bus-arb",
    title: "A Deep Dive Into the Bus Arbitration System",
    category: "academic",
    summary:
      "A retro-futuristic virtual exhibit on how CPU, DMA, and peripheral devices compete for a shared bus, built around an interactive simulator that lets you watch fixed-priority, round-robin, and daisy-chain arbitration play out in real time.",
    year: "2026",
    tags: ["Education", "Architecture", "Astro"],
    url: "https://kekekoby.github.io/CSARCH2_S04_G4/",
    repoUrl: "https://github.com/kekekoby/CSARCH2_S04_G4",
  },
  {
    id: "acad-profs2pick",
    title: "DLSU Profs2Pick",
    category: "academic",
    summary:
      "A professor and course review platform built for SecDev with separate student, manager, and professor logins. Originally ran on Node, Express, and Supabase with Google OAuth; I focused on the UI/UX and role-based auth flows, and shipped a static demo with Playwright coverage for GitHub Pages.",
    year: "2025",
    tags: ["Node.js", "Security", "Playwright", "UI/UX"],
    url: "https://rovmont.github.io/SecDevMP/",
    repoUrl: "https://github.com/rovmont/SecDevMP",
  },
  {
    id: "acad-labkita",
    title: "LabKita! Laboratory Reservation",
    category: "academic",
    summary:
      "A lab reservation app built for AppDev, covering bookings, profiles, and an admin panel across a four-person team. I led the frontend; this static demo keeps the original Pixelify and Bootstrap look running on seed data instead of a live database.",
    year: "2024",
    tags: ["Frontend", "Express", "MongoDB", "Bootstrap"],
    url: "https://rovmont.github.io/AppDevMP-LabRes/",
    repoUrl: "https://github.com/rovmont/AppDevMP-LabRes",
  },
  {
    id: "acad-marikina-hazard",
    title: "Spatial Analysis of Multi-Hazard Risk in Marikina City",
    category: "academic",
    summary:
      "A DATA401 mapping project on which schools, hospitals, and emergency services in Marikina sit inside flood zones or beside the West Valley Fault. Layered NOAH hazard maps, PHIVOLCS fault data, and OpenStreetMap facilities to score every barangay by exposure and by how many residents share a single facility.",
    year: "2026",
    tags: ["GIS", "Spatial Analysis", "Data Science", "Disaster Risk"],
    docUrl: "/Marikina-Multi-Hazard-Spatial-Analysis.pdf",
  },
  {
    id: "acad-kinship-chatbot",
    title: "Logic-Based Family Relationship Chatbot",
    category: "academic",
    summary:
      "A CSINTSY chatbot that takes plain sentences like “Alice is the mother of Bob,” turns them into Prolog facts, and answers questions it was never directly told. Built on FastAPI and SWI-Prolog through PySwip, with rules that infer extended kin and reject impossible family trees.",
    year: "2025",
    tags: ["Prolog", "FastAPI", "Python", "Logic Programming"],
    docUrl: "/Logic-Based-Family-Relationship-Chatbot.pdf",
  },
  {
    id: "acad-emotion-singing",
    title: "Tuning Into Emotion",
    category: "academic",
    summary:
      "A comparative study on whether cleaning up audio helps a model read emotion in Filipino singing. We recorded twenty songs in an ordinary room, ran one copy through noise reduction and spectral balancing, then compared Random Forest and SVM models trained on raw versus preprocessed audio fused with TF-IDF lyric features.",
    year: "2026",
    tags: ["Machine Learning", "Affective Computing", "Librosa", "Research"],
    docUrl: "/Tuning-Into-Emotion-Singing-Emotion-Recognition.pdf",
  },
  {
    id: "vol-skk",
    title: "Simpleng Kristyanong Komunidad Platform",
    category: "volunteer",
    summary:
      "A web platform for an NGO that needed a clearer way to talk to donors, promote its scholars, and track donations. Designed around how the organization actually works day to day, not just how it looks.",
    year: "2025",
    tags: ["NGO", "Web", "HCD"],
  },
  {
    id: "form-chorale",
    title: "Echoes of a Decade — Production Lead",
    category: "formal",
    summary:
      "As Division Manager for Production and Logistics of the DLSU Chorale, I led the planning and technical setup behind major productions, serving as Project Head for our tenth-anniversary show, Echoes of a Decade.",
    year: "2025–2026",
    tags: ["Arts", "Leadership", "Production"],
  },
];

function sampleYearStart(year: string): number {
  const match = year.match(/\d{4}/);
  return match ? Number(match[0]) : 0;
}

export function samplesByCategory(category: SampleCategory): Sample[] {
  return samples
    .filter((s) => s.category === category)
    .slice()
    .sort((a, b) => {
      const yearDiff = sampleYearStart(b.year) - sampleYearStart(a.year);
      if (yearDiff !== 0) return yearDiff;
      return a.title.localeCompare(b.title, "en", { sensitivity: "base" });
    });
}
