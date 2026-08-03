export type Recommendation = {
  id: string;
  quote: string;
  author: string;
  role: string;
  organization: string;
};

export const recommendations: Recommendation[] = [
  {
    id: "rec-1",
    quote:
      "Placeholder testimonial — speak to Rovin's clarity in building interfaces and care for how people experience systems.",
    author: "Name Pending",
    role: "Teammate",
    organization: "DLSU Project Team",
  },
  {
    id: "rec-2",
    quote:
      "Placeholder recommendation — speak to reliability, introspection, and leading production work with intention.",
    author: "Name Pending",
    role: "Ensemble Collaborator",
    organization: "DLSU Chorale",
  },
  {
    id: "rec-3",
    quote:
      "Placeholder quote — speak to human-centered design for community and scholarship workflows.",
    author: "Name Pending",
    role: "Program Partner",
    organization: "Simpleng Kristyanong Komunidad",
  },
  {
    id: "rec-4",
    quote:
      "Placeholder endorsement — speak to learning mindset, craft in UI/UX, and collaborative spirit.",
    author: "Name Pending",
    role: "Faculty / Mentor",
    organization: "De La Salle University",
  },
];
