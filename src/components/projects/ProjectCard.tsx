"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight, Layers, TrendingUp, Zap } from "lucide-react";
import type { Project } from "@/types";
import { ProjectCardMockup } from "@/components/projects/DeviceMockup";
import { ProjectDeliverables } from "@/components/projects/ProjectDeliverables";
import { cn } from "@/lib/utils";

interface ProjectCardProps {
  project: Project;
  index?: number;
}

export function ProjectCard({ project, index = 0 }: ProjectCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.08 }}
      className="group"
    >
      <div className="relative overflow-hidden rounded-3xl border border-border bg-card transition-all duration-500 hover:border-transparent hover:shadow-2xl hover:shadow-primary/10">
        <div
          className="pointer-events-none absolute -right-20 -top-20 h-40 w-40 rounded-full opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-20"
          style={{ backgroundColor: project.colors.primary }}
        />

        <Link href={`/projetos/${project.slug}`} className="block p-4 sm:p-5">
          <ProjectCardMockup project={project} />

          <div className="mt-5 space-y-4">
            <div className="flex items-center justify-between gap-3">
              <span
                className="inline-flex items-center rounded-full px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider sm:text-xs"
                style={{
                  backgroundColor: `${project.colors.primary}15`,
                  color: project.colors.primary,
                }}
              >
                {project.category}
              </span>
              <span className="text-xs text-muted-foreground">{project.year}</span>
            </div>

            <div>
              <h2 className="text-xl font-bold tracking-tight transition-colors group-hover:text-primary sm:text-2xl">
                {project.name}
              </h2>
              <p className="mt-1 text-sm font-medium text-foreground/90">
                {project.tagline}
              </p>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {project.description}
              </p>
            </div>

            <div className="rounded-xl border border-border bg-muted/40 p-4">
              <p className="text-[11px] font-semibold uppercase tracking-wider text-muted-foreground">
                O que foi feito
              </p>
              <p className="mt-2 text-sm leading-relaxed text-foreground/85">
                {project.solution}
              </p>
            </div>

            <div className="rounded-xl border border-border bg-muted/40 p-4">
              <p className="text-[11px] font-semibold uppercase tracking-wider text-muted-foreground">
                Problema resolvido
              </p>
              <p className="mt-2 text-sm leading-relaxed text-foreground/85">
                {project.problem}
              </p>
            </div>

            <div className="rounded-xl border border-border bg-background p-4">
              <p className="mb-3 text-[11px] font-semibold uppercase tracking-wider text-muted-foreground">
                Pacote incluso
              </p>
              <ProjectDeliverables accentColor={project.colors.primary} />
            </div>

            <div className="flex flex-wrap gap-1.5">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="inline-flex items-center gap-1 rounded-md border border-border bg-background px-2 py-0.5 text-[10px] font-medium text-muted-foreground sm:text-xs"
                >
                  <Layers className="h-3 w-3 opacity-60" />
                  {tech}
                </span>
              ))}
            </div>

            <div
              className="flex items-center gap-3 rounded-xl p-4"
              style={{ backgroundColor: `${project.colors.primary}10` }}
            >
              <div
                className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg"
                style={{ backgroundColor: `${project.colors.primary}20` }}
              >
                <TrendingUp className="h-5 w-5" style={{ color: project.colors.primary }} />
              </div>
              <div>
                <p className="text-xl font-bold" style={{ color: project.colors.primary }}>
                  {project.highlightMetric.value}
                </p>
                <p className="text-xs text-muted-foreground">{project.highlightMetric.label}</p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
              {project.expectedResults.map((result) => (
                <div
                  key={result.label}
                  className="rounded-lg border border-border bg-muted/30 p-2.5 text-center"
                >
                  <p className="text-sm font-bold" style={{ color: project.colors.primary }}>
                    {result.value}
                  </p>
                  <p className="mt-0.5 text-[10px] leading-tight text-muted-foreground">
                    {result.label}
                  </p>
                </div>
              ))}
            </div>

            <blockquote
              className="rounded-xl border-l-4 bg-muted/20 p-4 text-sm italic leading-relaxed text-muted-foreground"
              style={{ borderColor: project.colors.primary }}
            >
              &ldquo;{project.caseStudy}&rdquo;
            </blockquote>

            <div className="flex items-center justify-between gap-3 border-t border-border pt-4">
              <span
                className={cn(
                  "inline-flex items-center gap-1.5 rounded-full px-5 py-2.5 text-sm font-semibold text-white transition-all duration-300",
                  "group-hover:gap-2.5 group-hover:shadow-lg"
                )}
                style={{
                  background: `linear-gradient(135deg, ${project.colors.primary}, ${project.colors.secondary})`,
                }}
              >
                Ver projeto
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </span>
              <div className="text-right">
                <p className="flex items-center justify-end gap-1 text-[10px] text-muted-foreground">
                  <Zap className="h-3 w-3" />
                  {project.domain}
                </p>
                <p className="text-[10px] text-muted-foreground">Cliente: {project.client}</p>
              </div>
            </div>
          </div>
        </Link>
      </div>
    </motion.article>
  );
}
