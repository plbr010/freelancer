export type DemoPreviewType =
  | "dental"
  | "beauty"
  | "psychology"
  | "physio"
  | "legal";

export interface DemoProject {
  slug: string;
  name: string;
  category: string;
  description: string;
  objective: string;
  colors: {
    primary: string;
    secondary: string;
    accent: string;
  };
  previewType: DemoPreviewType;
  available: boolean;
}

export type MockupLayout =
  | "dental"
  | "beauty"
  | "realestate"
  | "fitness"
  | "solar"
  | "legal";

export interface Project {
  slug: string;
  name: string;
  category: string;
  tagline: string;
  description: string;
  problem: string;
  solution: string;
  result: string;
  caseStudy: string;
  benefits: string[];
  technologies: string[];
  expectedResults: { label: string; value: string }[];
  highlightMetric: { label: string; value: string };
  colors: {
    primary: string;
    secondary: string;
    accent: string;
    gradient: string;
  };
  mockupLayout: MockupLayout;
  domain: string;
  featured: boolean;
  year: string;
  client: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  comment: string;
  avatar: string;
  rating: number;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface Service {
  icon: string;
  title: string;
  description: string;
  features: string[];
}

export interface ProcessStep {
  step: number;
  title: string;
  description: string;
}
