"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Briefcase, Layers, TrendingUp, Zap } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { ProjectCard } from "@/components/projects/ProjectCard";
import { projects, getProjectCategories } from "@/data/projects";
import { cn } from "@/lib/utils";

const stats = [
  { icon: Briefcase, label: "Projetos entregues", value: `${projects.length}+` },
  { icon: Layers, label: "Nichos atendidos", value: `${getProjectCategories().length}` },
  { icon: TrendingUp, label: "Média de conversão", value: "+180%" },
  { icon: Zap, label: "Performance", value: "<1s" },
];

export function ProjetosContent() {
  const categories = ["Todos", ...getProjectCategories()];
  const [activeCategory, setActiveCategory] = useState("Todos");

  const filtered =
    activeCategory === "Todos"
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  return (
    <>
      <section className="hero-gradient pt-32 pb-20">
        <Container className="text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <span className="mb-4 inline-block rounded-full border border-border bg-muted px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-primary">
              Portfólio de Projetos
            </span>
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
              Sites que{" "}
              <span className="gradient-text">geram resultados reais</span>
            </h1>
            <p className="mx-auto mt-5 max-w-2xl text-lg text-muted-foreground">
              Cada projeto abaixo é um case completo — com problema, solução,
              stack técnica e métricas de impacto. Veja como transformamos
              negócios em diferentes nichos.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15 }}
            className="mx-auto mt-12 grid max-w-3xl grid-cols-2 gap-4 sm:grid-cols-4"
          >
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="rounded-2xl border border-border bg-card/60 p-4 backdrop-blur-sm"
              >
                <stat.icon className="mx-auto h-5 w-5 text-primary" />
                <p className="mt-2 text-2xl font-bold">{stat.value}</p>
                <p className="mt-0.5 text-xs text-muted-foreground">{stat.label}</p>
              </div>
            ))}
          </motion.div>
        </Container>
      </section>

      <section className="sticky top-16 z-30 border-b border-border bg-background/80 py-4 backdrop-blur-lg">
        <Container>
          <div className="flex flex-wrap items-center justify-center gap-2">
            {categories.map((category) => (
              <button
                key={category}
                type="button"
                onClick={() => setActiveCategory(category)}
                className={cn(
                  "rounded-full px-4 py-1.5 text-sm font-medium transition-all duration-300",
                  activeCategory === category
                    ? "gradient-bg text-white shadow-md shadow-primary/25"
                    : "border border-border bg-card text-muted-foreground hover:border-primary/30 hover:text-foreground"
                )}
              >
                {category}
              </button>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-16 sm:py-20">
        <Container>
          <motion.p
            key={activeCategory}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="mb-10 text-center text-sm text-muted-foreground"
          >
            {filtered.length} {filtered.length === 1 ? "projeto" : "projetos"}
            {activeCategory !== "Todos" && ` em ${activeCategory}`}
          </motion.p>

          <div className="grid gap-8 lg:grid-cols-2">
            {filtered.map((project, i) => (
              <ProjectCard key={project.slug} project={project} index={i} />
            ))}
          </div>

          {filtered.length === 0 && (
            <p className="py-20 text-center text-muted-foreground">
              Nenhum projeto encontrado nesta categoria.
            </p>
          )}
        </Container>
      </section>

      <section className="border-t border-border bg-muted/30 py-16">
        <Container className="text-center">
          <h2 className="text-2xl font-bold sm:text-3xl">
            Seu negócio pode ser o próximo case de sucesso
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-muted-foreground">
            Cada um desses projetos começou com um briefing e uma conversa.
            Vamos criar o site ideal para o seu nicho.
          </p>
          <a
            href="/contato"
            className="gradient-bg mt-6 inline-flex items-center gap-2 rounded-full px-8 py-4 text-base font-medium text-white shadow-lg shadow-primary/25 transition-all hover:scale-[1.02] hover:shadow-xl"
          >
            Solicitar orçamento gratuito
          </a>
        </Container>
      </section>
    </>
  );
}
