export type ResumeExperience = {
  role: string;
  organization: string;
  period: string;
  summary: string;
};

export type ResumeEducation = {
  degree: string;
  school: string;
  period: string;
};

export const resume = {
  headline: "B.S. Computer Science · Software Technology · Minor in Data Science",
  summary:
    "I build full-stack systems with close attention to security and the people who will use them. My minor in Data Science adds a stronger analytical foundation to that work, while my experience in community web development and arts production keeps it grounded in real needs.",
  experience: [
    {
      role: "Division Manager, Production and Logistics",
      organization: "De La Salle University Chorale",
      period: "Sep 2025 — Aug 2026",
      summary:
        "Led logistics, conceptualization, and technical setup for major productions; Project Head for Echoes of a Decade. Directed a production team and improved scheduling through digital tracking systems.",
    },
    {
      role: "Web Application Developer",
      organization: "Simpleng Kristyanong Komunidad (NGO)",
      period: "2025",
      summary:
        "Designed and developed a web platform for donor communication, scholar promotion, and donation/scholarship tracking with human-centered design.",
    },
  ] satisfies ResumeExperience[],
  education: [
    {
      degree: "B.S. Computer Science, Software Technology · Minor in Data Science",
      school: "De La Salle University · Manila",
      period: "Expected 2027",
    },
    {
      degree: "Senior High School",
      school: "Ateneo de Manila University",
      period: "2023",
    },
    {
      degree: "Junior High School",
      school: "Manila Science High School",
      period: "2021",
    },
  ] satisfies ResumeEducation[],
  skills: [
    "TypeScript",
    "JavaScript",
    "Node.js",
    "Astro",
    "Python",
    "Data Science",
    "UI/UX",
    "Secure Software",
    "Playwright",
    "MongoDB",
    "Supabase",
  ],
} as const;
