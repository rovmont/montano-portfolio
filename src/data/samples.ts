export type SampleCategory =
  | "academic"
  | "business"
  | "volunteer"
  | "formal"
  | "creative";

export type Sample = {
  id: string;
  title: string;
  category: SampleCategory;
  summary: string;
  year: string;
  tags: string[];
};

export const sampleCategories: { id: SampleCategory; label: string }[] = [
  { id: "academic", label: "Academic" },
  { id: "business", label: "Business" },
  { id: "volunteer", label: "Volunteer" },
  { id: "formal", label: "Formal" },
  { id: "creative", label: "Creative" },
];

export const samples: Sample[] = [
  {
    id: "acad-1",
    title: "Capstone Research Brief",
    category: "academic",
    summary: "Placeholder academic project exploring systems thinking and applied research methods.",
    year: "2023",
    tags: ["Research", "Writing"],
  },
  {
    id: "acad-2",
    title: "Seminar Presentation Deck",
    category: "academic",
    summary: "Placeholder coursework presentation on design, ethics, and technology.",
    year: "2022",
    tags: ["Presentation"],
  },
  {
    id: "biz-1",
    title: "Client Onboarding Flow",
    category: "business",
    summary: "Placeholder business deliverable improving clarity in a multi-step onboarding journey.",
    year: "2024",
    tags: ["UX", "Process"],
  },
  {
    id: "biz-2",
    title: "Market Snapshot Report",
    category: "business",
    summary: "Placeholder analysis summarizing trends and opportunities for a fictional stakeholder.",
    year: "2023",
    tags: ["Analysis"],
  },
  {
    id: "vol-1",
    title: "Community Workshop Series",
    category: "volunteer",
    summary: "Placeholder volunteer initiative supporting local learning sessions and mentorship.",
    year: "2024",
    tags: ["Community"],
  },
  {
    id: "vol-2",
    title: "Nonprofit Site Refresh",
    category: "volunteer",
    summary: "Placeholder contribution to a nonprofit's public presence and content structure.",
    year: "2022",
    tags: ["Web", "Content"],
  },
  {
    id: "form-1",
    title: "Policy Brief Template",
    category: "formal",
    summary: "Placeholder formal document crafted for clarity, tone, and stakeholder alignment.",
    year: "2023",
    tags: ["Writing"],
  },
  {
    id: "form-2",
    title: "Conference Poster",
    category: "formal",
    summary: "Placeholder formal poster summarizing outcomes for a professional audience.",
    year: "2021",
    tags: ["Design"],
  },
  {
    id: "cre-1",
    title: "Visual Study: Soft Geometry",
    category: "creative",
    summary: "Placeholder creative exploration in color, form, and quiet motion.",
    year: "2024",
    tags: ["Visual"],
  },
  {
    id: "cre-2",
    title: "Short Essay Collection",
    category: "creative",
    summary: "Placeholder creative writing sample around place, craft, and attention.",
    year: "2023",
    tags: ["Writing"],
  },
  {
    id: "cre-3",
    title: "Sound Moodboard",
    category: "creative",
    summary: "Placeholder audio-visual moodboard for a fictional brand world.",
    year: "2022",
    tags: ["Sound", "Brand"],
  },
];

export function samplesByCategory(category: SampleCategory): Sample[] {
  return samples.filter((s) => s.category === category);
}
