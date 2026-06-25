import type { Metadata } from "next";
import { notFound } from "next/navigation";
import {
  ProjectHero,
  ProjectDetails,
  ProjectResults,
  ProjectCaseStudy,
  ProjectCTA,
} from "@/components/projects/ProjectDetail";
import { getProjectBySlug, getAllProjectSlugs } from "@/data/projects";
import { siteConfig } from "@/lib/site";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getAllProjectSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) return {};

  return {
    title: project.name,
    description: project.description,
    openGraph: {
      title: `${project.name} | ${siteConfig.name}`,
      description: project.tagline,
      type: "article",
    },
  };
}

export default async function ProjectPage({ params }: PageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) notFound();

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    name: project.name,
    description: project.description,
    creator: {
      "@type": "Organization",
      name: siteConfig.name,
    },
    dateCreated: project.year,
    about: project.category,
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <ProjectHero project={project} />
      <ProjectDetails project={project} />
      <ProjectCaseStudy project={project} />
      <ProjectResults project={project} />
      <ProjectCTA project={project} />
    </>
  );
}
