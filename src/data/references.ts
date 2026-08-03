export type Reference = {
  id: string;
  name: string;
  role: string;
  organization: string;
  relationship: string;
  email: string;
  note: string;
};

export const references: Reference[] = [
  {
    id: "ref-1",
    name: "Placeholder Faculty Mentor",
    role: "Professor",
    organization: "De La Salle University",
    relationship: "Course / academic mentor",
    email: "faculty@example.edu",
    note: "Placeholder — replace with a DLSU faculty contact who can speak to your academic and project work.",
  },
  {
    id: "ref-2",
    name: "Placeholder Chorale Lead",
    role: "Ensemble Leadership",
    organization: "De La Salle University Chorale",
    relationship: "Production collaborator",
    email: "chorale@example.com",
    note: "Placeholder — replace with someone who can speak to your production and logistics leadership.",
  },
  {
    id: "ref-3",
    name: "Placeholder NGO Contact",
    role: "Program Lead",
    organization: "Simpleng Kristyanong Komunidad",
    relationship: "Web development collaborator",
    email: "ngo@example.org",
    note: "Placeholder — replace with a contact who can speak to your NGO platform work.",
  },
  {
    id: "ref-4",
    name: "Placeholder Teammate",
    role: "Project Collaborator",
    organization: "DLSU Software Technology",
    relationship: "Course project teammate",
    email: "teammate@example.com",
    note: "Placeholder — replace with a teammate from LabKita!, Profs2Pick, or CSARCH2.",
  },
];
