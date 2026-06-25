"use client";

import { motion } from "framer-motion";
import { ArrowLeft, Calendar, Building2 } from "lucide-react";
import Link from "next/link";
import type { Project } from "@/types";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { ProjectMockupShowcase } from "@/components/projects/DeviceMockup";

export function ProjectHero({ project }: { project: Project }) {
  return (
    <section className="relative overflow-hidden pt-24 pb-16">
      <div
        className="absolute inset-0 opacity-10"
        style={{
          background: `linear-gradient(135deg, ${project.colors.primary}, ${project.colors.secondary})`,
        }}
      />
      <div className="hero-gradient absolute inset-0" />

      <Container className="relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <Link
            href="/projetos"
            className="mb-8 inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            <ArrowLeft className="h-4 w-4" />
            Voltar aos projetos
          </Link>

          <span className="mb-4 inline-block rounded-full border border-border bg-muted px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-primary">
            {project.category}
          </span>

          <h1 className="max-w-4xl text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
            {project.name}
          </h1>
          <p className="mt-4 max-w-2xl text-xl text-muted-foreground">
            {project.tagline}
          </p>

          <div className="mt-6 flex flex-wrap gap-4 text-sm text-muted-foreground">
            <span className="flex items-center gap-2">
              <Building2 className="h-4 w-4" />
              {project.client}
            </span>
            <span className="flex items-center gap-2">
              <Calendar className="h-4 w-4" />
              {project.year}
            </span>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mt-12"
        >
          <ProjectMockupShowcase project={project} />
        </motion.div>
      </Container>
    </section>
  );
}

export function ProjectDetails({ project }: { project: Project }) {
  return (
    <section className="py-16">
      <Container>
        <div className="grid gap-12 lg:grid-cols-3">
          <div className="lg:col-span-2 space-y-12">
            <div>
              <h2 className="mb-4 text-2xl font-bold">Sobre o Projeto</h2>
              <p className="text-muted-foreground leading-relaxed">
                {project.description}
              </p>
            </div>
            <div>
              <h2 className="mb-4 text-2xl font-bold">O Problema</h2>
              <p className="text-muted-foreground leading-relaxed">
                {project.problem}
              </p>
            </div>
            <div>
              <h2 className="mb-4 text-2xl font-bold">A Solução</h2>
              <p className="text-muted-foreground leading-relaxed">
                {project.solution}
              </p>
            </div>
            <div>
              <h2 className="mb-4 text-2xl font-bold">O Resultado</h2>
              <p className="text-muted-foreground leading-relaxed">
                {project.result}
              </p>
            </div>
          </div>

          <div className="space-y-8">
            <div className="rounded-2xl border border-border bg-card p-6">
              <h3 className="mb-4 font-semibold">Benefícios</h3>
              <ul className="space-y-3">
                {project.benefits.map((benefit) => (
                  <li
                    key={benefit}
                    className="flex items-start gap-2 text-sm text-muted-foreground"
                  >
                    <span
                      className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full"
                      style={{ backgroundColor: project.colors.primary }}
                    />
                    {benefit}
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-2xl border border-border bg-card p-6">
              <h3 className="mb-4 font-semibold">Tecnologias</h3>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full border border-border bg-muted px-3 py-1 text-xs font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

export function ProjectResults({ project }: { project: Project }) {
  return (
    <section className="bg-muted/30 py-16">
      <Container>
        <h2 className="mb-8 text-center text-2xl font-bold">
          Métricas de Impacto
        </h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {project.expectedResults.map((result, i) => (
            <motion.div
              key={result.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="rounded-2xl border border-border bg-card p-6 text-center"
            >
              <div
                className="text-3xl font-bold"
                style={{ color: project.colors.primary }}
              >
                {result.value}
              </div>
              <p className="mt-2 text-sm text-muted-foreground">
                {result.label}
              </p>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}

export function ProjectCaseStudy({ project }: { project: Project }) {
  return (
    <section className="py-16">
      <Container>
        <div
          className="relative overflow-hidden rounded-3xl border border-border p-8 sm:p-12"
          style={{
            background: `linear-gradient(135deg, ${project.colors.primary}08, ${project.colors.secondary}05)`,
          }}
        >
          <div
            className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full opacity-20 blur-3xl"
            style={{ backgroundColor: project.colors.primary }}
          />
          <span
            className="mb-4 inline-block rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-wider"
            style={{
              backgroundColor: `${project.colors.primary}15`,
              color: project.colors.primary,
            }}
          >
            Case Study
          </span>
          <h2 className="mb-6 text-2xl font-bold sm:text-3xl">
            A história por trás dos números
          </h2>
          <p className="max-w-3xl text-lg leading-relaxed text-muted-foreground">
            {project.caseStudy}
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <div
              className="rounded-2xl border border-border bg-card px-6 py-4"
            >
              <p className="text-2xl font-bold" style={{ color: project.colors.primary }}>
                {project.highlightMetric.value}
              </p>
              <p className="mt-1 text-sm text-muted-foreground">
                {project.highlightMetric.label}
              </p>
            </div>
            <div className="rounded-2xl border border-border bg-card px-6 py-4">
              <p className="text-sm font-medium text-muted-foreground">Cliente</p>
              <p className="mt-1 font-semibold">{project.client}</p>
            </div>
            <div className="rounded-2xl border border-border bg-card px-6 py-4">
              <p className="text-sm font-medium text-muted-foreground">Domínio</p>
              <p className="mt-1 font-semibold">{project.domain}</p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

export function ProjectCTA({ project }: { project: Project }) {
  return (
    <section className="py-16">
      <Container>
        <div
          className="relative overflow-hidden rounded-3xl p-8 text-center sm:p-12"
          style={{
            background: `linear-gradient(135deg, ${project.colors.primary}15, ${project.colors.secondary}10)`,
          }}
        >
          <h2 className="text-2xl font-bold sm:text-3xl">
            Quer um site como este para sua empresa?
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-muted-foreground">
            Solicite um orçamento personalizado e descubra como podemos criar a
            presença digital ideal para o seu negócio.
          </p>
          <div className="mt-6">
            <Button href="/contato" size="lg">
              Solicitar orçamento
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
