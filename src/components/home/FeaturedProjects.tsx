"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, ArrowUpRight, TrendingUp } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { ProjectCardMockup } from "@/components/projects/DeviceMockup";
import { ProjectDeliverables } from "@/components/projects/ProjectDeliverables";
import { getFeaturedProjects } from "@/data/projects";

export function FeaturedProjects() {
  const featured = getFeaturedProjects();

  return (
    <section className="py-24">
      <Container>
        <SectionHeading
          eyebrow="Portfólio"
          title="Projetos que geram resultados"
          description="Cases reais de clientes em saúde, estética, imobiliário e mais — cada um com métricas comprovadas de conversão."
        />

        <div className="grid gap-8 lg:grid-cols-3">
          {featured.map((project, i) => (
            <motion.article
              key={project.slug}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group"
            >
              <Link href={`/projetos/${project.slug}`} className="block">
                <div className="overflow-hidden rounded-2xl border border-border bg-card transition-all duration-500 hover:border-transparent hover:shadow-xl hover:shadow-primary/10">
                  <ProjectCardMockup project={project} />
                  <div className="space-y-4 p-5">
                    <span
                      className="inline-flex rounded-full px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider"
                      style={{
                        backgroundColor: `${project.colors.primary}15`,
                        color: project.colors.primary,
                      }}
                    >
                      {project.category}
                    </span>
                    <h3 className="text-xl font-bold transition-colors group-hover:text-primary">
                      {project.name}
                    </h3>
                    <p className="text-sm text-muted-foreground line-clamp-2">
                      {project.description}
                    </p>

                    <ProjectDeliverables accentColor={project.colors.primary} compact />

                    <div
                      className="flex items-center gap-2 rounded-lg p-2.5"
                      style={{ backgroundColor: `${project.colors.primary}10` }}
                    >
                      <TrendingUp className="h-4 w-4 shrink-0" style={{ color: project.colors.primary }} />
                      <div>
                        <span className="text-sm font-bold" style={{ color: project.colors.primary }}>
                          {project.highlightMetric.value}
                        </span>
                        <span className="ml-1.5 text-xs text-muted-foreground">
                          {project.highlightMetric.label}
                        </span>
                      </div>
                    </div>

                    <span
                      className="inline-flex items-center gap-1.5 text-sm font-semibold transition-all group-hover:gap-2.5"
                      style={{ color: project.colors.primary }}
                    >
                      Ver projeto
                      <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </span>
                  </div>
                </div>
              </Link>
            </motion.article>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Button href="/projetos" variant="outline">
            Ver todos os projetos
            <ArrowRight className="h-4 w-4" />
          </Button>
        </div>
      </Container>
    </section>
  );
}
