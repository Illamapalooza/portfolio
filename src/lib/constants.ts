export const siteConfig = {
  name: "Julius Baliling",
  title: "Software Engineer",
  description:
    "Full-stack developer specializing in React, Next.js, and modern web technologies",
  url: "https://juliusbaliling.com", // Replace with your actual domain
  links: {
    github: "https://github.com/Illamapalooza",
    linkedin: "https://www.linkedin.com/in/juliusbaliling",
    instagram: "https://www.instagram.com/julio.ll",
    facebook: "https://www.facebook.com/dagreatjulio",
  },
};

export const navigationLinks = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Projects", path: "/projects" },
  { name: "Contact", path: "/contact" },
];

export const projects = [
  {
    title: "Memor",
    description:
      "A mobile note taking app with AI-powered search utilizing RAG",
    tech: [
      "React Native",
      "Expo",
      "Supabase",
      "Express",
      "Node.js",
      "PostgreSQL",
      "OpenAI",
    ],
    company: "Hostari Labs",
    type: "Professional",
  },
  {
    title: "NurtureYourLeads",
    description:
      "CRM web app for efficiently managing real estate leads and deals",
    tech: [
      "Next.js 14",
      "Tailwind CSS",
      "Shadcn UI",
      "Framer Motion",
      "Supabase",
      "Lucia",
      "tRPC",
      "React Query",
    ],
    company: "Zeta",
    type: "Professional",
  },
  {
    title: "Visual Note",
    description:
      "AI-powered note taking app for transforming images into efficient notes",
    tech: [
      "Next.js 14",
      "Tailwind CSS",
      "Framer Motion",
      "Supabase",
      "Lucia",
      "tRPC",
      "React Query",
    ],
    type: "Personal",
  },
];
