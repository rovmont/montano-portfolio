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
  headline: "Product-minded developer & collaborator",
  summary:
    "Placeholder resume summary — highlight your strengths, domains, and what you bring to teams. This sheet is a visual preview until a PDF is linked.",
  experience: [
    {
      role: "Placeholder Role",
      organization: "Example Company",
      period: "2023 — Present",
      summary: "Led placeholder initiatives across product and engineering with a focus on clarity and delivery.",
    },
    {
      role: "Placeholder Intern",
      organization: "Example Org",
      period: "2022 — 2023",
      summary: "Supported teams on research, documentation, and early-stage feature work.",
    },
  ] satisfies ResumeExperience[],
  education: [
    {
      degree: "B.S. Placeholder Major",
      school: "Example University",
      period: "2019 — 2023",
    },
  ] satisfies ResumeEducation[],
  skills: ["TypeScript", "Node.js", "CSS", "Astro", "Collaboration", "Research"],
} as const;
