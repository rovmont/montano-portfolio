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
      "Placeholder testimonial — Rovin brings calm clarity to complex work and elevates every collaboration.",
    author: "Morgan Ellis",
    role: "Product Lead",
    organization: "Example Company",
  },
  {
    id: "rec-2",
    quote:
      "Placeholder recommendation — thoughtful, reliable, and always oriented toward outcomes that feel human.",
    author: "Priya Shah",
    role: "Faculty Mentor",
    organization: "Example University",
  },
  {
    id: "rec-3",
    quote:
      "Placeholder quote — a rare mix of craft and communication. Teams move faster with them in the room.",
    author: "Diego Alvarez",
    role: "Founder",
    organization: "Community Collective",
  },
  {
    id: "rec-4",
    quote:
      "Placeholder endorsement — their creative instincts are sharp, and their feedback is generous and precise.",
    author: "Nina Brooks",
    role: "Art Director",
    organization: "Studio Placeholder",
  },
];
