"use client";

import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { DemoPreviewCard } from "@/components/demos/DemoPreviewCard";
import { demoProjects } from "@/data/demos";

export function DemoProjects() {
  return (
    <section id="templates" className="relative overflow-hidden py-28">
      <div className="pointer-events-none absolute inset-0 grid-pattern opacity-30" />
      <div className="pointer-events-none absolute top-0 left-1/2 h-[500px] w-[800px] -translate-x-1/2 rounded-full bg-primary/5 blur-3xl" />

      <Container className="relative">
        <SectionHeading
          eyebrow="Portfólio"
          title="Templates e Projetos Demonstrativos"
          description="Sites profissionais prontos para inspiração. Clique em qualquer projeto e veja como pode ficar o seu."
          className="mb-16 max-w-4xl"
        />

        <div className="grid gap-10 md:grid-cols-2">
          {demoProjects.map((demo, i) => (
            <DemoPreviewCard key={demo.slug} demo={demo} index={i} featured />
          ))}
        </div>
      </Container>
    </section>
  );
}
