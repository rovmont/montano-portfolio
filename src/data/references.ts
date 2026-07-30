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
    name: "Alex Rivera",
    role: "Engineering Manager",
    organization: "Example Company",
    relationship: "Direct manager",
    email: "alex.rivera@example.com",
    note: "Placeholder reference — available upon request. Replace with a real contact when ready.",
  },
  {
    id: "ref-2",
    name: "Jordan Lee",
    role: "Professor",
    organization: "Example University",
    relationship: "Academic advisor",
    email: "jordan.lee@example.edu",
    note: "Placeholder academic reference familiar with research and presentation work.",
  },
  {
    id: "ref-3",
    name: "Sam Okonkwo",
    role: "Program Lead",
    organization: "Community Collective",
    relationship: "Volunteer supervisor",
    email: "sam.okonkwo@example.org",
    note: "Placeholder volunteer reference who can speak to collaboration and reliability.",
  },
  {
    id: "ref-4",
    name: "Casey Nguyen",
    role: "Creative Director",
    organization: "Studio Placeholder",
    relationship: "Collaborator",
    email: "casey.nguyen@example.com",
    note: "Placeholder creative collaborator for design and storytelling projects.",
  },
];
