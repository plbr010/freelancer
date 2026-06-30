import type { DemoProject } from "@/types";

export const demoProjects: DemoProject[] = [
  {
    slug: "odonto-prime",
    name: "Odonto Prime",
    category: "Clínica Odontológica",
    description:
      "Site premium para clínica odontológica com agendamento via WhatsApp, galeria de tratamentos e prova social.",
    objective: "Captação de pacientes",
    colors: {
      primary: "#0EA5E9",
      secondary: "#0284C7",
      accent: "#E0F2FE",
    },
    previewType: "dental",
    available: true,
  },
  {
    slug: "bella-estetica",
    name: "Bella Estética",
    category: "Clínica de Estética",
    description:
      "Experiência luxuosa para clínica de estética com procedimentos em destaque e agendamento online.",
    objective: "Gerar agendamentos",
    colors: {
      primary: "#B8956A",
      secondary: "#8B6914",
      accent: "#F5E6D3",
    },
    previewType: "beauty",
    available: true,
  },
  {
    slug: "psicologa-ana-martins",
    name: "Psicóloga Ana Martins",
    category: "Psicologia",
    description:
      "Site acolhedor para psicóloga com especialidades, abordagem terapêutica e agendamento de sessões.",
    objective: "Captação de pacientes",
    colors: {
      primary: "#7C3AED",
      secondary: "#5B21B6",
      accent: "#EDE9FE",
    },
    previewType: "psychology",
    available: false,
  },
  {
    slug: "fisio-life",
    name: "FisioLife",
    category: "Fisioterapia",
    description:
      "Site profissional para clínica de fisioterapia com tratamentos, equipe e diferenciais em evidência.",
    objective: "Captação de pacientes",
    colors: {
      primary: "#059669",
      secondary: "#047857",
      accent: "#D1FAE5",
    },
    previewType: "physio",
    available: false,
  },
  {
    slug: "oliveira-advocacia",
    name: "Oliveira Advocacia",
    category: "Advocacia",
    description:
      "Presença digital corporativa para escritório de advocacia com áreas de atuação e formulário de consulta.",
    objective: "Gerar consultas",
    colors: {
      primary: "#1E293B",
      secondary: "#7F1D1D",
      accent: "#F1F5F9",
    },
    previewType: "legal",
    available: false,
  },
];

export function getDemoBySlug(slug: string): DemoProject | undefined {
  return demoProjects.find((d) => d.slug === slug);
}

export function getAvailableDemos(): DemoProject[] {
  return demoProjects.filter((d) => d.available);
}

export function getAllDemoSlugs(): string[] {
  return demoProjects.map((d) => d.slug);
}
